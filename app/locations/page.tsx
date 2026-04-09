import { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Event Production Locations | Beacon AV",
  description:
    "Beacon AV provides professional event production services across major US markets. Audio, video, lighting, and staging for corporate events, conferences, and more.",
  openGraph: {
    title: "Event Production Locations | Beacon AV",
    description:
      "Professional event production services across major US markets.",
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#e63946] font-semibold mb-3 uppercase tracking-wider text-sm">
              Nationwide Coverage
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Event Production Across the US
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From coast to coast, Beacon AV delivers professional audio, video,
              lighting, and staging for events of every size. Explore our markets
              below.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Markets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#e63946] transition">
                  {city.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {city.name}, {city.stateAbbr}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {city.heroSubtext}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We produce events nationwide. Contact us for a custom quote in your
            market.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e63946] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
