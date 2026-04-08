import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Beacon AV | National AV & Smart Home Installation Network',
    template: '%s | Beacon AV',
  },
  description:
    'Beacon AV connects homeowners and businesses with vetted AV and smart home professionals in every major US city. One call. Nationwide coverage. Fast installs.',
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
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
