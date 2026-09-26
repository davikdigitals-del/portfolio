import Link from "next/link";
import { ArrowLeft, CheckCircle2, Server, Zap, Database } from "lucide-react";
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

      {/* What is Node.js */}
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

      {/* Why I Use Node.js */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use Node.js</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Incredibly Fast</h3>
              <p className="text-sm md:text-base text-slate-600">
                Non-blocking architecture handles thousands of connections efficiently.
              </p>
            </div>
            
            <div className="glass-card">
              <Server className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Same Language</h3>
              <p className="text-sm md:text-base text-slate-600">
                Use JavaScript for both frontend and backend development.
              </p>
            </div>
            
            <div className="glass-card">
              <Database className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Real-Time Capable</h3>
              <p className="text-sm md:text-base text-slate-600">
                Perfect for chat apps, live updates, and real-time features.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Large Ecosystem</h3>
              <p className="text-sm md:text-base text-slate-600">
                NPM has over 1 million packages for any functionality you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Project</h2>
          
          <div className="space-y-4">
            {[
              "Fast performance for handling many users simultaneously",
              "Real-time features like live chat and notifications",
              "Efficient data streaming for video and audio",
              "Easy to build RESTful APIs for your applications",
              "Scalable architecture that grows with your business",
              "Active community with tons of packages and tools",
              "Works great with modern databases",
              "Cost-effective hosting and deployment",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
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
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">APIs & Backends</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build fast, efficient APIs to power your web and mobile applications.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Real-Time Applications</h3>
              <p className="text-sm md:text-base text-slate-600">
                Chat applications, collaboration tools, live dashboards, and gaming platforms.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Microservices</h3>
              <p className="text-sm md:text-base text-slate-600">
                Build modular, scalable backend services that can grow independently.
              </p>
            </div>
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
