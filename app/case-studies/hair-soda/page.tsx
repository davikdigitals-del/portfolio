import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Hair Soda - Salon Website | Case Study",
  description: "Modern salon website with online booking system and stunning gallery",
};

export default function HairSodaCaseStudy() {
  return (
    <div className="pt-20">
      {/* Hero with Project Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/portfolio1.png"
          alt="Hair Soda Salon Website"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-16">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hair Soda Salon
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Modern salon website with online booking and stunning visual presentation
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="glass-card text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-sm text-slate-600 mb-1">Timeline</div>
              <div className="font-bold text-slate-900">6 Weeks</div>
            </div>
            <div className="glass-card text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-sm text-slate-600 mb-1">Industry</div>
              <div className="font-bold text-slate-900">Beauty & Salon</div>
            </div>
            <div className="glass-card text-center">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-sm text-slate-600 mb-1">Services</div>
              <div className="font-bold text-slate-900">Design & Dev</div>
            </div>
            <div className="glass-card text-center">
              <ExternalLink className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-sm text-slate-600 mb-1">Live Site</div>
              <a href="https://hairsoda.ca/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-700">
                Visit Website
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Hair Soda needed a modern, visually stunning website that would showcase their salon services, 
                attract new clients, and provide an easy online booking experience. The website needed to reflect 
                their trendy brand identity while being functional and user-friendly.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Solution</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  I designed and developed a sleek, modern website featuring:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span><strong>Online Booking System:</strong> Integrated appointment scheduling with calendar sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span><strong>Service Showcase:</strong> Beautiful presentation of all salon services and pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span><strong>Portfolio Gallery:</strong> High-quality image gallery showcasing their best work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span><strong>Mobile Optimization:</strong> Fully responsive design for all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span><strong>SEO & Performance:</strong> Optimized for fast loading and search visibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">150%</div>
                  <div className="text-slate-700">Increase in Online Bookings</div>
                </div>
                <div className="glass-card text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">3x</div>
                  <div className="text-slate-700">More Website Traffic</div>
                </div>
                <div className="glass-card text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">45%</div>
                  <div className="text-slate-700">Lower Bounce Rate</div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Tailwind CSS", "Booking API", "Stripe", "Vercel"].map((tech, index) => (
                  <span key={index} className="glass-card px-4 py-2 text-sm font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Similar Results for Your Business?"
        description="Let's create a stunning website that drives real results for your business."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}
