import Link from "next/link";

const technologies = [
  { name: "React", gradient: "from-blue-400 to-cyan-400", link: "/technologies/react" },
  { name: "Next.js", gradient: "from-slate-700 to-slate-900", link: "/technologies/nextjs" },
  { name: "TypeScript", gradient: "from-blue-600 to-blue-800", link: "/technologies/typescript" },
  { name: "Tailwind CSS", gradient: "from-cyan-400 to-blue-500", link: "/technologies/tailwind" },
  { name: "WordPress", gradient: "from-blue-500 to-indigo-600", link: "/technologies/wordpress" },
  { name: "Node.js", gradient: "from-green-500 to-emerald-600", link: "/technologies/nodejs" },
  { name: "Supabase", gradient: "from-emerald-400 to-green-500", link: "/technologies/supabase" },
];

export default function Technologies() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle mt-4">Modern tools and frameworks for exceptional results</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Link
              key={index}
              href={tech.link}
              className="group relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

              {/* Glass card */}
              <div className="relative glass-card px-6 py-3 font-semibold text-slate-700 hover:text-slate-900 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {tech.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
