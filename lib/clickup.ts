// lib/clickup.ts — ClickUp task creation for processed leads

import { LeadFormData, QuotingEngineResponse, getLeadPriority } from './lead-types';

const CLICKUP_LIST_ID = '901216977132'; // Module 1 — Lead Gen & Qualification → SOPs & Tasks

interface ClickUpTaskResult {
  taskId: string;
  taskUrl: string;
}

function buildTaskName(lead: LeadFormData): string {
  const parts = [
    '[Lead]',
    lead.name,
    lead.company ? `— ${lead.company}` : '',
    `— ${lead.eventType}`,
    `— ${lead.city}`,
  ].filter(Boolean);
  return parts.join(' ');
}

function buildTaskDescription(lead: LeadFormData, analysis: QuotingEngineResponse): string {
  const divider = '---';

  return `## Lead Summary
${analysis.leadSummary}

${divider}

## Contact Information
- **Name**: ${lead.name}
- **Company**: ${lead.company || 'N/A'}
- **Email**: ${lead.email}
- **Phone**: ${lead.phone || 'N/A'}
- **Found us via**: ${lead.referralSource || 'N/A'}

${divider}

## Event Details
- **Type**: ${lead.eventType}
- **Date**: ${lead.eventDate || 'TBD'}
- **City**: ${lead.city}
- **Venue**: ${lead.venue || 'TBD'}
- **Indoor/Outdoor**: ${lead.indoorOutdoor || 'N/A'}
- **Guest Count**: ${lead.guestCount}
- **Duration**: ${lead.duration || 'N/A'}
- **Services**: ${lead.services.join(', ')}
- **Budget Range**: ${lead.budgetRange || 'Not specified'}

**Description from client:**
${lead.description || 'None provided'}

${divider}

## Scope Assessment
- **Complexity**: ${analysis.scopeAssessment.complexity}
- **Estimated Crew**: ${analysis.scopeAssessment.estimatedCrewSize}
- **Key Requirements**:
${analysis.scopeAssessment.keyRequirements.map(r => `  - ${r}`).join('\n')}
- **Venue Notes**: ${analysis.scopeAssessment.venueNotes}

${divider}

## Pricing Direction
- **Range**: $${analysis.pricingDirection.rangeMin.toLocaleString()} – $${analysis.pricingDirection.rangeMax.toLocaleString()}
- **Budget Fit**: ${analysis.pricingDirection.budgetFit}
- **Notes**: ${analysis.pricingDirection.notes}

${divider}

## Missing Information
${analysis.missingInformation.map(q => `- [ ] ${q}`).join('\n')}

${divider}

## Recommended Next Action
${analysis.nextAction}

${divider}

## Draft Client Response (REVIEW BEFORE SENDING)
> ${analysis.clientResponseDraft.split('\n').join('\n> ')}

${divider}
*Auto-processed by Beacon AV Lead Intake System*`;
}

function buildTags(lead: LeadFormData): string[] {
  const tags: string[] = [];

  // Event type tag
  const typeTag = lead.eventType.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (typeTag) tags.push(typeTag);

  // City tag
  const cityTag = lead.city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (cityTag) tags.push(cityTag);

  // Budget tier tag
  if (lead.budgetRange) {
    if (['$50K-$100K', '$100K+'].includes(lead.budgetRange)) {
      tags.push('high-value');
    } else if (['$25K-$50K'].includes(lead.budgetRange)) {
      tags.push('mid-value');
    }
  }

  // Source tag
  if (lead.referralSource) {
    tags.push(`source-${lead.referralSource.toLowerCase().replace(/\s+/g, '-')}`);
  }

  return tags;
}

export async function createClickUpTask(
  lead: LeadFormData,
  analysis: QuotingEngineResponse
): Promise<ClickUpTaskResult> {
  const token = process.env.CLICKUP_API_TOKEN;
  if (!token) {
    throw new Error('CLICKUP_API_TOKEN environment variable is not set');
  }

  // Due date = 48 hours from now (quote turnaround SLA)
  const dueDate = Date.now() + 48 * 60 * 60 * 1000;

  const taskBody = {
    name: buildTaskName(lead),
    description: buildTaskDescription(lead, analysis),
    priority: getLeadPriority(lead.budgetRange),
    due_date: dueDate,
    due_date_time: true,
    tags: buildTags(lead),
    status: 'to do',
  };

  const response = await fetch(
    `https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(taskBody),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`ClickUp API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();

  return {
    taskId: data.id,
    taskUrl: data.url,
  };
}
