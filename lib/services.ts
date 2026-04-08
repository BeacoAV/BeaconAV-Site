export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
  capabilities: string[];
  idealFor: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'audio-production',
    shortTitle: 'Audio',
    title: 'Audio Production',
    icon: '🎙️',
    tagline: 'Crystal-clear sound for any room, any audience size.',
    description: 'Professional live event audio from front-of-house through IEM — engineered and operated by experienced audio technicians.',
    capabilities: [
      'Line array and point-source PA system design and deployment',
      'Front-of-house mixing and monitor engineering',
      'Wireless microphone systems (handheld, lavalier, headset)',
      'Intercom and IFB systems for production crew',
      'Audio playback and content integration',
      'Hearing loop and assistive listening systems',
      'Broadcast audio feed splits for streaming and recording',
    ],
    idealFor: ['Corporate keynotes and general sessions', 'Conferences and conventions', 'Galas and award ceremonies', 'Brand activations', 'Concerts and live entertainment'],
    metaTitle: 'Live Event Audio Production | Beacon AV',
    metaDescription: 'Professional audio production for live events nationwide. PA systems, wireless mics, front-of-house mixing, and broadcast feeds — any size, any city.',
  },
  {
    slug: 'video-production',
    shortTitle: 'Video',
    title: 'Video Production',
    icon: '🎬',
    tagline: 'High-impact video for stages, screens, and streams.',
    description: 'End-to-end video production for live events — from multi-camera IMAG to projection mapping and content playback.',
    capabilities: [
      'Multi-camera IMAG (image magnification) for large audiences',
      'Projection systems — single, double, and blended configurations',
      'Video switching and graphics playback',
      'Content playback and media server operation',
      'On-site video recording and archiving',
      'Confidence monitors and speaker support screens',
      'Teleprompter systems for executives and keynote speakers',
    ],
    idealFor: ['Large-format conferences', 'General sessions and keynotes', 'Award shows and galas', 'Product launches', 'Hybrid and virtual events'],
    metaTitle: 'Live Event Video Production | Beacon AV',
    metaDescription: 'Multi-camera IMAG, projection, video switching, and content playback for live events across the country. Full video production from concept through execution.',
  },
  {
    slug: 'lighting',
    shortTitle: 'Lighting',
    title: 'Lighting Design & Production',
    icon: '💡',
    tagline: 'Transform any space with production-quality lighting.',
    description: 'From atmospheric uplighting to full stage wash and intelligent moving lights — professional lighting design and operation for any event.',
    capabilities: [
      'Stage wash and key lighting for speakers and performers',
      'Intelligent moving fixtures and programming',
      'LED uplighting and room ambiance design',
      'Gobo projection and custom branding elements',
      'Color-changing and effect lighting for entertainment',
      'Follow spot operation',
      'Lighting console programming and live operation',
    ],
    idealFor: ['Galas and fundraisers', 'Corporate events and conferences', 'Brand activations', 'Concerts and entertainment', 'Award ceremonies'],
    metaTitle: 'Event Lighting Production | Beacon AV',
    metaDescription: 'Professional lighting design and production for live events — stage wash, intelligent fixtures, uplighting, and custom branding. Any venue, any city.',
  },
  {
    slug: 'staging',
    shortTitle: 'Staging',
    title: 'Staging & Set Design',
    icon: '🎭',
    tagline: 'Custom stages and sets that make your event look the part.',
    description: 'Modular stage systems, custom scenic builds, and set design — fully installed and struck by our production team.',
    capabilities: [
      'Modular stage and platform systems in custom configurations',
      'Podiums, lecterns, and presenter support structures',
      'Pipe and drape systems for room division and backdrops',
      'Custom scenic elements and branded set pieces',
      'Risers for choirs, orchestras, and panel presentations',
      'Step units, handrails, and ADA-compliant staging',
      'Full load-in, setup, and strike by production crew',
    ],
    idealFor: ['General sessions and conferences', 'Galas and banquets', 'Product launches', 'Corporate presentations', 'Award ceremonies'],
    metaTitle: 'Event Staging & Set Design | Beacon AV',
    metaDescription: 'Custom stage builds, scenic design, and modular staging systems for live events. Full installation and strike by experienced production crew.',
  },
  {
    slug: 'live-streaming',
    shortTitle: 'Live Streaming',
    title: 'Live Streaming & Hybrid Events',
    icon: '📡',
    tagline: 'Extend your event to a global audience in real time.',
    description: 'Professional live streaming and hybrid event production — broadcast-quality output delivered to any platform, any audience size.',
    capabilities: [
      'Multi-camera live production and switching',
      'Encoding and streaming to any platform (YouTube, Vimeo, custom RTMP)',
      'Hybrid event production for in-person + remote audiences',
      'Virtual attendee interaction and Q&A integration',
      'Broadcast graphics, lower thirds, and motion packages',
      'Recording and post-event video delivery',
      'Internet infrastructure and network redundancy',
    ],
    idealFor: ['All-hands and town hall meetings', 'Investor days and earnings calls', 'Conferences with global audiences', 'Product launches', 'Training and educational events'],
    metaTitle: 'Live Streaming & Hybrid Events | Beacon AV',
    metaDescription: 'Professional live streaming and hybrid event production. Multi-camera switching, broadcast-quality output, and platform-agnostic delivery for any event.',
  },
  {
    slug: 'led-walls',
    shortTitle: 'LED Walls',
    title: 'LED Walls & Video Displays',
    icon: '🖥️',
    tagline: 'Massive, high-resolution displays that command attention.',
    description: 'Indoor and outdoor LED video wall solutions — custom pixel pitch, configurations, and content — fully managed by our technical team.',
    capabilities: [
      'Indoor fine-pitch LED panels for stage backdrops and scenic',
      'Outdoor LED walls for concerts, activations, and stadium events',
      'Custom configurations: curved, corner, portrait, and landscape',
      'Video wall processing and content management',
      'Pixel mapping and creative content integration',
      'LED floor and ceiling installations',
      'Structural rigging and ground support systems',
    ],
    idealFor: ['General sessions with branded backdrops', 'Concerts and entertainment events', 'Brand activations and experiential marketing', 'Product launches', 'Trade shows and exhibitions'],
    metaTitle: 'LED Video Wall Rental & Production | Beacon AV',
    metaDescription: 'Indoor and outdoor LED video walls for live events. Custom configurations, content integration, and full technical management — any event, any city.',
  },
  {
    slug: 'general-session',
    shortTitle: 'General Session',
    title: 'General Session Production',
    icon: '🎪',
    tagline: 'Full-scale GS production from load-in through strike.',
    description: 'Complete general session production for conferences, corporate events, and large-format meetings — audio, video, lighting, staging, and crew all under one roof.',
    capabilities: [
      'Full technical production management and direction',
      'Integrated AV design and system layout',
      'Stage management and run-of-show coordination',
      'Speaker management and presenter support',
      'Live and recorded content integration',
      'Production crew and technical staffing',
      'Advance site surveys and technical riders',
    ],
    idealFor: ['Annual conferences and conventions', 'Corporate all-hands and town halls', 'Investor days and shareholder meetings', 'National sales meetings', 'Multi-day conference programs'],
    metaTitle: 'General Session Production | Beacon AV',
    metaDescription: 'Full-scale general session production for conferences and corporate events. Complete AV, staging, lighting, and crew — nationwide.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
