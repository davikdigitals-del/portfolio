import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Web Development Services | Fast, Secure & Scalable Websites",
  description: "Professional web development services using modern technologies. Fast, secure, and scalable websites built with React, Next.js, and more.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-blob" />
        
        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-2xl">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">Web Development</h1>
          </div>
          
          <p className="text-xl text-slate-700 max-w-3xl">
            Fast, secure, and scalable websites built with cutting-edge technologies and best practices for optimal performance.
          </p>
        </div>
      </section>

      {/* Technologies I Use */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Technologies I Use</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            I work with modern, industry-standard technologies to build fast, reliable websites
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "WordPress",
              "Supabase",
              "PostgreSQL",
              "MongoDB",
              "Vercel",
              "AWS",
              "REST APIs",
            ].map((tech, index) => (
              <div key={index} className="glass-card px-4 md:px-6 py-2 md:py-3 font-semibold text-sm md:text-base text-slate-700">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">What's Included</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Clean, Maintainable Code",
              "Responsive Design Implementation",
              "SEO Optimization",
              "Performance Optimization",
              "Cross-Browser Compatibility",
              "Security Best Practices",
              "API Integration",
              "Database Setup & Management",
              "Content Management System",
              "Cloud Deployment",
              "SSL Certificate Setup",
              "Analytics Integration",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">My Development Approach</h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Planning & Architecture",
                description: "Define the technical requirements, choose the right tech stack, and plan the application architecture for scalability and maintainability.",
              },
              {
                step: "02",
                title: "Development & Integration",
                description: "Write clean, efficient code following best practices. Integrate APIs, databases, and third-party services as needed.",
              },
              {
                step: "03",
                title: "Testing & Quality Assurance",
                description: "Thoroughly test across devices, browsers, and screen sizes. Fix bugs and optimize performance for the best user experience.",
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "Deploy to production with proper configuration, SSL, and monitoring. Provide documentation and training for your team.",
              },
            ].map((process, index) => (
              <div key={index} className="glass-card relative">
                <div className="absolute -left-4 top-6 md:-left-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-white w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                  {process.step}
                </div>
                <div className="pl-12 md:pl-16">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-slate-900">{process.title}</h3>
                  <p className="text-sm md:text-lg text-slate-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose My Development Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Why Choose My Development Services</h2>
          
          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Performance-First</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                I optimize every aspect of your website for speed. Fast loading times improve user experience, SEO rankings, and conversion rates.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Secure & Reliable</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Security is built in from day one. I follow best practices for authentication, data protection, and secure coding to keep your site safe.
              </p>
            </div>
            
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Scalable Solutions</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Your website is built to grow with your business. Clean code architecture and modern frameworks ensure your site can scale as your traffic increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Powerful?"
        description="Let's develop a fast, secure website that helps your business succeed online."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
