import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { AboutSpace } from "@/components/sections/about-space";
import { Differentials } from "@/components/sections/differentials";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaEmotional } from "@/components/sections/cta-emotional";
import { Contact } from "@/components/sections/contact";
import { getSiteSettings, getServices, getDifferentials, getTestimonials } from "@/lib/sanity-data";

export default async function Home() {
  const [settings, services, differentials, testimonials] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getDifferentials(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <TrustBar settings={settings} />
      <Services services={services} />
      <Gallery />
      <AboutSpace />
      <Differentials items={differentials} />
      <Testimonials testimonials={testimonials} settings={settings} />
      <CtaEmotional settings={settings} />
      <Contact settings={settings} services={services} />
    </>
  );
}
