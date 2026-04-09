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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    eventDate: '',
    city: '',
    venue: '',
    indoorOutdoor: '',
    guestCount: '',
    duration: '',
    services: [],
    description: '',
    budgetRange: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    referralSource: ''
  });

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!formData.name || !formData.email) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    if (formData.services.length === 0) {
      setSubmitError('Please select at least one service');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/leads/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or email info@beaconav.co'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-[#0c2340] mb-4">
              Quote Request Submitted
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in Beacon AV! We have received your quote request and will get back to you within 24 hours.
            </p>
            <p className="text-gray-700 mb-8">
              In the meantime, feel free to explore our services or contact us directly.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold text-[#0c2340] mb-3">
                Questions before we contact you?
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span> (512) 866-8014
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> quotes@beaconav.co
              </p>
            </div>
            <Link
              href="/"
              className="inline-block bg-[#0c2340] text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#0c2340] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Get a Production Quote
          </h1>
          <p className="text-blue-100 text-lg">
            Tell us about your event and we'll provide a custom quote
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {STEPS.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                            index <= currentStep
                              ? 'bg-[#0c2340] text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {index + 1}
                        </div>
                        {index < STEPS.length - 1 && (
                          <div
                            className={`h-1 flex-1 mx-2 transition-colors ${
                              index < currentStep ? 'bg-[#0c2340]' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-gray-600 text-sm">
                    Step {currentStep + 1}: {STEPS[currentStep]}
                  </p>
                </div>

                {/* Progress Indicator Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div
                    className="bg-[#0c2340] h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / STEPS.length) * 100}%`
                    }}
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Event Basics */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[#0c2340] mb-6">
                        Event Basics
                      </h2>

                      {/* Event Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Type *
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => updateField('eventType', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select an event type</option>
                          {EVENT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Event Date */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => updateField('eventDate', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Event Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => updateField('city', e.target.value)}
                            placeholder="e.g., Austin, TX"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Venue Name
                          </label>
                          <input
                            type="text"
                            value={formData.venue}
                            onChange={(e) => updateField('venue', e.target.value)}
                            placeholder="Venue or address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Indoor / Outdoor */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Indoor / Outdoor *
                        </label>
                        <div className="space-y-3">
                          {['Indoor', 'Outdoor', 'Both'].map((option) => (
                            <label key={option} className="flex items-center">
                              <input
                                type="radio"
                                name="indoorOutdoor"
                                value={option}
                                checked={formData.indoorOutdoor === option}
                                onChange={(e) => updateField('indoorOutdoor', e.target.value)}
                                className="mr-3 w-4 h-4 text-blue-500"
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Event Scale & Services */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[#0c2340] mb-6">
                        Scale & Services
                      </h2>

                      {/* Guest Count */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Estimated Guest Count *
                        </label>
                        <select
                          value={formData.guestCount}
                          onChange={(e) => updateField('guestCount', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select a range</option>
                          {GUEST_COUNT_RANGES.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Duration */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Duration *
                        </label>
                        <select
                          value={formData.duration}
                          onChange={(e) => updateField('duration', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select duration</option>
                          {DURATION_OPTIONS.map((duration) => (
                            <option key={duration} value={duration}>
                              {duration}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Services */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Services Needed *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SERVICES.map((service) => (
                            <label key={service} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.services.includes(service)}
                                onChange={() => toggleService(service)}
                                className="mr-3 w-4 h-4 text-blue-500 rounded"
                              />
                              <span className="text-gray-700 text-sm">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[#0c2340] mb-6">
                        Project Information
                      </h2>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Event Description *
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => updateField('description', e.target.value)}
                          placeholder="Tell us more about your event, vision, and any specific requirements..."
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Budget Range */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Budget Range (Optional)
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => updateField('budgetRange', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select a range</option>
                          {BUDGET_RANGES.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* File Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Attachments (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                          <input
                            type="file"
                            multiple
                            className="w-full"
                            id="file-upload"
                          />
                          <p className="text-sm text-gray-600 mt-2">
                            Upload a run of show, floor plan, or other relevant files (optional)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact Info */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-[#0c2340] mb-6">
                        Contact Information
                      </h2>

                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          placeholder="Company name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="(512) 555-0123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      {/* Referral Source */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          value={formData.referralSource}
                          onChange={(e) => updateField('referralSource', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select an option</option>
                          {REFERRAL_SOURCES.map((source) => (
                            <option key={source} value={source}>
                              {source}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between gap-4 mt-8 pt-8 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                        currentStep === 0
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      Back
                    </button>

                    {currentStep < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors ml-auto"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="px-8 py-2 bg-[#0c2340] text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Submitting...' : 'Submit Quote Request'}
                      </button>
                      {submitError && (
                        <p className="text-red-500 text-sm mt-2 text-center">{submitError}</p>
                      )}
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-6">
                <h3 className="text-lg font-bold text-[#0c2340] mb-4">
                  Questions?
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      Phone
                    </p>
                    <p className="text-lg font-bold text-[#0c2340]">
                      (512) 866-8014
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      Email
                    </p>
                    <p className="text-base text-blue-600 break-all">
                      quotes@beaconav.co
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-bold text-[#0c2340] mb-4">
                  Why Request a Quote?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">
                      --
                    </span>
                    <span className="text-sm text-gray-700">
                      Response within 24 hours
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">
                      --
                    </span>
                    <span className="text-sm text-gray-700">
                      No obligation or hidden fees
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">
                      --
                    </span>
                    <span className="text-sm text-gray-700">
                      Nationwide coverage with local expertise
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#0c2340] mb-4">
                  Explore More
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locations"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      Service Locations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      About Beacon AV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
