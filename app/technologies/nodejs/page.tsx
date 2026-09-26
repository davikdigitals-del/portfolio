import Link from "next/link";
import { ArrowLeft, CheckCircle2, Server, Zap, Database, Star } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Node.js | Technologies I Use",
  description: "Learn about Node.js - JavaScript runtime for building fast, scalable server-side applications.",
};

export default function NodeJsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Node.js</h1>
          </div>
          <p className="text-xl text-slate-700 max-w-3xl">
            JavaScript runtime for building fast, scalable server-side applications and APIs. Perfect for real-time applications and modern web services.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4+", label: "Years Using Node.js" },
              { value: "15+", label: "Backend APIs Built" },
              { value: "1M+", label: "NPM Packages Available" },
              { value: "Top 3", label: "Backend Runtimes" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is Node.js?</h2>
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Node.js is a JavaScript runtime that lets developers use JavaScript for server-side programming. Instead of just running in the browser, JavaScript can now power the backend of your website or application.
              </p>
            </div>
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Companies like Netflix, LinkedIn, PayPal, and Uber use Node.js because it's fast, efficient, and perfect for handling many simultaneous connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Node.js</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Incredibly Fast", desc: "Non-blocking architecture handles thousands of connections efficiently." },
              { icon: Server, title: "Same Language", desc: "Use JavaScript for both frontend and backend development." },
              { icon: Database, title: "Real-Time Capable", desc: "Perfect for chat apps, live updates, and real-time features." },
              { icon: CheckCircle2, title: "Large Ecosystem", desc: "NPM has over 1 million packages for any functionality you need." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="glass-card">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">How I Use Node.js in Projects</h2>
          <div className="space-y-6">
            {[
              { step: "01", title: "REST API Development", desc: "Building clean, documented REST APIs that connect your frontend to databases, payment systems, and third-party services." },
              { step: "02", title: "Authentication Systems", desc: "Implementing secure JWT-based or session-based auth with password hashing, email verification, and role management." },
              { step: "03", title: "Database Integration", desc: "Connecting Node.js to databases like Supabase, MongoDB, or PostgreSQL with efficient query handling and data validation." },
              { step: "04", title: "Real-Time Features", desc: "Using WebSockets and libraries like Socket.io to add live chat, notifications, or real-time dashboard updates." },
            ].map((p, i) => (
              <div key={i} className="glass-card relative pl-16 md:pl-20">
                <div className="absolute left-4 top-4 md:left-6 md:top-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center font-bold text-sm md:text-base shadow-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Projects Built with Node.js</h2>
          <p className="text-center text-slate-600 mb-10">Real client backends powered by Node.js</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "One Medical", link: "/case-studies/one-medical", tag: "Healthcare Platform" },
              { name: "CourseVia", link: "/case-studies/coursevia-platform", tag: "E-Learning" },
              { name: "John Farath Homes", link: "/case-studies/john-farath-homes", tag: "Real Estate" },
              { name: "Shereen Hoban", link: "/case-studies/shereen-hoban-coaching", tag: "Coaching" },
              { name: "Hoffman Car Wash", link: "/case-studies/hoffman-carwash", tag: "Auto Service" },
              { name: "Hair Soda Salon", link: "/case-studies/hair-soda", tag: "Salon" },
            ].map((proj, i) => (
              <Link key={i} href={proj.link} className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-green-500 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-green-600 transition-colors">{proj.name}</h3>
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
              "Fast performance for handling many users simultaneously",
              "Real-time features like live chat and notifications",
              "Efficient data streaming for video and audio",
              "Easy to build RESTful APIs for your applications",
              "Scalable architecture that grows with your business",
              "Active community with tons of packages and tools",
              "Works great with modern databases",
              "Cost-effective hosting and deployment",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Fast, Scalable Backend?"
        description="Let's build powerful server-side solutions with Node.js."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
