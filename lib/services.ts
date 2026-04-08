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
    title: 'Audio Production',
    shortTitle: 'Audio',
    icon: 'AUDIO',
    tagline: 'Crystal-Clear Sound for Every Seat in the House',
    description: 'Professional live event audio from front-of-house through IEM -- engineered and operated by experienced audio technicians.',
    capabilities: [
      'Line array and point-source PA system design and deployment',
      'Front-of-house mixing and monitor engineering',
      'Wireless microphone systems (handheld, lavalier, headset)',
      'In-ear monitor (IEM) systems for performers and presenters',
      'Audio recording and live feed distribution',
      'RF coordination and frequency management',
    ],
    idealFor: ['Conferences', 'Concerts', 'Galas', 'Corporate Keynotes', 'Award Shows', 'Festivals'],
    metaTitle: 'Live Event Audio Production',
    metaDescription: 'Professional audio production for live events nationwide. PA systems, wireless mics, IEM, mixing, and full audio engineering for conferences, concerts, and corporate events.',
  },
  {
    slug: 'video-production',
    title: 'Video Production',
    shortTitle: 'Video',
    icon: 'VIDEO',
    tagline: 'Multi-Camera Production That Captures Every Moment',
    description: 'End-to-end video production for live events -- from multi-camera IMAG to projection mapping and content playback.',
    capabilities: [
      'Multi-camera IMAG (image magnification) for large audiences',
      'Projection systems -- single, double, and blended configurations',
      'Video switching and graphics playback',
      'Camera operation (robotic, manned, jib, steadicam)',
      'Content creation and motion graphics',
      'Record and post-production services',
    ],
    idealFor: ['General Sessions', 'Product Launches', 'Concerts', 'Award Shows', 'Broadcast Events'],
    metaTitle: 'Live Event Video Production',
    metaDescription: 'Professional video production for live events. Multi-camera IMAG, projection, switching, graphics playback, and full video engineering for any event size.',
  },
  {
    slug: 'lighting',
    title: 'Lighting Design & Production',
    shortTitle: 'Lighting',
    icon: 'LIGHTING',
    tagline: 'Set the Mood, Focus the Audience, Elevate the Experience',
    description: 'From atmospheric uplighting to full stage wash and intelligent moving lights -- professional lighting design and operation for any event.',
    capabilities: [
      'Stage wash and key lighting for speakers and performers',
      'Intelligent moving fixtures and programming',
      'LED uplighting and room ambiance design',
      'Follow spot operation',
      'Truss and rigging design',
      'Lighting console programming (grandMA, Hog, ETC)',
    ],
    idealFor: ['Galas', 'Award Shows', 'Concerts', 'Corporate Events', 'Themed Events', 'Festivals'],
    metaTitle: 'Event Lighting Production',
    metaDescription: 'Professional lighting design and production for live events -- stage wash, intelligent fixtures, uplighting, and full lighting operation for any venue.',
  },
  {
    slug: 'staging',
    title: 'Staging & Set Design',
    shortTitle: 'Staging',
    icon: 'STAGING',
    tagline: 'Custom Stages and Scenic That Make a Statement',
    description: 'Modular stage systems, custom scenic builds, and set design -- fully installed and struck by our production team.',
    capabilities: [
      'Modular stage and platform systems in custom configurations',
      'Podiums, lecterns, and presenter support structures',
      'Pipe and drape systems for room division and backdrops',
      'Custom scenic fabrication and installation',
      'Rigging and flown elements',
      'Event furniture and decor coordination',
    ],
    idealFor: ['Conferences', 'Trade Shows', 'Galas', 'Product Launches', 'Award Shows', 'Concerts'],
    metaTitle: 'Event Staging & Set Design',
    metaDescription: 'Professional staging and set design for live events. Custom stage builds, scenic fabrication, pipe and drape, and full installation and strike services.',
  },
  {
    slug: 'live-streaming',
    title: 'Live Streaming & Hybrid Events',
    shortTitle: 'Streaming',
    icon: 'STREAMING',
    tagline: 'Broadcast-Quality Streaming to Any Platform, Any Audience',
    description: 'Professional live streaming and hybrid event production -- broadcast-quality output delivered to any platform, any audience size.',
    capabilities: [
      'Multi-camera live production and switching',
      'Encoding and streaming to any platform (YouTube, Vimeo, custom RTMP)',
      'Hybrid event production for in-person + remote audiences',
      'Virtual event platform integration',
      'Graphics overlay and lower-thirds',
      'Recording and VOD delivery',
    ],
    idealFor: ['Hybrid Conferences', 'Webinars', 'Town Halls', 'Product Launches', 'Training Events'],
    metaTitle: 'Live Streaming & Hybrid Events',
    metaDescription: 'Professional live streaming and hybrid event production. Multi-camera switching, platform delivery, and broadcast-quality output for any audience size.',
  },
  {
    slug: 'led-walls',
    title: 'LED Walls & Video Displays',
    shortTitle: 'LED Walls',
    icon: 'LED',
    tagline: 'Stunning Visual Impact at Any Scale',
    description: 'Indoor and outdoor LED video wall solutions -- custom pixel pitch, configurations, and content -- fully managed by our technical team.',
    capabilities: [
      'Indoor fine-pitch LED panels for stage backdrops and scenic',
      'Outdoor LED walls for concerts, activations, and stadium events',
      'Custom configurations: curved, corner, portrait, and landscape',
      'Content management and playback',
      'LED floor and ceiling installations',
      'Transparent and mesh LED solutions',
    ],
    idealFor: ['Concerts', 'Trade Shows', 'Corporate Events', 'Activations', 'Festivals', 'Stadium Events'],
    metaTitle: 'LED Video Wall Rental & Production',
    metaDescription: 'LED video wall rental and production for live events. Indoor and outdoor panels, custom configurations, and full content management for any event scale.',
  },
  {
    slug: 'general-session',
    title: 'General Session Production',
    shortTitle: 'General Session',
    icon: 'SESSION',
    tagline: 'Turnkey Production for Your Most Important Moments',
    description: 'Full-service general session production -- audio, video, lighting, staging, and show calling -- all managed under one production team.',
    capabilities: [
      'Complete AV system design and engineering',
      'Show calling and stage management',
      'Speaker support and presentation management',
      'Confidence monitors and teleprompter operation',
      'Audience response and polling systems',
      'Full rehearsal and show-day management',
    ],
    idealFor: ['Annual Meetings', 'Keynotes', 'All-Hands', 'Award Shows', 'Shareholder Meetings', 'Summits'],
    metaTitle: 'General Session Production',
    metaDescription: 'Turnkey general session production for conferences and corporate events. Audio, video, lighting, staging, show calling, and full production management.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
