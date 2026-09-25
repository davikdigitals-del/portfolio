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
      <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
        <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
