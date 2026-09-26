import Link from "next/link";
import { Palette, Code2, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Custom, modern website designs that reflect your brand and engage your audience.",
    gradient: "from-pink-400 to-rose-400",
    link: "/services/website-design",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive, and scalable websites built with the latest technologies.",
    gradient: "from-blue-400 to-cyan-400",
    link: "/services/web-development",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete online stores that drive sales and deliver great shopping experiences.",
    gradient: "from-purple-400 to-pink-400",
    link: "/services/ecommerce",
  },
];

export default function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle mt-4">Premium services tailored to your needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="block"
            >
              <div
                className="glass-card group hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className="relative mb-4 md:mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                  <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-slate-900 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{service.description}</p>

                {/* Hover indicator */}
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 rounded-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
