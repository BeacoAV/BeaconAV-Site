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
    };
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
            href="/locations"
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
                    and techm¹¥…°•á•ÕÑ¥½¸¸(€€€€€€€€€€€€€€€€€€ğ½Àø(€€€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€ì¼¨MQ%=8€Ôè9I	d5I-QL€¨½ô(€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰Áä´ÈÀÁà´ĞÍ´éÁà´Ø±œéÁà´à‰œµÉ…ä´ÔÀˆø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…àµÜ´Ñá°µàµ…ÕÑ¼ˆø(€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰Ñ•áĞ´Íá°™½¹Ğµ‰½±Ñ•áĞµÉ…ä´äÀÀµˆ´Øˆø(€€€€€€€€€€€9•…É‰ä5…É­•ÑÌ]”M•ÉÙ”(€€€€€€€€€€ğ½ Èø(€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµÉ…ä´ÜÀÀµˆ´àˆø(€€€€€€€€€€€	•å½¹í¥Ñä¹¹…µ•ô°	•…½¸XÍ•ÉÙ•ÌÑ¡•Í”¹•…É‰äµ…É­•ÑÌİ¥Ñ Ñ¡”(€€€€€€€€€€€Í…µ”¹…Ñ¥½¹…°•áÁ•ÉÑ¥Í”…¹±½…°•á•ÕÑ¥½¸¸(€€€€€€€€€€ğ½Àø((€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É¥É¥µ½±Ì´ÄµéÉ¥µ½±Ì´Ì…À´Øˆø(€€€€€€€€€€€í¥Ñä¹¹•…É‰å5…É­•ÑÌ¹µ…À ¡µ…É­•Ñ9…µ”¤€ôøì(€€€€€€€€€€€€€½¹ÍĞµ…É­•Ñ¥Ñä€ô¥Ñ¥•Ì¹™¥¹ (€€€€€€€€€€€€€€€€¡Œ¤€ôø(€€€€€€€€€€€€€€€€€Œ¹¹…µ”€ôôôµ…É­•Ñ9…µ”ñğ(€€€€€€€€€€€€€€€€€Œ¹Í±Õœ¹ÍÑ…ÉÑÍ]¥Ñ ¡µ…É­•Ñ9…µ”¹Ñ½1½İ•É…Í” ¤¹É•Á±…” ˆ€ˆ°€ˆ´ˆ¤¤(€€€€€€€€€€€€€€¤ì((€€€€€€€€€€€€€¥˜€ …µ…É­•Ñ¥Ñä¤É•ÑÕÉ¸¹Õ±°ì((€€€€€€€€€€€€€É•ÑÕÉ¸€ (€€€€€€€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€€€€€€€­•äõíµ…É­•Ñ¥Ñä¹Í±Õô(€€€€€€€€€€€€€€€€€¡É•˜õí€½±½…Ñ¥½¹Ì¼‘íµ…É­•Ñ¥Ñä¹Í±Õõô(€€€€€€€€€€€€€€€€€±…ÍÍ9…µ”ô‰‰±½¬É½ÕÀˆ(€€€€€€€€€€€€€€€€ø(€€€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰‰œµİ¡¥Ñ”À´ØÉ½Õ¹‘•µ±œ‰½É‘•È‰½É‘•ÈµÉ…ä´ÈÀÀ¡½Ù•Èé‰½É‘•Èµ‰±Õ”´ØÀÀ¡½Ù•ÈéÍ¡…‘½ÜµµÑÉ…¹Í¥Ñ¥½¸µ…±°ˆø(€€€€€€€€€€€€€€€€€€€€ñ Ì±…ÍÍ9…µ”ô‰Ñ•áĞµ±œ™½¹Ğµ‰½±Ñ•áĞµÉ…ä´äÀÀÉ½ÕÀµ¡½Ù•ÈéÑ•áĞµ‰±Õ”´ØÀÀÑÉ…¹Í¥Ñ¥½¸µ½±½ÉÌµˆ´Äˆø(€€€€€€€€€€€€€€€€€€€€€íµ…É­•Ñ¥Ñä¹¹…µ•ô°íµ…É­•Ñ¥Ñä¹ÍÑ…Ñ•‰‰Éô(€€€€€€€€€€€€€€€€€€€€ğ½ Ìø(€€€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµÍ´Ñ•áĞµÉ…ä´ØÀÀˆø(€€€€€€€€€€€€€€€€€€€€€Ù•¹ĞÁÉ½‘ÕÑ¥½¸Í•ÉÙ¥•Ì(€€€€€€€€€€€€€€€€€€€€ğ½Àø(€€€€€€€€€€€€€€€€€€€€ñÍÁ…¸±…ÍÍ9…µ”ô‰¥¹±¥¹”µ‰±½¬Ñ•áĞµ‰±Õ”´ØÀÀ™½¹ĞµÍ•µ¥‰½±Ñ•áĞµÍ´µĞ´ÌÉ½ÕÀµ¡½Ù•ÈéÕ¹‘•É±¥¹”ˆø(€€€€€€€€€€€€€€€€€€€€€Y¥•Ü•Ñ…¥±Ì€´´™Ğì(€€€€€€€€€€€€€€€€€€€€ğ½ÍÁ…¸ø(€€€€€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€€€€€ğ½1¥¹¬ø(€€€€€€€€€€€€€€¤ì(€€€€€€€€€€€ô¥ô(€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€ì¼¨MQ%=8€Øè10Q<Q%=8€¨½ô(€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰Áä´ÈÀÁà´ĞÍ´éÁà´Ø±œéÁà´à‰œµ‰±Õ”´ØÀÀˆø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…àµÜ´Íá°µàµ…ÕÑ¼Ñ•áĞµ•¹Ñ•Èˆø(€€€€€€€€€€ñ È±…ÍÍ9…µ”ô‰Ñ•áĞ´Ñá°™½¹Ğµ‰½±Ñ•áĞµİ¡¥Ñ”µˆ´Ğˆø(€€€€€€€€€€€I•…‘äÑ¼A±…¸e½ÕÈí¥Ñä¹¹…µ•ôÙ•¹Ğü(€€€€€€€€€€ğ½ Èø(€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµá°Ñ•áĞµ‰±Õ”´ÔÀµˆ´àˆø(€€€€€€€€€€€1•ĞÌ‘¥ÍÕÍÌå½ÕÈ•Ù•¹ĞÁÉ½‘ÕÑ¥½¸¹••‘Ì¸=ÕÈí¥Ñä¹¹…µ•ôÑ•…´¥Ì(€€€€€€€€€€€É•…‘äÑ¼É•…Ñ”Í½µ•Ñ¡¥¹œ•áÑÉ…½É‘¥¹…Éä¸(€€€€€€€€€€ğ½Àø(€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€¡É•˜ôˆ½½¹Ñ…Ğˆ(€€€€€€€€€€€±…ÍÍ9…µ”ô‰¥¹±¥¹”µ‰±½¬‰œµİ¡¥Ñ”Ñ•áĞµ‰±Õ”´ØÀÀ™½¹Ğµ‰½±Áà´àÁä´ĞÉ½Õ¹‘•µ±œ¡½Ù•Èé‰œµÉ…ä´ÄÀÀÑÉ…¹Í¥Ñ¥½¸µ½±½ÉÌˆ(€€€€€€€€€€ø(€€€€€€€€€€€•Ğ„EÕ½Ñ”™½Èe½ÕÈí¥Ñä¹¹…µ•ôÙ•¹Ğ(€€€€€€€€€€ğ½1¥¹¬ø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø((€€€€€ì¼¨MQ%=8€Üè%9QI901%9-L€¨½ô(€€€€€€ñÍ•Ñ¥½¸±…ÍÍ9…µ”ô‰Áä´ÄØÁà´ĞÍ´éÁà´Ø±œéÁà´à‰œµİ¡¥Ñ”‰½É‘•ÈµĞ‰½É‘•ÈµÉ…ä´ÈÀÀˆø(€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰µ…àµÜ´Ñá°µàµ…ÕÑ¼ˆø(€€€€€€€€€€ñ Ì±…ÍÍ9…µ”ô‰Ñ•áĞµ±œ™½¹Ğµ‰½±Ñ•áĞµÉ…ä´äÀÀµˆ´àˆø(€€€€€€€€€€€áÁ±½É”5½É”(€€€€€€€€€€ğ½ Ìø(€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰É¥É¥µ½±Ì´ÄµéÉ¥µ½±Ì´È±œéÉ¥µ½±Ì´Ì…À´Øˆø(€€€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€€€¡É•˜ôˆ½Í•ÉÙ¥•Ìˆ(€€€€€€€€€€€€€±…ÍÍ9…µ”ô‰Ñ•áĞµ‰±Õ”´ØÀÀ¡½Ù•ÈéÑ•áĞµ‰±Õ”´ÜÀÀ™½¹ĞµÍ•µ¥‰½±™±•à¥Ñ•µÌµ•¹Ñ•È…À´Èˆ(€€€€€€€€€€€€ø(€€€€€€€€€€€€€Y¥•Ü±°M•ÉÙ¥•Ì(€€€€€€€€€€€€€€ñÍÁ…¸ø´´™Ğìğ½ÍÁ…¸ø(€€€€€€€€€€€€ğ½1¥¹¬ø((€€€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€€€¡É•˜ôˆ½±½…Ñ¥½¹Ìˆ(€€€€€€€€€€€€€±…ÍÍ9…µ”ô‰Ñ•áĞµ‰±Õ”´ØÀÀ¡½Ù•ÈéÑ•áĞµ‰±Õ”´ÜÀÀ™½¹ĞµÍ•µ¥‰½±™±•à¥Ñ•µÌµ•¹Ñ•È…À´Èˆ(€€€€€€€€€€€€ø(€€€€€€€€€€€€€Y¥•Ü±°1½…Ñ¥½¹Ì(€€€€€€€€€€€€€€ñÍÁ…¸ø´´™Ğìğ½ÍÁ…¸ø(€€€€€€€€€€€€ğ½1¥¹¬ø((€€€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€€€¡É•˜ôˆ½…‰½ÕĞˆ(€€€€€€€€€€€€€±…ÍÍ9…µ”ô‰Ñ•áĞµ‰±Õ”´ØÀÀ¡½Ù•ÈéÑ•áĞµ‰±Õ”´ÜÀÀ™½¹ĞµÍ•µ¥‰½±™±•à¥Ñ•µÌµ•¹Ñ•È…À´Èˆ(€€€€€€€€€€€€ø(€€€€€€€€€€€€€‰½ÕĞ	•…½¸X(€€€€€€€€€€€€€€ñÍÁ…¸ø´´™Ğìğ½ÍÁ…¸ø(€€€€€€€€€€€€ğ½1¥¹¬ø((€€€€€€€€€€€ì¼¨M•ÉÙ¥”ÍÕ‰Á…”±¥¹­Ì€¨½ô(€€€€€€€€€€€íÍ•ÉÙ¥•Ì¹Í±¥” À°€Ì¤¹µ…À ¡Í•ÉÙ¥”¤€ôø€ (€€€€€€€€€€€€€€ñ1¥¹¬(€€€€€€€€€€€€€€€­•äõíÍ•ÉÙ¥”¹Í±Õô(€€€€€€€€€€€€€€€¡É•˜õí€½Í•ÉÙ¥•Ì¼‘íÍ•ÉÙ¥”¹Í±Õõô(€€€€€€€€€€€€€€€±…ÍÍ9…µ”ô‰Ñ•áĞµ‰±Õ”´ØÀÀ¡½Ù•ÈéÑ•áĞµ‰±Õ”´ÜÀÀ™½¹ĞµÍ•µ¥‰½±™±•à¥Ñ•µÌµ•¹Ñ•È…À´Èˆ(€€€€€€€€€€€€€€ø(€€€€€€€€€€€€€€€íÍ•ÉÙ¥”¹¹…µ•ô¥¸í¥Ñä¹¹…µ•ô(€€€€€€€€€€€€€€€€ñÍÁ…¸ø´´™Ğìğ½ÍÁ…¸ø(€€€€€€€€€€€€€€ğ½1¥¹¬ø(€€€€€€€€€€€€¤¥ô(€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€ğ½‘¥Øø(€€€€€€ğ½Í•Ñ¥½¸ø(€€€€ğ¼ø(€€¤ì)ô