import Link from "next/link";
import { ArrowLeft, CheckCircle2, Paintbrush, Zap, Smartphone } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Tailwind CSS | Technologies I Use",
  description: "Learn about Tailwind CSS - a utility-first CSS framework for rapidly building custom designs.",
};

export default function TailwindPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-2xl">
              <Paintbrush className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Tailwind CSS</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            A utility-first CSS framework for rapidly building custom, beautiful designs without leaving your HTML.
          </p>
        </div>
      </section>

      {/* What is Tailwind */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Tailwind CSS?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Tailwind CSS is a modern CSS framework that helps build beautiful websites faster. Instead of writing custom CSS, you use pre-built utility classes to style your elements directly in your HTML.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Used by companies like NASA, GitHub, Shopify, and Laravel, Tailwind CSS has become one of the most popular ways to style modern websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use Tailwind */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Tailwind CSS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Rapid Development</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build custom designs much faster without writing custom CSS from scratch.
              </p>
            </div>
            
            <div className="glass-card">
              <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Responsive Design</h3>
              <p className="text-sm md:text-base text-slate-600">
                Built-in responsive utilities make mobile-first design incredibly easy.
              </p>
            </div>
            
            <div className="glass-card">
              <Paintbrush className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Consistent Design</h3>
              <p className="text-sm md:text-base text-slate-600">
                Built-in design system ensures consistency across your entire website.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Small File Sizes</h3>
              <p className="text-sm md:text-base text-slate-600">
                Automatically removes unused styles, resulting in tiny CSS files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Key Features</h2>
          
          <div className="space-y-4">
            {[
              "Utility-first approach for rapid development",
              "Responsive design made simple with breakpoint prefixes",
              "Dark mode support built-in",
              "Customizable design system with your brand colors",
              "Automatic CSS purging for optimal performance",
              "Hover, focus, and other state variants included",
              "Flexbox and Grid utilities for modern layouts",
              "Animation and transition utilities",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Website</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Faster Development Time</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build and iterate on designs quickly, getting your website to market faster.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Easy Maintenance</h3>
              <p className="text-sm md:text-base text-slate-600">
                Changes are simple and predictable - no mysterious CSS side effects.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance Optimized</h3>
              <p className="text-sm md:text-base text-slate-600">
                Small CSS files mean faster page loads and better user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Beautiful, Modern Website?"
        description="Let's create a stunning website with Tailwind CSS that looks great and loads fast."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
