export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  tier: 1 | 2 | 3;
  intro: string;
  venues: string[];
  suburbs: string[];
  eventNote: string;
}

export const cities: City[] = [
  // ── TIER 1 ─────────────────────────────────────────────────────────────────
  {
    slug: 'austin-tx',
    name: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 1,
    intro: "Austin's event scene has exploded alongside its tech sector growth. From massive SXSW-scale productions to corporate all-hands meetings and brand activations, Beacon AV has vetted production partners across the Austin metro ready to execute.",
    venues: ['Austin Convention Center', 'Palmer Events Center', 'Long Center for the Performing Arts', 'ACL Live at the Moody Theater', 'JW Marriott Austin', 'Hyatt Regency Austin', 'AT&T Hotel and Conference Center'],
    suburbs: ['Round Rock', 'Cedar Park', 'Georgetown', 'Buda', 'Kyle', 'Lakeway'],
    eventNote: 'High demand market during SXSW (March) and Formula 1 season (October). Book early for those periods.',
  },
  {
    slug: 'new-york-ny',
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    tier: 1,
    intro: "New York demands production at the highest level. Whether it's a Midtown conference, a Brooklyn brand activation, or a gala at a landmark venue, our NYC production network brings union-experienced crew and premium equipment to every event.",
    venues: ['Javits Center', 'Marriott Marquis Times Square', 'Cipriani Wall Street', 'Edison Ballroom', 'Terminal 5', 'Gotham Hall', 'New York Hilton Midtown'],
    suburbs: ['Westchester', 'Long Island', 'New Jersey Metro', 'Greenwich CT'],
    eventNote: 'Union labor market. Our NYC partners are fully IATSE-compliant and experienced with venue-specific requirements.',
  },
  {
    slug: 'los-angeles-ca',
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    tier: 1,
    intro: "Los Angeles sets the production standard for the industry. From Hollywood studios to Century City conference rooms and beachfront brand activations, our LA network brings entertainment-grade production quality to every event.",
    venues: ['Los Angeles Convention Center', 'Staples Center / Crypto.com Arena', 'Beverly Hilton', 'Dolby Theatre', 'SoFi Stadium', 'Petersen Automotive Museum', 'The Broad Stage'],
    suburbs: ['Santa Monica', 'Burbank', 'Pasadena', 'Long Beach', 'Anaheim', 'El Segundo'],
    eventNote: 'Entertainment industry hub. Our LA partners bring broadcast-quality production capabilities to every event format.',
  },
  {
    slug: 'chicago-il',
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    tier: 1,
    intro: "Chicago is one of the country's premier convention and corporate event destinations. Our Chicago production network is experienced with the full range — from McCormick Place mega-conventions to intimate Gold Coast galas.",
    venues: ['McCormick Place', 'Navy Pier', 'Marriott Marquis Chicago', 'Hilton Chicago', 'Chicago Cultural Center', 'Wintrust Arena', 'Hyatt Regency Chicago'],
    suburbs: ['Rosemont', 'Schaumburg', 'Oak Brook', 'Naperville', 'Evanston'],
    eventNote: 'Home to some of the largest trade show and convention venues in North America — McCormick Place included.',
  },
  {
    slug: 'miami-fl',
    name: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    tier: 1,
    intro: "Miami's event market is defined by luxury, outdoor capability, and Latin-influenced energy. Our Miami production network handles everything from Art Basel activations to corporate conferences and beachfront brand experiences.",
    venues: ['Miami Beach Convention Center', 'Biltmore Hotel', 'Pérez Art Museum Miami', 'JW Marriott Marquis Miami', 'Faena Forum', 'Wynwood Walls Event Space', 'Hard Rock Stadium'],
    suburbs: ['Fort Lauderdale', 'Boca Raton', 'West Palm Beach', 'Coral Gables', 'Doral'],
    eventNote: 'Outdoor and waterfront events require weather contingency planning. Our Miami team has extensive experience with outdoor productions.',
  },
  {
    slug: 'dallas-tx',
    name: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 1,
    intro: "Dallas is a major corporate event hub — home to Fortune 500 headquarters and some of Texas's largest convention facilities. Our Dallas-Fort Worth production network handles events of every scale, from executive briefings to full convention productions.",
    venues: ['Kay Bailey Hutchison Convention Center', 'Irving Convention Center', 'Perot Museum', 'AT&T Stadium', 'Omni Dallas Hotel', 'Renaissance Dallas Hotel', 'Fair Park'],
    suburbs: ['Fort Worth', 'Irving', 'Plano', 'Frisco', 'Arlington', 'Allen'],
    eventNote: 'DFW is a top-10 US convention market. Strong corporate infrastructure and easy logistics make it a preferred multi-day event destination.',
  },
  {
    slug: 'san-francisco-ca',
    name: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    tier: 1,
    intro: "San Francisco's tech sector drives a high volume of corporate events, product launches, and investor-facing productions. Our Bay Area network understands the expectations of tech audiences — clean, high-tech production with seamless execution.",
    venues: ['Moscone Center', 'Bill Graham Civic Auditorium', 'Chase Center', 'The Palace Hotel', 'Exploratorium', 'City View at Metreon', 'Fort Mason Center'],
    suburbs: ['San Jose', 'Oakland', 'Palo Alto', 'San Mateo', 'Redwood City', 'Berkeley'],
    eventNote: 'Major tech conference hub — Dreamforce, Google I/O, Apple WWDC. Our SF partners have deep experience with large-scale tech event production.',
  },

  // ── TIER 2 ─────────────────────────────────────────────────────────────────
  {
    slug: 'houston-tx',
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 2,
    intro: "Houston's energy sector and medical industry drive a consistent demand for high-quality corporate event production. The George R. Brown Convention Center anchors a large convention market in one of the country's most diverse cities.",
    venues: ['George R. Brown Convention Center', 'NRG Center', 'Hilton Americas Houston', 'Marriott Marquis Houston', 'Space Center Houston'],
    suburbs: ['Sugar Land', 'The Woodlands', 'Katy', 'Pearland', 'Pasadena'],
    eventNote: 'Strong energy and medical industry event base. Year-round event market with minimal weather disruption.',
  },
  {
    slug: 'phoenix-az',
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tier: 2,
    intro: "Phoenix and Scottsdale are major winter event destinations — conferences, incentive programs, and corporate retreats flock here from November through April. Our Phoenix network handles resort-style productions through large convention events.",
    venues: ['Phoenix Convention Center', 'Scottsdale Resort at McCormick Ranch', 'Wild Horse Pass Resort', 'Footprint Center', 'Arizona Grand Resort'],
    suburbs: ['Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Gilbert'],
    eventNote: 'Prime event market October–April. Summer heat limits outdoor events — plan accordingly for warmer months.',
  },
  {
    slug: 'denver-co',
    name: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    tier: 2,
    intro: "Denver's outdoor culture and growing tech sector combine to create a dynamic event market. The Colorado Convention Center is one of the country's top convention destinations, and the broader Denver metro has a thriving corporate event scene.",
    venues: ['Colorado Convention Center', 'Denver Performing Arts Complex', 'Ellie Caulkins Opera House', 'Hyatt Regency Denver', 'Ball Arena'],
    suburbs: ['Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Broomfield'],
    eventNote: 'Altitude (5,280 ft) affects some equipment and attendee energy levels for multi-day events. Our Denver team factors this into production planning.',
  },

  // ── TIER 3 ─────────────────────────────────────────────────────────────────
  {
    slug: 'seattle-wa',
    name: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    tier: 3,
    intro: "Seattle's tech-heavy economy — Amazon, Microsoft, Boeing — generates consistent demand for high-caliber corporate event production. Our Seattle network handles everything from intimate executive briefings to large convention productions at the WSCC.",
    venues: ['Washington State Convention Center', 'Lumen Field', 'T-Mobile Park', 'Bell Harbor International Conference Center', 'Seattle Marriott Waterfront'],
    suburbs: ['Bellevue', 'Redmond', 'Kirkland', 'Tacoma', 'Renton'],
    eventNote: 'Plan for rain. Outdoor events in Seattle require weather contingency. Indoor venues are world-class.',
  },
  {
    slug: 'atlanta-ga',
    name: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    tier: 3,
    intro: "Atlanta is a growing convention and corporate event powerhouse — anchored by the GWCC and a booming film/media industry that keeps production talent sharp. Our Atlanta network is experienced with large-scale productions across every venue type.",
    venues: ['Georgia World Congress Center', 'Mercedes-Benz Stadium', 'State Farm Arena', 'Atlanta Marriott Marquis', 'Fernbank Museum'],
    suburbs: ['Buckhead', 'Marietta', 'Alpharetta', 'Decatur', 'Duluth'],
    eventNote: 'Home to one of the country\'s largest convention complexes. Strong film industry keeps Atlanta\'s production talent at a high level.',
  },
  {
    slug: 'nashville-tn',
    name: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    tier: 3,
    intro: "Nashville's live music DNA makes it a natural fit for high-energy corporate events and brand activations. The Music City Center anchors a fast-growing convention market that attracts events from across the country.",
    venues: ['Music City Center', 'Bridgestone Arena', 'Nissan Stadium', 'Gaylord Opryland Resort', 'Marathon Music Works'],
    suburbs: ['Brentwood', 'Franklin', 'Murfreesboro', 'Hendersonville'],
    eventNote: "Nashville's entertainment industry infrastructure means exceptional local talent and production resources for music-forward events.",
  },
  {
    slug: 'charlotte-nc',
    name: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    tier: 3,
    intro: "Charlotte's financial sector and growing tech presence drive steady corporate event demand. The Charlotte Convention Center and surrounding Uptown venues offer a full range of event production options.",
    venues: ['Charlotte Convention Center', 'Spectrum Center', 'Bank of America Stadium', 'The Mint Museum', 'Westin Charlotte'],
    suburbs: ['Ballantyne', 'Concord', 'Gastonia', 'Rock Hill SC', 'Huntersville'],
    eventNote: 'Financial services hub — high expectations for executive-level production quality and professionalism.',
  },
  {
    slug: 'boston-ma',
    name: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    tier: 3,
    intro: "Boston's academic and biotech sectors fuel a consistent demand for conference and event production. The BCEC is one of the Northeast's premier convention venues, and the broader Boston market offers historic and modern venue options alike.",
    venues: ['Boston Convention & Exhibition Center', 'Hynes Convention Center', 'TD Garden', 'Fenway Park', 'Boston Park Plaza', 'Marriott Copley Place'],
    suburbs: ['Cambridge', 'Somerville', 'Newton', 'Quincy', 'Waltham'],
    eventNote: 'Strong academic and biotech conference market — MedTech World, BIO International, and similar events are a regular part of the Boston calendar.',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): City[] {
  return cities.filter((c) => c.tier === tier);
}
