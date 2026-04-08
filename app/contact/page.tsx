'use client';

import { useState } from 'react';
import { services } from '@/lib/services';

const HUBSPOT_PORTAL_ID = '148200095';
const HUBSPOT_FORM_GUID = '61567685-f427-4ca9-bce7-74ceeb18caee';
const WEB3FORMS_KEY = 'c2a16507-9e5e-4494-b3cf-6f9f1af9cbdb';

const eventTypes = ['Corporate Event', 'Conference / Convention', 'Brand Activation', 'Gala / Award Ceremony', 'Product Launch', 'Trade Show', 'Concert / Entertainment', 'Multi-City / Roadshow', 'Other'];
const headcounts = ['Under 50', '50â200', '200â500', '500â1,000', '1,000â2,500', '2,500+'];
const budgets = ['Under $5,000', '$5,000â$15,000', '$15,000â$50,000', '$50,000â$100,000', '$100,000+', 'Not sure yet'];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    event_type: '',
    event_date: '',
    headcount: '',
    budget: '',
    services_needed: [] as string[],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(value)
        ? prev.services_needed.filter((v) => v !== value)
        : [...prev.services_needed, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: formData.firstname },
              { name: 'lastname', value: formData.lastname },
              { name: 'email', value: formData.email },
              { name: 'phone', value: formData.phone },
              { name: 'company', value: formData.company },
              { name: 'city', value: formData.city },
            ],
            context: {
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: 'Beacon AV Event Production Quote',
            },
          }),
        }
      ).catch(() => {});

      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Event Quote â ${formData.event_type || 'Event'} â ${formData.city} â ${formData.headcount}`,
          name: `${formData.firstname} ${formData.lastname}`.trim(),
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          event_city: formData.city,
          event_type: formData.event_type,
          event_date: formData.event_date,
          headcount: formData.headcount,
          budget: formData.budget,
          services_needed: formData.services_needed.join(', '),
          message: formData.message,
        }),
      });

      const w3Data = await w3Res.json(); if (!w3Data.success) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us at hello@beaconav.co');
    }
  };

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Get a Quote</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Request a Production Quote</h1>
          <p className="text-gray-300 max-w-2xl">
            Tell us about your event and we&apos;ll send a full, itemized production quote â typically within 48 hours. No obligation.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">â</div>
                <h2 className="text-2xl font-bold text-navy mb-3">Quote Request Received</h2>
                <p className="text-gray-600 mb-2">We&apos;ve received your event details and will follow up with a full production quote within 48 hours.</p>
                <p className="text-gray-500 text-sm">Check {formData.email} for a confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Contact info */}
                <div>
                  <h3 className="font-bold text-navy text-base mb-4 pb-2 border-b border-gray-100">Your Contact Info</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input required name="firstname" value={formData.firstname} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <input required name="lastname" value={formData.lastname} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                      <input name="company" value={formData.company} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                </div>

                {/* Event details */}
                <div>
                  <h3 className="font-bold text-navy text-base mb-4 pb-2 border-b border-gray-100">Event Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                      <select required name="event_type" value={formData.event_type} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event City / Venue *</label>
                      <input required name="city" value={formData.city} onChange={handleChange}
                        placeholder="e.g. Austin, TX â Hyatt Regency"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                      <input type="date" name="event_date" value={formData.event_date} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expected Attendance *</label>
                      <select required name="headcount" value={formData.headcount} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        {headcounts.map((h) => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget *</label>
                      <select required name="budget" value={formData.budget} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Services needed */}
                <div>
                  <h3 className="font-bold text-navy text-base mb-2 pb-2 border-b border-gray-100">Services Needed <span className="text-gray-400 font-normal text-sm">(select all that apply)</span></h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    {services.map((s) => (
                      <label key={s.slug}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                          formData.services_needed.includes(s.shortTitle)
                            ? 'border-accent bg-blue-50 text-accent font-semibold'
                            : 'border-gray-200 text-gray-600 hover:border-gray-400'
                        }`}>
                        <input type="checkbox" className="sr-only"
                          checked={formData.services_needed.includes(s.shortTitle)}
                          onChange={() => toggleService(s.shortTitle)} />
                        <span>{s.icon}</span>
                        <span>{s.shortTitle}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                    placeholder="Describe your event â venue details, setup requirements, special requests, or anything that will help us build an accurate quote."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none" />
                </div>

                {status === 'error' && <p className="text-red-600 text-sm">{errorMsg}</p>}

                <button type="submit" disabled={status === 'submitting'}
                  className="btn-primary w-full py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Sending...' : 'Request My Production Quote'}
                </button>
                <p className="text-gray-400 text-xs text-center">No obligation Â· Quotes within 48 hours Â· No spam</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card">
              <h3 className="font-bold text-navy mb-3">What Happens Next</h3>
              <ol className="space-y-3">
                {[
                  'We review your event details',
                  'Our team builds a full production scope',
                  'You receive a written, itemized quote',
                  'We confirm and begin coordination',
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-accent text-white font-bold flex-shrink-0 flex items-center justify-center text-xs">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">Most quote requests receive a <strong>preliminary range within 24 hours</strong>. Full itemized quotes typically within 48 hours.</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2">Talk to Our Team</h3>
              <p className="text-sm text-gray-600 mb-3">Prefer to talk through your event first?</p>
              <p className="text-sm font-medium text-navy">Mon â Fri, 8am â 6pm CT</p>
              <a href="mailto:hello@beaconav.co" className="text-accent text-sm font-medium hover:underline">hello@beaconav.co</a>
            </div>

            <div className="bg-navy rounded-xl p-5">
              <p className="text-white font-bold mb-1">AV Partner?</p>
              <p className="text-gray-300 text-sm mb-3">Looking to join our production network?</p>
              <a href="/partners" className="text-accent text-sm font-semibold hover:underline">Learn about the partner program â</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
