import Link from "next/link";
import { ArrowLeft, Lightbulb, CheckCircle2, Target, Users, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Discovery & Planning | My Process",
  description: "Learn about the discovery and planning phase where we discuss your goals, target audience, and requirements.",
};

export default function DiscoveryPlanningPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-slate-800 mb-6">
            <span className="text-sm font-semibold">Step 01</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-2xl">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Discovery & Planning</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            The foundation of every successful project. We discuss your goals, understand your audience, and create a clear roadmap for success.
          </p>
        </div>
      </section>

      {/* What Happens */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What Happens in Discovery & Planning</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Target className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Goal Definition</h3>
              <p className="text-sm md:text-base text-slate-600">
                We identify your business objectives, success metrics, and what you want to achieve with your website.
              </p>
            </div>
            
            <div className="glass-card">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Audience Research</h3>
              <p className="text-sm md:text-base text-slate-600">
                Understanding your target audience, their needs, preferences, and how they'll interact with your site.
              </p>
            </div>
            
            <div className="glass-card">
              <FileText className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Requirements Gathering</h3>
              <p className="text-sm md:text-base text-slate-600">
                Documenting all features, functionality, content, and technical requirements for the project.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Project Roadmap</h3>
              <p className="text-sm md:text-base text-slate-600">
                Creating a clear timeline with milestones, deliverables, and deadlines for the entire project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Key Questions We'll Discuss</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">What are your business goals?</h3>
              <p className="text-sm md:text-base text-slate-600">
                Increase sales, generate leads, build brand awareness, provide information, or streamline processes?
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Who is your target audience?</h3>
              <p className="text-sm md:text-base text-slate-600">
                Demographics, behaviors, pain points, and what they're looking for from your website.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">What features do you need?</h3>
              <p className="text-sm md:text-base text-slate-600">
                Contact forms, e-commerce, booking systems, user accounts, integrations with other tools?
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Do you have existing branding?</h3>
              <p className="text-sm md:text-base text-slate-600">
                Logo, colors, fonts, brand guidelines, or do we need to create a fresh visual identity?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">What You'll Receive</h2>
          
          <div className="space-y-4">
            {[
              "Project scope document outlining all features and functionality",
              "Detailed timeline with milestones and deliverables",
              "Target audience personas and user journey maps",
              "Sitemap showing all pages and site structure",
              "Technical requirements specification",
              "Budget breakdown and payment schedule",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Planning Your Project?"
        description="Let's discuss your goals and create a roadmap for success."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
