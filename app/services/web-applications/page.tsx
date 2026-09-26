import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers, Database, Cloud, Lock } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Web Applications | Custom Software Development",
  description: "Custom web application development tailored to your business processes and requirements.",
};

export default function WebApplicationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-indigo-400 to-purple-400 p-4 rounded-2xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Web Applications</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            Custom web applications designed to streamline your business processes, increase efficiency, and solve unique challenges.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What's Included</h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              "Full-Stack Development",
              "Custom User Interface",
              "Database Design & Management",
              "API Development & Integration",
              "User Authentication & Roles",
              "Real-Time Features",
              "Cloud Deployment",
              "Ongoing Maintenance",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-indigo-600 flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Database className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Data Management</h3>
              <p className="text-sm md:text-base text-slate-600">
                Secure databases to store, manage, and analyze your business data.
              </p>
            </div>
            
            <div className="glass-card">
              <Lock className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">User Management</h3>
              <p className="text-sm md:text-base text-slate-600">
                Authentication, authorization, and role-based access control.
              </p>
            </div>
            
            <div className="glass-card">
              <Cloud className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Cloud Integration</h3>
              <p className="text-sm md:text-base text-slate-600">
                Seamless integration with cloud services and third-party APIs.
              </p>
            </div>
            
            <div className="glass-card">
              <Layers className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Scalable Architecture</h3>
              <p className="text-sm md:text-base text-slate-600">
                Built to handle growth and increased usage over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Business Management Tools</h3>
              <p className="text-sm md:text-base text-slate-600">
                CRM systems, project management tools, inventory tracking, and custom dashboards.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Booking & Scheduling Systems</h3>
              <p className="text-sm md:text-base text-slate-600">
                Appointment booking, resource scheduling, calendar management, and reminders.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Data Processing Platforms</h3>
              <p className="text-sm md:text-base text-slate-600">
                Data analytics, reporting tools, automated workflows, and business intelligence.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SaaS Products</h3>
              <p className="text-sm md:text-base text-slate-600">
                Multi-tenant applications with subscription management and user billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Your Custom Application?"
        description="Let's discuss your requirements and create a solution tailored to your business."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
