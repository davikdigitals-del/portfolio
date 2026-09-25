import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "One Medical - Healthcare Platform | Case Study",
  description: "Professional medical website with patient portal and appointment scheduling",
};

export default function OneMedicalCaseStudy() {
  return (
    <CaseStudyTemplate
      title="One Medical Healthcare"
      subtitle="Professional medical website with patient portal and comprehensive health services"
      image="/portfolio2.png"
      timeline="8 Weeks"
      industry="Healthcare"
      liveUrl="https://www.onemedical.com/"
      challenge="One Medical needed a secure, HIPAA-compliant website with patient portal functionality, online appointment scheduling, and comprehensive health information. The platform had to be user-friendly for patients while providing robust features for medical staff."
      solutionIntro="I developed a comprehensive healthcare platform featuring:"
      solutionPoints={[
        "<strong>Patient Portal:</strong> Secure login system for medical records and test results",
        "<strong>Online Scheduling:</strong> Easy appointment booking with provider selection",
        "<strong>Telehealth Integration:</strong> Video consultation capabilities for remote care",
        "<strong>Health Resources:</strong> Comprehensive library of health information and articles",
        "<strong>Insurance Integration:</strong> Seamless insurance verification and billing",
        "<strong>Mobile App:</strong> Fully responsive design optimized for mobile health access"
      ]}
      results={[
        { value: "200%", label: "Increase in Online Appointments" },
        { value: "85%", label: "Patient Satisfaction Score" },
        { value: "60%", label: "Reduction in Phone Calls" }
      ]}
      technologies={["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"]}
    />
  );
}
