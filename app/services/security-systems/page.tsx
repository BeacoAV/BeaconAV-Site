import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security System Installation Services | Nationwide | Beacon AV',
  description: 'Professional security system installation across the USA. Cameras, smart locks, alarm systems, and access control installed by vetted professionals in 50+ cities.',
  keywords: 'security system installation, home security installer, camera system installation, alarm system install USA',
};

const pricing = [
  ['Doorbell camera installation', '$75 – $200'],
  ['Single exterior camera mount + setup', '$100 – $250'],
  ['4-camera IP system install', '$400 – $900'],
  ['8-camera IP system install', '$700 – $1,500'],
  ['Smart lock installation', '$100 – $300'],
  ['Full alarm system (sensors + panel + monitoring setup)', '$500 – $2,000'],
  ['Access control system (commercial)', '$800 – $5,000+'],
];

const faqs = [
  { q: 'Do you monitor the security system?', a: 'We install and configure systems compatible with professional monitoring services. We do not provide the monitoring subscription ourselves, but we set up your system to work seamlessly with the monitoring provider of your choice.' },
  { q: 'What camera brands do you install?', a: 'We install all major brands including Ring, Arlo, Nest, Hikvision, Dahua, Axis, and Ubiquiti. We recommend based on your use case and budget.' },
  { q: 'Can you integrate security into my existing smart home?', a: 'Yes — security cameras, smart locks, and sensors can be integrated into Control4, Crestron, and other automation platforms for unified control.' },
  { q: 'Do I need WiFi for my security cameras?', a: 'Some camera systems run on dedicated wired networks (PoE) — more reliable and not dependent on WiFi. We can recommend the best approach based on your property.' },
  { q: 'How long does installation take?', a: 'A standard 4-camera exterior install takes 3–6 hours. Full alarm + camera systems typically take 1–2 days depending on scope.' },
];

export default function SecuritySystemsPage(){}
