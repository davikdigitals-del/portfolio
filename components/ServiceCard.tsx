import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Link href={link} className="block">
      <div className="card group cursor-pointer hover:shadow-2xl transition-all">
        <div className="bg-primary-100 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary-600 transition-colors">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{description}</p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm md:text-base group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </Link>
  );
}

