import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export const metadata = {
  title: "Shereen Hoban - Life Coaching Website | Case Study",
};

export default function ShereenHobanCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Shereen Hoban Coaching"
      subtitle="Personal brand website for life coaching with resources and booking"
      image="/portfolio6.png"
      timeline="6 Weeks"
      industry="Life Coaching"
      liveUrl="https://shereenhoban.com/"
      challenge="Shereen needed a personal brand website that would establish her authority in life coaching, attract ideal clients, provide valuable resources, and make it easy to book coaching sessions. The site needed to feel warm and authentic while being professional."
      solutionIntro="I created a personal brand platform featuring:"
      solutionPoints={[
        "<strong>Service Offerings:</strong> Clear presentation of coaching programs and packages",
        "<strong>Online Booking:</strong> Integrated scheduling system with calendar sync",
        "<strong>Blog & Resources:</strong> Regular content updates with coaching insights and tips",
        "<strong>Free Resources:</strong> Downloadable worksheets and guides for lead generation",
        "<strong>Video Integration:</strong> Embedded coaching videos and client testimonials",
        "<strong>Email Newsletter:</strong> Automated email sequences for new subscribers"
      ]}
      results={[
        { value: "220%", label: "Client Bookings" },
        { value: "500+", label: "Email Subscribers" },
        { value: "4x", label: "Content Engagement" }
      ]}
      technologies={["React", "Next.js", "Calendly API", "Mailchimp", "YouTube API"]}
    />
  );
}
