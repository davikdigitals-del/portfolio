import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Code, Bug } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "TypeScript | Technologies I Use",
  description: "Learn about TypeScript - JavaScript with type safety for more reliable, maintainable code.",
};

export default function TypeScriptPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/#technologies" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Technologies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-2xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">TypeScript</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            JavaScript with superpowers. TypeScript adds type safety to catch errors early and make code more reliable and maintainable.
          </p>
        </div>
      </section>

      {/* What is TypeScript */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">What is TypeScript?</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                TypeScript is JavaScript with extra features that help catch mistakes before your code even runs. Created by Microsoft, it's like having a safety net that catches bugs during development instead of after your website is live.
              </p>
            </div>
            
            <div className="glass-card">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Major companies like Microsoft, Google, Airbnb, and Slack use TypeScript because it makes large codebases easier to maintain and reduces bugs in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Use TypeScript */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Why I Use TypeScript</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="glass-card">
              <Bug className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Catch Errors Early</h3>
              <p className="text-sm md:text-base text-slate-600">
                TypeScript finds bugs while coding, not after your site is live, saving time and headaches.
              </p>
            </div>
            
            <div className="glass-card">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">More Reliable Code</h3>
              <p className="text-sm md:text-base text-slate-600">
                Type safety means fewer runtime errors and more confidence in your code.
              </p>
            </div>
            
            <div className="glass-card">
              <Code className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Better Development</h3>
              <p className="text-sm md:text-base text-slate-600">
                Smart code completion and documentation make development faster and easier.
              </p>
            </div>
            
            <div className="glass-card">
              <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Easy Maintenance</h3>
              <p className="text-sm md:text-base text-slate-600">
                Makes code easier to understand and update as your project grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Your Project */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Benefits for Your Project</h2>
          
          <div className="space-y-4">
            {[
              "Fewer bugs in production means happier users",
              "Faster development with better tooling support",
              "Easier to add features without breaking existing code",
              "Self-documenting code is easier to understand",
              "Refactoring is safer with type checking",
              "Better collaboration when working with teams",
              "Industry-standard for modern web development",
              "Long-term cost savings through better code quality",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use TypeScript */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Perfect For</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Large Projects</h3>
              <p className="text-sm md:text-base text-slate-600">
                Projects with lots of code benefit most from TypeScript's safety and maintainability.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Team Collaboration</h3>
              <p className="text-sm md:text-base text-slate-600">
                Clear types make it easier for multiple developers to work together effectively.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Long-Term Projects</h3>
              <p className="text-sm md:text-base text-slate-600">
                Projects that need to be maintained and updated over time benefit from TypeScript's reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Reliable, Bug-Free Code?"
        description="Let's build your project with TypeScript for better quality and maintainability."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
