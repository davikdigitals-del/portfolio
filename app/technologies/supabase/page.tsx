import Link from "next/link";
import { ArrowLeft, CheckCircle2, Database, Lock, Zap } from "lucide-react";
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
            Open-source Firebase alternative with database, authentication, storage, and real-time features. Build faster with a complete backend-as-a-service.
          </p>
        </div>
      </section>

      {/* What is Supabase */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Supabase?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Supabase is an open-source platform that provides everything you need for a backend: database, authentication, file storage, and real-time subscriptions. Think of it as a complete backend without having to build everything from scratch.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Built on PostgreSQL (a powerful open-source database), Supabase is trusted by companies building modern web applications who want speed without sacrificing control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use Supabase */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Supabase</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Rapid Development</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build features faster with ready-to-use backend services and APIs.
              </p>
            </div>
            
            <div className="glass-card">
              <Database className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Powerful Database</h3>
              <p className="text-sm md:text-base text-slate-600">
                PostgreSQL database with full SQL support and advanced features.
              </p>
            </div>
            
            <div className="glass-card">
              <Lock className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Built-in Auth</h3>
              <p className="text-sm md:text-base text-slate-600">
                User authentication with email, social logins, and magic links.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Real-Time Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Subscribe to database changes for live, real-time features.
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
              "PostgreSQL database with instant APIs",
              "User authentication and authorization",
              "File storage for images, videos, and documents",
              "Real-time subscriptions for live updates",
              "Row-level security for data protection",
              "Automatic API generation from your database",
              "Edge functions for custom backend logic",
              "Free tier perfect for getting started",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
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
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SaaS Applications</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build software-as-a-service products with user accounts, data storage, and subscriptions.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Real-Time Apps</h3>
              <p className="text-sm md:text-base text-slate-600">
                Chat applications, collaboration tools, dashboards with live data updates.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Mobile & Web Apps</h3>
              <p className="text-sm md:text-base text-slate-600">
                Complete backend for modern applications without managing servers.
              </p>
            </div>
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
