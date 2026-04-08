import Link from 'next/link';

const services = [
  { label: 'AV Installation', href: '/services/av-installation' },
  { label: 'Smart Home Automation', href: '/services/smart-home-automation' },
  { label: 'Security Systems', href: '/services/security-systems' },
  { label: 'Networking & WiFi', href: '/services/networking-wifi' },
  { label: 'Commercial AV', href: '/services/commercial-av' },
];

const cities = [
  { label: 'Austin, TX', href: '/locations/austin-tx' },
  { label: 'New York, NY', href: '/locations/new-york-ny' },
  { label: 'Los Angeles, CA', href: '/locations/los-angeles-ca' },
  { label: 'Chicago, IL', href: '/locations/chicago-il' },
  { label: 'Dallas, TX', href: '/locations/dallas-tx' },
  { label: 'Miami, FL', href: '/locations/miami-fl' },
  { label: 'All Locations →', href: '/locations' },
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              Beacon<span className="text-accent"> AV</span>
            </Link>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              National AV & smart home installation network. Vetted professionals. Consistent standards. Every city.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              HQ: Austin, TX<br />
              <a href="mailto:hello@beaconav.co" className="hover:text-accent transition-colors">
                hello@beaconav.co
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Locations</h3>
            <ul className="space-y-2">
              {cities.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Beacon Audio Visual. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Austin, TX · Serving 50+ cities nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
