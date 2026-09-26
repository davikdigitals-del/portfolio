import Link from "next/link";
import { ArrowLeft, Code, CheckCircle2, Zap, Bug, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Development & Testing | My Process",
  description: "Learn about the development phase where your website is built with clean code and tested thoroughly.",
};

export default function DevelopmentTestingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-blob" />

        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-slate-800 mb-6">
            <span className="text-sm font-semibold">Step 03</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-2xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Development & Testing</h1>
          </div>

          <p className="text-xl text-slate-700 max-w-3xl">
            Building your website with clean, efficient code and testing thoroughly to ensure everything works perfectly.
          </p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Development & Testing Steps</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Code className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Clean Code</h3>
              <p className="text-sm md:text-base text-slate-600">
                Writing maintainable, well-documented code following industry best practices and standards.
              </p>
            </div>

            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance Optimization</h3>
              <p className="text-sm md:text-base text-slate-600">
                Optimizing images, code, and assets for lightning-fast loading speeds.
              </p>
            </div>

            <div className="glass-card">
              <Bug className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Testing & QA</h3>
              <p className="text-sm md:text-base text-slate-600">
                Testing across browsers, devices, and screen sizes to catch and fix any issues.
              </p>
            </div>

            <div className="glass-card">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Security</h3>
              <p className="text-sm md:text-base text-slate-600">
                Implementing security best practices to protect your site and user data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Tested */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Comprehensive Testing</h2>

          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Cross-Browser Testing</h3>
              <p className="text-sm md:text-base text-slate-600">
                Testing on Chrome, Firefox, Safari, and Edge to ensure consistent experience across all browsers.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Device Testing</h3>
              <p className="text-sm md:text-base text-slate-600">
                Checking responsiveness on desktop, tablets, and various mobile devices to perfect the mobile experience.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Functionality Testing</h3>
              <p className="text-sm md:text-base text-slate-600">
                Verifying all forms, buttons, links, and interactive elements work correctly.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance Testing</h3>
              <p className="text-sm md:text-base text-slate-600">
                Measuring load times, optimizing Core Web Vitals, and ensuring fast performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Standards */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Development Standards</h2>

          <div className="space-y-4">
            {[
              "Modern frameworks: React, Next.js, TypeScript",
              "Mobile-first responsive design approach",
              "SEO-optimized code and structure",
              "Accessibility compliance (WCAG guidelines)",
              "Fast loading times (optimized for Core Web Vitals)",
              "Clean, commented, maintainable code",
              "Version control with Git",
              "Regular progress updates and demos",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Expert Development?"
        description="Let's build a fast, secure website that performs flawlessly."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
