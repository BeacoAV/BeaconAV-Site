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
    openGraph: {
          siteName: 'Beacon AV',
          type: 'website',
          locale: 'en_US',
    },
    robots: {
          index: true,
          follow: true,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="en">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                </head>head>
                <body className="antialiased">
                        <Nav />
                        <main>{children}</main>main>
                        <Footer />
                </body>body>
          </html>html>
        );
}
</html>
