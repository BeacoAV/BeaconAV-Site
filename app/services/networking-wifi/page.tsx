import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Networking & WiFi Installation Services | Nationwide | Beacon AV',
  description: 'Professional whole-home and commercial WiFi and networking installation across the USA. Eero, Ubiquiti, Cisco — high-performance networks installed in 50+ cities.',
  keywords: 'whole home WiFi installation, networking installation service, mesh WiFi installer, commercial network installation USA',
};

const pricing = [
  ['Single access point installation', '$150 – $300'],
  ['Whole-home mesh WiFi (3-node system)', '$400 – $900'],
  ['Structured cabling (per drop)', '$100 – $200'],
  ['Network rack build + patch panel', '$300 – $800'],
  ['Commercial WiFi infrastructure (small office)', '$800 – $3,000'],
  ['Commercial WiFi infrastructure (enterprise)', '$3,000 – $15,000+'],
  ['Internet failover setup', '$300 – $700'],
];

const faqs = [
  { q: 'What is the difference between mesh WiFi and a standard router?', a: 'A standard router broadcasts from one point. Mesh systems use multiple nodes to blanket every corner of your home with strong, consistent signal — no dead zones.' },
  { q: 'What brands do you install?', a: 'We install Eero, Ubiquiti UniFi, Cisco Meraki, Google Nest WiFi, TP-Link Omada, and others. We recommend based on your coverage needs and budget.' },
  { q: 'Do you run ethernet cable?', a: 'Yes. Wired ethernet is the most reliable connection for devices that need it — smart TVs, gaming systems, desktops, and IP cameras. We run cable cleanly and conceal it wherever possible.' },
  { q: 'Can you improve WiFi in a large home or multi-story building?', a: 'Yes — this is one of our most common projects. We design networks specifically for your square footage, construction type, and device density.' },
  { q: 'Do you handle commercial WiFi?', a: 'Yes. We install enterprise-grade WiFi systems for offices, restaurants, hospitality, retail, and multi-tenant buildings. We handle access point placement design, installation, and configuration.' },
];

export default function NetworkingPage(){}
