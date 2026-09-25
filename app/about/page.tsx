import Image from "next/image";
import CTASection from "@/components/CTASection";
import { CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Me | Ajibola Gbenga Joseph - Website Designer & Developer",
  description: "Learn more about Ajibola Gbenga Joseph, a professional website designer and developer with 5+ years of experience creating beautiful, functional websites for businesses worldwide.",
};

const features = [
  "Visually Stunning: Modern designs that capture attention and reflect your brand",
  "Lightning Fast: Optimized for speed to keep visitors engaged",
  "Mobile Responsive: Perfect experience on all devices",
  "Conversion-Focused: Designed to turn visitors into customers",
];

const technologies = [
  { name: "React", gradient: "from-blue-400 to-cyan-400" },
  { name: "Next.js", gradient: "from-slate-700 to-slate-900" },
  { name: "TypeScript", gradient: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", gradient: "from-cyan-400 to-blue-500" },
  { name: "WordPress", gradient: "from-blue-500 to-indigo-600" },
  { name: "Node.js", gradient: "from-green-500 to-emerald-600" },
  { name: "Supabase", gradient: "from-emerald-400 to-green-500" },
  { name: "Vercel", gradient: "from-slate-800 to-black" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header with animated background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-slate-800 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Get to Know Me</span>
          </div>
          <h1 className="section-title animate-slide-up">About Me</h1>
          <p className="section-subtitle animate-fade-in mt-4">
            Professional website designer and developer based in Nigeria
          </p>
        </div>
      </section>

      {/* Introduction with Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-10 animate-blob" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Glass Image Frame */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-[3rem] blur-2xl opacity-30 animate-glow" />
              <div className="relative glass-card p-3">
                <div className="relative h-96 md:h-full min-h-[400px] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/me.webp"
                    alt="Ajibola Gbenga Joseph"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Hi, I'm Ajibola Gbenga Joseph</h2>
              <div className="glass-card">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm a passionate website designer and developer with over 5 years of experience
                  creating beautiful, functional websites for businesses worldwide. My mission is
                  to help businesses establish a strong online presence through custom website solutions.
                </p>
              </div>
              <div className="glass-card">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Every project is unique, and I take the time to understand your business goals,
                  target audience, and specific requirements. I work closely with clients throughout
                  the entire process, from initial concept to final launch and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-10 animate-blob" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle mt-4">
              I specialize in designing and developing custom websites that are:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card flex items-start gap-4 hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur-md opacity-40" />
                  <div className="relative bg-gradient-to-r from-blue-400 to-cyan-400 p-2 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-slate-700 font-medium flex-1">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-blob" />

        <div className="container-custom max-w-4xl relative z-10">
          <h2 className="section-title text-center mb-12">My Approach</h2>
          <div className="space-y-6">
            <div className="glass-card hover:scale-[1.02] transition-all duration-500">
              <p className="text-lg text-slate-700 leading-relaxed">
                Every project is unique, and I take the time to understand your business goals,
                target audience, and specific requirements. I work closely with clients throughout
                the entire process, from initial concept to final launch and beyond.
              </p>
            </div>
            <div className="glass-card hover:scale-[1.02] transition-all duration-500">
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you need a simple landing page, a complete e-commerce solution, or a
                custom web application, I deliver solutions that exceed expectations and drive
                real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl opacity-10 animate-blob" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">Technologies I Work With</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className="relative glass-card px-6 py-3 font-bold text-slate-700 hover:text-slate-900">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Work Together"
        description="Have a project in mind? I'd love to hear about it."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  );
}
