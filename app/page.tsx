import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import Technologies from "@/components/Technologies";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import RecentWork from "@/components/RecentWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <RecentWork />
      <Technologies />
      <CTASection
        title="Ready to Build Your Dream Website?"
        description="Let's turn your vision into a stunning digital reality that drives results."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </>
  );
}
