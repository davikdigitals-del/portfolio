import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Interiors - Design Studio Website | Case Study",
};

export default function InteriorsDesignCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Interiors Design Studio"
      subtitle="Elegant portfolio website for luxury interior design firm"
      image="/portfolio4.png"
      timeline="7 Weeks"
      industry="Interior Design"
      liveUrl="https://interiors.co.nz/"
      challenge="Interiors needed a sophisticated website that would showcase their high-end design projects, attract affluent clients, and communicate their design philosophy. The site needed to be visually stunning while maintaining fast performance."
      solutionIntro="I designed an elegant platform featuring:"
      solutionPoints={[
        "<strong>Project Portfolio:</strong> Beautiful galleries showcasing completed projects",
        "<strong>Design Services:</strong> Clear presentation of residential and commercial services",
        "<strong>Virtual Tours:</strong> 360° views of selected interior spaces",
        "<strong>Design Blog:</strong> Trend insights and design inspiration articles",
        "<strong>Consultation Booking:</strong> Easy scheduling for design consultations",
        "<strong>Client Testimonials:</strong> Video and written reviews from satisfied clients"
      ]}
      results={[
        { value: "250%", label: "Increase in Inquiries" },
        { value: "90%", label: "Project Conversion Rate" },
        { value: "5x", label: "Social Media Engagement" }
      ]}
      technologies={["Next.js", "Tailwind CSS", "Sanity CMS", "Cloudinary", "Vercel"]}
    />
  );
}
