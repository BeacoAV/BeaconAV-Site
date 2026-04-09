import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Production Blog | Beacon AV Insights",
  description: "Learn about event production, AV pricing, planning guides, and expert tips from Beacon AV. Read our latest articles on corporate events and conferences.",
};

const categories = [
  { name: "All", slug: "all" },
  { name: "Pricing", slug: "pricing" },
  { name: "Planning", slug: "planning" },
  { name: "Technical", slug: "technical" },
  { name: "Tips", slug: "tips" },
  { name: "City Guide", slug: "city-guide" },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 md:py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Production Insights</h1>
          <p className="text-lg text-slate-200">Expert articles on AV pricing, event planning, technical setup, and production strategies</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug === "all" ? "/blog" : `/blog?category=${cat.slug}`}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition font-medium text-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.publishDate}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-3">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    Read more
                    <span>--&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Production Help?</h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our experienced team help you plan and execute a world-class event.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              Get a Quote
            </Link>
          </section>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore Beacon AV</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Our Services</h3>
              <p className="text-slate-600 text-sm mb-4">
                From AV rentals to full event production, we deliver professional solutions for every event size.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                View Services --&gt;
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Locations</h3>
              <p className="text-slate-600 text-sm mb-4">
                We serve major cities across the country with local expertise and national resources.
              </p>
              <Link href="/locations" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                Find Your City --&gt;
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Contact Us</h3>
              <p className="text-slate-600 text-sm mb-4">
                Ready to plan your event? Our team is ready to discuss your production needs.
              </p>
              <Link href="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                Get in Touch --&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
