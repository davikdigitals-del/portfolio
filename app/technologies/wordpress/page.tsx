import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileEdit, Users, Puzzle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "WordPress | Technologies I Use",
  description: "Learn about WordPress - the world's most popular content management system for building websites.",
};

export default function WordPressPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl">
              <FileEdit className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">WordPress</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            The world's most popular content management system. WordPress powers over 40% of all websites on the internet.
          </p>
        </div>
      </section>

      {/* What is WordPress */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is WordPress?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                WordPress is a free, open-source content management system (CMS) that makes it easy to create and manage websites. It started as a blogging platform but has evolved into a powerful tool for building any type of website.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Used by major brands like The White House, Sony, Microsoft, and millions of small businesses, WordPress is trusted, reliable, and incredibly flexible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use WordPress */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use WordPress</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <FileEdit className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Easy to Manage</h3>
              <p className="text-sm md:text-base text-slate-600">
                Update content, add pages, and manage your site without needing technical skills.
              </p>
            </div>
            
            <div className="glass-card">
              <Puzzle className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Thousands of Plugins</h3>
              <p className="text-sm md:text-base text-slate-600">
                Extend functionality with 60,000+ plugins for forms, SEO, e-commerce, and more.
              </p>
            </div>
            
            <div className="glass-card">
              <Users className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Huge Community</h3>
              <p className="text-sm md:text-base text-slate-600">
                Millions of users and developers mean tons of resources, tutorials, and support.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">SEO Friendly</h3>
              <p className="text-sm md:text-base text-slate-600">
                Built-in SEO features help your website rank well in search engines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Business</h2>
          
          <div className="space-y-4">
            {[
              "You can update content yourself without hiring a developer",
              "Cost-effective solution with free core software",
              "Thousands of themes for any design style",
              "Easy to add blogs, portfolios, stores, and more",
              "Mobile responsive themes out of the box",
              "Regular updates and security patches",
              "Scales from small blogs to enterprise sites",
              "WooCommerce for powerful e-commerce",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
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
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Business Websites</h3>
              <p className="text-sm md:text-base text-slate-600">
                Professional company websites with easy content management and blog functionality.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Blogs & News Sites</h3>
              <p className="text-sm md:text-base text-slate-600">
                Originally built for blogging, WordPress excels at content-heavy sites and publications.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">E-Commerce Stores</h3>
              <p className="text-sm md:text-base text-slate-600">
                WooCommerce plugin turns WordPress into a full-featured online store.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want an Easy-to-Manage WordPress Website?"
        description="Let's build a WordPress site you can update yourself without any technical knowledge."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
