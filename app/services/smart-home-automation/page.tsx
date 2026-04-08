import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Home Automation Installation | Nationwide | Beacon AV',
  description: 'Professional smart home automation installation across the USA. Control4, Crestron, Lutron, and more — designed and installed by certified professionals in 50+ cities.',
  keywords: 'smart home automation installation, home automation company, Control4 installer, Crestron installation, smart home system USA',
};

const systems = [
  { brand: 'Control4', desc: 'Full-home automation, entertainment, and security control from a single intuitive interface.' },
  { brand: 'Crestron', desc: 'Enterprise-grade automation for luxury residential and commercial applications.' },
  { brand: 'Lutron', desc: 'Industry-leading lighting and shade control — standalone or integrated.' },
  { brand: 'Savant', desc: 'Premium home automation with a focus on simplicity and reliability.' },
  { brand: 'Josh.ai', desc: 'Voice control designed for privacy — no cloud dependency for core commands.' },
  { brand: 'Amazon Alexa / Google Home', desc: 'Entry-level voice integration for existing smart device ecosystems.' },
];

const pricing = [
  ['Smart home consultation & design', 'Included with project'],
  ['Starter package (lighting + thermostat + voice)', '$1,500 – $4,000'],
  ['Mid-tier (lighting + entertainment + security)', '$4,000 – $12,000'],
  ['Whole-home automation (Control4 / Crestron)', '$12,000 – $50,000+'],
  ['Single-room automation', '$800 – $3,000'],
  ['Retrofit existing smart devices into one system', '$500 – $2,500'],
];

const faqs = [
  { q: 'What is smart home automation?', a: 'Smart home automation connects your lighting, climate, entertainment, security, and other systems into a single controllable platform — managed via app, voice, or programmed schedules.' },
  { q: 'Do I need to buy all new equipment?', a: 'Not necessarily. Many automation systems can integrate with equipment you already own. During your consultation, we\'ll assess what\'s compatible and what needs to be upgraded.' },
  { q: 'What\'s the difference between DIY smart home (Alexa/Google) and professional automation?', a: 'DIY systems are disconnected apps that require separate control. Professional systems like Control4 and Crestron unify everything into one seamless experience with far greater reliability, customization, and performance.' },
  { q: 'How long does a smart home installation take?', a: 'Starter packages can be completed in a single day. Whole-home systems typically take 2–5 days depending on the scope.' },
  { q: 'Do you offer ongoing support after installation?', a: 'Yes. All installs include 30-day post-install support. Extended support plans are available for whole-home automation systems.' },
];

export default function SmartHomePage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Service</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Smart Home Automation Installation — Nationwide</h1>
          <p className="text-gray-300 max-w-2xl mb-8">Control your entire home from a single app or voice command. Certified Control4, Crestron, and Lutron professionals in 50+ US cities.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Consultation</Link>
            <Link href="/locations" className="btn-secondary">Find Your City</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">What Is Smart Home Automation?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Smart home automation connects your lighting, climate, entertainment, security, and other systems into a single platform — controlled from one app, one remote, or your voice. No more juggling five different apps for five different devices.</p>
          <p className="text-gray-600 leading-relaxed">When installed correctly by a certified professional, a smart home system is reliable, intuitive, and genuinely improves daily life. When done wrong, it's a nightmare of devices that don't talk to each other. Beacon AV ensures it's done right.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2 text-center">What We Automate</h2>
          <p className="text-gray-600 text-center mb-8">Every system in your home, working together.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Lighting control', 'Climate / HVAC', 'Window shades', 'Entertainment systems', 'Security cameras', 'Smart locks', 'Doorbells', 'Irrigation', 'Garage doors', 'Pool & spa', 'Whole-home audio', 'Voice assistants'].map((item) => (
              <div key={item} className="card text-center py-4">
                <p className="text-navy font-medium text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Platforms We Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map(({ brand, desc }) => (
              <div key={brand} className="card">
                <h3 className="font-bold text-navy mb-2">{brand}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">Smart Home Automation Pricing</h2>
          <p className="text-gray-600 mb-6">Pricing depends on the scope of automation, platforms chosen, and your home's existing infrastructure. Every project starts with a free consultation.</p>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy text-white"><th className="text-left px-6 py-3 font-semibold">Scope</th><th className="text-right px-6 py-3 font-semibold">Price Range</th></tr></thead>
              <tbody>{pricing.map(([s, p], i) => (<tr key={s} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}><td className="px-6 py-3 text-gray-700 text-sm">{s}</td><td className="px-6 py-3 text-right font-medium text-navy text-sm">{p}</td></tr>))}</tbody>
            </table>
          </div>
          <div className="text-center mt-6"><Link href="/contact" className="btn-primary">Get Your Free Consultation</Link></div>
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
          <h2 className="text-3xl font-bold text-white mb-3">Design Your Smart Home</h2>
          <p className="text-blue-100 mb-6">Tell us about your home and goals — we'll match you with a certified automation specialist in your city.</p>
          <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-3 rounded transition-colors inline-block">Get a Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
