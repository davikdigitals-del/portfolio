import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Matt Construction - Building Company Website | Case Study",
};

export default function MattConstructionCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Matt Construction"
      subtitle="Professional construction company website showcasing major projects"
      image="/portfolio7.png"
      timeline="8 Weeks"
      industry="Construction"
      liveUrl="https://www.mattconstruction.com/"
      challenge="Matt Construction needed a professional website to showcase their large-scale construction projects, communicate their capabilities, attract new clients, and recruit skilled workers. The site needed to convey trust and expertise in the construction industry."
      solutionIntro="I developed a corporate platform featuring:"
      solutionPoints={[
        "<strong>Project Portfolio:</strong> Detailed case studies of completed construction projects",
        "<strong>Services Overview:</strong> Comprehensive breakdown of construction services",
        "<strong>Company Capabilities:</strong> Team expertise, certifications, and equipment",
        "<strong>Career Portal:</strong> Job listings and online application system",
        "<strong>Project Inquiry Form:</strong> RFP submission and quote request system",
        "<strong>Safety Standards:</strong> Company safety protocols and certifications display"
      ]}
      results={[
        { value: "175%", label: "Project Inquiries" },
        { value: "$50M+", label: "New Contract Value" },
        { value: "200+", label: "Job Applications" }
      ]}
      technologies={["WordPress", "PHP", "Custom Theme", "MySQL", "AWS"]}
    />
  );
}
