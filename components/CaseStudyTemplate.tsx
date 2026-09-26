import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Users, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  image: string;
  timeline: string;
  industry: string;
  liveUrl: string;
  challenge: string;
  solutionIntro: string;
  solutionPoints: string[];
  results: { value: string; label: string }[];
  technologies: string[];
}

export default function CaseStudyTemplate({
  title,
  subtitle,
  image,
  timeline,
  industry,
  liveUrl,
  challenge,
  solutionIntro,
  solutionPoints,
  results,
  technologies,
}: CaseStudyTemplateProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-16">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            <div className="glass-card text-center">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
              <div className="text-xs md:text-sm text-slate-600 mb-1">Timeline</div>
              <div className="font-bold text-sm md:text-base text-slate-900">{timeline}</div>
            </div>
            <div className="glass-card text-center">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
              <div className="text-xs md:text-sm text-slate-600 mb-1">Industry</div>
              <div className="font-bold text-sm md:text-base text-slate-900">{industry}</div>
            </div>
            <div className="glass-card text-center">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
              <div className="text-xs md:text-sm text-slate-600 mb-1">Services</div>
              <div className="font-bold text-sm md:text-base text-slate-900">Design & Dev</div>
            </div>
            <div className="glass-card text-center">
              <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
              <div className="text-xs md:text-sm text-slate-600 mb-1">Live Site</div>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-xs md:text-sm text-blue-600 hover:text-blue-700">
                Visit Website
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Solution</h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>{solutionIntro}</p>
                <ul className="space-y-3 ml-6">
                  {solutionPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">The Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {results.map((result, index) => (
                  <div key={index} className="glass-card text-center">
                    <div className="text-2xl md:text-4xl font-bold gradient-text mb-2">{result.value}</div>
                    <div className="text-sm md:text-base text-slate-700">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span key={index} className="glass-card px-4 py-2 text-sm font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want Similar Results for Your Business?"
        description="Let's create a stunning website that drives real results for your business."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}
