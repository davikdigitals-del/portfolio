import Link from "next/link";
import { ArrowLeft, Rocket, CheckCircle2, HeadphonesIcon, TrendingUp, RefreshCw } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Launch & Support | My Process",
  description: "Learn about the launch phase and ongoing support to keep your website running smoothly.",
};

export default function LaunchSupportPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-slate-800 mb-6">
            <span className="text-sm font-semibold">Step 04</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Launch & Support</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            Launching your website to the world and providing ongoing support to ensure everything runs smoothly.
          </p>
        </div>
      </section>

      {/* Launch Process */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Launch Process</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Rocket className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Deployment</h3>
              <p className="text-sm md:text-base text-slate-600">
                Deploying your website to production servers with proper configuration and SSL certificate.
              </p>
            </div>
            
            <div className="glass-card">
              <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SEO Setup</h3>
              <p className="text-sm md:text-base text-slate-600">
                Setting up analytics, search console, sitemaps, and SEO configurations.
              </p>
            </div>
            
            <div className="glass-card">
              <HeadphonesIcon className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Training</h3>
              <p className="text-sm md:text-base text-slate-600">
                Providing documentation and training on how to manage your website content.
              </p>
            </div>
            
            <div className="glass-card">
              <RefreshCw className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Monitoring</h3>
              <p className="text-sm md:text-base text-slate-600">
                Setting up uptime monitoring and performance tracking to catch any issues early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Ongoing Support Options</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Regular Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Keeping your website up-to-date with the latest security patches, plugin updates, and technology improvements.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance Monitoring</h3>
              <p className="text-sm md:text-base text-slate-600">
                Continuous monitoring of site performance, uptime, and load times with proactive optimization.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Bug Fixes</h3>
              <p className="text-sm md:text-base text-slate-600">
                Quick resolution of any bugs or issues that arise after launch with priority support.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Content Updates</h3>
              <p className="text-sm md:text-base text-slate-600">
                Assistance with content updates, new pages, feature additions, and ongoing improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included at Launch */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">What's Included at Launch</h2>
          
          <div className="space-y-4">
            {[
              "Domain and hosting setup assistance",
              "SSL certificate installation for secure HTTPS",
              "Google Analytics and Search Console setup",
              "SEO optimization and sitemap submission",
              "Complete documentation and user guides",
              "30 days of free post-launch support",
              "Training session for content management",
              "Performance and security monitoring setup",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Launch Your Website?"
        description="Let's get your website live and thriving with expert support."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
