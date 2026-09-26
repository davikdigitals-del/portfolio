import Link from "next/link";
import { ArrowLeft, Palette, CheckCircle2, Figma, Smartphone, Paintbrush } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Design & Prototype | My Process",
  description: "Learn about the design phase where I craft beautiful, user-friendly designs aligned with your brand.",
};

export default function DesignPrototypePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20 animate-blob" />

        <div className="container-custom relative z-10">
          <Link href="/#process" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Process
          </Link>

          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-slate-800 mb-6">
            <span className="text-sm font-semibold">Step 02</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-2xl">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Design & Prototype</h1>
          </div>

          <p className="text-xl text-slate-700 max-w-3xl">
            Transforming ideas into beautiful, user-friendly designs. I create stunning visuals that align with your brand and engage your visitors.
          </p>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">My Design Process</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Figma className="w-8 h-8 md:w-12 md:h-12 text-pink-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Wireframing</h3>
              <p className="text-sm md:text-base text-slate-600">
                Creating low-fidelity wireframes to establish structure, layout, and user flow before visual design.
              </p>
            </div>

            <div className="glass-card">
              <Paintbrush className="w-8 h-8 md:w-12 md:h-12 text-pink-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Visual Design</h3>
              <p className="text-sm md:text-base text-slate-600">
                Designing high-fidelity mockups with colors, typography, imagery, and brand elements.
              </p>
            </div>

            <div className="glass-card">
              <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-pink-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Responsive Design</h3>
              <p className="text-sm md:text-base text-slate-600">
                Creating designs for desktop, tablet, and mobile to ensure perfect experience on all devices.
              </p>
            </div>

            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-pink-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Interactive Prototype</h3>
              <p className="text-sm md:text-base text-slate-600">
                Building clickable prototypes so you can experience the design before development begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Design Principles I Follow</h2>

          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">User-Centered Design</h3>
              <p className="text-sm md:text-base text-slate-600">
                Every design decision prioritizes your users' needs, making the site intuitive and easy to navigate.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Visual Hierarchy</h3>
              <p className="text-sm md:text-base text-slate-600">
                Strategic use of size, color, and spacing to guide users' attention to the most important content.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Consistency</h3>
              <p className="text-sm md:text-base text-slate-600">
                Maintaining consistent design patterns throughout the site for a cohesive, professional appearance.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Accessibility</h3>
              <p className="text-sm md:text-base text-slate-600">
                Designing with WCAG guidelines in mind to ensure your site is accessible to all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">What You'll Receive</h2>

          <div className="space-y-4">
            {[
              "Complete wireframes showing site structure and layout",
              "High-fidelity mockups for all key pages",
              "Responsive designs for desktop, tablet, and mobile",
              "Interactive prototype for testing and feedback",
              "Design style guide with colors, fonts, and components",
              "Unlimited revisions until you're 100% satisfied",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-pink-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to See Your Vision Come to Life?"
        description="Let's create beautiful designs that perfectly represent your brand."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
