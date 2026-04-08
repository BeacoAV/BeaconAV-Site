import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Beacon AV | National Event Production Company',
  description: 'Beacon AV delivers full-service audio, video, lighting, and staging for live events across the country. One company. Any city. Any event.',
  keywords: 'national event production company, AV production company, live event production USA, event AV services, corporate event production',
};

const eventTypes = [
  { icon: '🏢', title: 'Corporate Events', desc: 'All-hands meetings, town halls, leadership summits, and internal events — produced to the standard your brand demands.' },
  { icon: '🎤', title: 'Conferences & Conventions', desc: 'General sessions, breakouts, keynotes, and multi-day conference programs. Full production from load-in through strike.' },
  { icon: '✨', title: 'Brand Activations', desc: 'Experiential marketing, product launches, and brand experiences that put your message on a stage.' },
  { icon: '🏆', title: 'Galas & Award Ceremonies', desc: 'High-production galas, award shows, and fundraising events with lighting, staging, and technical execution to match the occasion.' },
];

const whyUs = [
  { title: 'Single point of contact', desc: 'One production partner manages everything — audio, video, lighting, staging, and crew. No coordinating between five vendors.' },
  { title: 'Nationwide coverage', desc: 'Active in 50+ US markets. Same production standard whether your event is in Austin, New York, or Los Angeles.' },
  { title: 'Vetted partner network', desc: 'Our production network is built from experienced AV companies and technicians — verified, insured, and held to Beacon AV standards.' },
  { title: 'Transparent fixed pricing', desc: 'Every event gets a written quote before we move. The number you approve is the number you pay.' },
];

const stats = [
  { n: '50+', label: 'US Markets' },
  { n: '48hr', label: 'Quote Turnaround' },
  { n: '100%', label: 'Written Quotes' },
  { n: '24/7', label: 'Day-Of Support' },
];

const faqs = [
  { q: 'What size events does Beacon AV support?', a: 'We produce events from 50 to 5,000+ attendees. Whether it\'s a boardroom general session or a national sales conference, our partner network scales to the requirement.' },
  { q: 'How does Beacon AV operate nationally without a local office in every city?', a: 'We operate through a vetted partner network of AV companies and technicians in 50+ markets. Beacon AV manages the production, logistics, and quality control centrally — you deal with one team regardless of city.' },
  { q: 'Do you own equipment or rent it?', a: 'We source the best equipment for each event through our partner network. This lets us spec the right gear for your specific requirements rather than being limited to what a single company owns.' },
  { q: 'Can you handle multi-city or touring events?', a: 'Yes — multi-city and roadshow production is one of our specialties. Our national footprint means we can execute the same show in different cities on consecutive days.' },
  { q: 'How quickly can you turn a quote around?', a: 'Most event inquiries receive a preliminary budget range within 24 hours. A full written production quote is typically delivered within 48–72 hours.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">National Event Production</p>
          <h1 className="section-title-light mt-3 mb-5">
            Full-Service Event Production.<br />
            <span className="text-accent">Any City. Any Event.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Beacon AV delivers professional audio, video, lighting, and staging for live events across the country — all coordinated through a single production partner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3">Get a Production Quote</Link>
            <Link href="/services" className="btn-outline text-base px-8 py-3">View Our Services</Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>✓ 50+ US Markets</span>
            <span>✓ Audio · Video · Lighting · Staging</span>
            <span>✓ Live Streaming & LED Walls</span>
            <span>✓ Single Point of Contact</span>
          </div>
        </div>
      </section>

      {/* Stats trust bar */}
      <section className="bg-accent py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {stats.map(s => (
            <div key={s.n} className="text-center">
              <p className="text-3xl font-black text-white">{s.n}</p>
              <p className="text-blue-100 text-sm mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center">What We Produce</p>
          <h2 className="section-title text-center mt-2 mb-4">Full-Service Production Capabilities</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">From crystal-clear audio to LED walls and live streaming — we handle every technical element of your event so you can focus on running it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card hover:border-accent hover:shadow-md transition-all group">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-navy mb-2 group-hover:text-accent transition-colors">{s.shortTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.tagline}</p>
                <span className="text-accent text-sm font-medium mt-3 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3 mr-4">Plan Your Event</Link>
            <Link href="/services" className="btn-outline text-base px-8 py-3">All Services</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label text-center">Simple Process</p>
          <h2 className="section-title-light text-center mt-2 mb-10">How Beacon AV Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Tell us about your event', d: 'Share the basics — date, city, attendee count, and what you need. Takes under 5 minutes.' },
              { n: '02', t: 'Receive your production quote', d: 'We build a full written production quote with equipment, crew, and pricing. Typically within 48 hours.' },
              { n: '03', t: 'We coordinate everything', d: 'Beacon AV manages logistics, partner coordination, load-in, and technical execution — start to finish.' },
              { n: '04', t: 'Flawless execution on event day', d: 'Our production team is on-site and in communication. You focus on your event. We handle the tech.' },
            ].map((step) => (
              <div key={step.n} className="bg-white/10 rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-black text-accent mb-3">{step.n}</div>
                <h3 className="font-bold text-white mb-2">{step.t}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3">Talk to a Production Specialist</Link>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Events We Produce</p>
          <h2 className="section-title mt-2 mb-10">Built for Any Event Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTypes.map((e) => (
              <div key={e.title} className="card flex gap-5 items-start">
                <div className="text-4xl flex-shrink-0">{e.icon}</div>
                <div>
                  <h3 className="font-bold text-navy mb-2">{e.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Beacon */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Why Beacon AV</p>
            <h2 className="section-title mt-2 mb-8">One Partner. National Reach. Consistent Results.</h2>
            <div className="space-y-5">
              {whyUs.map((w) => (
                <div key={w.title} className="flex gap-4 items-start">
                  <span className="text-accent font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-navy">{w.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-navy rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Request a Production Quote</h3>
            <div className="space-y-4 text-sm text-gray-300 mb-6">
              <p>Tell us about your event and we&apos;ll turn around a full written production quote — typically within 48 hours.</p>
              <p>No obligation. No pressure. Just a fast, professional quote with everything itemized.</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-accent">✓</span> Audio, video, lighting, staging</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> Live streaming & hybrid events</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> LED walls & custom production</li>
              </ul>
            </div>
            <Link href="/contact" className="btn-primary w-full text-center block py-3">Get a Free Quote</Link>
            <p className="text-gray-400 text-xs text-center mt-3">Most quotes delivered within 48 hours</p>
          </div>
        </div>
      </section>

      {/* Locations strip */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">Nationwide Coverage</p>
          <h2 className="section-title mt-2 mb-4">We Produce Events in 50+ US Cities</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Active production partners in every major market — and the ability to source crews in most secondary markets within 48 hours.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Austin','New York','Los Angeles','Chicago','Dallas','Miami','Las Vegas','Houston','Phoenix','Denver','Seattle','Atlanta'].map((city) => (
              <span key={city} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium">{city}</span>
            ))}
          </div>
          <Link href="/locations" className="text-accent font-semibold hover:underline">View All Locations →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQ</p>
          <h2 className="section-title text-center mt-2 mb-10">Common Questions</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-5">
                <h3 className="font-semibold text-navy mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Ready to Produce Something Great?</h2>
          <p className="text-gray-300 mb-8">Tell us about your event and we&apos;ll get you a full production quote — fast.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-3">Request a Production Quote</Link>
            <Link href="/services" className="btn-outline text-base px-8 py-3">Browse Services</Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">No obligation · Quotes within 48 hours · No spam</p>
        </div>
      </section>
    </>
  );
}
