import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Palette } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website Design Services | Custom, Modern Web Design",
  description: "Professional website design services that capture your brand identity and engage your audience. Modern, responsive designs tailored to your business needs.",
};

export default function WebsiteDesignPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20 animate-blob" />

        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-2xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Website Design</h1>
          </div>

          <p className="text-xl text-slate-700 max-w-3xl">
            Custom website designs that capture your brand identity, engage your target audience, and drive conversions.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What's Included</h2>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              "Custom Design Concepts",
              "Responsive Mobile-First Design",
              "Modern UI/UX Best Practices",
              "Brand-Aligned Visual Identity",
              "Interactive Prototypes",
              "Conversion-Optimized Layouts",
              "Typography & Color Schemes",
              "Icon & Graphic Design",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-pink-600 flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">My Design Process</h2>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description: "I start by understanding your business, target audience, competitors, and goals to create a strategic foundation for the design.",
              },
              {
                step: "02",
                title: "Wireframing & Structure",
                description: "Create low-fidelity wireframes to establish the site structure, user flow, and content hierarchy before visual design.",
              },
              {
                step: "03",
                title: "Visual Design",
                description: "Design high-fidelity mockups with your brand colors, typography, imagery, and visual elements to bring your site to life.",
              },
              {
                step: "04",
                title: "Prototype & Feedback",
                description: "Build interactive prototypes for you to review and provide feedback. I refine the design until you're 100% satisfied.",
              },
            ].map((process, index) => (
              <div key={index} className="glass-card relative">
                <div className="absolute -left-3 top-4 md:-left-4 md:top-6 lg:-left-6 bg-gradient-to-r from-pink-400 to-rose-400 text-white w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center font-bold text-base md:text-lg lg:text-xl shadow-lg">
                  {process.step}
                </div>
                <div className="pl-10 md:pl-12 lg:pl-16">
                  <h3 className="text-base md:text-lg lg:text-2xl font-bold mb-2 md:mb-3 text-slate-900">{process.title}</h3>
                  <p className="text-xs md:text-sm lg:text-lg text-slate-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose My Design Services */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Why Choose My Design Services</h2>

          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">User-Centered Design</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Every design decision is made with your users in mind. I create intuitive, accessible designs that provide excellent user experiences across all devices.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Conversion-Focused</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Beautiful design is just the start. I strategically place call-to-actions, optimize layouts, and design with the goal of turning visitors into customers.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Unlimited Revisions</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Your satisfaction is my priority. I offer unlimited design revisions during the project to ensure you get exactly what you envision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Something Beautiful?"
        description="Let's design a website that perfectly represents your brand and engages your audience."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
