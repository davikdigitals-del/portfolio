import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export default function CaseStudyCard({
  title,
  client,
  description,
  tags,
  image,
  link,
}: CaseStudyCardProps) {
  return (
    <div className="card group overflow-hidden p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="text-sm text-primary-600 font-semibold mb-2">{client}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
