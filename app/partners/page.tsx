import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join the Beacon AV Production Network',
  description:
    'AV companies and freelance technicians: get consistent production work through the Beacon AV partner network. No marketing overhead. Fast payment. National events.',
};

const benefits = [
  {
    icon: '\uD83D\uDCCB',
    title: 'Pre-qualified production jobs routed to you',
    desc: 'We handle all client acquisition, quoting, and event coordination. You receive production jobs that are scoped, scheduled, and ready to execute.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Fast, reliable payment',
    desc: 'No chasing invoices. Beacon AV handles billing and pays partners on a consistent schedule \u2014 typically within 7 days of event completion.',
  },
  {
    icon: '\uD83D\uDEAB',
    title: 'Zero marketing overhead',
    desc: 'No ads, no SEO, no social media. Your time goes to production work, not lead generation. We fill your calendar so you can focus on execution.',
  },
  {
    icon: '\uD83C\uDFC6',
    title: 'National brand backing',
    desc: 'You produce under the Beacon AV standard \u2014 a nationally recognized production brand that gives clients confidence and wins events.',
  },
  {
    icon: '\uD83D\uDD27',
    title: 'Admin handled for you',
    desc: 'Client communications, scheduling, logistics coordination, and post-event follow-up are all managed by our team \u2014 not you.',
  },
  {
    icon: '\uD83D\uDCC8',
    title: 'Scale on your terms',
    desc: 'Take as many or as few events as you want. Set your availability, service area, and crew capacity through our partner portal.',
  },
];

const steps = [
  { n: '01', t: 'Apply online', d: 'Fill out the application below. Takes about 5 minutes. We review every application within 48 hours.' },
  { n: '02', t: 'Verification & onboarding', d: 'We verify your insurance, credentials, and production experience. Then a 30-minute onboarding call to walk through our standards and portal.' },
  { n: '03', t: 'Events start coming in', d: 'Once you\u2019re live in our system, production events in your market are routed to you based on availability, specialty, and crew capacity.' },
  { n: '04', t: 'Produce. Get paid. Repeat.', d: 'Execute the event to Beacon AV standards. We handle the client follow-up. You get paid on schedule \u2014 no hassle.' },
];

const qualifications = [
  '2+ years of professional live event production experience',
  'General liability insurance \u2014 minimum $1M per occurrence',
  'Demonstrated expertise in audio, video, lighting, staging, or live streaming',
  'Professional equipment inventory or reliable rental relationships',
  'Clean background check (we run it at no cost to you)',
  'Reliable transportation and professional on-site presentation',
];

const preferred = [
  'CTS or CTS-D certification (InfoComm/AVIXA)',
  'Experience with corporate events, conferences, and general sessions',
  'Multi-person crew capability',
  'Prior work with national production or staffing companies',
];

const whoFor = [
  { title: 'AV production companies', desc: 'Looking to expand revenue without expanding sales overhead. Beacon AV fills your calendar with production events on your terms.' },
  { title: 'Freelance technicians', desc: 'Audio engineers, video ops, lighting designers, and stage managers who want consistent gigs without hustling for every job.' },
  { title: 'Regional AV firms going national', desc: 'Already strong in your market and want to take on national events through a production network with the infrastructure to support it.' },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">Production Partner Network</p>
          <h1 className="section-title-light mt-3 mb-5">
            Get Consistent Production Work.<br />
            <span className="text-accent">No Marketing. No Chasing.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Beacon AV connects experienced AV production professionals with pre-qualified live events nationwide. You handle the production. We handle everything else.
          </p>
          <Link href="#apply" className="btn-primary text-base px-8 py-3">Apply to Join the Network</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {[
            { n: '50+', l: 'Active Markets' },
            { n: '7 days', l: 'Avg. Payment Turnaround' },
            { n: '$0', l: 'Marketing Cost to Partners' },
            { n: '24hr', l: 'Event Routing Response' },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <p className="text-3xl font-black text-white">{s.n}</p>
              <p className="text-blue-100 text-sm mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Why Partner with Beacon AV</p>
          <h2 className="section-title mt-2 mb-10">What You Get as a Production Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center">The Process</p>
          <h2 className="section-title-light text-center mt-2 mb-10">How the Partner Program Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-black text-accent mb-3">{step.n}</div>
                <h3 className="font-bold text-white mb-2">{step.t}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="section-label">Qualifications</p>
            <h2 className="section-title mt-2 mb-6">What We Look For</h2>
            <p className="text-gray-600 mb-6">We maintain a high production standard across the network \u2014 that\u2019s what clients pay for and what makes the Beacon AV brand valuable to every partner in it.</p>
            <div className="space-y-3">
              {qualifications.map((q) => (
                <div key={q} className="flex gap-3 items-start">
                  <span className="text-accent font-bold flex-shrink-0">{'\u2713'}</span>
                  <p className="text-gray-700 text-sm">{q}</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-navy mt-8 mb-4">Preferred (not required)</h3>
            <div className="space-y-2">
              {preferred.map((p) => (
                <div key={p} className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0">{'\u2192'}</span>
                  <p className="text-gray-600 text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title mt-2 mb-6">Who This Is For</h2>
            <div className="space-y-6">
              {whoFor.map((w) => (
                <div key={w.title} className="card">
                  <h3 className="font-bold text-navy mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 text-sm">Questions before applying?</p>
              <a href="mailto:partners@beaconav.co" className="text-accent font-semibold">partners@beaconav.co</a>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="bg-navy py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Ready to Join the Network?</h2>
          <p className="text-gray-300 mb-8">
            Fill out our partner application \u2014 takes about 5 minutes. We review every application within 48 hours and follow up by email.
          </p>
          <a href="mailto:partners@beaconav.co?subject=Partner%20Application%20%E2%80%93%20Beacon%20AV" className="btn-primary text-base px-8 py-3 inline-block">
            Apply Now \u2014 Email Us
          </a>
          <p className="text-gray-400 text-sm mt-4">partners@beaconav.co \u00B7 Response within 48 hours</p>
        </div>
      </section>

      {/* Bottom link */}
      <section className="bg-gray-50 py-10 px-4 text-center">
        <p className="text-gray-600 text-sm mb-2">Looking for event production instead?</p>
        <Link href="/contact" className="text-accent font-semibold hover:underline">Request a Production Quote \u2192</Link>
      </section>
    </>
  );
}
