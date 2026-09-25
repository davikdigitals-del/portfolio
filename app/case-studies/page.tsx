import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";
import Image from "next/image";

export const metadata = {
  title: "Portfolio | Real Projects & Success Stories",
  description: "Real projects, real results. See how I've helped businesses succeed online through custom website design and development.",
};

const caseStudies = [
  {
    title: "Hair Soda - Salon Website",
    client: "Hair Salon",
    description: "Modern salon website with online booking system, service showcase, and stunning gallery to attract new clients.",
    tags: ["Web Design", "Booking System", "Beauty"],
    image: "/portfolio1.png",
    link: "/case-studies/hair-soda",
  },
  {
    title: "One Medical - Healthcare Platform",
    client: "Medical Practice",
    description: "Professional medical website with patient portal, appointment scheduling, and comprehensive health information.",
    tags: ["Healthcare", "Web Development", "Portal"],
    image: "/portfolio2.png",
    link: "/case-studies/one-medical",
  },
  {
    title: "Hoffman Car Wash - Auto Service",
    client: "Car Wash Business",
    description: "Clean, modern website for car wash services with membership plans, location finder, and service packages.",
    tags: ["Service Business", "E-Commerce", "Auto"],
    image: "/portfolio3.png",
    link: "/case-studies/hoffman-carwash",
  },
  {
    title: "Interiors - Design Studio",
    client: "Interior Design Firm",
    description: "Elegant portfolio website showcasing interior design projects with beautiful galleries and design services.",
    tags: ["Portfolio", "Design", "Luxury"],
    image: "/portfolio4.png",
    link: "/case-studies/interiors-design",
  },
  {
    title: "John Farath Homes - Real Estate",
    client: "Real Estate Agency",
    description: "Full-featured real estate platform with property listings, virtual tours, and advanced search filters.",
    tags: ["Real Estate", "Property Search", "CRM"],
    image: "/portfolio5.png",
    link: "/case-studies/john-farath-homes",
  },
  {
    title: "Shereen Hoban - Coaching",
    client: "Life Coach",
    description: "Personal brand website for life coaching services with blog, resources, and online booking.",
    tags: ["Coaching", "Personal Brand", "Blog"],
    image: "/portfolio6.png",
    link: "/case-studies/shereen-hoban-coaching",
  },
  {
    title: "Matt Construction - Building Company",
    client: "Construction Firm",
    description: "Professional construction company website showcasing projects, services, and company capabilities.",
    tags: ["Construction", "Corporate", "Portfolio"],
    image: "/portfolio7.png",
    link: "/case-studies/matt-construction",
  },
  {
    title: "CourseVia - Education Platform",
    client: "Online Learning",
    description: "Complete e-learning platform with course management, student dashboard, and payment integration.",
    tags: ["Education", "E-Learning", "Platform"],
    image: "/portfolio8.png",
    link: "/case-studies/coursevia-platform",
  },
  {
    title: "Premium Car Detailing",
    client: "Auto Detailing Service",
    description: "Sleek website for professional car detailing services with package options and online booking.",
    tags: ["Auto Service", "Booking", "Premium"],
    image: "/portfolio9.png",
    link: "/case-studies/car-detailing",
  },
];

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20">
        <div className="container-custom text-center">
          <h1 className="section-title animate-slide-up">Portfolio</h1>
          <p className="section-subtitle animate-fade-in">
            Real projects, real results. See how I've helped businesses succeed online.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
