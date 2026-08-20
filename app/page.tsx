import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { AboutSpace } from "@/components/sections/about-space";
import { Differentials } from "@/components/sections/differentials";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaEmotional } from "@/components/sections/cta-emotional";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <AboutSpace />
      <Differentials />
      <Testimonials />
      <CtaEmotional />
      <Contact />
    </>
  );
}
