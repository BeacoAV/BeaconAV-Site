export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  eventContext: string;
  venueTypes: string[];
  popularEventTypes: string[];
  nearbyMarkets: string[];
}

export const cities: City[] = [
  {
    slug: "austin-tx",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle: "Event Production Services in Austin, TX | Beacon AV",
    metaDescription:
      "Professional event production, AV, and staging for conferences, concerts, and corporate events in Austin. National expertise, local execution.",
    heroHeadline: "Event Production Services in Austin",
    heroSubtext:
      "From SXSW to corporate conferences, Beacon AV delivers world-class production across the Live Music Capital",
    eventContext:
      "Austin's vibrant live music scene, tech industry growth, and status as a major conference destination (SXSW, CPA) make it a dynamic market for events. The city hosts thousands of corporate gatherings, music festivals, and cultural events annually. Austin's diverse venue landscape and creative audience demand production excellence.",
    venueTypes: [
      "ACL Live",
      "Austin Convention Center",
      "Barracuda",
      "Hotel ballrooms",
      "Outdoor festival grounds",
    ],
    popularEventTypes: [
      "Music festivals",
      "Tech conferences",
      "Corporate retreats",
      "Live performances",
      "Product launches",
    ],
    nearbyMarkets: ["Dallas", "Houston", "San Antonio"],
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle:
      "Professional Event AV & Production in Dallas, TX | Beacon AV",
    metaDescription:
      "Expert event production and AV services for Dallas corporate events, conferences, and galas. Award-winning technical support and creative staging.",
    heroHeadline: "Event Production & AV Services in Dallas",
    heroSubtext:
      "Supporting Fortune 500 companies and premium events across North Texas with comprehensive production solutions",
    eventContext:
      "Dallas is a major corporate hub hosting major conferences, leadership forums, and high-profile galas. The city's thriving business community and convention infrastructure support thousands of events annually. From downtown convention center productions to luxury hotel events, Dallas demands professional-grade AV and staging.",
    venueTypes: [
      "Dallas Convention Center",
      "Hilton Anatole",
      "The Joule",
      "Four Seasons",
      "Palomar Hotel",
    ],
    popularEventTypes: [
      "Corporate conferences",
      "Executive galas",
      "Product launches",
      "Trade shows",
      "Leadership forums",
    ],
    nearbyMarkets: ["Austin", "Houston", "Fort Worth"],
  },
  {
    slug: "houston-tx",
    name: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle: "Event Production Services in Houston, TX | Beacon AV",
    metaDescription:
      "Professional AV, staging, and event production for Houston conferences, corporate events, and galas. National expertise locally deployed.",
    heroHeadline: "Professional Event Production in Houston",
    heroSubtext:
      "Supporting major conferences, corporate events, and cultural productions across the energy capital",
    eventContext:
      "Houston's petrochemical and energy industries drive a robust event market with major conferences, trade shows, and corporate gatherings. The city's cultural institutions host significant performances and galas. With multiple world-class venues, Houston requires reliable production partners for large-scale events.",
    venueTypes: [
      "George R. Brown Convention Center",
      "Toyota Center",
      "Hilton Americas",
      "Lancaster Hotel",
      "Hobby Center for the Performing Arts",
    ],
    popularEventTypes: [
      "Energy industry conferences",
      "Trade shows",
      "Corporate galas",
      "Performing arts",
      "Medical conferences",
    ],
    nearbyMarkets: ["Dallas", "Austin", "Galveston"],
  },
  {
    slug: "new-york-ny",
    name: "New York",
    state: "New York",
    stateAbbr: "NY",
    metaTitle:
      "Event Production & AV Services New York City | Beacon AV National",
    metaDescription:
      "World-class event production, AV, and staging for NYC conferences, corporate events, and productions. Beacon AV's national expertise, New York execution.",
    heroHeadline: "Premium Event Production in New York City",
    heroSubtext:
      "Delivering sophisticated production and AV solutions for NYC's most demanding corporate, cultural, and entertainment events",
    eventContext:
      "New York City is the global capital of conferences, trade shows, galas, and premium entertainment events. The city hosts countless high-profile productions requiring world-class technical execution. From Broadway-style productions to Fortune 500 conferences, NYC demands flawless AV and staging.",
    venueTypes: [
      "Javits Convention Center",
      "Madison Square Garden",
      "Gotham Hall",
      "Cipriani",
      "Pierre Hotel",
    ],
    popularEventTypes: [
      "Corporate conferences",
      "Gala events",
      "Product launches",
      "Trade shows",
      "Theater productions",
    ],
    nearbyMarkets: ["Boston", "Philadelphia", "Washington DC"],
  },
  {
    slug: "los-angeles-ca",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    metaTitle: "Event Production & AV Services Los Angeles | Beacon AV",
    metaDescription:
      "Professional event production, AV, and staging for LA conferences, entertainment events, and corporate productions. Beacon AV covers entertainment capital.",
    heroHeadline: "Premier Event Production in Los Angeles",
    heroSubtext:
      "Supporting entertainment, media, and corporate events across Los Angeles with broadcast-quality AV and staging",
    eventContext:
      "Los Angeles is the entertainment capital with a thriving event industry spanning television, film, music, and corporate sectors. The city hosts award shows, premieres, conventions, and high-profile corporate events. LA's creative standards demand sophisticated production capabilities.",
    venueTypes: [
      "Los Angeles Convention Center",
      "Staples Center",
      "Beverly Hilton",
      "Ritz Carlton Downtown",
      "Hollywood Palladium",
    ],
    popularEventTypes: [
      "Award shows",
      "Entertainment events",
      "Product launches",
      "Film industry events",
      "Corporate galas",
    ],
    nearbyMarkets: ["San Diego", "Las Vegas", "Phoenix"],
  },
  {
    slug: "chicago-il",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    metaTitle:
      "Professional Event AV & Production Chicago | Beacon AV Services",
    metaDescription:
      "Expert event production and AV solutions for Chicago conferences, corporate events, and trade shows. World-class technical support.",
    heroHeadline: "Expert Event Production in Chicago",
    heroSubtext:
      "Delivering comprehensive AV and production solutions for Chicago's major conferences, corporate events, and cultural productions",
    eventContext:
      "Chicago is a major hub for trade shows, conferences, corporate events, and cultural productions. The city's business-friendly infrastructure and diverse venue options support thousands of events annually. Chicago's Midwest business community requires reliable, professional production partners.",
    venueTypes: [
      "McCormick Place",
      "Navy Pier",
      "Chicago Cultural Center",
      "Four Seasons Chicago",
      "Lacuna Lofts",
    ],
    popularEventTypes: [
      "Trade shows",
      "Corporate conferences",
      "Annual meetings",
      "Product demonstrations",
      "Gala dinners",
    ],
    nearbyMarkets: ["Milwaukee", "St. Louis", "Indianapolis"],
  },
  {
    slug: "miami-fl",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    metaTitle: "Event Production Services Miami, Florida | Beacon AV",
    metaDescription:
      "Professional AV, staging, and event production for Miami corporate events, galas, and conferences. Beacon AV serves South Florida events.",
    heroHeadline: "Luxury Event Production in Miami",
    heroSubtext:
      "Premium AV and production services for Miami's high-end corporate events, galas, and international conferences",
    eventContext:
      "Miami is a destination for international conferences, luxury corporate events, and high-profile galas. The city's tourism and business sectors host premier events year-round. Miami's sophisticated audience expects world-class production and technical excellence.",
    venueTypes: [
      "Miami Beach Convention Center",
      "American Airlines Arena",
      "Adrienne Arsht Center",
      "Mandarin Oriental",
      "Fontainebleau Miami Beach",
    ],
    popularEventTypes: [
      "International conferences",
      "Luxury galas",
      "Product launches",
      "Corporate retreats",
      "Award ceremonies",
    ],
    nearbyMarkets: ["Fort Lauderdale", "Key West", "Naples"],
  },
  {
    slug: "las-vegas-nv",
    name: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    metaTitle:
      "Event Production & AV Services Las Vegas | Beacon AV Nationwide",
    metaDescription:
      "World-class event production and AV for Las Vegas conferences, trade shows, and entertainment events. Beacon AV covers the Strip and beyond.",
    heroHeadline: "Premier Event Production in Las Vegas",
    heroSubtext:
      "Delivering broadcast-quality AV and production for Vegas conferences, trade shows, and entertainment-scale events",
    eventContext:
      "Las Vegas is the convention and entertainment capital hosting massive trade shows, conferences, and entertainment productions. The city's venue infrastructure and technical expertise support events of any scale. Vegas events demand flawless technical execution and creative production capabilities.",
    venueTypes: [
      "Las Vegas Convention Center",
      "Mandalay Bay",
      "Caesars Palace",
      "The Venetian",
      "Wynn Las Vegas",
    ],
    popularEventTypes: [
      "Trade shows",
      "Conference conventions",
      "Entertainment productions",
      "Product launches",
      "Destination events",
    ],
    nearbyMarkets: ["Los Angeles", "Phoenix", "Salt Lake City"],
  },
  {
    slug: "atlanta-ga",
    name: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    metaTitle: "Event Production & AV Services Atlanta, Georgia | Beacon AV",
    metaDescription:
      "Professional event production, AV, and staging for Atlanta conferences, corporate events, and galas. Beacon AV serves Southeast events.",
    heroHeadline: "Professional Event Production in Atlanta",
    heroSubtext:
      "Supporting Southeast's largest corporate events, conferences, and cultural productions with expert AV and staging solutions",
    eventContext:
      "Atlanta is the Southeast's business hub hosting major conferences, corporate events, trade shows, and cultural productions. The city's growing tech and business sectors drive demand for sophisticated event experiences. Atlanta's diverse venue landscape supports events of all sizes.",
    venueTypes: [
      "Georgia World Congress Center",
      "Fox Theatre",
      "Atlanta Marriott Marquis",
      "Ritz Carlton Atlanta",
      "World Trade Center",
    ],
    popularEventTypes: [
      "Corporate conferences",
      "Trade shows",
      "Annual meetings",
      "Gala events",
      "Performing arts",
    ],
    nearbyMarkets: ["Charlotte", "Nashville", "Jacksonville"],
  },
  {
    slug: "nashville-tn",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    metaTitle:
      "Event Production Services Nashville, Tennessee | Beacon AV Music City",
    metaDescription:
      "Professional AV and event production for Nashville corporate events, music industry events, and conferences. Beacon AV serves Music City.",
    heroHeadline: "Event Production in Nashville",
    heroSubtext:
      "Supporting Music City's booming event industry with production expertise for corporate events and entertainment experiences",
    eventContext:
      "Nashville's thriving music industry, tourism sector, and growing business community drive demand for sophisticated event production. The city hosts major music industry events, corporate conferences, and destination events. Nashville's creative culture requires flexible, innovative production partners.",
    venueTypes: [
      "Nashville Convention Center",
      "Bridgestone Arena",
      "Ryman Auditorium",
      "JW Marriott",
      "The Parthenon",
    ],
    popularEventTypes: [
      "Music industry events",
      "Corporate conferences",
      "Destination events",
      "Live performances",
      "Gala dinners",
    ],
    nearbyMarkets: ["Memphis", "Knoxville", "Louisville"],
  },
  {
    slug: "philadelphia-pa",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metaTitle:
      "Event Production & AV Services Philadelphia | Beacon AV Pennsylvania",
    metaDescription:
      "Professional event production and AV services for Philadelphia conferences, corporate events, and galas. Expert technical support.",
    heroHeadline: "Professional Event Production in Philadelphia",
    heroSubtext:
      "Delivering comprehensive AV and staging solutions for Philadelphia's major corporate events, conferences, and cultural productions",
    eventContext:
      "Philadelphia is a major hub for pharmaceutical conferences, medical industry events, and corporate gatherings. The city's historic venues and modern convention center infrastructure support world-class events. Philadelphia's business community demands professional, reliable production partners.",
    venueTypes: [
      "Pennsylvania Convention Center",
      "Wells Fargo Center",
      "Kimmel Center",
      "The Bellevue Hotel",
      "Union League of Philadelphia",
    ],
    popularEventTypes: [
      "Medical conferences",
      "Pharmaceutical industry events",
      "Corporate events",
      "Performing arts",
      "Gala dinners",
    ],
    nearbyMarkets: ["New York", "Washington DC", "Baltimore"],
  },
  {
    slug: "boston-ma",
    name: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    metaTitle:
      "Event Production Services Boston, Massachusetts | Beacon AV Northeast",
    metaDescription:
      "Professional AV and event production for Boston conferences, medical events, and corporate gatherings. Beacon AV serves the Northeast.",
    heroHeadline: "Premier Event Production in Boston",
    heroSubtext:
      "Supporting Boston's major conferences, medical events, and corporate productions with world-class AV and staging",
    eventContext:
      "Boston is a global leader in medical research, biotech, and education hosting major medical conferences and academic events. The city's prestigious institutions and convention infrastructure support high-profile events. Boston's sophisticated audience requires cutting-edge production and technical excellence.",
    venueTypes: [
      "Boston Convention & Exhibition Center",
      "Boston University",
      "Hynes Convention Center",
      "Fairmont Copley Plaza",
      "Museum of Science Boston",
    ],
    popularEventTypes: [
      "Medical conferences",
      "Academic events",
      "Biotech industry events",
      "Corporate conferences",
      "Educational seminars",
    ],
    nearbyMarkets: ["New York", "Philadelphia", "Hartford"],
  },
  {
    slug: "denver-co",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    metaTitle: "Event Production & AV Services Denver, Colorado | Beacon AV",
    metaDescription:
      "Professional event production and AV solutions for Denver conferences, outdoor events, and corporate gatherings. Beacon AV serves the Rocky Mountain region.",
    heroHeadline: "Event Production Services in Denver",
    heroSubtext:
      "Delivering innovative AV and production solutions for Denver conferences, outdoor events, and mountain destination experiences",
    eventContext:
      "Denver's growing tech sector, outdoor recreation industry, and business community drive demand for sophisticated event production. The city hosts major outdoor events, adventure-themed conferences, and corporate gatherings. Denver's high-altitude events require specialized technical expertise.",
    venueTypes: [
      "Denver Convention Center",
      "Pepsi Center",
      "Red Rocks Amphitheatre",
      "Hyatt Regency Denver",
      "Outdoor mountain venues",
    ],
    popularEventTypes: [
      "Tech conferences",
      "Outdoor adventure events",
      "Corporate retreats",
      "Music festivals",
      "Mountain destination events",
    ],
    nearbyMarkets: ["Boulder", "Fort Collins", "Salt Lake City"],
  },
  {
    slug: "washington-dc",
    name: "Washington",
    state: "District of Columbia",
    stateAbbr: "DC",
    metaTitle:
      "Event Production Services Washington DC | Beacon AV Government & Association Events",
    metaDescription:
      "Professional AV and event production for DC government events, association conferences, and high-security corporate gatherings. Expert government event experience.",
    heroHeadline: "Government & Association Event Production in Washington, DC",
    heroSubtext:
      "Supporting government agencies, associations, and corporate events with secure, professional AV and production expertise",
    eventContext:
      "Washington DC is the global capital for government events, policy conferences, association gatherings, and high-profile fundraisers. The city's government and nonprofit sectors host thousands of events annually with unique security and compliance requirements. DC events demand professional, secure, and politically-savvy production partners.",
    venueTypes: [
      "Washington Convention Center",
      "Kennedy Center",
      "Marriott Marquis Washington DC",
      "National Building Museum",
      "Federal facilities",
    ],
    popularEventTypes: [
      "Government events",
      "Association conferences",
      "Policy forums",
      "Fundraisers",
      "Think tank events",
    ],
    nearbyMarkets: ["Baltimore", "Philadelphia", "Richmond"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}
