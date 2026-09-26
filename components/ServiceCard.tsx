import { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="card group">
      <div className="bg-primary-100 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary-600 transition-colors">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2 md:space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-700">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
