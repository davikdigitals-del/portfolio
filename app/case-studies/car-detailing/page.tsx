import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Premium Car Detailing - Auto Service Website | Case Study",
};

export default function CarDetailingCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Premium Car Detailing"
      subtitle="Sleek website for professional car detailing with package options"
      image="/portfolio9.png"
      timeline="5 Weeks"
      industry="Auto Detailing"
      liveUrl="#"
      challenge="This premium car detailing business needed a sophisticated website to showcase their high-end detailing services, attract luxury car owners, and provide easy online booking. The site had to reflect the premium quality of their service while being user-friendly."
      solutionIntro="I created a premium platform featuring:"
      solutionPoints={[
        "<strong>Service Packages:</strong> Detailed breakdown of detailing packages with pricing",
        "<strong>Before & After Gallery:</strong> Stunning photo galleries showcasing transformation results",
        "<strong>Online Booking:</strong> Easy appointment scheduling with service selection",
        "<strong>Mobile Detailing:</strong> Location-based service area finder",
        "<strong>Customer Reviews:</strong> Integrated review system with photo submissions",
        "<strong>Membership Program:</strong> Recurring service plans with exclusive benefits"
      ]}
      results={[
        { value: "190%", label: "Booking Increase" },
        { value: "4.9/5", label: "Customer Rating" },
        { value: "80%", label: "Repeat Customers" }
      ]}
      technologies={["React", "Next.js", "Tailwind CSS", "Booking API", "Google Maps"]}
    />
  );
}
