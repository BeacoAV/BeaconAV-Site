import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Beacon AV | National AV Installation Network',
  description: 'Beacon AV is a national AV coordination company connecting homeowners and businesses with vetted, certified AV and smart home installation professionals in 50+ US cities.',
  keywords: 'about Beacon AV, national AV company, AV installer network USA, who is Beacon AV',
};

const values = [
  ['No surprises', 'Every quote is written and fixed-price before work begins. The number we give you is the number you pay.'],
  ['Vetted professionals only', 'Every Beacon AV installer is background-checked, insured, licensed, and trained to our standard — not the minimum.'],
  ['Consistency at scale', 'Whether you\'re in Austin or Boston, you get the same Beacon AV standard. One process. National execution.'],
  ['Customer-first communication', 'We handle the before and after. Our team manages scheduling, confirmations, and follow-up — so you don\'t have to chase anyone.'],
];

const stats = [
  ['50+', 'Cities served nationwide'],
  ['24hr', 'Average match-to-quote time'],
  ['$1M+', 'Liability coverage on every job'],
  ['30-day', 'Post-install support included'],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">About Us</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">The National Standard for AV Installation</h1>
          <p className="text-gray-300 max-w-2xl">
            Beacon AV coordinates professional AV and smart home installation across the United States — connecting customers with vetted local professionals and handling everything in between.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Beacon AV Exists</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AV and smart home industry has a trust problem. Customers struggle to find qualified professionals. Installers waste time chasing leads. Work gets done inconsistently, and nobody has a single source of accountability.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beacon AV was built to fix that. We're a national coordination layer — a centralized network that pre-qualifies top AV professionals in every major market, handles the entire customer relationship, and ensures every project meets the same high standard regardless of where it happens.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For customers: one company, one quote, one point of contact. For installers: consistent job flow, no marketing overhead, and a platform that handles the admin. For the industry: a national standard that raises the bar.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-extrabold text-accent mb-2">{val}</div>
                <p className="text-gray-600 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">How the Beacon AV Model Works</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Beacon AV operates as a national coordination company. We're not a staffing agency, and we're not a gig marketplace. We're a standards-driven network with a structured process on both sides.
          </p>
          <div className="space-y-5">
            {[
              ['Customer side', 'A homeowner or business requests a quote through beaconav.co. We review the project, ask clarifying questions if needed, and match them with the right certified professional in their city. We issue a written, fixed-price quote. We stay in the loop from scheduling through post-install follow-up.'],
              ['Installer side', 'Beacon AV partners are independent contractors who apply, pass verification, and complete our onboarding. We route pre-qualified jobs to them through our partner portal. They do the work. We handle the customer relationship before and after. They get paid without chasing anyone.'],
              ['The standard', 'Every Beacon AV installation is covered by our quality standard: background-checked, insured, licensed professionals, written quotes, on-time arrivals, and 30 days of post-install support. If something isn\'t right, we make it right.'],
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-accent pl-5">
                <h3 className="font-bold text-navy mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(([title, desc]) => (
              <div key={title} className="card">
                <div className="text-accent font-bold text-xl mb-2">✓</div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Where We Operate</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beacon AV currently has active professionals in 50+ US cities, with new markets being added monthly. Our largest markets include Austin, Dallas, Houston, Los Angeles, New York, Chicago, Phoenix, Atlanta, and Seattle.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Even if your city isn't listed, contact us — in most cases we can source a vetted professional within 48 hours through our extended network.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations" className="btn-primary">See All Locations</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Are You an AV Professional?</h2>
            <p className="text-gray-300 leading-relaxed">
              If you're a skilled installer looking for consistent work without the overhead of running your own marketing, the Beacon AV partner program was built for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/partners" className="btn-primary">Learn About the Partner Program</Link>
            <Link href="/contact?type=partner" className="btn-secondary">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
