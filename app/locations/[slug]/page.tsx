import { Metadata } from "next";
import Link from "next/link";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return {
      title: "Location Not Found | Beacon AV",
      description: "The requested location page could not be found.",
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">We could not find the location you are looking for.</p>
          <Link href="/locations" className="text-[#e63946] hover:underline">
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#e63946] font-semibold mb-3 uppercase tracking-wider text-sm">
              Event Production in {city.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {city.heroHeadline}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {city.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#e63946] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
              >
                Get a Quote for {city.name}
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Context */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Event Production in {city.name}, {city.stateAbbr}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {city.eventContext}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Services in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.shortTitle}</h3>
                <p className="text-gray-600 text-sm">{service.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Popular Venue Types in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.venueTypes.map((venue) => (
              <div
                key={venue}
                className="bg-gray-50 rounded-lg p-4 text-center font-medium text-gray-700"
              >
                {venue}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Popular Event Types in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.popularEventTypes.map((eventType) => (
              <div
                key={eventType}
                className="bg-white rounded-lg p-4 text-center font-medium text-gray-700 border border-gray-100"
              >
                {eventType}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Markets */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Nearby Markets</h2>
          <div className="flex flex-wrap gap-3">
            {city.nearbyMarkets.map((market) => {
              const marketCity = cities.find(
                (c) => c.name.toLowerCase() === market.toLowerCase()
              );
              return marketCity ? (
                <Link
                  key={market}
                  href={`/locations/${marketCity.slug}`}
                  className="bg-gray-100 hover:bg-[#e63946] hover:text-white px-5 py-2 rounded-full transition font-medium"
                >
                  {market}
                </Link>
              ) : (
                <span
                  key={market}
                  className="bg-gray-100 px-5 py-2 rounded-full font-medium"
                >
                  {market}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Event in {city.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote from our {city.name} production team. We handle audio, video, lighting, staging, and more.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e63946] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
          >
            Request a Production Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
