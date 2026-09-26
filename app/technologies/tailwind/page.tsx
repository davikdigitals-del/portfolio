import Link from "next/link";
import { ArrowLeft, CheckCircle2, Paintbrush, Zap, Smartphone, Star } from "lucide-react";
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4+", label: "Years Using Tailwind" },
              { value: "30+", label: "Sites Styled with It" },
              { value: "10x", label: "Faster than Plain CSS" },
              { value: "#1", label: "CSS Framework 2024" },
            ].map((stat, i) => (
              <div key={i} className="glass-card text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is */}
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
                Used by companies like NASA, GitHub, Shopify, and Laravel, Tailwind CSS has become one of the most popular ways to style modern websites — including this very portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Tailwind CSS</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Rapid Development", desc: "Build custom designs much faster without writing custom CSS from scratch." },
              { icon: Smartphone, title: "Responsive Design", desc: "Built-in responsive utilities make mobile-first design incredibly easy." },
              { icon: Paintbrush, title: "Consistent Design", desc: "Built-in design system ensures consistency across your entire website." },
              { icon: CheckCircle2, title: "Small File Sizes", desc: "Automatically removes unused styles, resulting in tiny CSS files." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use Tailwind in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Design System Setup", desc: "I configure Tailwind with your brand's exact colors, fonts, and spacing at the start of every project." },
              { step: "02", title: "Mobile-First Layouts", desc: "Every layout is built mobile-first using Tailwind's responsive prefixes (sm:, md:, lg:), ensuring perfect display on all devices." },
              { step: "03", title: "Custom Components", desc: "Reusable glass-card, gradient, and animation classes are built into the Tailwind config for consistent styling across the site." },
              { step: "04", title: "Dark Mode & Themes", desc: "Tailwind's dark mode and custom theme support makes it easy to offer multiple visual styles without duplicating code." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Styled with Tailwind CSS</h2>
          <p className="text-center text-slate-600 mb-10">Every one of these sites uses Tailwind for its design</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon Website" },
              { name: "Interiors Design", link: "/case-studies/interiors-design", tag: "Interior Design" },
              { name: "Car Detailing", link: "/case-studies/car-detailing", tag: "Auto Service" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "Hoffman Car Wash", link: "/case-studies/hoffman-carwash", tag: "Car Wash" },
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-cyan-500 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-cyan-600 transition-colors">{proj.name}</h3>
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
              "Utility-first approach for rapid development",
              "Responsive design with breakpoint prefixes",
              "Dark mode support built-in",
              "Customisable design system for your brand",
              "Automatic CSS purging for optimal performance",
              "Hover, focus, and state variants included",
              "Flexbox and Grid utilities for modern layouts",
              "Animation and transition utilities",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
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
