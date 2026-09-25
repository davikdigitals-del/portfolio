import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "John Farath Homes - Real Estate Website | Case Study",
};

export default function JohnFarathHomesCaseStudy() {
  return (
    <CaseStudyTemplate
      title="John Farath Homes"
      subtitle="Full-featured real estate platform with advanced property search"
      image="/portfolio5.png"
      timeline="10 Weeks"
      industry="Real Estate"
      liveUrl="https://www.johnfarhathomes.com/"
      challenge="John Farath Homes needed a powerful real estate platform to showcase property listings, provide advanced search capabilities, virtual tours, and integrate with MLS systems. The website had to stand out in a competitive market."
      solutionIntro="I built a comprehensive real estate platform with:"
      solutionPoints={[
        "<strong>Property Listings:</strong> Dynamic listings with high-quality photos and detailed information",
        "<strong>Advanced Search:</strong> Filters for price, location, features, and property type",
        "<strong>Virtual Tours:</strong> 360° property tours and video walkthroughs",
        "<strong>MLS Integration:</strong> Real-time property data synchronization",
        "<strong>Mortgage Calculator:</strong> Built-in financing tools for buyers",
        "<strong>Agent Portal:</strong> CRM system for lead management and client communication"
      ]}
      results={[
        { value: "300%", label: "Increase in Leads" },
        { value: "95%", label: "Lead Quality Score" },
        { value: "50%", label: "Faster Property Sales" }
      ]}
      technologies={["React", "Next.js", "TypeScript", "Prisma", "AWS S3", "SendGrid"]}
    />
  );
}
