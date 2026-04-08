import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Event Production Blog | AV Tips, Costs & Planning Guides | Beacon AV',
  description: 'Expert guides on event AV costs, production planning, audio/video setup, and how to run flawless live events. From corporate conferences to galas.',
};

const posts = [
  {
    slug: 'how-much-does-event-av-cost',
    title: 'How Much Does Event AV Cost? A Complete 2025 Pricing Guide',
    excerpt: 'AV costs vary widely depending on event size, services, and city. Here is a breakdown of what you should expect to pay for audio, video, lighting, and staging -- with real price ranges.',
    category: 'Cost & Pricing',
    readTime: '8 min read',
    date: 'March 2025',
    image: '--',
  },
  {
    slug: 'event-av-checklist',
    title: 'The Complete Event AV Checklist (Print This Before Your Next Event)',
    excerpt: 'A production-ready checklist covering everything from site survey to day-of strike. Use this to brief your production team, manage vendor coordination, and ensure nothing falls through the cracks.',
    category: 'Planning Guides',
    readTime: '6 min read',
    date: 'February 2025',
    image: '--',
  },
  {
    slug: 'audio-requirements-for-corporate-events',
    title: 'Audio Requirements for Corporate Events: What You Actually Need',
    excerpt: 'Microphones, PA systems, monitors, and mixing -- here is what audio setup you actually need for a conference, general session, or corporate gala, and when to upgrade.',
    category: 'AV Requirements',
    readTime: '7 min read',
    date: 'February 2025',
    image: '--',
  },
  {
    slug: 'common-event-av-mistakes',
    title: '7 Common Event AV Mistakes That Kill Productions (And How to Avoid Them)',
    excerpt: 'From undersized PA systems to last-minute vendor changes -- these are the production mistakes event planners make most often, and how to prevent every one of them.',
    category: 'Mistakes to Avoid',
    readTime: '5 min read',
    date: 'January 2025',
    image: '--',
  },
  {
    slug: 'led-wall-vs-projection-which-is-right',
    title: 'LED Wall vs. Projection Screen: Which Is Right for Your Event?',
    excerpt: 'LED walls look incredible, but they are not always the right choice. Here is a clear comparison of LED panels and projection systems -- cost, brightness, setup time, and when to use each.',
    category: 'AV Requirements',
    readTime: '6 min read',
    date: 'January 2025',
    image: '--',
  },
  {
    slug: 'hybrid-event-av-guide',
    title: 'How to Set Up AV for a Hybrid Event: A Complete Production Guide',
    excerpt: 'Hybrid events fail when the virtual experience is an afterthought. Here is how to set up audio, video, and streaming so your remote audience gets the same experience as the room.',
    category: 'Planning Guides',
    readTime: '9 min read',
    date: 'December 2024',
    image: '--',
  },
  {
    slug: 'event-production-in-las-vegas',
    title: 'Producing an Event in Las Vegas: What Every Planner Needs to Know',
    excerpt: 'Las Vegas venues have unique rules, union requirements, and production expectations. Here is what to know before booking your next conference or activation at a Strip property.',
    category: 'City Guides',
    readTime: '7 min read',
    date: 'December 2024',
    image: '--',
  },
  {
    slug: 'how-to-write-av-rfp',
    title: 'How to Write an AV RFP That Gets You Accurate Quotes',
    excerpt: 'Vague RFPs produce vague quotes. Here is exactly what to include in your AV request for proposal to get fast, accurate, and comparable bids from production companies.',
    category: 'Planning Guides',
    readTime: '5 min read',
    date: 'November 2024',
    image: '--',
  },
  {
    slug: 'general-session-production-guide',
    title: 'General Session Production: How to Run a World-Class Conference Opener',
    excerpt: 'The general session sets the tone for your entire conference. Here is how to design the production -- stage, screens, audio, lighting, and run of show -- to make it land.',
    category: 'AV Requirements',
    readTime: '8 min read',
    date: 'November 2024',
    image: '--',
  },
  {
    slug: 'corporate-event-av-new-york',
    title: 'Corporate Event AV in New York City: Costs, Venues & What to Expect',
    excerpt: 'New York is a union labor market with unique venue requirements and premium production expectations. Here is what event planners need to know about AV production in NYC.',
    category: 'City Guides',
    readTime: '7 min read',
    date: 'October 2024',
    image: '--',
  },
];

const categories = ['All', 'Cost & Pricing', 'Planning Guides', 'AV Requirements', 'Mistakes to Avoid', 'City Guides'];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Resources</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">Event Production Guides & Resources</h1>
          <p className="text-gray-300 max-w-2xl">
            Practical guides on AV costs, production planning, and how to run technically flawless events -- from single-day corporate meetings to multi-day national conferences.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <span key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                cat === 'All' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>{cat}</span>
            ))}
          </div>

          {/* Featured post */}
          <div className="bg-navy rounded-2xl p-8 mb-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-6xl">{posts[0].image}</div>
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">{posts[0].category}</span>
              <h2 className="text-xl font-bold text-white mt-2 mb-3">{posts[0].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <Link href={`/blog/${posts[0].slug}`} className="btn-primary py-2 px-5 text-sm">Read Article --</Link>
                <span className="text-gray-400 text-xs">{posts[0].readTime} -- {posts[0].date}</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:border-accent hover:shadow-md transition-all group flex flex-col">
                <div className="text-4xl mb-3">{post.image}</div>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">{post.category}</span>
                <h3 className="font-bold text-navy mb-2 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-accent text-sm font-medium">Read more --</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-navy mb-3">Ready to Plan Your Event?</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Get a full production quote -- audio, video, lighting, staging, and crew -- typically within 48 hours.</p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3">Get a Production Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
