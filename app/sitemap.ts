import { MetadataRoute } from 'next';
import { services } from '@/lib/services';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://beaconav.co';
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: base + '/services', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: base + '/locations', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: base + '/about', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: base + '/contact', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: base + '/partners', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: base + '/blog', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  const servicePages = services.map((s) => ({
    url: base + '/services/' + s.slug,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityPages = cities.map((c) => ({
    url: base + '/locations/' + c.slug,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
