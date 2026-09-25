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
    <Link href={link} className="block">
      <div className="card group overflow-hidden p-0 cursor-pointer hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-3 md:p-6">
          <div className="text-xs md:text-sm text-primary-600 font-semibold mb-1 md:mb-2">{client}</div>
          <h3 className="text-sm md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-xs md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">{description}</p>

          <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-[10px] md:text-xs bg-primary-50 text-primary-700 px-2 md:px-3 py-0.5 md:py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1 md:gap-2 text-primary-600 group-hover:text-primary-700 font-semibold text-xs md:text-sm group-hover:gap-3 transition-all">
            View Project
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
