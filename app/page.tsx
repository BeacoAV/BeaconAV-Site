import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beacon AV | National AV & Smart Home Installation Network',
  description:
    'Beacon AV connects homeowners and businesses with vetted AV and smart home professionals in every major US city. One call. Nationwide coverage. Fast installs.',
  keywords: 'AV installation services USA, smart home automation company, national AV company, AV installer near me',
};

const services = [
  {
    icon: '📺',
    title: 'AV Installation',
    desc: 'TV mounting, home theater, surround sound, and multi-room audio — professionally installed and calibrated.',
    href: '/services/av-installation',
  },
  {
    icon: '🏠',
    title: 'Smart Home Automation',
    desc: 'Control lighting, climate, security, and entertainment from a single app or voice command.',
    href: '/services/smart-home-automation',
  },
  {
    icon: '🔒',
    title: 'Security Systems',
    desc: 'Cameras, smart locks, motion sensors, and full alarm systems — monitored or self-managed.',
    href: '/services/security-systems',
  },
  {
    icon: '📶',
    title: 'Networking & WiFi',
    desc: 'Whole-home mesh networks and commercial-grade WiFi infrastructure built for performance.',
    href: '/services/networking-wifi',
  },
  {
    icon: '🖥️',
    title: 'Commercial AV',
    desc: 'Conference rooms, digital signage, boardroom systems, and multi-zone audio for businesses.',
    href: '/services/commercial-av',
  },
];

const cities = [
  { name: 'Austin, TX', href: '/locations/austin-tx' },
  { name: 'New York, NY', href: '/locations/new-york-ny' },
  { name: 'Los Angeles, CA', href: '/locations/los-angeles-ca' },
  { name: 'Chicago, IL', href: '/locations/chicago-il' },
  { name: 'Dallas, TX', href: '/locations/dallas-tx' },
  { name: 'Miami, FL', href: '/locations/miami-fl' },
  { name: 'San Francisco, CA', href: '/locations/san-francisco-ca' },
  { name: 'Houston, TX', href: '/locations/houston-tx' },
  { name: 'Phoenix, AZ', href: '/locations/phoenix-az' },
  { name: 'Denver, CO', href: '/locations/denver-co' },
  { name: 'Seattle, WA', href: '/locations/seattle-wa' },
  { name: 'Atlanta, GA', href: '/locations/atlanta-ga' },
];

const steps = [
  { num: '01', title: 'Submit your project', desc: 'Tell us what you need — takes under 3 minutes.' },
  { num: '02', title: 'We match you locally', desc: 'We find a certified professional in your city within 24 hours.' },
  { num: '03', title: 'Your installer arrives', desc: 'On time, fully equipped, and ready to work.' },
  { num: '04', title: 'Done right, guaranteed', desc: '30-day post-install support on every job.' },
];

const pricing = [
  ['TV mounting + AV setup', '$150 – $600'],
  ['Home theater install', '$800 – $5,000+'],
  ['Smart home automation (starter)', '$1,500 – $6,000'],
  ['Smart home automation (whole-home)', '$8,000 – $30,000+'],
  ['Security system install', '$500 – $3,000'],
  ['Whole-home networking / WiFi', '$400 – $2,500'],
  ['Commercial AV (conference room)', '$2,000 – $15,000'],
];

const faqs = [
  {
    q: 'How is Beacon AV different from hiring a local AV contractor?',
    a: 'Beacon AV manages a national network of vetted professionals and maintains quality control centrally. You get the reliability of a national brand with the speed of a local install — without the risk of hiring an unknown contractor.',
  },
  {
    q: 'Do you work in my city?',
    a: "We currently serve 50+ US cities with new markets added monthly. Check our Locations page to find your city. If we're not there yet, we can usually source a vetted professional within 48 hours.",
  },
  {
    q: 'How fast can you schedule an installation?',
    a: 'Most standard installs are available within 3–7 business days. Urgent projects are often available sooner — contact us to discuss your timeline.',
  },
  {
    q: 'Are your installers licensed and insured?',
    a: 'Yes. Every installer in the Beacon AV network is background-checked, licensed where required by state law, and carries general liability insurance.',
  },
  {
    q: 'What brands do you work with?',
    a: 'We work with all major brands including Samsung, LG, Sonos, Bose, Crestron, Control4, Lutron, Ring, Nest, Ubiquiti, Eero, and many more. We are brand-agnostic and recommend based on your needs and budget.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">National AV & Automation Network</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto mt-2 mb-6">
            Professional AV & Smart Home Installation{' '}
            <span className="text-accent">Across the USA</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            One national network. Vetted local professionals. Consistent results — from Austin to New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Quote
            </Link>
            <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
              See How It Works
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {['500+ Certified Installers', '50+ Cities Served', 'Same-Week Availability', '30-Day Guarantee'].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <span className="text-accent">✓</span> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Finding reliable AV and smart home installers is harder than it should be. Most local contractors are booked out for weeks, inconsistent in their work, or not certified for the brands you need.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Beacon AV is a national network of vetted, certified professionals. We handle the coordination. You get a seamless install — anywhere in the United States.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">What We Install</p>
            <h2 className="section-title">Five Core Services. One Trusted Network.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card group hover:border-accent">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <span className="text-accent text-sm font-medium mt-4 inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
            <div className="bg-navy rounded-xl p-6 flex flex-col justify-center text-center">
              <p className="text-white font-bold text-lg mb-2">Not sure what you need?</p>
              <p className="text-gray-300 text-sm mb-4">
                Tell us about your project and we&apos;ll recommend the right services.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 px-4" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Simple Process</p>
            <h2 className="section-title">How Beacon AV Works</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Unlike local one-man operations, Beacon AV manages quality control centrally. Every installer is vetted, insured, and trained to the same standard — whether you&apos;re in Dallas or Denver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="text-navy font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-navy py-16 px-4" id="locations">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Where We Work</p>
            <h2 className="section-title-light">Nationwide AV Coverage</h2>
            <p className="text-gray-300 mt-3 max-w-xl mx-auto">
              We currently serve 50+ cities across the United States, with new markets added monthly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {cities.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-navy-light hover:bg-accent text-gray-300 hover:text-white text-sm px-4 py-2 rounded-full transition-colors border border-navy-light hover:border-accent"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations" className="btn-secondary">
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Why Beacon AV</p>
              <h2 className="section-title mb-6">Why Companies and Homeowners Choose Us</h2>
              <ul className="space-y-4">
                {[
                  ['Vetted professionals only', 'Background checked, licensed, insured — every installer in our network.'],
                  ['Centralized quality control', 'One point of contact. We manage scheduling, standards, and follow-up.'],
                  ['Brand-certified installers', 'Crestron, Control4, Sonos, Ring, Ubiquiti, Lutron, and more.'],
                  ['Consistent nationwide standards', 'The same quality in every city — not a roll of the dice.'],
                  ['Transparent fixed pricing', 'Written quotes before any work begins. No surprise fees.'],
                  ['Post-install support', '30-day labor warranty included on every job.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                    <span>
                      <strong className="text-navy">{title}</strong>
                      <span className="text-gray-600"> — {desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-navy font-bold text-xl mb-6">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                Tell us about your project and we&apos;ll match you with the right professional in your city — typically within 24 hours.
              </p>
              <Link href="/contact" className="btn-primary w-full text-center block">
                Request a Free Quote
              </Link>
              <p className="text-gray-400 text-xs mt-3 text-center">
                No obligation. No spam. Just a fast, professional quote.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm text-center">Or call us at</p>
                <a href="tel:+15125550100" className="block text-center text-navy font-bold text-lg mt-1 hover:text-accent transition-colors">
                  (512) 555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 py-16 px-4" id="pricing">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">What Does AV & Smart Home Installation Cost?</h2>
            <p className="text-gray-600 mt-3">
              Pricing depends on project size, technology brands, and your location. Here&apos;s a general guide:
            </p>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold">Service</th>
                  <th className="text-right px-6 py-4 font-semibold">Typical Range</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map(([service, range], i) => (
                  <tr key={service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700">{service}</td>
                    <td className="px-6 py-4 text-right font-medium text-navy">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Get an accurate quote in minutes — no obligation, no pushy sales calls.</p>
            <Link href="/contact" className="btn-primary">
              Get My Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="text-navy font-semibold mb-2">{q}</h3>
                <p className="text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your project and we&apos;ll match you with the right professional in your city — typically within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded transition-colors text-lg">
              Request a Free Quote
            </Link>
            <Link href="/services" className="border border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 rounded transition-colors text-lg">
              Browse Services
            </Link>
          </div>
          <p className="text-blue-200 text-sm mt-4">No obligation. No spam. Just a fast, professional quote.</p>
        </div>
      </section>
    </>
  );
}
