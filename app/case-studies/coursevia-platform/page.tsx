import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "CourseVia - Education Platform | Case Study",
};

export default function CourseviaPlatformCaseStudy() {
  return (
    <CaseStudyTemplate
      title="CourseVia Education Platform"
      subtitle="Complete e-learning platform with course management and student dashboard"
      image="/portfolio8.png"
      timeline="12 Weeks"
      industry="Education & E-Learning"
      liveUrl="https://coursevia.site/"
      challenge="CourseVia needed a full-featured online learning platform to host courses, manage students, process payments, track progress, and provide certificates. The platform had to be scalable, secure, and provide excellent user experience for both instructors and students."
      solutionIntro="I built a comprehensive e-learning platform with:"
      solutionPoints={[
        "<strong>Course Management:</strong> Instructor dashboard for creating and managing courses",
        "<strong>Student Portal:</strong> Personalized dashboard with enrolled courses and progress tracking",
        "<strong>Video Streaming:</strong> Secure video hosting with adaptive streaming quality",
        "<strong>Payment System:</strong> Multiple payment options with subscription management",
        "<strong>Certificates:</strong> Automated certificate generation upon course completion",
        "<strong>Discussion Forums:</strong> Community features for student interaction and Q&A"
      ]}
      results={[
        { value: "5000+", label: "Active Students" },
        { value: "150+", label: "Courses Available" },
        { value: "92%", label: "Course Completion Rate" }
      ]}
      technologies={["React", "Next.js", "Node.js", "MongoDB", "AWS", "Stripe"]}
    />
  );
}
