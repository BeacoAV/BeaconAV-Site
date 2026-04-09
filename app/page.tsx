import Link from 'next/link';
import { services } from '@/lib/services';

export default function Home() {
  return (
    <main className="w-full">
      {/* ========== HERO ========== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-wider mb-4">
            National Event Production
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Full-Service Event Production.
            <br />
            Any City. Any Event.
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Beacon AV brings world-class production services to 50+ US markets. From concept to execution, we handle audio, video, lighting, and staging with a single point of contact -- no coordination headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Our Services
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-300 border-t border-gray-600 pt-8">
            <div>50+ US Markets</div>
            <div>Audio -- Video -- Lighting -- Staging</div>
            <div>Live Streaming & LED Walls</div>
            <div>Single Point of Contact</div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-bold">50+</p>
            <p className="text-blue-100 text-sm mt-2">US Markets</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold">48hr</p>
            <p className="text-blue-100 text-sm mt-2">Quote Turnaround</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold">100%</p>
            <p className="text-blue-100 text-sm mt-2">Written Quotes</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold">24/7</p>
            <p className="text-blue-100 text-sm mt-2">Day-Of Support</p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              What We Produce
            </h2>
            <p className="text-lg text-gray-600">
              Full-Service Production Capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.slice(0, 7).map((service) => (
              <Link
                key={service.slug}
                href={`${service.slug}}`}
                className="group block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{service.tagline}</p>
                <span className="text-blue-600 font-semibold text-sm">Learn more --&gt;</span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Plan Your Event
            </Link>
            <Link
              href="/services"
              className="inline-block text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
            {[
              { num: '1', title: 'Tell us about your event', desc: 'Share your vision, goals, and requirements' },
              { num: '2', title: 'Receive your production quote', desc: 'Detailed pricing within 48 hours' },
              { num: '3', title: 'We coordinate everything', desc: 'All logistics handled by our team' },
              { num: '4', title: 'Flawless execution on event day', desc: 'Professional support from start to finish' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:512-866-8014"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Talk to a Production Specialist
            </a>
            <p className="text-gray-400 text-sm mt-4">(512) 866-8014</p>
          </div>
        </div>
      </section>

      {/* ========== EVENTS WE PRODUCE ========== */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            Events We Produce
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              {
                title: 'Corporate Events',
                items: 'All-hands, town halls, leadership summits',
              },
              {
                title: 'Conferences & Conventions',
                items: 'General sessions, breakouts, keynotes',
              },
              {
                title: 'Brand Activations',
                items: 'Experiential marketing, product launches',
              },
              {
                title: 'Galas & Award Ceremonies',
                items: 'High-production galas, award shows',
              },
            ].map((event, idx) => (
              <Link
                key={idx}
                href="/contact"
                className="block bg-white p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.items}</p>
                <p className="text-blue-600 font-semibold mt-4 text-sm">Get started --&gt;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY BEACON AV ========== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Why Beacon AV
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Single Point of Contact</h3>
              <p className="text-gray-600">
                One dedicated team manages your entire production. No juggling vendors or coordinating between multiple companies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nationwide Coverage</h3>
              <p className="text-gray-600">
                We produce events in 50+ US cities with local expertise and national resources.
                <Link href="/locations" className="text-blue-600 hover:underline font-semibold ml-1">
                  View all locations
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vetted Partner Network</h3>
              <p className="text-gray-600">
                Only the best equipment and crews. Every partner is vetted and managed to our standards.
                <Link href="/partners" className="text-blue-600 hover:underline font-semibold ml-1">
                  Learn more
                </Link>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Transparent Fixed Pricing</h3>
              <p className="text-gray-600 mb-6">
                No surprises. No hidden fees. You know the cost upfront with our detailed written quotes.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">We handle:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li>- Audio systems & microphones</li>
                  <li>- Video & projection</li>
                  <li>- Lighting design</li>
                  <li>- Stage & set design</li>
                  <li>- Live streaming</li>
                  <li>- LED walls & displays</li>
                  <li>- Crew coordination</li>
                  <li>- Day-of technical support</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 italic">
                Most quotes delivered within 48 hours -- No obligation.
              </p>
            </div>

            <div className="lg:col-span-1 bg-blue-50 p-8 rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Let us create a custom production solution for your event.
              </p>
              <Link
                href="/contact"
                className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Request a Production Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                quote: 'Beacon AV transformed our annual conference. The production quality was flawless, and having a single point of contact made everything seamless.',
                author: 'Sarah Chen',
                company: 'Fortune 500 Tech Company',
              },
              {
                quote: 'Working with Beacon AV across three different cities for our product launch was incredibly smooth. They truly understand the complexity of multi-city events.',
                author: 'Michael Rodriguez',
                company: 'Global Brand Marketing',
              },
              {
                quote: 'From the 48-hour quote turnaround to perfect execution on event day, Beacon AV exceeded our expectations. Professional, reliable, and responsive.',
                author: 'Jennifer Walsh',
                company: 'Corporate Event Planning',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NATIONWIDE COVERAGE ========== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
            We Produce Events in 50+ US Cities
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Local expertise, national resources.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              'New York', 'Los Angeles', 'Chicago', 'Dallas',
              'Austin', 'Denver', 'San Francisco', 'Seattle',
              'Miami', 'Atlanta', 'Boston', 'Las Vegas',
            ].map((city, idx) => (
              <div key={idx} className="text-center py-4 px-2 border border-gray-200 rounded-lg">
                <p className="font-semibold text-slate-900">{city}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/locations"
              className="inline-block text-blue-600 hover:underline font-semibold"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What services does Beacon AV provide?',
                a: 'We offer full-service event production including audio systems, video and projection, lighting design, staging, live streaming, LED walls, crew coordination, and 24/7 day-of support for events of any size.',
              },
              {
                q: 'How much does event production cost?',
                a: 'Pricing depends on your event scope, location, and production requirements. We provide detailed written quotes within 48 hours at no obligation. There are no hidden fees -- you know the cost upfront.',
              },
              {
                q: 'How does your nationwide model work?',
                a: 'Beacon AV operates in 50+ US markets with local production teams and a vetted partner network. You get a single point of contact who coordinates everything, eliminating the need to manage multiple vendors across different cities.',
              },
              {
                q: 'Can you handle multi-city events?',
                a: 'Absolutely. We specialize in coordinating production for companies hosting events across multiple cities. One dedicated team manages all logistics and ensures consistent quality across all locations.',
              },
              {
                q: 'How long does it take to get a quote?',
                a: 'Most quotes are delivered within 48 hours. We provide detailed, written quotes that break down all costs and production elements. There is no obligation to move forward.',
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Produce Something Great?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Let Beacon AV handle your next event. From corporate conferences to brand activations, we deliver flawless production across the nation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Request a Production Quote
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Browse Services
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            No obligation -- Quotes within 48 hours -- No spam
          </p>
        </div>
      </section>
    </main>
  );
}
