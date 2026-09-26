import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Search, Globe, Star } from "lucide-react";
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5+", label: "Years Using Next.js" },
              { value: "25+", label: "Next.js Sites Built" },
              { value: "5M+", label: "Weekly Downloads" },
              { value: "Top 3", label: "React Frameworks" },
            ].map((stat, i) => (
              <div key={i} className="glass-card text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Next.js */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Next.js?</h2>
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Next.js is a React framework that makes building production-ready websites easier and faster. Think of it as React with superpowers — it adds automatic optimisation, built-in SEO, and server-side rendering.
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

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Next.js</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Search, title: "SEO Optimised", desc: "Built-in SEO features help your website rank higher in Google and other search engines." },
              { icon: Zap, title: "Lightning Fast", desc: "Automatic code splitting, image optimisation, and caching make sites incredibly fast." },
              { icon: Globe, title: "Global Edge Network", desc: "Your site loads fast worldwide thanks to Vercel's global content delivery network." },
              { icon: CheckCircle2, title: "Easy to Scale", desc: "Handles traffic spikes effortlessly, from hundreds to millions of visitors." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-slate-700 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{title}</h3>
                <p className="text-sm md:text-base text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Use */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use Next.js in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "App Router Setup", desc: "I use the Next.js App Router for clean, nested layouts and server components that load faster and improve SEO." },
              { step: "02", title: "Static & Dynamic Pages", desc: "Pages that don't change are pre-rendered at build time for maximum speed; dynamic pages fetch fresh data on demand." },
              { step: "03", title: "Image & Font Optimisation", desc: "Next.js automatically optimises images and fonts, reducing page size and improving Core Web Vitals scores." },
              { step: "04", title: "API Routes", desc: "Building serverless backend endpoints directly inside the Next.js project — no separate server needed." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-slate-700 to-slate-900 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
                  {p.step}
                </div>
                <div className="py-1">
                  <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">{p.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with Next.js</h2>
          <p className="text-center text-slate-600 mb-10">Real client websites powered by Next.js</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon Website" },
              { name: "Interiors Design", link: "/case-studies/interiors-design", tag: "Interior Design" },
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning" },
              { name: "Hoffman Car Wash", link: "/case-studies/hoffman-carwash", tag: "Auto Service" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-slate-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors">{proj.name}</h3>
                <span className="text-xs text-slate-500 mt-1 block">{proj.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Key Features</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Server-Side Rendering (SSR) for better SEO",
              "Automatic image optimisation",
              "Built-in routing — no complex setup needed",
              "API routes for backend functionality",
              "Automatic code splitting for performance",
              "Static Site Generation (SSG) for fast pages",
              "Incremental Static Regeneration (ISR)",
              "Edge functions for global low-latency",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-700 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a Fast, SEO-Optimised Website with Next.js?"
        description="Let's build a high-performance website that ranks well and converts visitors."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
