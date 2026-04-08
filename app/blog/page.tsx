import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Event Production Blog | Tips, Trends & Guides | Beacon AV',
  description: 'Insights on live event production — audio, video, lighting, staging, live streaming, and event technology from the Beacon AV team.',
};

const posts = [
  {
    slug: 'general-session-production-guide',
    title: 'The Complete Guide to General Session Production',
    excerpt: 'Everything you need to know about planning, scoping, and executing a flawless general session — from stage design through strike.',
    category: 'Production Guides',
    date: 'March 12, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'led-wall-vs-projection',
    title: 'LED Wall vs. Projection: Which is Right for Your Event?',
    excerpt: 'A practical comparison of LED video walls and projection systems — cost, brightness, resolution, and which format wins in each scenario.',
    category: 'Technology',
    date: 'February 28, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'hybrid-event-production-mistakes',
    title: '7 Hybrid Event Production Mistakes (And How to Avoid Them)',
    excerpt: 'The most common technical and logistical pitfalls in hybrid event production — and what your production partner should be doing to prevent them.',
    category: 'Live Streaming',
    date: 'February 14, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'how-to-budget-corporate-event-av',
    title: 'How to Budget for Corporate Event AV Production',
    excerpt: 'What drives AV production costs, how to build a realistic budget, and where event planners typically under- or over-spend.',
    category: 'Planning',
    date: 'January 30, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'audio-production-checklist',
    title: 'The Event Audio Production Checklist Every Planner Needs',
    excerpt: 'A practical pre-event audio checklist covering PA systems, wireless mics, monitoring, and the questions to ask your production partner.',
    category: 'Production Guides',
    date: 'January 15, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'national-event-production-partner',
    title: 'What to Look for in a National Event Production Partner',
    excerpt: 'How to evaluate AV production companies for multi-city and national events — what questions to ask, red flags to watch for, and standards to require.',
    category: 'Planning',
    date: 'December 20, 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'stage-design-corporate-events',
    title: 'Stage Design for Corporate Events: Less is Usually More',
    excerpt: 'The principles behind effective corporate stage design — how to create a professional, on-brand look without overcomplicating the set.',
    category: 'Staging',
    date: 'December 5, 2025',
    readTime: '4 min read',
    featured: false,
  },
  {
    slug: 'av-rider-what-it-is',
    title: 'What is a Technical Rider and Why Does Your Event Need One?',
    excerpt: 'A technical rider outlines exactly what your event requires from a production standpoint. Here\'s how to build one and why it matters.',
    category: 'Planning',
    date: 'November 18, 2025',
    readTime: '5 min read',
    featured: false,
  },
];

const featured = posts.find((p) => p.featured);
const rest = posts.filter((p) => !p.featured);

const categories = ['All', 'Production Guides', 'Technology', 'Live Streaming', 'Planning', 'Staging'];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Resources</p>
          <h1 className="section-title-light mt-2 mb-3 max-w-2xl">Event Production Insights</h1>
          <p className="text-gray-300 max-w-xl">Practical guides, technology breakdowns, and planning advice from the Beacon AV production team.</p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer border transition-colors ${
                  cat === 'All'
                    ? 'bg-accent text-white border-accent'
                    : 'border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                }`}>
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div className="bg-navy rounded-2xl p-8 md:p-10 mb-10">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">{featured.category} · Featured</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-3 max-w-2xl">{featured.title}</h2>
              <p className="text-gray-300 mb-5 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-5">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn-primary">Read Article →</Link>
            </div>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.slug} className="card flex flex-col">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">{post.category}</span>
                <h2 className="font-bold text-navy text-base mb-2 leading-snug">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{post.date} · {post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} className="text-accent text-sm font-semibold hover:underline">Read →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-white mb-3">Production insights, delivered.</h2>
          <p className="text-gray-300 text-sm mb-5">Occasional updates on event production, technology, and industry news. No spam.</p>
          <form action="#" className="flex gap-2">
            <input type="email" placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-lg text-sm border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent" />
            <button type="submit" className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
