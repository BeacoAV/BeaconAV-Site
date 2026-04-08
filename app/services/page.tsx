import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AV & Smart Home Services | Beacon AV',
  description: 'Professional AV installation, smart home automation, security systems, networking, and commercial AV across the USA. Vetted local professionals. Nationwide coverage.',
};

const services = [
  { icon: '📺', title: 'AV Installation', slug: 'av-installation', desc: 'TV mounting, home theater, surround sound, projectors, and multi-room audio — professionally installed and calibrated in any space.', features: ['TV & display mounting', 'Home theater buildouts', 'Surround sound systems', 'Projector & screen installs', 'Multi-room audio', 'Outdoor AV'] },
  { icon: '🏠', title: 'Smart Home Automation', slug: 'smart-home-automation', desc: 'Full home automation design and installation — lighting, climate, entertainment, and security controlled from a single interface.', features: ['Control4 & Crestron systems', 'Lutron lighting control', 'Voice & app control', 'Whole-home scenes & schedules', 'Thermostat integration', 'Shade & blind automation'] },
  { icon: '🔒', title: 'Security Systems', slug: 'security-systems', desc: 'Comprehensive security installations — cameras, smart locks, alarms, and access control for homes and businesses.', features: ['IP camera systems', 'Smart doorbells & locks', 'Motion & glass break sensors', 'Alarm systems', 'Access control', 'Professional monitoring setup'] },
  { icon: '📶', title: 'Networking & WiFi', slug: 'networking-wifi', desc: 'High-performance whole-home and commercial network infrastructure — mesh WiFi, structured wiring, and enterprise-grade installations.', features: ['Whole-home mesh WiFi', 'Structured cabling', 'Network rack builds', 'Commercial WiFi infrastructure', 'Internet failover setup', 'Network security config'] },
  { icon: '🖥️', title: 'Commercial AV', slug: 'commercial-av', desc: 'Professional AV systems for offices, conference rooms, restaurants, retail, and commercial facilities of any size.', features: ['Conference room AV', 'Video conferencing systems', 'Digital signage', 'Multi-zone audio', 'Boardroom systems', 'Lobby & reception displays'] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">What We Do</p>
          <h1 className="section-title-light mt-2 mb-4">AV & Automation Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Five core services. One national network. Consistent quality in every city.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div key={s.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h2 className="text-2xl font-bold text-navy mb-3">{s.title}</h2>
                <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn-primary">
                  Learn More →
                </Link>
              </div>
              <div className={`bg-gray-50 rounded-2xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="text-6xl text-center mb-4">{s.icon}</div>
                <p className="text-center text-gray-500 text-sm">
                  Certified professionals in 50+ cities nationwide
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
          <p className="text-blue-100 mb-6">Tell us about your project and we'll match you with the right professional in your city.</p>
          <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded transition-colors inline-block">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
