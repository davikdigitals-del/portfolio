import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";
import Image from "next/image";

export const metadata = {
  title: "Case Studies | Portfolio of Successful Projects",
  description: "Real projects, real results. See how I've helped businesses succeed online through custom website design and development.",
};

const caseStudies = [
  {
    title: "E-Commerce Platform Redesign",
    client: "Retail Company",
    description: "Complete redesign of an online store, resulting in 150% increase in conversions and improved user experience.",
    tags: ["E-Commerce", "UI/UX", "React"],
    image: "/portfolio1.png",
    link: "#",
  },
  {
    title: "Corporate Website Development",
    client: "Tech Startup",
    description: "Modern, responsive corporate website with custom CMS integration and SEO optimization.",
    tags: ["Web Development", "WordPress", "SEO"],
    image: "/portfolio2.png",
    link: "#",
  },
  {
    title: "Landing Page Optimization",
    client: "SaaS Company",
    description: "High-converting landing page that increased sign-ups by 200% through strategic design and copy.",
    tags: ["Landing Page", "Conversion Optimization", "A/B Testing"],
    image: "/portfolio3.png",
    link: "#",
  },
  {
    title: "Restaurant Website & Online Ordering",
    client: "Local Restaurant",
    description: "Custom website with integrated online ordering system, menu management, and delivery tracking.",
    tags: ["Web App", "E-Commerce", "Integration"],
    image: "/portfolio4.png",
    link: "#",
  },
  {
    title: "Portfolio Website for Photographer",
    client: "Creative Professional",
    description: "Stunning portfolio website showcasing photography work with custom gallery and blog.",
    tags: ["Portfolio", "Visual Design", "CMS"],
    image: "/portfolio5.png",
    link: "#",
  },
  {
    title: "Real Estate Platform",
    client: "Property Agency",
    description: "Full-featured real estate platform with property listings, search filters, and inquiry forms.",
    tags: ["Web App", "Database", "Search"],
    image: "/portfolio6.png",
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="container-custom text-center">
          <h1 className="section-title animate-slide-up">Case Studies</h1>
          <p className="section-subtitle animate-fade-in">
            Real projects, real results. See how I've helped businesses succeed online.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Portfolio Images */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">More Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[7, 8, 9].map((num) => (
              <div key={num} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <Image
                  src={`/portfolio${num}.png`}
                  alt={`Portfolio ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want Similar Results?"
        description="Let's discuss how I can help your business achieve its goals."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}
