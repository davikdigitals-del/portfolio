import Link from "next/link";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description: "We discuss your goals, target audience, and requirements to create a clear roadmap for your project.",
    gradient: "from-yellow-400 to-orange-400",
    link: "/process/discovery-planning",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Prototype",
    description: "I craft beautiful, user-friendly designs that align with your brand and engage your visitors.",
    gradient: "from-pink-400 to-rose-400",
    link: "/process/design-prototype",
  },
  {
    icon: Code,
    number: "03",
    title: "Development & Testing",
    description: "Your website is built with clean code, optimized for performance, and tested across all devices.",
    gradient: "from-blue-400 to-cyan-400",
    link: "/process/development-testing",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "We launch your site and I provide ongoing support to ensure everything runs smoothly.",
    gradient: "from-purple-400 to-pink-400",
    link: "/process/launch-support",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle mt-4">
            A streamlined process to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <Link
              key={index}
              href={step.link}
              className="block"
            >
              <div
                className="glass-card group hover:scale-105 transition-all duration-500 relative cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -right-4 text-4xl md:text-6xl font-bold text-white/10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative mb-4 md:mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
