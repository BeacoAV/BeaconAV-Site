// lib/lead-types.ts — Shared types for lead intake system

export interface LeadFormData {
  eventType: string;
  eventDate: string;
  city: string;
  venue: string;
  indoorOutdoor: string;
  guestCount: string;
  duration: string;
  services: string[];
  description: string;
  budgetRange: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  referralSource: string;
}

export interface ScopeAssessment {
  complexity: 'low' | 'medium' | 'medium-high' | 'high';
  estimatedCrewSize: string;
  keyRequirements: string[];
  venueNotes: string;
}

export interface PricingDirection {
  rangeMin: number;
  rangeMax: number;
  budgetFit: 'under' | 'aligned' | 'over' | 'unknown';
  notes: string;
}

export interface QuotingEngineResponse {
  leadSummary: string;
  scopeAssessment: ScopeAssessment;
  pricingDirection: PricingDirection;
  missingInformation: string[];
  nextAction: string;
  clientResponseDraft: string;
}

export interface ProcessedLead {
  id: string;
  receivedAt: string;
  formData: LeadFormData;
  analysis: QuotingEngineResponse;
  clickupTaskId?: string;
  clickupTaskUrl?: string;
}

// Validation
const REQUIRED_FIELDS: (keyof LeadFormData)[] = [
  'eventType', 'city', 'guestCount', 'services', 'name', 'email'
];

export function validateLeadForm(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object'] };
  }

  const form = data as Record<string, unknown>;

  for (const field of REQUIRED_FIELDS) {
    if (!form[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  if (form.email && typeof form.email === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.push('Invalid email format');
    }
  }

  if (form.services && !Array.isArray(form.services)) {
    errors.push('services must be an array');
  }

  if (form.services && Array.isArray(form.services) && form.services.length === 0) {
    errors.push('At least one service must be selected');
  }

  return { valid: errors.length === 0, errors };
}

export function getLeadPriority(budgetRange: string): number {
  // ClickUp priority: 1=urgent, 2=high, 3=normal, 4=low
  switch (budgetRange) {
    case '$100K+': return 1;
    case '$50K-$100K': return 2;
    case '$25K-$50K': return 2;
    case '$10K-$25K': return 3;
    case '$5K-$10K': return 3;
    case 'Under $5K': return 4;
    default: return 3;
  }
}
