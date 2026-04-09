import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Production Quote',
  description: 'Request a quote for your next event. Beacon AV provides full-service event production including audio, video, lighting, staging, and live streaming nationwide.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
