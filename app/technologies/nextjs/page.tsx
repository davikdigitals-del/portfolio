import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Search, Globe } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Next.js | Technologies I Use",
  description: "Learn about Next.js - the React framework for production-grade websites with built-in SEO and performance.",
};

export default function NextJsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 p-4 rounded-2xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Next.js</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            The React framework for production-grade websites. Built by Vercel, Next.js provides everything you need for fast, SEO-friendly websites.
          </p>
        </div>
      </section>

      {/* What is Next.js */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Next.js?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Next.js is a React framework that makes building production-ready websites easier and faster. Think of it as React with superpowers - it adds features like automatic optimization, built-in SEO, and server-side rendering.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Used by companies like Nike, Uber, Netflix, TikTok, and Twitch, Next.js is the go-to choice for building fast, scalable websites that rank well in search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use Next.js */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Next.js</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Search className="w-8 h-8 md:w-12 md:h-12 text-slate-700 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SEO Optimized</h3>
              <p className="text-sm md:text-base text-slate-600">
                Built-in SEO features help your website rank higher in Google and other search engines.
              </p>
            </div>
            
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-slate-700 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Lightning Fast</h3>
              <p className="text-sm md:text-base text-slate-600">
                Automatic code splitting, image optimization, and caching make sites incredibly fast.
              </p>
            </div>
            
            <div className="glass-card">
              <Globe className="w-8 h-8 md:w-12 md:h-12 text-slate-700 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Global Edge Network</h3>
              <p className="text-sm md:text-base text-slate-600">
                Your site loads fast worldwide thanks to Vercel's global content delivery network.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-slate-700 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Easy to Scale</h3>
              <p className="text-sm md:text-base text-slate-600">
                Handles traffic spikes effortlessly, from hundreds to millions of visitors.
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
              "Server-Side Rendering (SSR) for better SEO and performance",
              "Automatic image optimization for faster page loads",
              "Built-in routing - no complex setup needed",
              "API routes for backend functionality",
              "Automatic code splitting for optimal performance",
              "Static Site Generation (SSG) for blazing-fast pages",
              "Incremental Static Regeneration (ISR) for fresh content",
              "Edge functions for global low-latency responses",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-slate-700 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Marketing Websites</h3>
              <p className="text-sm md:text-base text-slate-600">
                SEO-optimized pages that rank well and load instantly to capture more leads.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">E-Commerce</h3>
              <p className="text-sm md:text-base text-slate-600">
                Fast product pages, smooth checkout flows, and great SEO for better sales.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SaaS Platforms</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build powerful web applications with authentication, databases, and APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Fast, SEO-Optimized Website with Next.js?"
        description="Let's build a high-performance website that ranks well and converts visitors."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
