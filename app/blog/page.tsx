import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AV & Smart Home Blog | Tips, Guides & Trends | Beacon AV',
  description: 'Expert guides on AV installation, smart home automation, networking, and security systems. Written by Beacon AV professionals for homeowners and businesses.',
  keywords: 'AV installation tips, smart home guide, home theater setup guide, AV blog',
};

// Static blog posts — will be replaced with CMS/MDX in Phase 2
const posts = [
  {
    slug: 'how-to-choose-av-installer',
    title: 'How to Choose an AV Installer: 7 Questions to Ask Before You Hire',
    excerpt: 'Not all AV installers are equal. Here\'s what to ask before signing a contract — and the red flags that should send you looking elsewhere.',
    category: 'Guides',
    date: 'March 2025',
    readTime: '6 min read',
  },
  {
    slug: 'home-theater-cost-breakdown',
    title: 'Home Theater Cost Breakdown: What You\'re Actually Paying For',
    excerpt: 'From entry-level setups to full dedicated rooms — a transparent look at what drives home theater costs and how to get the most value.',
    category: 'Pricing',
    date: 'March 2025',
    readTime: '8 min read',
  },
  {
    slug: 'control4-vs-crestron-vs-lutron',
    title: 'Control4 vs. Crestron vs. Lutron: Which Smart Home Platform is Right for You?',
    excerpt: 'The three biggest names in smart home automation each take a different approach. Here\'s a no-fluff comparison to help you decide.',
    category: 'Smart Home',
    date: 'February 2025',
    readTime: '10 min read',
  },
  {
    slug: 'whole-home-wifi-guide',
    title: 'Whole-Home WiFi: Mesh vs. Access Points vs. Range Extenders',
    excerpt: 'Dead zones, slow speeds, and dropped calls are usually a network infrastructure problem — not an internet speed problem. Here\'s how to fix it.',
    category: 'Networking',
    date: 'February 2025',
    readTime: '7 min read',
  },
  {
    slug: 'commercial-av-conference-room',
    title: 'The Complete Conference Room AV Checklist for 2025',
    excerpt: 'What every modern conference room needs for video conferencing, presentations, and hybrid meetings — with hardware recommendations at every budget.',
    category: 'Commercial',
    date: 'January 2025',
    readTime: '9 min read',
  },
  {
    slug: 'tv-mounting-wall-types',
    title: 'TV Mounting: Wall Types, Stud Finding, and Why DIY Goes Wrong',
    excerpt: 'Concrete, drywall, plaster, brick — each wall type requires a different approach. This is why a $30 bracket from Amazon isn\'t enough.',
    category: 'AV Installation',
    date: 'January 2025',
    readTime: '5 min read',
  },
  {
    slug: 'smart-home-security-cameras',
    title: 'Smart Home Security Cameras: Wired vs. Wireless, Resolution, and Placement',
    excerpt: 'A breakdown of the real differences between consumer and professional camera systems — and why placement matters more than megapixels.',
    category: 'Security',
    date: 'December 2024',
    readTime: '7 min read',
  },
  {
    slug: 'outdoor-av-guide',
    title: 'Outdoor AV Guide: What to Know Before Installing Outdoor Speakers and TVs',
    excerpt: 'Weatherproofing ratings, audio coverage, screen brightness — what actually matters for outdoor AV that holds up year-round.',
    category: 'AV Installation',
    date: 'December 2024',
    readTime: '6 min read',
  },
];

const categories = ['All', 'AV Installation', 'Smart Home', 'Networking', 'Security', 'Commercial', 'Pricing', 'Guides'];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <section className="bg-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label">Insights</p>
          <h1 className="section-title-light mt-2 mb-4 max-w-3xl">AV & Smart Home Guides</h1>
          <p className="text-gray-300 max-w-2xl">
            Practical guides from Beacon AV professionals — installation tips, buyer\'s guides, pricing breakdowns, and smart home advice you can actually use.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category filter — static display, will be interactive in Phase 2 */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <div className="bg-navy rounded-2xl p-8 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full uppercase tracking-wide">{featured.category}</span>
              <h2 className="text-2xl font-bold text-white mt-3 mb-3">{featured.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-gray-400 text-xs">{featured.date}</span>
                <span className="text-gray-400 text-xs">{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="btn-primary">Read Article</Link>
            </div>
            <div className="bg-navy-light rounded-xl h-48 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Featured Image</p>
            </div>
          </div>

          {/* Grid of posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card hover:border-accent group flex flex-col">
                <div className="bg-gray-100 rounded-lg h-36 mb-4 flex items-center justify-center">
                  <p className="text-gray-400 text-xs">Article Image</p>
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">{post.category}</span>
                <h3 className="font-bold text-navy group-hover:text-accent transition-colors mb-2 text-sm leading-snug flex-1">{post.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="mt-14 bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-navy mb-2">Get New Guides in Your Inbox</h2>
            <p className="text-gray-600 text-sm mb-6">Practical AV and smart home guides — no spam, no sales pitch. Unsubscribe any time.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
