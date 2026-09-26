import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Component, Users } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "React | Technologies I Use",
  description: "Learn about React - a powerful JavaScript library for building fast, interactive user interfaces.",
};

export default function ReactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-2xl">
              <Component className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">React</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            A powerful JavaScript library for building fast, interactive, and dynamic user interfaces with reusable components.
          </p>
        </div>
      </section>

      {/* What is React */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is React?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                React is a JavaScript library created by Facebook (Meta) for building user interfaces. It's one of the most popular tools for web development, used by companies like Facebook, Instagram, Netflix, Airbnb, and thousands of others.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                React makes it easy to create interactive websites by breaking them down into small, reusable pieces called "components". Think of components like LEGO blocks - you can build complex websites by combining these simple pieces together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use React */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use React</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Lightning Fast</h3>
              <p className="text-sm md:text-base text-slate-600">
                React updates only what needs to change, making websites incredibly fast and responsive.
              </p>
            </div>
            
            <div className="glass-card">
              <Component className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Reusable Components</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build once, use everywhere. Components save development time and ensure consistency.
              </p>
            </div>
            
            <div className="glass-card">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Huge Community</h3>
              <p className="text-sm md:text-base text-slate-600">
                Millions of developers use React, meaning tons of resources, tools, and support.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SEO Friendly</h3>
              <p className="text-sm md:text-base text-slate-600">
                When combined with Next.js, React sites rank well in search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Your Business */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Business</h2>
          
          <div className="space-y-4">
            {[
              "Faster loading times keep visitors engaged",
              "Smooth, app-like experience increases conversions",
              "Easy to update and maintain as your business grows",
              "Works perfectly on mobile, tablet, and desktop",
              "Interactive features that delight users",
              "Scales efficiently as your traffic increases",
              "Future-proof technology backed by Meta",
              "Cost-effective long-term solution",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Interactive Websites</h3>
              <p className="text-sm md:text-base text-slate-600">
                Sites with forms, calculators, dashboards, or any interactive features benefit greatly from React.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">E-Commerce Stores</h3>
              <p className="text-sm md:text-base text-slate-600">
                React powers fast, smooth shopping experiences with instant cart updates and quick page transitions.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Web Applications</h3>
              <p className="text-sm md:text-base text-slate-600">
                Perfect for building complex applications like booking systems, CRMs, or custom business tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Fast, Modern Website Built with React?"
        description="Let's create an interactive website that engages your visitors and drives results."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
