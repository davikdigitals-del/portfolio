import Link from "next/link";
import { ArrowLeft, CheckCircle2, Wrench, Shield, Zap, HeadphonesIcon } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website Maintenance | Ongoing Support & Updates",
  description: "Professional website maintenance and support services to keep your site running smoothly.",
};

export default function WebsiteMaintenancePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-emerald-400 to-teal-400 p-4 rounded-2xl">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Website Maintenance</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            Ongoing support and maintenance to keep your website secure, fast, and running smoothly 24/7.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Maintenance Services</h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              "Regular Updates",
              "Security Monitoring",
              "Performance Optimization",
              "Backup & Recovery",
              "Bug Fixes",
              "Content Updates",
              "Uptime Monitoring",
              "Technical Support",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-emerald-600 flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why Maintenance Matters</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Security</h3>
              <p className="text-sm md:text-base text-slate-600">
                Regular updates protect your site from hackers and security vulnerabilities.
              </p>
            </div>
            
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance</h3>
              <p className="text-sm md:text-base text-slate-600">
                Optimization keeps your site fast and improves user experience.
              </p>
            </div>
            
            <div className="glass-card">
              <Wrench className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Reliability</h3>
              <p className="text-sm md:text-base text-slate-600">
                Proactive maintenance prevents problems before they affect your business.
              </p>
            </div>
            
            <div className="glass-card">
              <HeadphonesIcon className="w-8 h-8 md:w-12 md:h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Support</h3>
              <p className="text-sm md:text-base text-slate-600">
                Get help when you need it with priority technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Regular Maintenance Tasks</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Software Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Keep your CMS, plugins, themes, and frameworks updated to the latest secure versions.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Security Scans</h3>
              <p className="text-sm md:text-base text-slate-600">
                Regular malware scans, security audits, and vulnerability assessments.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance Monitoring</h3>
              <p className="text-sm md:text-base text-slate-600">
                Track site speed, uptime, and user experience metrics with proactive optimization.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Content Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Help with updating text, images, adding new pages, or making design tweaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Flexible Plans</h2>
          
          <div className="space-y-4">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Monthly Plans</h3>
              <p className="text-sm md:text-base text-slate-600">
                Ongoing monthly maintenance with regular updates, monitoring, and support hours included.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">One-Time Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Need a quick fix or update? I offer one-time maintenance services as well.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Emergency Support</h3>
              <p className="text-sm md:text-base text-slate-600">
                Priority support for urgent issues that need immediate attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Maintaining Your Website?"
        description="Let me handle the technical stuff so you can focus on your business."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
