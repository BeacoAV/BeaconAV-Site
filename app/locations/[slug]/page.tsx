import { Metadata } from "next";
import Link from "next/link";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata(
  props: LocationPageProps
): Promise<Metadata> {
  const params = await props.params;
  const city = getCity(params.slug);

  if (!city) {
    return {
      title: "Location Not Found",
      description: "This location page does not exist.",
    },
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationPage(props: LocationPageProps) {
  const params = await props.params;
  const city = getCity(params.slug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Location Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The location page you're looking for doesn't exist.
          </p>
          <Link
            href="/locations",
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-300 mb-3">
            {city.name}, {city.stateAbbr}
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            {city.heroHeadline}
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
            {city.heroSubtext}
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICES IN [CITY] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services in {city.name}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Beacon AV offers comprehensive event production services across{" "}
            {city.name}. Whatever your event demands, we deliver world-class
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-block text-blue-600 font-semibold text-sm group-hover:underline">
                    Learn More --&gt;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EVENT CONTEXT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Events in {city.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {city.eventContext}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Venue Types
              </h3>
              <ul className="space-y-3">
                {city.venueTypes.map((venue) => (
                  <li key={venue} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">
                      *
                    </span>
                    <span>{venue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Event Types
              </h3>
              <ul className="space-y-3">
                {city.popularEventTypes.map((eventType) => (
                  <li key={eventType} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 font-bold mr-3 mt-1">
                      *
                    </span>
                    <span>{eventType}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW OUR NATIONAL MODEL WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Our National Model Works in {city.name}
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Beacon AV operates a distributed national partner network model
              that brings world-class event production expertise to{" "}
              {city.name}. We combine our national standards, project
              management, and technical oversight with local market knowledge
              and venue relationships.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Local Expertise
                  </h4>
                  <p className="text-gray-700">
                    Our {city.name} partners know the venues, the clients, and
                    the local market dynamics. They understand what works in
                    this market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    National Standards
                  </h4>
                  <p className="text-gray-700">
                    We apply the same rigorous quality standards, equipment
                    standards, and project management processes across all 14
                    markets we serve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Consistent Quality
                  </h4>
                  <p className="text-gray-700">
                    Whether your event is in {city.name} or any of our other
                    markets, you get the same professional-grade AV, staging,
                    and techmé¦´ï¿½ï¿½îï¿½æ¡»æ«è(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢ç(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂè¢ï¿½ïæ«è·¤((ÂÂÂÂÂî½æî»Q%=8Âå©°ï¿½9I	dï¿½5I-QLÂéï¿½(ÂÂÂÂÂÂé®¹ï¿½æèï¿½ï¿½è¿9ï¿îï¿é§ï î¼é¥ï¿½è«æ©§é¥ï¿½ï¿½æ©§é¥ï¿½ï¿½ï¿½ï¿½é§å¬ï(ÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï³ïªèæ£åµ¹î¼éïæï(ÂÂÂÂÂÂÂÂÂÂï¿½ï¿½ï£ïï¿½9ï¿îïîè¿¡ä¿ï¿½î¨«å¡µï¿½è£ï¿½ï¿½æï¿½ï¿½é§éºï¿½ï¿½æ¥®ï(ÂÂÂÂÂÂÂÂÂÂÂï¿½9ï¿½ï¿½ï¿½5ïï¿½æî»ï¿½Mîï¿½(ÂÂÂÂÂÂÂÂÂÂè¢îºï¿½(ÂÂÂÂÂÂÂÂÂÂé­ï¿½ï¿½è¿9ï¿îïîè¿®î²«ï®æ¬½æ¬î¼ïï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂï¿½	îè´ï¿½ï¿½ç±éï¿½ï¿½ç¾ºï¿½	ï¿½ï¯ï¿½Xî¼£îï¿½ï¿½æîï¿½ï¿½ïï¢î¼ïï¿½æî¼³ç±ï¿½æï¿½(ÂÂÂÂÂÂÂÂÂÂÂî¼£ï¿ï¿½ï¿½æè´ïºï¿½å¾¶îæï¿½ï¿½ï¿½î¼ï¿½ïºï¿½ï¿½ïæèï¿½(ÂÂÂÂÂÂÂÂÂÂè¢ç((ÂÂÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï¿½ç®ï¿½î²«ï¿½ï¿½è£æ´ï¿½ï¿½ï¿½ç®îï¯æºæ£§ï¿½ïæ¥®ï(ÂÂÂÂÂÂÂÂÂÂÂî½ïæ µå³ï¿½ï¿½ï¿½5ïï¿½æå±ïî¹ï¿½ä¼¬î9ï¿îÂéî½(ÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½è´è¿î¼ïï¿½ï¿½ç±ï¿½ï¿½ïæîï¿½æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½é(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½å³ï¿ï¿½éï¿½ï¿½ä¼¬î9ï¿ï¿½å«(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½å¶æî¯¾è¿ïæ]ç±î¹ï¿½ä¼¬î9ï¿îæ¼1è±îïï¿½åï¿½è«ï¿½ï¿½ï¿½ïÂïïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂæ¨((ÂÂÂÂÂÂÂÂÂÂÂÂÂî»»ï¿½ï¿½ï¿½ä¼¬îç±é¹î¼îæ¡¾ï¿½å¡¹æ ï¿½((ÂÂÂÂÂÂÂÂÂÂÂÂÂî¼îæ¡¾ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî¼îç½ï¿½ä¼¬îç±éè ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ï¿½è£ï¿½ïæ«åï¿½ç©ïï¿½ï¿½ç±éè ï¿½ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îï¿½æïï¿½åæ¢ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï¿½î¯ºæ³ç±ï¿½æï¿½åæ¡¯ï¿½îï¿½ï¿½è¤ï¿½ï¿½ï»ï¿½îï¿½ï¿½é§ï ï¿½â ï¿½ï ³ï»ï¿½îï¿½æîåªï¿½â ï¿½ï ³ç·ï¿½è±ç´«ï¿½æ¸ïç©¸æèï¿½æ ï(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½ï£ïï¿½9ï¿îïîè¿®ï¿½ï¿½è´è¿®ï»ï¿½î¼§îè¿®î²«ï®æ¸¯æ¬ï¿½åæ¢çªèª¶îæ©îè¿®ï¯ï¿½æ¥®æ¬î¼§ï¿½å¶ç±æ«è­ï¯æå¦î¼ïï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî½ï¿½ä¼¬îç±éï¿½ï¿½ç¾ºî½ï¿½ä¼¬îç±éè¿ïï¿½ï¿½æ¿(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢îºï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂé­ï¿½ï¿½è¿9ï¿îïîè¿®è«î¼§îè¿®î²«ï®æ¥®æ¬ï(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½å¡µî¼åîïæ«ï¿½ï¿½å±¾ï¿½î(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢ç(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂé®¹ï¿½ï¿½ï£ïï¿½9ï¿îï£åæ¦îï¯ï¿½ï¿½ï¿½æï¿½æîåªï¿½î¨«å¡µè´î¯ï¿½è£ï¿½ï¿½æè´ï¿½è©æ£§ï¿½åæ¢çªèª¶îæ©©ï¿½îæ¼ï¿½ï(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî»ï¿½ï¿½îï¯æºÂæï¿½å¢(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢è©ïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂæ¨(ÂÂÂÂÂÂÂÂÂÂÂî½ä»»(ÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂè¢ï¿½ïæ«è·¤((ÂÂÂÂÂî½æî»Q%=8Âåµï¿½10î»<ï¿½Q%=8Âéï¿½(ÂÂÂÂÂÂé®¹ï¿½æèï¿½ï¿½è¿9ï¿îï¿é§ï î¼é¥ï¿½è«æ©§é¥ï¿½ï¿½æ©§é¥ï¿½ï¿½ï¿½æîåªï¿½ï¿½(ÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï³ïªèæ£¹åµ¹î¼éïæî¼§îè¿®ï¿½å¡¾îï(ÂÂÂÂÂÂÂÂÂÂï¿½ï¿½ï£ïï¿½9ï¿îïîè¿¡æ ï¿½î¨«å¡µï¿½è£ï¿½ï¿½æè°âï¿½î¼ïï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂî»ï¿½îªî¼§ï¿½Aï¿½ï¿½eèª¿ï¿½ï¿½ç±éï¿½ï¿½ï¿½ï¿½å¡µï¿½(ÂÂÂÂÂÂÂÂÂÂè¢îºï¿½(ÂÂÂÂÂÂÂÂÂÂé­ï¿½ï¿½è¿9ï¿îïîè¿®åµ¹î¼§îè¿®ï¯ï¿½æ¤ï¿½ï¿½æ¯¯ï(ÂÂÂÂÂÂÂÂÂÂÂï¿½1îî²®ï¿½çïè¿î¼»èª¿ï¿½îî³ï¿½è³½ï¿½ï¿½æèî¼ï¿½îï¿½=æ¡±î½ïæ µå³ï¿î®î¼§ï¿½ï¿½ç(ÂÂÂÂÂÂÂÂÂÂÂî¼ï¿½îªî¼§ï¿½ï»ï¿½ï¿½î¼£è¥îâï¿½ï¿½æ¥ï¿½è¤î«ï¿½æï¿½(ÂÂÂÂÂÂÂÂÂÂè¢ç(ÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ïï¯å¡¾ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îï£åæ¦îï¯ï¿½ï¿½ï¿½è°âï¿½î¼§îè¿®ï¯ï¿½æ¥®æ¬ï¿½è´è¿®ï»ï¿½î¼é¥ï¿½éµæ££î¼èª¿ï¿½ï¿½çµï¿½â ï¿½ï ³ï¿½ï¿½ï¿½é§éï¿½æ¸ïç©¸æèï¿½è£è¤ï¿½(ÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂï¿½îï¿½îº½æ¡µï¿½ï¿½è¤î»èª¿ï¿½ï¿½ç±éï¿½ï¿½ï¿½ï¿½å¡µ(ÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´(ÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂè¢ï¿½ïæ«è·¤((ÂÂÂÂÂî½æî»Q%=8Âå¡¯ï¿½%9QI90ï¿½1%9-LÂéï¿½(ÂÂÂÂÂÂé®¹ï¿½æèï¿½ï¿½è¿9ï¿îï¿é§å¸î¼é¥ï¿½è«æ©§é¥ï¿½ï¿½æ©§é¥ï¿½ï¿½è°âï¿½ï¿½è¤ï¿½ï¿ï¿½ï»ï¿½îï¿½ï¿½é§ï ï¿½ï¿½(ÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï³ïªèæ£åµ¹î¼éïæï(ÂÂÂÂÂÂÂÂÂÂï¿½ï¿½ï£ïï¿½9ï¿îïîè¿®ï¿½ï¿½è´è¿®ï»ï¿½î¼§îè¿®î²«ï®æ¸¯æ¬î¼ïï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂï¿½å¾¶æï¿½ï¿½5è¤ï¿½(ÂÂÂÂÂÂÂÂÂÂè¢îºï¿½(ÂÂÂÂÂÂÂÂÂÂï¿½ç®ï¿½ï¿½è¿9ï¿îï¿½ç®ï¿½î²«ï¿½ï¿½è£æ´ï¿½ï¿½ï¿½ç®îï¯æºæ¤î¼î°®î²«ï¿½ï¿½è£æ´ï¿½ï¿½æï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ïï¿½å±¾ï¿½îï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îïîè¿®ï¯ï¿½æ¥®æ¬î»·èª¶îæ©îè¿®ï¯ï¿½æ¬½æ¬ï¿½è´è¿®ï¿½ç­ï»ï¿½ï¿½ï¿½ï¿½ç±î¯æï¿½å¡¾îï¿½ïæ¤ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂî»ï¿½ï¿½æ î»îæ±ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂé®¹ï¿½è·¤æï¿½å¢è¢è©ïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´((ÂÂÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ïæï¿½æè´ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îïîè¿®ï¯ï¿½æ¥®æ¬î»·èª¶îæ©îè¿®ï¯ï¿½æ¬½æ¬ï¿½è´è¿®ï¿½ç­ï»ï¿½ï¿½ï¿½ï¿½ç±î¯æï¿½å¡¾îï¿½ïæ¤ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂî»ï¿½ï¿½æ ï¿½1ï¿½ïæ«å(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂé®¹ï¿½è·¤æï¿½å¢è¢è©ïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´((ÂÂÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ïï¿½èª¿ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îïîè¿®ï¯ï¿½æ¥®æ¬î»·èª¶îæ©îè¿®ï¯ï¿½æ¬½æ¬ï¿½è´è¿®ï¿½ç­ï»ï¿½ï¿½ï¿½ï¿½ç±î¯æï¿½å¡¾îï¿½ïæ¤ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï»æ¡¸ï¿½	ï¿½ï¯ï¿½X(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂé®¹ï¿½è·¤æï¿½å¢è¢è©ïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´((ÂÂÂÂÂÂÂÂÂÂÂî½æî»îæ±ï¿½î¼£ï¿½ï¿½ï¿½î¼æ¦åÂéï¿½(ÂÂÂÂÂÂÂÂÂÂÂî½ï¿½å±¾ï¿½îå¶æ¼ï¿½î¹¹ï¿½æ³å±ïî¹ï¿½å±¾ï¿½îÂéÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½1æ¦ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî¼îç½ï¿½å±¾ï¿½îè ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî»·ï¿½î§ï¿½è«îæ±ï¿½æ¯î³ï¿½å±¾ï¿½îè ï¿½ï¿½ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½ï¿½è¿9ï¿îïîè¿®ï¯ï¿½æ¥®æ¬î»·èª¶îæ©îè¿®ï¯ï¿½æ¬½æ¬ï¿½è´è¿®ï¿½ç­ï»ï¿½ï¿½ï¿½ï¿½ç±î¯æï¿½å¡¾îï¿½ïæ¤ï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂî½ï¿½å±¾ï¿½îï¿½ï¿½ï¿½æ¥î½ïæ µå³ï¿î®(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂÂé®¹ï¿½è·¤æï¿½å¢è¢è©ïï¿½(ÂÂÂÂÂÂÂÂÂÂÂÂÂÂè¢1æ¦ç´(ÂÂÂÂÂÂÂÂÂÂÂÂä¸°ï¿½(ÂÂÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂÂÂè¢î«æ(ÂÂÂÂÂÂè¢ï¿½ïæ«è·¤(ÂÂÂÂè¦ï¿½(ÂÂæ¨)ï¿½