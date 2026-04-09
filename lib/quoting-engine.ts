// lib/quoting-engine.ts — Claude API integration for lead analysis

import { LeadFormData, QuotingEngineResponse } from './lead-types';

const SYSTEM_PROMPT = `You are Beacon AV's lead qualification and quoting engine. Beacon AV is a national event production company providing audio, video, lighting, staging, LED walls, and live streaming for corporate events, conferences, galas, and brand activations across 50+ US markets.

Your job is to analyze an incoming lead from the website quote request form and produce a structured assessment.

CONTEXT:
- Beacon AV operates through a vetted partner network of local AV companies and technicians
- Typical events: 50–5,000+ attendees
- Services: audio, video/IMAG, lighting, staging, LED walls, live streaming/hybrid
- Quote turnaround SLA: 48 hours
- Pricing is project-based, not hourly to the client

PRICING BENCHMARKS (use these as directional guides, not hard rules):
- Basic corporate meeting (50-100 ppl, audio + projection): $2,000–$5,000
- Mid-level corporate event (100-500 ppl, audio + video + lighting): $8,000–$20,000
- Large conference general session (500+ ppl, full production): $20,000–$50,000
- Multi-day conference with breakouts and streaming: $35,000–$100,000+
- LED wall adds $3,000–$15,000+ depending on size
- Live streaming adds $2,000–$15,000 depending on complexity
- Crew: $75–$200/hr per technician, typically 2-8 crew depending on scope

INSTRUCTIONS:
1. Summarize the lead in 2-3 sentences capturing who, what, where, when, and scale
2. Assess scope complexity and estimate crew requirements
3. Provide pricing direction based on services, scale, and market
4. Identify what information is missing that you'd need for an accurate quote
5. Recommend the immediate next action
6. Draft a professional, warm client response (DO NOT include any pricing in the client response — that comes in the formal quote)

The client response should:
- Thank them by first name
- Reference their specific event details to show you read the inquiry
- Mention relevant Beacon AV experience (e.g., "we've produced events at [venue/city]")
- Ask 2-3 specific follow-up questions from the missing info list
- Set expectation for quote delivery timeline
- Sign off as "The Beacon AV Team"
- Be 150-200 words, professional but conversational

RESPOND WITH VALID JSON ONLY. No markdown, no code fences, no explanation outside the JSON.`;

const USER_PROMPT_TEMPLATE = (lead: LeadFormData): string => `
Analyze this incoming lead and provide your structured assessment:

EVENT DETAILS:
- Type: ${lead.eventType}
- Date: ${lead.eventDate || 'Not specified'}
- City: ${lead.city}
- Venue: ${lead.venue || 'Not specified'}
- Indoor/Outdoor: ${lead.indoorOutdoor || 'Not specified'}
- Guest Count: ${lead.guestCount}
- Duration: ${lead.duration || 'Not specified'}

SERVICES REQUESTED:
${lead.services.map(s => `- ${s}`).join('\n')}

EVENT DESCRIPTION:
${lead.description || 'No additional details provided'}

BUDGET RANGE: ${lead.budgetRange || 'Not specified'}

CLIENT INFO:
- Name: ${lead.name}
- Company: ${lead.company || 'Not provided'}
- Email: ${lead.email}
- Phone: ${lead.phone || 'Not provided'}
- How they found us: ${lead.referralSource || 'Not specified'}

Respond with this exact JSON structure:
{
  "leadSummary": "string",
  "scopeAssessment": {
    "complexity": "low|medium|medium-high|high",
    "estimatedCrewSize": "string (e.g. '4-6')",
    "keyRequirements": ["string array of specific technical needs"],
    "venueNotes": "string"
  },
  "pricingDirection": {
    "rangeMin": number,
    "rangeMax": number,
    "budgetFit": "under|aligned|over|unknown",
    "notes": "string"
  },
  "missingInformation": ["string array of questions/gaps"],
  "nextAction": "string",
  "clientResponseDraft": "string"
}`;

export async function analyzeLeadWithClaude(lead: LeadFormData): Promise<QuotingEngineResponse> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: USER_PROMPT_TEMPLATE(lead),
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Claude API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  const textContent = data.content?.[0]?.text;

  if (!textContent) {
    throw new Error('Claude API returned no text content');
  }

  // Parse JSON — handle potential markdown fences
  let cleanJson = textContent.trim();
  if (cleanJson.startsWith('```')) {
    cleanJson = cleanJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  try {
    const parsed: QuotingEngineResponse = JSON.parse(cleanJson);

    // Basic shape validation
    if (!parsed.leadSummary || !parsed.scopeAssessment || !parsed.pricingDirection) {
      throw new Error('Response missing required fields');
    }

    return parsed;
  } catch (parseError) {
    throw new Error(`Failed to parse Claude response as JSON: ${(parseError as Error).message}\nRaw: ${textContent.substring(0, 500)}`);
  }
}
