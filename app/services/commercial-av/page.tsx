import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial AV Installation Services | Nationwide | Beacon AV',
  description: 'Professional commercial AV installation across the USA. Conference rooms, digital signage, boardroom systems, and multi-zone audio for businesses in 50+ cities.',
  keywords: 'commercial AV installation, conference room AV installer, business AV system, digital signage installation USA',
};

const pricing = [
  ['Conference room display + mounting', '$400 – $1,200'],
  ['Video conferencing system (basic)', '$1,000 – $3,000'],
  ['Video conferencing system (full room)', '$3,000 – $10,000'],
  ['Digital signage install (per screen)', '$200 – $600'],
  ['Multi-zone commercial audio (per zone)', '$500 – $2,000'],
  ['Boardroom AV system (complete)', '$5,000 – $25,000+'],
  ['Large venue / auditorium AV', 'Custom quote'],
];

const faqs = [
  { q: 'Do you handle both the equipment and installation?', a: 'Yes. We can source equipment, or work with equipment you\'ve already purchased. We handle design, procurement, installation, configuration, and testing.' },
  { q: 'Can you integrate with Zoom, Teams, or Google Meet?', a: 'Yes. We configure systems for all major video conferencing platforms including Zoom Rooms, Microsoft Teams Rooms, and Google Meet hardware.' },
  { q: 'Do you service multi-location businesses?', a: 'Yes — this is one of our strengths. Because we have certified professionals in 50+ cities, we can deploy consistent AV systems across multiple offices simultaneously.' },
  { q: 'What happens if something breaks after installation?', a: 'Every commercial install includes 30-day support. We also offer ongoing maintenance contracts for businesses that want dedicated support beyond the initial warranty period.' },
];

export default function CommercialAVPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Service</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Commercial AV Installation — Nationwide</h1>
          <p className="text-gray-300 max-w-2xl mb-8">Conference rooms, boardrooms, digital signage, and multi-zone audio for businesses of every size — installed consistently across all your locations.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Commercial Quote</Link>
            <Link href="/locations" className="btn-secondary">Find Your City</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">AV for Business — Done at Scale</h2>
          <p className="text-gray-600 leading-relaxed mb-4">For multi-location companies, inconsistent AV is a recurring problem. One office has a great conference room. Another has a screen that doesn't connect. A third is still running a projector from 2014. Beacon AV solves this by deploying consistent systems across all your locations using our national installer network.</p>
          <p className="text-gray-600 leading-relaxed">One point of contact. National execution. The same standard in every city.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Commercial AV Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ['Conference Rooms', 'Display, speakerphone, video conferencing, wireless presentation — fully integrated.'],
              ['Executive Boardrooms', 'Premium displays, advanced video conferencing, lighting and shade control.'],
              ['Digital Signage', 'Lobby displays, menu boards, wayfinding, and promotional screens.'],
              ['Multi-Zone Audio', 'Background music and announcements across lobbies, offices, and common areas.'],
              ['Training Rooms', 'Large displays, collaboration screens, and instructor AV setups.'],
              ['Restaurants & Hospitality', 'Dining room TVs, bar AV, outdoor speakers, and music zoning.'],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">Commercial AV Pricing</h2>
          <p className="text-gray-600 mb-6">Pricing depends on room count, equipment tier, and scope. All quotes are written and fixed-price before work begins.</p>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy text-white"><th className="text-left px-6 py-3 font-semibold">Service</th><th className="text-right px-6 py-3 font-semibold">Price Range</th></tr></thead>
              <tbody>{pricing.map(([s, p], i) => (<tr key={s} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-6 py-3 text-gray-700 text-sm">{s}</td><td className="px-6 py-3 text-right font-medium text-navy text-sm">{p}</td></tr>))}</tbody>
            </table>
          </div>
          <div className="text-center mt-6"><Link href="/contact" className="btn-primary">Get a Commercial Quote</Link></div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-200">{faqs.map(({ q, a }) => (<div key={q} className="py-5"><h3 className="font-semibold text-navy mb-2">{q}</h3><p className="text-gray-600 text-sm leading-relaxed">{a}</p></div>))}</div>
        </div>
      </section>

      <section className="bg-accent py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Upgrade Your Business AV</h2>
          <p className="text-blue-100 mb-6">Single location or 50 offices — we handle the rollout. Get a free commercial AV assessment today.</p>
          <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded transition-colors inline-block">Get a Commercial Quote</Link>
        </div>
      </section>
    </>
  );
}
