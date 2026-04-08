import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, getCitiesByTier } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'AV Installation Locations | Beacon AV — 50+ US Cities',
  description: 'Beacon AV serves 50+ US cities with vetted AV and smart home installation professionals. Find your city and get a free quote today.',
};

export default function LocationsPage() {
  const tier1 = getCitiesByTier(1);
  const tier2 = getCitiesByTier(2);
  const tier3 = getCitiesByTier(3);

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">Where We Work</p>
          <h1 className="section-title-light mt-2 mb-4">Nationwide AV Coverage</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Beacon AV currently serves 50+ US cities with new markets added monthly. Find your city below or contact us — we can usually source a vetted professional within 48 hours even in unlisted markets.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-navy mb-2">Major Markets</h2>
          <p className="text-gray-500 text-sm mb-6">Full service availability · Same-week installs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {tier1.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="card hover:border-accent group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-accent transition-colors">{city.name}</h3>
                    <p className="text-gray-500 text-sm">{city.state}</p>
                  </div>
                  <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">Available</span>
                </div>
                <p className="text-gray-600 text-xs mt-3 line-clamp-2">{city.intro.substring(0, 100)}...</p>
                <span className="text-accent text-sm mt-3 inline-block">View services →</span>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-bold text-navy mb-2">Expanding Markets</h2>
          <p className="text-gray-500 text-sm mb-6">New market coverage · Contact us for availability</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
            {[...tier2, ...tier3].map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="border border-gray-200 rounded-lg px-4 py-3 hover:border-accent hover:bg-gray-50 transition-all group">
                <p className="font-medium text-navy group-hover:text-accent transition-colors text-sm">{city.name}</p>
                <p className="text-gray-400 text-xs">{city.stateAbbr}</p>
              </Link>
            ))}
          </div>

          <div className="bg-navy rounded-2xl p-8 text-center">
            <h2 className="text-white font-bold text-xl mb-2">Don't see your city?</h2>
            <p className="text-gray-300 mb-6">We're expanding rapidly. Contact us and we'll find a vetted professional in your area — usually within 48 hours.</p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
