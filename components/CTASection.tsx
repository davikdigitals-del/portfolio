import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-30 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container-custom relative z-10 text-center">
        <div className="glass-card max-w-4xl mx-auto p-12">
          <div className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full text-white mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Let's Create Something Amazing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="inline-flex items-center gap-3 bg-white text-slate-900 hover:bg-slate-50 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_60px_0_rgba(255,255,255,0.3)] group"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
