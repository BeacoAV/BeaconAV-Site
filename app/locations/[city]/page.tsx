import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getAllCitySlugs } from '@/lib/cities';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: `AV Installation & Smart Home Services in ${city.name}, ${city.stateAbbr} | Beacon AV`,
    description: `Professional AV installation, smart home automation, security systems, and networking in ${city.name}, ${city.state}. Beacon AV's vetted local professionals. Free quote available.`,
    keywords: `AV installation ${city.name} ${city.stateAbbr}, smart home ${city.name}, AV installer ${city.name} ${city.state}, home automation ${city.name}`,
  };
}

const services = [
  { title: 'AV Installation', desc: 'TV mounting, home theater, surround sound, outdoor AV', href: '/services/av-installation' },
  { title: 'Smart Home Automation', desc: 'Control4, Crestron, Lutron — full system design and install', href: '/services/smart-home-automation' },
  { title: 'Security Systems', desc: 'Cameras, smart locks, alarm systems, access control', href: '/services/security-systems' },
  { title: 'Networking & WiFi', desc: 'Mesh WiFi, structured cabling, commercial networking', href: '/services/networking-wifi' },
  { title: 'Commercial AV', desc: 'Conference rooms, digital signage, boardroom systems', href: '/services/commercial-av' },
];

const pricing = [
  ['TV mounting', '$125 – $400'],
  ['Home theater setup', '$700 – $4,000'],
  ['Smart home starter package', '$1,800 – $6,500'],
  ['Whole-home automation', '$9,000 – $35,000+'],
  ['Security system install', '$500 – $2,800'],
  ['WiFi / networking', '$450 – $2,500'],
  ['Commercial AV', '$2,000 – $12,000'],
];

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            {' → '}{city.name}, {city.stateAbbr}
          </p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">
            AV Installation & Smart Home Services in {city.name}, {city.stateAbbr}
          </h1>
          <p className="text-gray-300 max-w-2xl mb-8">{city.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote in {city.name}</Link>
            <Link href="/services" className="btn-secondary">Browse All Services</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Services Available in {city.name}, {city.stateAbbr}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card hover:border-accent group">
                <h3 className="font-bold text-navy group-hover:text-accent transition-colors mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
                <span className="text-accent text-sm mt-3 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works locally */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">How Beacon AV's National Network Works in {city.name}</h2>
          <p className="text-gray-600 mb-6">
            You don't get a local gig-worker. You get a Beacon AV-vetted professional — background-checked, insured, and trained to our national standard — who lives and works in {city.name}.
          </p>
          <ol className="space-y-4 mb-6">
            {[
              'Submit your project details online — takes 3 minutes.',
              `We confirm your local ${city.name} installer within 24 hours.`,
              'Your installer arrives on time, fully equipped.',
              'Job completed to Beacon AV standards. 30-day support included.',
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-accent text-white font-bold flex-shrink-0 flex items-center justify-center text-sm">{i + 1}</span>
                <p className="text-gray-600 pt-1">{step}</p>
              </li>
            ))}
          </ol>
          {city.localNote && (
            <div className="bg-white border-l-4 border-accent rounded-r-xl p-4">
              <p className="text-gray-700 text-sm"><strong>Local note:</strong> {city.localNote}</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">{city.name} Service Area</h2>
              {city.neighborhoods.length > 0 && (
                <>
                  <h3 className="font-semibold text-navy mb-2">Neighborhoods Served</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.neighborhoods.map((n) => (
                      <span key={n} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{n}</span>
                    ))}
                  </div>
                </>
              )}
              {city.suburbs.length > 0 && (
                <>
                  <h3 className="font-semibold text-navy mb-2 mt-4">Suburbs & Surrounding Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.suburbs.map((s) => (
                      <span key={s} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">Zip Codes Served</h2>
              <div className="flex flex-wrap gap-2">
                {city.zipCodes.map((z) => (
                  <span key={z} className="bg-navy text-white text-sm px-3 py-1 rounded font-mono">{z}</span>
                ))}
                <span className="text-gray-400 text-sm px-3 py-1">+ surrounding areas</span>
              </div>
              <p className="text-gray-500 text-sm mt-4">Don't see your zip code? Contact us — we cover most of the {city.name} metro area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">{city.name} AV & Smart Home Pricing</h2>
          <p className="text-gray-600 mb-6">Pricing ranges for common projects in the {city.name} area. All quotes are written and fixed-price before work begins.</p>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">FAQs — AV & Smart Home Services in {city.name}, {city.stateAbbr}</h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: `How quickly can you schedule an install in ${city.name}?`, a: `Most ${city.name} projects are available within 3–5 business days. Contact us for urgent availability.` },
              { q: `Do you serve all ${city.name} neighborhoods?`, a: `Yes — we serve the full ${city.name} metro including the suburbs listed above. Contact us with your zip code if you are unsure.` },
              { q: `Are your ${city.name} installers licensed?`, a: `Yes. All installers are licensed as required by ${city.state} state regulations, background-checked, and insured.` },
              { q: `Do you handle both residential and commercial projects in ${city.name}?`, a: `Absolutely. We serve homeowners, businesses, and commercial contractors throughout the ${city.name} area.` },
            ].map(({ q, a }) => (
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
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Get Started in {city.name}?</h2>
          <p className="text-blue-100 mb-6">Tell us about your {city.name} project and we'll match you with the right professional — typically within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded transition-colors">Get a Free Quote in {city.name}</Link>
            <Link href="/services" className="border border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-3 rounded transition-colors">Browse All Services</Link>
          </div>
          <p className="text-blue-200 text-sm mt-3">Licensed. Insured. Vetted. Beacon AV-certified.</p>
        </div>
      </section>
    </>
  );
}
