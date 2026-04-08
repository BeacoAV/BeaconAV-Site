import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional AV Installation Services | Nationwide | Beacon AV',
  description: 'Expert AV installation across the USA. Beacon AV\'s certified network installs TVs, home theaters, surround sound, and commercial AV systems in 50+ cities. Free quote.',
  keywords: 'AV installation services, audio visual installation near me, AV installer USA, home theater installation, TV mounting service',
};

const useCases = [
  { place: 'Single-family home', examples: 'Living room TV mount, media room buildout, whole-home audio, patio speakers' },
  { place: 'Apartment / condo', examples: 'TV mounting on drywall or concrete, in-wall wiring, soundbar setup' },
  { place: 'Home office', examples: 'Monitor arm installation, webcam/lighting setup, video call optimization' },
  { place: 'Conference room', examples: 'Large display + video conferencing, wireless presentation, room speakers' },
  { place: 'Restaurant / bar', examples: 'Multi-zone TV arrays, background audio, menu displays, outdoor AV' },
  { place: 'Retail / hospitality', examples: 'Digital signage, background music, lobby display systems' },
];

const pricing = [
  ['TV mounting (basic — drywall, standard mount)', '$100 – $200'],
  ['TV mounting (complex — brick, fireplace, full-motion)', '$200 – $450'],
  ['TV + soundbar + streaming device setup', '$200 – $500'],
  ['Home theater install (5.1 surround sound)', '$600 – $2,000'],
  ['Projector + screen installation', '$400 – $1,500'],
  ['Multi-room audio (per zone)', '$300 – $800'],
  ['Conference room AV (basic)', '$1,500 – $5,000'],
  ['Full media room / AV closet buildout', '$3,000 – $15,000+'],
];

const faqs = [
  { q: 'How long does TV mounting take?', a: 'A standard TV mount on drywall takes 45–90 minutes. More complex installations (concrete, brick, above fireplace, in-wall wiring) typically take 2–4 hours.' },
  { q: 'Do you provide the mounting hardware?', a: 'Yes. Your installer arrives with standard mounting hardware. If you have a specific mount already purchased, we can use that instead.' },
  { q: 'Can you hide the cables in the wall?', a: 'Yes — in-wall cable concealment is available on most drywall installations. We use code-compliant conduit or in-wall rated cable for all concealed runs.' },
  { q: 'Do you install equipment I already own?', a: 'Absolutely. We install customer-supplied equipment as well as equipment we source for you.' },
  { q: 'What cities do you serve for AV installation?', a: 'We currently serve 50+ US cities. See our full locations list at beaconav.co/locations.' },
  { q: 'Is there a warranty on the installation work?', a: 'Yes. Every install comes with a 30-day labor warranty. If something isn\'t right, we come back and fix it at no charge.' },
];

export default function AVInstallationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Service</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Professional AV Installation Services — Nationwide</h1>
          <p className="text-gray-300 max-w-2xl mb-8">
            Certified AV professionals in 50+ US cities. TV mounting, home theater, surround sound, projectors, and commercial AV — done right the first time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link href="/locations" className="btn-secondary">See Locations</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Professional AV Installation Matters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most homeowners and businesses have the equipment. What they don't have is time, the right tools, or the technical expertise to get it installed correctly. A poorly mounted TV, a misaligned projector, or a surround sound system that underperforms despite costing thousands — these are avoidable problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Beacon AV's certified network takes the guesswork out of it. We connect you with experienced local professionals who arrive prepared, work efficiently, and leave you with a system that performs exactly as it should.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">What AV Installation Covers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['TV Mounting', 'Flat, tilting, full-motion — any wall type including brick, concrete, and stud walls'],
              ['Home Theater', 'Screens, projectors, receivers, surround sound systems — fully calibrated'],
              ['Multi-Room Audio', 'Whole-home speaker systems with independent zone control'],
              ['Outdoor AV', 'Weatherproof displays, outdoor speakers, and controlled audio zones'],
              ['Rack Building', 'Clean wiring and AV closet organization — equipment management done right'],
              ['Commercial AV', 'Conference rooms, boardrooms, digital signage, and presentation systems'],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">How Beacon AV's National Network Works</h2>
          <ol className="space-y-4">
            {[
              'You submit your project online — room size, equipment list, wall type, timeline.',
              'We match you with a vetted AV professional in your city, typically within 24 hours.',
              'Beacon AV-certified installer arrives on time with all the right tools.',
              'Installation is completed to Beacon AV standards — we check everything before leaving.',
              '30-day post-install support included on every job.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent text-white font-bold flex-shrink-0 flex items-center justify-center text-sm">{i + 1}</span>
                <p className="text-gray-600 pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="bg-gray-50 rounded-xl p-5 mt-6 border-l-4 border-accent">
            <p className="text-gray-700 text-sm">
              Every installer in our network is background-checked, licensed where required, and carries insurance. You are never hiring a stranger off a freelance site — you are working with a professional backed by Beacon AV's quality standard.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">AV Installation Use Cases</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3 font-semibold">Setting</th>
                  <th className="text-left px-6 py-3 font-semibold">Common Projects</th>
                </tr>
              </thead>
              <tbody>
                {useCases.map(({ place, examples }, i) => (
                  <tr key={place} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-navy">{place}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">AV Installation Pricing</h2>
          <p className="text-gray-600 mb-6">Pricing depends on the number of items, wall type, wiring complexity, and your location. All quotes are written and fixed-price before work begins.</p>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy text-white"><th className="text-left px-6 py-3 font-semibold">Service</th><th className="text-right px-6 py-3 font-semibold">Price Range</th></tr></thead>
              <tbody>
                {pricing.map(([s, p], i) => (
                  <tr key={s} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-3 text-gray-700 text-sm">{s}</td>
                    <td className="px-6 py-3 text-right font-medium text-navy text-sm">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Link href="/contact" className="btn-primary">Get Your Free AV Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="bg-accent py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Get Your AV System Installed the Right Way</h2>
          <p className="text-blue-100 mb-6">Whether it's a single TV or a full media room, Beacon AV connects you with the right professional in your city — fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded transition-colors">Request a Free Quote</Link>
            <Link href="/locations" className="border border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-3 rounded transition-colors">See Our Locations</Link>
          </div>
          <p className="text-blue-200 text-sm mt-3">Serving Austin, New York, LA, Chicago, Dallas, Miami, and 50+ more cities.</p>
        </div>
      </section>
    </>
  );
}
