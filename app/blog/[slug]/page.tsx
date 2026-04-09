import Link from "next/link";
import { getPost, getPostsByCategory, blogPosts } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Back to Blog Link */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
            &lt;-- Back to Blog
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
          <article>
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">
                  {post.category}
                </span>
                <span className="text-sm text-slate-600">{post.publishDate}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                {post.excerpt}
              </p>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Article Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                  {post.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Related Services */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-slate-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {post.relatedServices.map((service) => (
                      <li key={service}>
                        <Link
                          href={`/services/${service}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                        >
                          {service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Cities */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-slate-900 mb-4">Service Locations</h3>
                  <ul className="space-y-3">
                    {post.relatedCities.map((city) => (
                      <li key={city}>
                        <Link
                          href={`/locations/${city}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                        >
                          {city.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Block */}
                <div className="bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="font-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Let our experienced team help you plan your next event.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-blue-50 transition"
                  >
                    Get a Quote
                  </Link>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <article key={relPost.slug} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">
                        {relPost.category}
                      </span>
                      <span className="text-xs text-slate-500">{relPost.publishDate}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                      {relPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {relPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Read more
                      <span>--&gt;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-slate-900 mb-3">All Services</h3>
              <p className="text-slate-600 text-sm mb-4">
                Explore our full range of event AV and production services.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                View Services --&gt;
              </Link>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 mb-3">Our Locations</h3>
              <p className="text-slate-600 text-sm mb-4">
                We serve major cities nationwide with local expertise.
              </p>
              <Link href="/locations" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                Find Your City --&gt;
              </Link>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-slate-900 mb-3">Get in Touch</h3>
              <p className="text-slate-600 text-sm mb-4">
                Ready to discuss your event? Contact our team today.
              </p>
              <Link href="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-800">
                Contact Us --&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
