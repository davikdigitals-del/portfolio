import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileEdit, Users, Puzzle, Star } from "lucide-react";
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

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "5+", label: "Years Using WordPress" },
              { value: "15+", label: "WordPress Sites Built" },
              { value: "43%", label: "of the Web Runs on It" },
              { value: "60K+", label: "Available Plugins" },
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

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use WordPress</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: FileEdit, title: "Easy to Manage", desc: "Update content, add pages, and manage your site without needing technical skills." },
              { icon: Puzzle, title: "Thousands of Plugins", desc: "Extend functionality with 60,000+ plugins for forms, SEO, e-commerce, and more." },
              { icon: Users, title: "Huge Community", desc: "Millions of users and developers mean tons of resources, tutorials, and support." },
              { icon: CheckCircle2, title: "SEO Friendly", desc: "Built-in SEO features help your website rank well in search engines." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use WordPress in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "Custom Theme Development", desc: "I build fully custom WordPress themes from scratch — no bloated page builders, just clean, fast, hand-coded templates." },
              { step: "02", title: "Plugin Configuration", desc: "Selecting and configuring only the essential plugins for SEO, forms, speed, and security — keeping the site lightweight." },
              { step: "03", title: "WooCommerce Setup", desc: "Building complete online stores on WooCommerce with payment gateways, inventory, shipping, and custom product pages." },
              { step: "04", title: "Client Training", desc: "After launch, I train clients to manage their own content confidently — adding pages, posts, and images without needing a developer." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with WordPress</h2>
          <p className="text-center text-slate-600 mb-10">Real client websites powered by WordPress</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Hoffman Car Wash", link: "/case-studies/hoffman-carwash", tag: "Auto Service" },
              { name: "Matt Construction", link: "/case-studies/matt-construction", tag: "Construction" },
              { name: "Interiors Design", link: "/case-studies/interiors-design", tag: "Interior Design" },
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-blue-500 mb-2" />
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
              "You can update content yourself without a developer",
              "Cost-effective with free core software",
              "Thousands of themes for any design style",
              "Easy to add blogs, portfolios, stores, and more",
              "Mobile responsive themes out of the box",
              "Regular updates and security patches",
              "Scales from small blogs to enterprise sites",
              "WooCommerce for powerful e-commerce",
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
        title="Want an Easy-to-Manage WordPress Website?"
        description="Let's build a WordPress site you can update yourself without any technical knowledge."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
