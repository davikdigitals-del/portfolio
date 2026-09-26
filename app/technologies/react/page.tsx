import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Component, Users, TrendingUp, Star, Code2 } from "lucide-react";
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5+", label: "Years Using React" },
              { value: "20+", label: "React Projects Built" },
              { value: "100M+", label: "Weekly Downloads" },
              { value: "#1", label: "Most Used JS Library" },
            ].map((stat, i) => (
              <div key={i} className="glass-card text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
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
                React makes it easy to create interactive websites by breaking them down into small, reusable pieces called "components". Think of components like LEGO blocks — you can build complex websites by combining these simple pieces together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use React */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use React</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "React updates only what needs to change, making websites incredibly fast and responsive." },
              { icon: Component, title: "Reusable Components", desc: "Build once, use everywhere. Components save development time and ensure consistency." },
              { icon: Users, title: "Huge Community", desc: "Millions of developers use React, meaning tons of resources, tools, and support." },
              { icon: CheckCircle2, title: "SEO Friendly", desc: "When combined with Next.js, React sites rank well in search engines." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{title}</h3>
                <p className="text-sm md:text-base text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Use React */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use React in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Component Planning", desc: "I design the component structure upfront — breaking every page into logical, reusable pieces before writing a single line of code." },
              { step: "02", title: "State Management", desc: "Using React hooks like useState, useEffect, and useContext to manage data flow cleanly without unnecessary complexity." },
              { step: "03", title: "Performance Optimisation", desc: "Applying lazy loading, code splitting, and memoisation to keep every React app fast even as it grows." },
              { step: "04", title: "Seamless Integration", desc: "Connecting React frontends to APIs, databases, and third-party services like payment gateways and booking systems." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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

      {/* Projects using React */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with React</h2>
          <p className="text-center text-slate-600 mb-10">Real client websites powered by React</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon Website" },
              { name: "One Medical", link: "/case-studies/one-medical", tag: "Healthcare Platform" },
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning" },
              { name: "Car Detailing", link: "/case-studies/car-detailing", tag: "Auto Service" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-blue-400 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors">{proj.name}</h3>
                <span className="text-xs text-slate-500 mt-1 block">{proj.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Business</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Faster loading times keep visitors engaged",
              "Smooth, app-like experience increases conversions",
              "Easy to update and maintain as your business grows",
              "Works perfectly on mobile, tablet, and desktop",
              "Interactive features that delight users",
              "Scales efficiently as your traffic increases",
              "Future-proof technology backed by Meta",
              "Cost-effective long-term solution",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          <div className="space-y-6">
            {[
              { title: "Interactive Websites", desc: "Sites with forms, calculators, dashboards, or any interactive features benefit greatly from React." },
              { title: "E-Commerce Stores", desc: "React powers fast, smooth shopping experiences with instant cart updates and quick page transitions." },
              { title: "Web Applications", desc: "Perfect for building complex applications like booking systems, CRMs, or custom business tools." },
              { title: "Landing Pages", desc: "High-converting landing pages with smooth animations, form handling, and fast performance." },
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-600">{item.desc}</p>
              </div>
            ))}
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
