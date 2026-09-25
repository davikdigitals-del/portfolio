import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentProjects = [
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    image: "/portfolio1.png",
  },
  {
    title: "Corporate Website",
    category: "Business",
    image: "/portfolio2.png",
  },
  {
    title: "Restaurant Website",
    category: "Food & Dining",
    image: "/portfolio3.png",
  },
];

export default function RecentWork() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-10 animate-blob" />
      
      <div className="container-custom relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle mt-4">
              Explore some of my latest work
            </p>
          </div>
          <Link 
            href="/case-studies" 
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card group p-0 overflow-hidden hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link href="/case-studies" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
