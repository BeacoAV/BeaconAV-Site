import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getAllCitySlugs } from '@/lib/cities';
import { services } from '@/lib/services';

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: `Event Production in ${city.name}, ${city.stateAbbr} | Beacon AV`,
    description: `Full-service event production in ${city.name} — audio, video, lighting, staging, live streaming, and LED walls. One production partner for any event.`,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            {' '}→ {city.name}, {city.stateAbbr}
          </p>
          <h1 className="section-title-light mt-4 mb-4 max-w-3xl">
            Event Production in {city.name}, {city.stateAbbr}
          </h1>
          <p className="text-gray-300 max-w-2xl mb-8">{city.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Production Quote</Link>
            <Link href="/services" className="btn-outline">Browse Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Production Services in {city.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}
                    className="flex gap-4 items-start p-4 border border-gray-200 rounded-xl hover:border-accent hover:shadow-sm transition-all group">
                    <span className="text-2xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-navy text-sm group-hover:text-accent transition-colors">{s.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{s.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* How we work in this city */}
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-5">How Beacon AV Works in {city.name}</h2>
              <div className="space-y-4 text-gray-300 text-sm">
                {[
                  `You submit your ${city.name} event details — date, venue, size, and what you need.`,
                  'We build a full production scope and send you a written, itemized quote within 48 hours.',
                  `We coordinate the right production partners from our ${city.name} network — equipment, crew, and logistics.`,
                  'Our team executes on-site. You run your event. We handle the technical production.',
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-accent font-black text-lg flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Venues */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Venues We Commonly Work In</h2>
              <p className="text-gray-600 text-sm mb-4">Our {city.name} production partners have experience at these venues — and many others across the metro.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {city.venues.map((v) => (
                  <div key={v} className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">
                    <span className="text-accent font-bold">→</span>{v}
                  </div>
                ))}
              </div>
            </div>

            {/* Local note */}
            {city.eventNote && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm font-semibold text-navy mb-1">Local Production Note</p>
                <p className="text-gray-700 text-sm">{city.eventNote}</p>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-5">FAQs — Event Production in {city.name}</h2>
              <div className="divide-y divide-gray-200">
                {[
                  { q: `How quickly can you put together a production in ${city.name}?`, a: `Most ${city.name} events can be quoted within 48 hours. For events with 4+ weeks of lead time, we can provide full production management. Rush events (under 2 weeks) are handled case by case.` },
                  { q: `Do you own equipment in ${city.name}?`, a: `Beacon AV operates through a partner network — we source the right equipment for each event rather than being limited to a single company's inventory. This gives you the best gear for your specific requirements.` },
                  { q: `Can you handle both setup and strike?`, a: 'Yes — full production management includes load-in, setup, show operation, and complete strike. Our crew handles all of it.' },
                ].map(({ q, a }) => (
                  <div key={q} className="py-4">
                    <h3 className="font-semibold text-navy mb-2 text-sm">{q}</h3>
                    <p className="text-gray-600 text-sm">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="card">
              <h3 className="font-bold text-navy mb-3">Get a {city.name} Quote</h3>
              <p className="text-sm text-gray-600 mb-4">Tell us about your event and we&apos;ll send a full production quote within 48 hours.</p>
              <Link href="/contact" className="btn-primary w-full text-center block py-3">Request a Quote</Link>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-3">Surrounding Area</h3>
              <div className="flex flex-wrap gap-2">
                {city.suburbs.map((s) => (
                  <span key={s} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{s}</span>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy mb-2">Questions?</h3>
              <p className="text-sm text-gray-600 mb-2">Mon – Fri, 8am – 6pm CT</p>
              <a href="mailto:hello@beaconav.co" className="text-accent text-sm font-medium hover:underline">hello@beaconav.co</a>
            </div>

            <div className="bg-navy rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">All Markets</h3>
              <div className="space-y-1 mb-4">
                {cities.filter((c) => c.slug !== city.slug).slice(0, 6).map((c) => (
                  <Link key={c.slug} href={`/locations/${c.slug}`}
                    className="block text-gray-300 text-sm hover:text-accent transition-colors">
                    {c.name}, {c.stateAbbr}
                  </Link>
                ))}
              </div>
              <Link href="/locations" className="text-accent text-xs font-semibold hover:underline">View all locations →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-3">Ready to Produce Your {city.name} Event?</h2>
          <p className="text-gray-600 mb-6">Tell us about your event and we&apos;ll match you with the right production team — written quote within 48 hours.</p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3">Get a Production Quote</Link>
        </div>
      </section>
    </>
  );
}
