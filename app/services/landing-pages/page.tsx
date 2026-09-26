import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Target, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Landing Pages | High-Converting Page Design",
  description: "Professional landing page design and development focused on converting visitors into customers.",
};

export default function LandingPagesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-2xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Landing Pages</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            High-converting landing pages designed to capture leads, drive sales, and achieve specific marketing goals.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What's Included</h2>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              "Conversion-Focused Design",
              "Compelling Headlines & Copy",
              "Strong Call-to-Actions",
              "Lead Capture Forms",
              "Mobile Responsive",
              "Fast Loading Speed",
              "A/B Testing Ready",
              "Analytics Integration",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-orange-600 flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Key Elements of Effective Landing Pages</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Target className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Clear Value Proposition</h3>
              <p className="text-sm md:text-base text-slate-600">
                Immediately communicate what you offer and why visitors should care.
              </p>
            </div>
            
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Single Focus</h3>
              <p className="text-sm md:text-base text-slate-600">
                One clear goal with no distractions to maximize conversions.
              </p>
            </div>
            
            <div className="glass-card">
              <FileText className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Compelling Copy</h3>
              <p className="text-sm md:text-base text-slate-600">
                Persuasive headlines and copy that drives action.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Social Proof</h3>
              <p className="text-sm md:text-base text-slate-600">
                Trust signals like testimonials, reviews, and client logos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Product Launches</h3>
              <p className="text-sm md:text-base text-slate-600">
                Generate buzz and collect leads before launching your new product or service.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Lead Generation</h3>
              <p className="text-sm md:text-base text-slate-600">
                Capture email addresses and build your marketing list with targeted offers.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Marketing Campaigns</h3>
              <p className="text-sm md:text-base text-slate-600">
                Support your ad campaigns with dedicated landing pages that convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Boost Your Conversions?"
        description="Let's create a landing page that turns visitors into customers."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
