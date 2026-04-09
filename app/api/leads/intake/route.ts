// app/api/leads/intake/route.ts — Lead intake webhook endpoint

import { NextRequest, NextResponse } from 'next/server';
import { validateLeadForm, LeadFormData, ProcessedLead } from '@/lib/lead-types';
import { analyzeLeadWithClaude } from '@/lib/quoting-engine';
import { createClickUpTask } from '@/lib/clickup';

// Rate limiting: simple in-memory tracker (resets on cold start)
const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per email per minute

function checkRateLimit(email: string): boolean {
  const now = Date.now();
  const key = email.toLowerCase();

  // Clean old entries
  for (const [k, timestamp] of recentSubmissions) {
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      recentSubmissions.delete(k);
    }
  }

  const count = Array.from(recentSubmissions.entries())
    .filter(([k]) => k === key)
    .length;

  if (count >= RATE_LIMIT_MAX) {
    return false;
  }

  recentSubmissions.set(`${key}-${now}`, now);
  return true;
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // 1. Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // 2. Validate form data
    const validation = validateLeadForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    const formData = body as LeadFormData;

    // 3. Rate limit check
    if (!checkRateLimit(formData.email)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a moment.' },
        { status: 429 }
      );
    }

    // 4. Analyze with Claude quoting engine
    let analysis;
    try {
      analysis = await analyzeLeadWithClaude(formData);
    } catch (claudeError) {
      console.error('[Lead Intake] Claude API error:', claudeError);
      // Don't block the lead — still create ClickUp task with raw data
      analysis = null;
    }

    // 5. Create ClickUp task
    let clickupResult = null;
    try {
      if (analysis) {
        clickupResult = await createClickUpTask(formData, analysis);
      }
    } catch (clickupError) {
      console.error('[Lead Intake] ClickUp error:', clickupError);
      // Log but don't fail the request
    }

    // 6. Build processed lead record
    const processedLead: ProcessedLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      receivedAt: new Date().toISOString(),
      formData,
      analysis: analysis!,
      clickupTaskId: clickupResult?.taskId,
      clickupTaskUrl: clickupResult?.taskUrl,
    };

    // 7. Log to console (Vercel captures this in function logs)
    console.log('[Lead Intake] Processed:', JSON.stringify({
      id: processedLead.id,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      city: formData.city,
      eventType: formData.eventType,
      budgetRange: formData.budgetRange,
      complexity: analysis?.scopeAssessment?.complexity,
      pricingRange: analysis ? `$${analysis.pricingDirection.rangeMin}-$${analysis.pricingDirection.rangeMax}` : 'N/A',
      clickupTaskId: clickupResult?.taskId,
      processingTime: `${Date.now() - startTime}ms`,
    }));

    // 8. Return success to frontend
    return NextResponse.json({
      success: true,
      message: 'Your quote request has been received. We\'ll be in touch within 48 hours.',
      leadId: processedLead.id,
    });

  } catch (error) {
    console.error('[Lead Intake] Unexpected error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email us at info@beaconav.co' },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/leads/intake',
    method: 'POST',
    version: '1.0.0',
  });
}
