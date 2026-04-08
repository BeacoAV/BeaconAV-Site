import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Event Production Locations | Beacon AV -- 50+ US Cities',
  description: 'Beacon AV produces live events in 50+ US cities. Audio, video, lighting, and staging -- same production standard in every market.',
};

const tier1 = cities.filter((c) => c.tier === 1);
const tier2plus = cities.filter((c) => c.tier >= 2);

export default function LocationsPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Where We Work</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Nationwide Event Production</h1>
          <p className="text-gray-300 max-w-2xl">
            Beacon AV has active production partners in 50+ US markets -- with new cities added regularly. The same production standard, anywhere in the country.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Tier 1 -- Major Markets */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-navy">Primary Markets</h2>
              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">Full availability</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Full production capability -- audio, video, lighting, staging, live streaming, and LED walls.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tier1.map((city) => (
                <Link key={city.slug} href={`/locations/${city.slug}`}
                  className="card hover:border-accent hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-navy text-lg group-hover:text-accent transition-colors">{city.name}</h3>
                      <p className="text-gray-500 text-sm">{city.state}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">Available</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">{city.intro}</p>
                  <span className="text-accent text-sm font-semibold">View production services --</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Expanding Markets */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-navy">Expanding Markets</h2>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">Contact us for availability</span>
            </div>
            <p className="text-gray-500 text-sm mb-5">Active partner presence. Contact us for availability and current production capacity.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {tier2plus.map((city) => (
                <Link key={city.slug} href={`/locations/${city.slug}`}
                  className="flex flex-col px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl hover:border-accent hover:bg-white transition-all text-sm">
                  <span className="font-semibold text-navy">{city.name}</span>
                  <span className="text-gray-400 text-xs">{city.stateAbbr}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Not listed */}
          <div className="bg-navy rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Don&apos;t see your city?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              We&apos;re expanding rapidly and can often source a vetted production team in unlisted markets within 48 hours.
            </p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
