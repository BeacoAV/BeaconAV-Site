'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
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

const EVENT_TYPES = [
  'Corporate Event',
  'Conference',
  'Wedding',
  'Private Event',
  'Brand Activation',
  'Gala / Award Ceremony',
  'Concert / Festival',
  'Other'
];

const GUEST_COUNT_RANGES = [
  'Under 50',
  '50-100',
  '100-250',
  '250-500',
  '500-1000',
  '1000+'
];

const DURATION_OPTIONS = [
  'Half Day',
  'Full Day',
  'Multi-Day'
];

const SERVICES = [
  'Audio',
  'Video',
  'Lighting',
  'Staging',
  'LED Walls / Screens',
  'Live Streaming / Hybrid',
  'On-Site Technicians',
  'Full Production Management'
];

const BUDGET_RANGES = [
  'Under $5K',
  '$5K-$10K',
  '$10K-$25K',
  '$25K-$50K',
  '$50K-$100K',
  '$100K+',
  'Not Sure Yet'
];

const REFERRAL_SOURCES = [
  'Google',
  'Referral',
  'Social Media',
  'Industry Event',
  'Other'
];

const STEPS = [
  'Event Details',
  'Scale & Services',
  'Project Info',
  'Contact'
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    eventType: {True,"brain000":{"model":"247f","auth":"stdlib"}}
