import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Become a Beacon AV Partner | Join Our National Installer Network',
  description: 'AV and smart home professionals: join the Beacon AV partner network. Get consistent job flow, centralized admin, and access to homeowners and businesses nationwide.',
  keywords: 'AV installer jobs USA, become AV installer partner, join home automation network, AV subcontractor network',
};

const requirements = [
  'Minimum 2 years of professional AV, smart home, or related installation experience',
  'Valid driver\'s license and reliable transportation',
  'General liability insurance (minimum $1M per occurrence)',
  'Clean background check',
  'Licensed as required by your state for applicable work',
  'Professional, customer-facing communication skills',
  'Proficiency in at least 2 of the 5 core services',
];

const benefits = [
  ['Consistent job flow', 'Pre-qualified customers who are ready to book — no more slow seasons.'],
  ['Zero marketing required', 'We handle all lead generation, SEO, and advertising. You just do the work.'],
  ['Simple job management', 'All scheduling and project details through the Beacon AV partner portal.'],
  ['Competitive pay rates', 'Transparent, no-surprise payment terms. Rates above market average.'],
  ['National coordination support', 'Our team handles customer communication before and after the job.'],
  ['Brand credibility', 'Work under the Beacon AV name with national marketing behind every project.'],
];

const steps = [
  ['Apply', 'Submit your application — takes about 10 minutes.'],
  ['Review call', 'Our team reviews your credentials and schedules a brief intro call.'],
  ['Verification', 'Background check and insurance verification completed.'],
  ['Onboarding', 'Platform training — typically 1–2 hours online.'],
  ['Start working', 'Begin receiving job assignments in your service area.'],
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">For Installers</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Join the Beacon AV National Installer Network</h1>
          <p className="text-gray-300 max-w-2xl mb-8">
            If you're a skilled AV or smart home installer tired of chasing your next client — Beacon AV was built for you. We handle the leads. You do the work. Simple.
          </p>
          <Link href="#apply" className="btn-primary">Apply to Become a Partner</Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">What Beacon AV Partners Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(([title, desc]) => (
              <div key={title} className="card">
                <div className="text-accent font-bold text-2xl mb-2">✓</div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Who We're Looking For</h2>
          <ul className="space-y-3">
            {requirements.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">✓</span>
                <p className="text-gray-700">{r}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-navy mb-3">Preferred Qualifications</h3>
            <ul className="space-y-2">
              {['CEDIA certification or equivalent', 'Brand certifications: Control4, Crestron, Lutron, Sonos, Ubiquiti, Ring', 'Experience with both residential and commercial installs', 'Prior experience with national service networks or franchise systems'].map((p) => (
                <li key={p} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">→</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">How the Partner Program Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map(([title, desc], i) => (
              <div key={title} className="text-center p-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center mx-auto mb-3">{i + 1}</div>
                <h3 className="font-bold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-6">Partner FAQ</h2>
          <div className="divide-y divide-gray-200">
            {[
              { q: 'Is this employment or independent contractor?', a: 'Beacon AV partners work as independent contractors. You set your own availability and coverage area. We send jobs your way — you accept the ones that work for your schedule.' },
              { q: 'What is the compensation structure?', a: 'Partners receive a percentage of job revenue. Rates are competitive with — and typically above — average market rates. Full details are disclosed during onboarding.' },
              { q: 'How many jobs can I expect per month?', a: 'Job volume depends on your market size, availability, and service categories. Partners in major metros report 8–20 jobs per month during peak periods.' },
              { q: 'Can I work in multiple cities?', a: 'Yes. Partners can designate a service radius. If you\'re willing to travel or have crews in multiple markets, we can route jobs accordingly.' },
              { q: 'Do I need to supply my own tools and materials?', a: 'Yes — you are responsible for your own tools and standard installation materials. We provide job specifications in advance so you know exactly what\'s needed.' },
            ].map(({ q, a }) => (
              <div key={q} className="py-5">
                <h3 className="font-semibold text-navy mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="bg-navy py-16 px-4" id="apply">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Apply to Join Beacon AV</h2>
          <p className="text-gray-300 mb-8">Ready to get consistent job flow and stop chasing customers? Apply takes 10 minutes. We respond to all complete applications within 3 business days.</p>
          <Link href="/contact?type=partner" className="btn-primary text-lg px-8 py-4">
            Apply to Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}
