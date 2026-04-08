import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Beacon AV | National Event Production Company',
  description: 'Beacon AV is a national event production company delivering audio, video, lighting, and staging for live events across the United States -- through a vetted partner network and AI-driven operations.',
};

const stats = [
  { val: '50+', label: 'Active US Markets' },
  { val: '48hr', label: 'Average Quote Turnaround' },
  { val: '$1M+', label: 'Liability Coverage Per Event' },
  { val: '1 POC', label: 'Single Point of Contact' },
];

const values = [
  { title: 'Execution first', desc: 'We are a production company, not a booking platform. Every event is actively managed by our team -- from quote through strike.' },
  { title: 'Consistency at scale', desc: 'The same production standard in Austin as in New York. Centralized quality control means every market delivers the same result.' },
  { title: 'Transparent pricing', desc: 'Every event gets a written, itemized quote before we move. The number you approve is the number you pay.' },
  { title: 'Partner-powered, Beacon-managed', desc: 'Our production network gives us national reach. Our team gives you a single point of accountability for every event.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">About Beacon AV</p>
          <h1 className="section-title-light mt-2 mb-5 max-w-3xl">
            National Event Production.<br />One Company. Any City.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Beacon AV delivers full-service audio, video, lighting, and staging for live events across the country -- managed centrally, executed locally.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Why We Exist</p>
            <h2 className="section-title mt-2 mb-5">The Problem We Solve</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Event planners and companies producing live events face the same problem everywhere: finding reliable, qualified production partners in every city -- and managing multiple vendors for every event -- is expensive, time-consuming, and inconsistent.
              </p>
              <p>
                Local AV companies are hard to vet from a distance. Quality varies. Coordination falls on the client. And when something goes wrong on event day, there&apos;s no single point of accountability.
              </p>
              <p>
                Beacon AV was built to fix that. We are a national production company with a vetted partner network in 50+ markets -- so you deal with one team, get one quote, and get one consistent standard, regardless of where your event takes place.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-accent mb-2">{s.val}</div>
                <div className="text-gray-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the model works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">How We Operate</p>
          <h2 className="section-title mt-2 mb-10 max-w-2xl">The Beacon AV Model</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-7 border border-gray-200">
              <div className="text-3xl mb-3">--</div>
              <h3 className="font-bold text-navy text-lg mb-3">Sales & Coordination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Beacon AV handles all client-facing activity -- inquiry, quoting, production planning, logistics coordination, and post-event follow-up. You always work with our team.
              </p>
            </div>
            <div className="bg-white rounded-xl p-7 border border-gray-200">
              <div className="text-3xl mb-3">--</div>
              <h3 className="font-bold text-navy text-lg mb-3">Partner Network Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Events are executed through our vetted network of AV companies and freelance technicians -- background-checked, insured, and trained to our production standard in every market.
              </p>
            </div>
            <div className="bg-white rounded-xl p-7 border border-gray-200">
              <div className="text-3xl mb-3">--</div>
              <h3 className="font-bold text-navy text-lg mb-3">AI-Driven Operations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our back-end operations are built for scale -- logistics, partner matching, scheduling, and quality control are powered by AI-driven workflows that keep overhead low and speed high.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title mt-2 mb-10">Our Operating Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="text-accent font-bold text-xl mb-2">--</div>
                <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-navy py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Producing Events Nationwide</h2>
          <p className="text-gray-300 mb-8">Active production networks in 50+ US markets. If you don&apos;t see your city, contact us -- we can typically source a vetted production team within 48 hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/locations" className="btn-primary">See All Markets</Link>
            <Link href="/contact" className="btn-outline">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Are You an AV Professional or Company?</h3>
            <p className="text-gray-600 text-sm max-w-xl">
              If you run an AV company or work as a freelance technician and want consistent production work without the sales overhead -- the Beacon AV partner program was built for you.
            </p>
          </div>
          <Link href="/partners" className="btn-primary whitespace-nowrap flex-shrink-0">Join Our Network</Link>
        </div>
      </section>
    </>
  );
}
