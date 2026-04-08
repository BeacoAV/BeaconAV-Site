import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Beacon AV | National Event Production Company',
    template: '%s | Beacon AV',
  },
  description:
    'Beacon AV delivers full-service audio, video, lighting, and staging for live events across the country. One company. Any city. Any event.',
  metadataBase: new URL('https://beaconav.co'),
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Beacon AV',
    type: 'website',
    locale: 'en_US',
    title: 'Beacon AV | National Event Production Company',
    description: 'Full-service audio, video, lighting, and staging for live events across the country. One company. Any city. Any event.',
    url: 'https://beaconav.co',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beacon AV | National Event Production Company',
    description: 'Full-service event production. Audio, video, lighting, staging. Any city.',
  },
  robots: { index: true, follow: true },
  other: {
    'google-site-verification': '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Beacon AV',
              url: 'https://beaconav.co',
              description: 'National event production company delivering full-service audio, video, lighting, and staging for live events across the country.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Austin',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              email: 'hello@beaconav.co',
              areaServed: 'US',
              serviceType: ['Event Production', 'Audio Production', 'Video Production', 'Lighting Production', 'Staging', 'Live Streaming', 'LED Walls'],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
