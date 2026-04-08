'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const HUBSPOT_PORTAL_ID = '148200095';
const HUBSPOT_FORM_GUID = '61567685-f427-4ca9-bce7-74ceeb18caee';
const WEB3FORMS_KEY = ''; // Will be filled in from existing site

const serviceOptions = [
  'AV Installation / TV Mounting',
  'Home Theater Setup',
  'Smart Home Automation',
  'Security Systems',
  'Networking & WiFi',
  'Commercial AV',
  'Multiple Services',
  'Not Sure Yet',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    service: '',
    message: '',
    type: 'customer',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      // 1. HubSpot Forms API
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
              { name: 'company', value: formData.company || '' },
              { name: 'city', value: formData.city },
            ],
            context: {
              pageUri: typeof window !== 'undefined' ? window.location.href : '',
              pageName: 'Beacon AV Contact Form',
            },
          }),
        }
      ).catch(() => {}); // Don't block on HubSpot failure

      // 2. Web3Forms email notification
      const w3Payload: Record<string, string> = {
        access_key: 'c2a16507-9e5e-4494-b3cf-6f9f1af9cbdb',
        subject: `New Beacon AV Inquiry — ${formData.service || 'General'} — ${formData.city}`,
        name: `${formData.firstname} ${formData.lastname}`.trim(),
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        service: formData.service,
        message: formData.message,
        type: formData.type,
      };
      if (formData.company) w3Payload.company = formData.company;

      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(w3Payload),
      });

      if (!w3Res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Get in Touch</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Request a Free Quote</h1>
          <p className="text-gray-300 max-w-2xl">
            Tell us about your project and we'll match you with a vetted local professional — typically within 24 hours. All quotes are written and fixed-price.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-navy mb-3">Request Received</h2>
                <p className="text-gray-600 mb-2">We've received your project details and will follow up within 24 hours.</p>
                <p className="text-gray-500 text-sm">Check your inbox for a confirmation email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Request type toggle */}
                <div className="flex gap-3 mb-2">
                  {['customer', 'partner', 'commercial'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, type: t }))}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                        formData.type === t
                          ? 'bg-accent text-white border-accent'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-accent'
                      }`}
                    >
                      {t === 'customer' ? 'Homeowner' : t === 'partner' ? 'Installer / Partner' : 'Business / Commercial'}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      required
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      required
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City / Metro Area *</label>
                    <input
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Austin, TX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  {formData.type !== 'partner' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {(formData.type === 'commercial' || formData.type === 'partner') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company / Business Name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {formData.type === 'partner' ? 'Tell us about your experience & certifications' : 'Project Details'}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      formData.type === 'partner'
                        ? 'Years of experience, certifications, brands you work with...'
                        : 'Describe your project — room size, equipment you have, goals...'
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : formData.type === 'partner' ? 'Submit Partner Application' : 'Request My Free Quote'}
                </button>
                <p className="text-gray-400 text-xs text-center">We respond to all inquiries within 24 hours. No spam. No pressure.</p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-navy mb-3">What Happens Next</h3>
              <ol className="space-y-3">
                {[
                  'We review your project details',
                  'Match you with the right local professional',
                  'You receive a written, fixed-price quote',
                  'Schedule your install at your convenience',
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
              <p className="text-sm text-gray-600">All inquiries are reviewed within <strong>24 hours</strong> on business days. Urgent requests noted in your message will be prioritized.</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2">Questions First?</h3>
              <p className="text-sm text-gray-600 mb-3">Prefer to talk before submitting? Our team is available:</p>
              <p className="text-sm font-medium text-navy">Mon – Fri, 8am – 6pm CT</p>
              <a href="mailto:hello@beaconav.co" className="text-accent text-sm font-medium hover:underline">hello@beaconav.co</a>
            </div>

            <div className="bg-navy rounded-xl p-5 text-center">
              <p className="text-white font-bold mb-1">Installer / Partner?</p>
              <p className="text-gray-300 text-sm mb-3">Select "Installer / Partner" in the form, or visit our dedicated partner page.</p>
              <a href="/partners" className="text-accent text-sm font-semibold hover:underline">Learn about the partner program →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
