import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Hoffman Car Wash - Auto Service Website | Case Study",
};

export default function HoffmanCarwashCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Hoffman Car Wash"
      subtitle="Modern car wash website with membership plans and location finder"
      image="/portfolio3.png"
      timeline="5 Weeks"
      industry="Auto Service"
      liveUrl="https://www.hoffmancarwash.com/"
      challenge="Hoffman Car Wash needed a clean, modern website to showcase their services, sell membership plans, and help customers find locations easily. They wanted to increase online membership sales and improve customer experience."
      solutionIntro="I created a streamlined website with:"
      solutionPoints={[
        "<strong>Service Packages:</strong> Clear presentation of wash packages and pricing",
        "<strong>Membership System:</strong> Online signup and management for unlimited plans",
        "<strong>Location Finder:</strong> Interactive map with all locations and services",
        "<strong>Mobile App Integration:</strong> Connect with their mobile wash pass app",
        "<strong>Online Payment:</strong> Secure payment processing for memberships",
        "<strong>Loyalty Program:</strong> Rewards tracking and special offers"
      ]}
      results={[
        { value: "180%", label: "Membership Growth" },
        { value: "4.8/5", label: "Customer Rating" },
        { value: "70%", label: "Mobile Traffic" }
      ]}
      technologies={["React", "Next.js", "Google Maps API", "Stripe", "WordPress"]}
    />
  );
}
