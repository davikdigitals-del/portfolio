import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import Technologies from "@/components/Technologies";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Technologies />
      <CTASection 
        title="Ready to Start Your Project?"
        description="Let's discuss your vision and create something amazing together."
        buttonText="Contact Me"
        buttonLink="/contact"
      />
    </>
  );
}
