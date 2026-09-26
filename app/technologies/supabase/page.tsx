import Link from "next/link";
import { ArrowLeft, CheckCircle2, Database, Lock, Zap, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Supabase | Technologies I Use",
  description: "Learn about Supabase - open-source Firebase alternative with database, authentication, and real-time features.",
};

export default function SupabasePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-4 rounded-2xl">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Supabase</h1>
          </div>
          <p className="text-xl text-slate-700 max-w-3xl">
            Open-source Firebase alternative with database, authentication, storage, and real-time features — a complete backend-as-a-service.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "3+", label: "Years Using Supabase" },
              { value: "10+", label: "Apps Built on It" },
              { value: "50K+", label: "GitHub Stars" },
              { value: "Free", label: "Tier Available" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Supabase?</h2>
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Supabase is an open-source platform that provides everything you need for a backend: database, authentication, file storage, and real-time subscriptions — all in one place without building from scratch.
              </p>
            </div>
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Built on PostgreSQL, Supabase is trusted by thousands of developers and companies building modern web applications who want speed without sacrificing control or transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Supabase</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Rapid Development", desc: "Build features faster with ready-to-use backend services and auto-generated APIs." },
              { icon: Database, title: "Powerful Database", desc: "PostgreSQL database with full SQL support and advanced features." },
              { icon: Lock, title: "Built-in Auth", desc: "User authentication with email, social logins, and magic links out of the box." },
              { icon: CheckCircle2, title: "Real-Time Updates", desc: "Subscribe to database changes for live, real-time features." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use Supabase in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Database Design", desc: "Designing the PostgreSQL schema in Supabase with proper relationships, indexes, and row-level security policies from day one." },
              { step: "02", title: "Authentication Setup", desc: "Configuring email/password and social login flows with Supabase Auth, protected routes, and session management." },
              { step: "03", title: "Storage Integration", desc: "Using Supabase Storage for user uploads like profile images, documents, and media with access control policies." },
              { step: "04", title: "Real-Time Subscriptions", desc: "Adding live data features — like instant notifications or live dashboards — using Supabase's real-time engine." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-emerald-400 to-green-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with Supabase</h2>
          <p className="text-center text-slate-600 mb-10">Real apps powered by Supabase on the backend</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning Platform" },
              { name: "One Medical", link: "/case-studies/one-medical", tag: "Healthcare" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
              { name: "Car Detailing", link: "/case-studies/car-detailing", tag: "Bookings" },
              { name: "Hoffman Car Wash", link: "/case-studies/hoffman-carwash", tag: "Membership" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-emerald-500 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-emerald-600 transition-colors">{proj.name}</h3>
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
              "PostgreSQL database with instant APIs",
              "User authentication and authorisation",
              "File storage for images, videos, and documents",
              "Real-time subscriptions for live updates",
              "Row-level security for data protection",
              "Automatic API generation from your database",
              "Edge functions for custom backend logic",
              "Free tier perfect for getting started",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Complete Backend Solution?"
        description="Let's build your application with Supabase for fast development and powerful features."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
