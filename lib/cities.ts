export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  tier: 1 | 2 | 3;
  intro: string;
  neighborhoods: string[];
  zipCodes: string[];
  suburbs: string[];
  localNote: string;
}

export const cities: City[] = [
  // ── TIER 1 ─────────────────────────────────────────────────────────────────
  {
    slug: 'austin-tx',
    name: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 1,
    intro: "Austin is one of the fastest-growing tech hubs in the country — and its homeowners and businesses demand technology that keeps up. Whether you're in a modern condo in East Austin, a home in Westlake, or a commercial space in the Domain, Beacon AV connects you with vetted professionals who deliver consistent results.",
    neighborhoods: ['Downtown', 'East Austin', 'South Congress', 'The Domain', 'Westlake', 'Mueller', 'Tarrytown'],
    zipCodes: ['78701', '78702', '78703', '78704', '78731', '78745', '78746', '78750'],
    suburbs: ['Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown', 'Buda', 'Kyle', 'Lakeway'],
    localNote: 'Installers certified for concrete slab and Hill Country custom home construction types common in Austin.',
  },
  {
    slug: 'new-york-ny',
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    tier: 1,
    intro: "From Manhattan condos to Brooklyn townhomes and Long Island estates, New York's AV and smart home market demands precision and discretion. Beacon AV's certified network understands NYC construction — plaster walls, pre-war buildings, and high-rise cabling challenges included.",
    neighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Long Island City', 'Hoboken'],
    zipCodes: ['10001', '10011', '10014', '10019', '10036', '11201', '11211'],
    suburbs: ['Westchester', 'Long Island', 'New Jersey Metro', 'Greenwich CT'],
    localNote: 'Experience with pre-war plaster walls, NYC DOB compliance, and high-density building installations.',
  },
  {
    slug: 'los-angeles-ca',
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    tier: 1,
    intro: "Los Angeles sets the standard for smart home innovation. From Beverly Hills estates to Venice Beach modern builds, Beacon AV connects you with certified professionals who know the LA market — indoor-outdoor living, whole-home automation, and luxury AV installs done right.",
    neighborhoods: ['Beverly Hills', 'Santa Monica', 'Venice', 'Silver Lake', 'Brentwood', 'Malibu', 'Pasadena'],
    zipCodes: ['90210', '90025', '90291', '90039', '91101', '90272', '90049'],
    suburbs: ['Burbank', 'Glendale', 'Long Beach', 'Torrance', 'Santa Clarita'],
    localNote: 'Specialists in indoor-outdoor AV integration and earthquake-resistant mounting techniques.',
  },
  {
    slug: 'chicago-il',
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    tier: 1,
    intro: "Chicago's architecture ranges from historic greystones to glass-and-steel high-rises — each with unique installation challenges. Beacon AV's certified Chicago network handles them all, delivering professional AV and smart home installations across the city and suburbs.",
    neighborhoods: ['Lincoln Park', 'River North', 'Wicker Park', 'Gold Coast', 'The Loop', 'Logan Square', 'Streeterville'],
    zipCodes: ['60601', '60610', '60614', '60622', '60626', '60647', '60657'],
    suburbs: ['Evanston', 'Oak Park', 'Naperville', 'Schaumburg', 'Downers Grove'],
    localNote: 'Experience with vintage greystone and Chicago two-flat construction, including masonry mounting.',
  },
  {
    slug: 'miami-fl',
    name: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    tier: 1,
    intro: "Miami's luxury real estate market and year-round outdoor lifestyle demand AV systems built for heat, humidity, and style. Beacon AV installs premium indoor-outdoor systems across Miami, Miami Beach, and the surrounding metro with certified professionals who know the market.",
    neighborhoods: ['Brickell', 'Coconut Grove', 'Coral Gables', 'South Beach', 'Wynwood', 'Edgewater', 'Key Biscayne'],
    zipCodes: ['33101', '33131', '33133', '33139', '33140', '33149', '33176'],
    suburbs: ['Fort Lauderdale', 'Doral', 'Hialeah', 'Aventura', 'Coral Springs'],
    localNote: 'Weatherproof outdoor AV specialists; experience with hurricane-rated enclosures and humid climate installations.',
  },
  {
    slug: 'dallas-tx',
    name: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 1,
    intro: "Dallas is one of the fastest-growing metros in the nation — and a hub for corporate campuses, luxury residential development, and tech-forward businesses. Beacon AV's Dallas network delivers same-week AV and smart home installations across the Metroplex.",
    neighborhoods: ['Uptown', 'Knox-Henderson', 'Deep Ellum', 'Bishop Arts', 'Preston Hollow', 'Lakewood', 'Downtown'],
    zipCodes: ['75201', '75204', '75205', '75206', '75214', '75225', '75230'],
    suburbs: ['Plano', 'Frisco', 'McKinney', 'Allen', 'Richardson', 'Garland', 'Irving'],
    localNote: 'Large commercial AV experience across Dallas corporate campuses and Frisco mixed-use developments.',
  },
  {
    slug: 'san-francisco-ca',
    name: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    tier: 1,
    intro: "San Francisco's tech-savvy homeowners and businesses expect AV and smart home systems that match their expectations for quality and innovation. Beacon AV's certified Bay Area network installs systems that perform in Victorian flats, modern condos, and commercial spaces alike.",
    neighborhoods: ['SoMa', 'Mission District', 'Pacific Heights', 'Noe Valley', 'Castro', 'Marina', 'Financial District'],
    zipCodes: ['94102', '94103', '94107', '94110', '94117', '94123', '94133'],
    suburbs: ['San Jose', 'Oakland', 'Palo Alto', 'Fremont', 'Sunnyvale'],
    localNote: 'Experience with Victorian-era construction, seismic retrofit compliance, and tech-integrated smart home systems.',
  },
  // ── TIER 2 ─────────────────────────────────────────────────────────────────
  {
    slug: 'houston-tx',
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    tier: 2,
    intro: "Houston's sprawling metro and booming energy sector drive demand for professional AV and smart home installations in both residential and commercial settings. Beacon AV serves the greater Houston area with certified professionals and same-week availability.",
    neighborhoods: ['Montrose', 'The Heights', 'River Oaks', 'Midtown', 'Museum District', 'Galleria', 'Sugar Land'],
    zipCodes: ['77002', '77006', '77007', '77019', '77027', '77056', '77063'],
    suburbs: ['Sugar Land', 'Katy', 'The Woodlands', 'Pearland', 'Pasadena'],
    localNote: 'Specialists in large residential estates and energy sector commercial office AV installations.',
  },
  {
    slug: 'phoenix-az',
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    tier: 2,
    intro: "Phoenix's desert climate, luxury resort communities, and rapidly growing tech corridor create strong demand for smart home automation and outdoor AV. Beacon AV serves the greater Phoenix metro with certified professionals ready for same-week installs.",
    neighborhoods: ['Scottsdale', 'Tempe', 'Chandler', 'Paradise Valley', 'Arcadia', 'Downtown Phoenix', 'Ahwatukee'],
    zipCodes: ['85004', '85016', '85018', '85251', '85281', '85254', '85044'],
    suburbs: ['Scottsdale', 'Tempe', 'Mesa', 'Chandler', 'Glendale', 'Gilbert'],
    localNote: 'Outdoor AV specialists with heat-rated enclosures for Arizona\'s extreme summer temperatures.',
  },
  {
    slug: 'denver-co',
    name: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    tier: 2,
    intro: "Denver's outdoor lifestyle and booming tech community demand smart, reliable home and commercial AV systems. From modern lofts in RiNo to mountain homes in the foothills, Beacon AV's Colorado network delivers professional installs with same-week availability.",
    neighborhoods: ['LoDo', 'RiNo', 'Capitol Hill', 'Cherry Creek', 'Highlands', 'Stapleton', 'Wash Park'],
    zipCodes: ['80202', '80203', '80205', '80206', '80209', '80218', '80246'],
    suburbs: ['Aurora', 'Lakewood', 'Englewood', 'Arvada', 'Westminster', 'Thornton'],
    localNote: 'Experience with mountain home and foothills construction; altitude-rated equipment sourcing available.',
  },
  {
    slug: 'seattle-wa',
    name: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    tier: 2,
    intro: "Seattle's tech-forward residents and businesses expect the best in home automation and AV. Beacon AV's Pacific Northwest network serves the greater Seattle area with certified installers and fast turnaround on residential and commercial projects.",
    neighborhoods: ['Capitol Hill', 'Fremont', 'Queen Anne', 'Belltown', 'South Lake Union', 'Ballard', 'Eastlake'],
    zipCodes: ['98101', '98102', '98103', '98109', '98115', '98121', '98122'],
    suburbs: ['Bellevue', 'Redmond', 'Kirkland', 'Bothell', 'Renton', 'Tacoma'],
    localNote: 'Experience with Pacific Northwest high-rainfall construction and Bellevue tech campus AV installations.',
  },
  {
    slug: 'atlanta-ga',
    name: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    tier: 2,
    intro: "Atlanta's diverse neighborhoods — from Buckhead luxury homes to Midtown commercial high-rises — all demand professional AV and smart home installations. Beacon AV's Atlanta network delivers certified installs across the metro with same-week availability.",
    neighborhoods: ['Buckhead', 'Midtown', 'Inman Park', 'Grant Park', 'Old Fourth Ward', 'Virginia-Highland', 'Decatur'],
    zipCodes: ['30301', '30305', '30306', '30307', '30309', '30316', '30324'],
    suburbs: ['Sandy Springs', 'Marietta', 'Alpharetta', 'Roswell', 'Smyrna', 'Dunwoody'],
    localNote: 'Strong commercial AV presence in Buckhead corporate corridor and Midtown media/entertainment sector.',
  },
  // ── TIER 3 ─────────────────────────────────────────────────────────────────
  {
    slug: 'nashville-tn',
    name: 'Nashville',
    state: 'Tennessee',
    stateAbbr: 'TN',
    tier: 3,
    intro: "Nashville's explosive growth and thriving entertainment industry create strong demand for AV and smart home installations. Beacon AV serves the greater Nashville area with certified professionals and fast turnaround.",
    neighborhoods: ['The Gulch', 'East Nashville', 'Germantown', 'Sylvan Park', 'Green Hills', 'Brentwood', '12South'],
    zipCodes: ['37201', '37203', '37206', '37207', '37212', '37215', '37219'],
    suburbs: ['Brentwood', 'Franklin', 'Murfreesboro', 'Hendersonville', 'Mt. Juliet'],
    localNote: 'Entertainment venue AV experience; strong residential presence in Brentwood and Franklin luxury markets.',
  },
  {
    slug: 'charlotte-nc',
    name: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    tier: 3,
    intro: "Charlotte's banking sector and growing tech scene drive demand for commercial and residential AV installations. Beacon AV's Charlotte network delivers professional service across the Queen City metro.",
    neighborhoods: ['Uptown', 'South End', 'NoDa', 'Plaza Midwood', 'Dilworth', 'Myers Park', 'Elizabeth'],
    zipCodes: ['28202', '28203', '28204', '28205', '28207', '28209', '28210'],
    suburbs: ['Ballantyne', 'Huntersville', 'Concord', 'Matthews', 'Mooresville'],
    localNote: 'Commercial AV experience in Charlotte financial district corporate campuses.',
  },
  {
    slug: 'boston-ma',
    name: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    tier: 3,
    intro: "Boston's historic homes and world-class universities create unique AV installation challenges and opportunities. Beacon AV's certified Boston network handles everything from Back Bay brownstones to Cambridge tech offices.",
    neighborhoods: ['Back Bay', 'South End', 'Beacon Hill', 'Cambridge', 'Somerville', 'Jamaica Plain', 'Fenway'],
    zipCodes: ['02101', '02108', '02115', '02116', '02118', '02139', '02143'],
    suburbs: ['Cambridge', 'Somerville', 'Newton', 'Brookline', 'Quincy', 'Waltham'],
    localNote: 'Specialists in historic brownstone and Victorian-era construction; university campus AV experience.',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): City[] {
  return cities.filter((c) => c.tier === tier);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
