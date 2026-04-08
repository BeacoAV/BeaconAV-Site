'use client';

import { useState } from 'react';
import Link from 'next/link';

const HUBSPOT_PORTAL_ID = '148200095';
const HUBSPOT_FORM_GUID = '61567685-f427-4ca9-bce7-74ceeb18caee';
const WEB3FORMS_KEY = 'c2a16507-9e5e-4494-b3cf-6f9f1af9cbdb';

const serviceOptions = [
  'AV Installation / TV Mounting',
  'Home Theater',
  'Smart Home Automation',
  'Security Systems',
  'Networking & WiFi',
  'Commercial AV',
  'Outdoor AV',
  'Structured Cabling',
];

const certOptions = [
  'Crestron', 'Control4', 'Lutron', 'Sonos', 'Savant',
  'Ring / ADT', 'Nest / Google', 'Ubiquiti / Eero', 'Samsung / LG', 'Other',
];

const benefits = [
  {
    icon: '📋',
    title: 'Pre-qualified jobs routed to you',
    desc: 'We handle all marketing, quoting, and customer acquisition. You receive jobs that are already scoped, priced, and ready to schedule.',
  },
  {
    icon: '💰',
    title: 'Fast, reliable payment',
    desc: 'No chasing invoices. Beacon AV handles billing and pays partners on a consistent schedule — typically within 7 days of job completion.',
  },
  {
    icon: '🚫',
    title: 'Zero marketing overhead',
    desc: 'No ads, no SEO, no social media. Your time goes to installs, not lead generation. We fill your pipeline so you can focus on the work.',
  },
  {
    icon: '🏆',
    title: 'National brand backing',
    desc: 'You install under the Beacon AV brand — a nationally recognized standard that gives customers confidence and closes jobs faster.',
  },
  {
    icon: '🔧',
    title: 'Admin handled for you',
    desc: 'Customer communications, scheduling confirmations, and post-install follow-up are all managed by our team — not you.',
  },
  {
    icon: '📈',
    title: 'Scale on your terms',
    desc: 'Take as many or as few jobs as you want. Our partner portal lets you set your availability, service area, and capacity.',
  },
];

const howItWorks = [
  { num: '01', title: 'Apply online', desc: 'Fill out the application below. Takes about 5 minutes. We review every application within 48 hours.' },
  { num: '02', title: 'Verification & onboarding', desc: 'We verify your license, insurance, and background. Then a 30-minute onboarding call to walk you through the partner portal.' },
  { num: '03', title: 'Jobs start coming in', desc: "Once you're live in our system, jobs in your market are routed to you based on availability, specialty, and customer fit." },
  { num: '04', title: 'Install. Get paid. Repeat.', desc: 'Complete the job to Beacon AV standards. We handle the customer follow-up. You get paid on schedule — no hassle.' },
];

const requirements = [
  '2+ years of professional AV or smart home installation experience',
  'Valid trade license where required by your state',
  'General liability insurance — minimum $1M per occurrence',
  'Clean background check (we run it at no cost to you)',
  'Portfolio of at least 3 completed residential or commercial projects',
  'Reliable vehicle, tools, and professional presentation',
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    years_experience: '',
    licensed: '',
    insured: '',
    services: [] as string[],
    certifications: [] as string[],
    how_heard: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleCheckbox = (field: 'services' | 'certifications', value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      // 1. HubSpot
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
              pageName: 'Beacon AV Partner Application',
            },
          }),
        }
      ).catch(() => {});

      // 2. Web3Forms email notification
      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Partner Application — ${formData.firstname} ${formData.lastname} — ${formData.city}`,
          name: `${formData.firstname} ${formData.lastname}`.trim(),
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          city: formData.city,
          years_experience: formData.years_experience,
          licensed: formData.licensed,
          insured: formData.insured,
          services: formData.services.join(', '),
          certifications: formData.certifications.join(', '),
          how_heard: formData.how_heard,
          message: formData.message,
          type: 'partner_application',
        }),
      });

      if (!w3Res.ok) throw new Error('Submission failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email partners@beaconav.co directly.');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Partner Program</p>
          <h1 className="section-title-light mt-2 mb-5 max-w-3xl">
            Get Consistent Work.<br />No Marketing. No Chasing.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Beacon AV connects skilled AV and smart home professionals with pre-qualified customers nationwide. You do the installs. We handle everything else.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#apply" className="btn-primary text-base px-6 py-3">Apply to Join the Network</a>
            <a href="#how-it-works" className="btn-outline text-base px-6 py-3">See How It Works</a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-accent py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '50+', label: 'Active Markets' },
            { val: '7 days', label: 'Avg. Payment Turnaround' },
            { val: '$0', label: 'Marketing Cost to Partners' },
            { val: '24hr', label: 'Job Routing Response' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-white">{s.val}</div>
              <div className="text-blue-100 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Why Partner with Beacon AV</p>
          <h2 className="section-title mt-2 mb-10 max-w-2xl">What You Get as a Beacon AV Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-navy text-base mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">The Process</p>
          <h2 className="section-title mt-2 mb-10">How the Partner Program Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-black text-accent mb-3">{step.num}</div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Who it's for */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="section-label">Qualifications</p>
            <h2 className="section-title mt-2 mb-6">What We Look For</h2>
            <p className="text-gray-600 mb-6">
              We maintain a high standard across the network — that&apos;s what customers pay for and what makes the Beacon AV brand valuable to every partner in it.
            </p>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex gap-3 items-start text-sm text-gray-700">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm font-semibold text-navy mb-2">Preferred (not required)</p>
              <ul className="space-y-1">
                {['CEDIA certification', 'Control4 / Crestron dealer certification', 'Experience with residential and commercial projects', 'Prior work with a national service network'].map((p) => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-gray-400">→</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-navy rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-5">Who This Is For</h3>
            <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
              <div>
                <p className="text-white font-semibold mb-1">Solo installers</p>
                <p>Great at the work but don&apos;t want to run a full sales operation. Get steady work without the overhead.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Small AV companies</p>
                <p>Looking to expand capacity and revenue without taking on more admin. Beacon AV fills your calendar on your terms.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Experienced techs going independent</p>
                <p>Transitioning from employment to contracting and want a reliable source of pre-qualified jobs from day one.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-gray-400 text-xs mb-1">Questions before applying?</p>
              <a href="mailto:partners@beaconav.co" className="text-accent font-semibold text-sm hover:underline">partners@beaconav.co</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-8">Partner FAQ</h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: 'Is this employment or independent contractor?', a: 'Beacon AV partners work as independent contractors. You set your own availability and coverage area. We send jobs your way — you accept the ones that work for your schedule.' },
              { q: 'What is the compensation structure?', a: 'Partners receive a percentage of job revenue. Rates are competitive and typically above average market rates. Full details are disclosed during onboarding.' },
              { q: 'How many jobs can I expect per month?', a: 'It depends on your market size, availability, and service categories. Partners in major metros typically see 8–20 jobs per month during peak periods.' },
              { q: 'Can I work in multiple cities?', a: "Yes. You can designate a service radius and coverage area. If you're willing to travel or have crews in multiple markets, we route accordingly." },
              { q: 'Do I supply my own tools and materials?', a: 'Yes — you are responsible for your own tools and standard installation materials. We provide full job specifications in advance so you know exactly what is needed.' },
            ].map(({ q, a }) => (
              <div key={q} className="py-5">
                <h3 className="font-semibold text-navy mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Apply Now</p>
          <h2 className="section-title mt-2 mb-2">Partner Application</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">Takes about 5 minutes. We review every application within 48 hours and follow up by email.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* The Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Application Received</h2>
                  <p className="text-gray-600 mb-2">
                    Thanks for applying. We&apos;ll review your application and follow up within 48 hours.
                  </p>
                  <p className="text-gray-500 text-sm">Check your inbox at {formData.email}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">

                  {/* Name */}
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
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>

                  {/* Business + City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                      <input name="company" value={formData.company} onChange={handleChange} placeholder="If applicable"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Primary Market / City *</label>
                      <input required name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Austin, TX"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>

                  {/* Experience + License + Insurance */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                      <select required name="years_experience" value={formData.years_experience} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        <option value="2-4">2–4 years</option>
                        <option value="5-9">5–9 years</option>
                        <option value="10-14">10–14 years</option>
                        <option value="15+">15+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Licensed? *</label>
                      <select required name="licensed" value={formData.licensed} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        <option value="yes">Yes — licensed in my state</option>
                        <option value="not_required">Not required in my state</option>
                        <option value="in_progress">In progress</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Insured ($1M+ GL)? *</label>
                      <select required name="insured" value={formData.insured} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                        <option value="">Select...</option>
                        <option value="yes">Yes — $1M+ GL coverage</option>
                        <option value="less">Yes — less than $1M</option>
                        <option value="no">Not yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Services offered */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Services You Offer * <span className="text-gray-400 font-normal">(select all that apply)</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {serviceOptions.map((s) => (
                        <label key={s}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                            formData.services.includes(s)
                              ? 'border-accent bg-blue-50 text-accent font-semibold'
                              : 'border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}>
                          <input type="checkbox" className="sr-only"
                            checked={formData.services.includes(s)}
                            onChange={() => toggleCheckbox('services', s)} />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Brand Certifications / Specialties <span className="text-gray-400 font-normal">(optional)</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {certOptions.map((c) => (
                        <label key={c}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs cursor-pointer transition-colors ${
                            formData.certifications.includes(c)
                              ? 'border-accent bg-blue-50 text-accent font-semibold'
                              : 'border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}>
                          <input type="checkbox" className="sr-only"
                            checked={formData.certifications.includes(c)}
                            onChange={() => toggleCheckbox('certifications', c)} />
                          {c}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How they heard */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                    <select name="how_heard" value={formData.how_heard} onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white">
                      <option value="">Select...</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Referral from another installer</option>
                      <option value="social">Social media</option>
                      <option value="trade_show">Trade show / industry event</option>
                      <option value="email">Email / newsletter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your background <span className="text-gray-400 font-normal">(optional but recommended)</span></label>
                    <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                      placeholder="Types of projects you specialize in, notable installs, brands you work with most — anything that helps us understand your experience."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none" />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">{errorMsg}</p>
                  )}

                  <button type="submit"
                    disabled={status === 'submitting' || formData.services.length === 0}
                    className="btn-primary w-full py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === 'submitting' ? 'Submitting Application...' : 'Submit Partner Application'}
                  </button>
                  {formData.services.length === 0 && (
                    <p className="text-gray-400 text-xs text-center">Select at least one service to submit.</p>
                  )}
                  <p className="text-gray-400 text-xs text-center">We review every application. No spam. Response within 48 hours.</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card">
                <h3 className="font-bold text-navy mb-3">After You Apply</h3>
                <ol className="space-y-3">
                  {[
                    'Application review (48 hours)',
                    'License & insurance verification',
                    'Background check (we run it)',
                    '30-min onboarding call + portal access',
                    'First jobs routed to your market',
                  ].map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-6 h-6 rounded-full bg-accent text-white font-bold flex-shrink-0 flex items-center justify-center text-xs">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card">
                <h3 className="font-bold text-navy mb-2">Questions?</h3>
                <p className="text-sm text-gray-600 mb-2">Reach our partner team directly:</p>
                <a href="mailto:partners@beaconav.co" className="text-accent text-sm font-medium hover:underline block">partners@beaconav.co</a>
                <p className="text-sm text-gray-500 mt-1">Mon – Fri, 8am – 6pm CT</p>
              </div>

              <div className="bg-navy rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">Looking for AV service instead?</h3>
                <p className="text-gray-300 text-sm mb-3">Need installation for your home or business? We&apos;ve got you covered.</p>
                <Link href="/contact" className="text-accent text-sm font-semibold hover:underline">Get a free quote →</Link>
              </div>

              <div className="card text-center">
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-sm text-gray-600">Your information is kept confidential and used only to evaluate your application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Ready to Get Consistent Work?</h2>
          <p className="text-gray-300 mb-8">Join the Beacon AV network and let us handle the customers while you focus on what you do best.</p>
          <a href="#apply" className="btn-primary text-base px-8 py-3">Apply Now — Takes 5 Minutes</a>
        </div>
      </section>
    </>
  );
}
