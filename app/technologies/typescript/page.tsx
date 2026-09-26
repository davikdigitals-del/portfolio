import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Code, Bug, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "TypeScript | Technologies I Use",
  description: "Learn about TypeScript - JavaScript with type safety for more reliable, maintainable code.",
};

export default function TypeScriptPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">TypeScript</h1>
          </div>
          <p className="text-xl text-slate-700 max-w-3xl">
            JavaScript with superpowers. TypeScript adds type safety to catch errors early and make code more reliable and maintainable.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4+", label: "Years Using TypeScript" },
              { value: "90%", label: "of My Projects Use It" },
              { value: "78%", label: "Fewer Runtime Bugs" },
              { value: "Top 5", label: "Most Loved Languages" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is TypeScript?</h2>
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                TypeScript is JavaScript with extra features that help catch mistakes before your code even runs. Created by Microsoft, it's like having a safety net that catches bugs during development instead of after your website is live.
              </p>
            </div>
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Major companies like Microsoft, Google, Airbnb, and Slack use TypeScript because it makes large codebases easier to maintain and reduces bugs in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use TypeScript</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Bug, title: "Catch Errors Early", desc: "TypeScript finds bugs while coding, not after your site is live, saving time and headaches." },
              { icon: Shield, title: "More Reliable Code", desc: "Type safety means fewer runtime errors and more confidence in your code." },
              { icon: Code, title: "Better Development", desc: "Smart code completion and documentation make development faster and easier." },
              { icon: CheckCircle2, title: "Easy Maintenance", desc: "Makes code easier to understand and update as your project grows." },
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

      {/* How I Use */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use TypeScript in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Strict Type Definitions", desc: "Every component, function, and API response has clear types defined from the start, preventing unexpected errors." },
              { step: "02", title: "Interface Design", desc: "I design data interfaces upfront so the entire codebase has a consistent, documented data structure." },
              { step: "03", title: "Type-Safe APIs", desc: "API calls and database queries are fully typed so data mismatches are caught at compile time, not in production." },
              { step: "04", title: "Refactor Safely", desc: "TypeScript makes it safe to rename, restructure, or update code — the compiler catches every broken reference instantly." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with TypeScript</h2>
          <p className="text-center text-slate-600 mb-10">Real client websites using TypeScript for reliability</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning" },
              { name: "One Medical", link: "/case-studies/one-medical", tag: "Healthcare" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon" },
              { name: "Car Detailing", link: "/case-studies/car-detailing", tag: "Auto Service" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-blue-600 mb-2" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Project</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Fewer bugs in production means happier users",
              "Faster development with better tooling support",
              "Easier to add features without breaking existing code",
              "Self-documenting code is easier to understand",
              "Refactoring is safer with type checking",
              "Better collaboration when working with teams",
              "Industry-standard for modern web development",
              "Long-term cost savings through better code quality",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Reliable, Bug-Free Code?"
        description="Let's build your project with TypeScript for better quality and maintainability."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
