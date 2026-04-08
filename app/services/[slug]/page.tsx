import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">{service.icon} {service.shortTitle}</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">{service.title}</h1>
          <p className="text-gray-300 max-w-2xl">{service.description}</p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy mb-6">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex gap-3 items-start">
                  <span className="text-accent font-bold flex-shrink-0">{'\u2713'}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{cap}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-navy mt-12 mb-6">Ideal For</h2>
            <div className="flex flex-wrap gap-3">
              {service.idealFor.map((item) => (
                <span key={item} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Get a Production Quote</h3>
              <p className="text-gray-300 text-sm mb-6">
                Tell us about your event and we{'\u2019'}ll include {service.shortTitle.toLowerCase()} in your full production quote.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center block py-3">
                Request a Quote
              </Link>
              <p className="text-gray-400 text-xs text-center mt-3">Typically within 48 hours</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-navy mb-3">Other Services</h4>
              <div className="space-y-2">
                {services.filter((s) => s.slug !== params.slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors"
                  >
                    <span>{s.icon}</span> {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title-light mb-4">Need More Than {service.shortTitle}?</h2>
          <p className="text-gray-300 mb-8">
            Most events require a combination of production services. We quote and manage everything as a single package.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3">Get a Production Quote</Link>
        </div>
      </section>
    </>
  );
}
