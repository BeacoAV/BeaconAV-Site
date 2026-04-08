import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Event Production Services | Audio, Video, Lighting, Staging',
  description:
    'Full-service event production capabilities \u2014 audio, video, lighting, staging, live streaming, LED walls, and general session production. Nationwide.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Production Services</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Full-Service Event Production</h1>
          <p className="text-gray-300 max-w-2xl">
            From audio and lighting to LED walls and full general session production \u2014 Beacon AV
            delivers complete technical execution for live events across the country.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={\`/services/\${s.slug}\`}
                className="card hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1 mb-4">
                  {s.capabilities.slice(0, 3).map((c) => (
                    <li key={c} className="text-xs text-gray-500 flex gap-2">
                      <span className="text-accent flex-shrink-0">{'\u2713'}</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="text-accent text-sm font-semibold">Learn more \u2192</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Need Multiple Services?</h2>
          <p className="text-gray-300 mb-8">
            Most events require a combination of audio, video, lighting, and staging. We quote and
            manage it all as a single package.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3">
            Get a Production Quote
          </Link>
        </div>
      </section>
    </>
  );
}
