import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { Palette, Code2, ShoppingCart, FileText, Layers, Wrench } from "lucide-react";

export const metadata = {
  title: "Services | Professional Website Design & Development",
  description: "Professional website design and development services to help your business succeed online. Custom websites, e-commerce, landing pages, and web applications.",
};

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Custom website designs that capture your brand identity and engage your target audience.",
    features: [
      "Responsive mobile-first design",
      "Modern UI/UX best practices",
      "Brand-aligned visual identity",
      "Conversion-optimized layouts",
    ],
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Fast, secure, and scalable websites built with cutting-edge technologies.",
    features: [
      "React, Next.js, WordPress",
      "SEO optimization",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online stores that drive sales and provide seamless shopping experiences.",
    features: [
      "Product catalog management",
      "Secure payment integration",
      "Inventory management",
      "Shopping cart & checkout",
    ],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions.",
    features: [
      "Focused messaging",
      "Clear call-to-actions",
      "Fast loading speeds",
      "A/B testing ready",
    ],
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "Custom web applications tailored to your business processes and requirements.",
    features: [
      "Full-stack development",
      "Database integration",
      "API development",
      "Cloud deployment",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website running smoothly.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Performance optimization",
      "Bug fixes & improvements",
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="container-custom text-center">
          <h1 className="section-title animate-slide-up">Services</h1>
          <p className="section-subtitle animate-fade-in">
            Professional website design and development services to help your business succeed online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Build Something Great"
        description="Ready to discuss your project? Get in touch and let's make it happen."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
