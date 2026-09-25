import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Trophy, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-10 overflow-hidden">
      {/* Animated Liquid Orbs Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Glass Badge */}
            <div className="inline-flex items-center gap-3 glass-light px-5 py-3 rounded-full font-medium text-slate-800 shadow-lg">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">5+ Years of Excellence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-slate-900">Website Designer &</span>
              <span className="block gradient-text mt-2">Developer</span>
            </h1>

            <div className="glass-card inline-block">
              <p className="text-2xl font-semibold text-slate-800">
                Hi, I'm <span className="gradient-text">Ajibola Gbenga Joseph</span>
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              I design and build custom websites that look stunning, load instantly, and convert visitors
              into loyal clients. Delivering premium digital experiences worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-3 liquid-btn group">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center justify-center gap-3 group">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View Services</span>
              </Link>
            </div>

            {/* Glass Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-card text-center group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold gradient-text mb-1">5+</div>
                <div className="text-xs text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="glass-card text-center group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold gradient-text mb-1">100+</div>
                <div className="text-xs text-slate-600 font-medium">Projects Done</div>
              </div>
              <div className="glass-card text-center group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold gradient-text mb-1">50+</div>
                <div className="text-xs text-slate-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Image with Liquid Glass Frame */}
          <div className="relative animate-fade-in">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-[3rem] blur-2xl opacity-30 animate-glow" />

            {/* Main glass frame */}
            <div className="relative glass-card p-3">
              <div className="relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/me.webp"
                  alt="Ajibola Gbenga Joseph - Website Designer & Developer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10" />
              </div>
            </div>

            {/* Floating Glass Status Card */}
            <div className="absolute -bottom-6 -left-6 glass-card max-w-xs animate-float shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Available for Work</div>
                  <div className="text-xs text-slate-600 font-medium">Worldwide Remote</div>
                </div>
              </div>
            </div>

            {/* Decorative glass elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 glass-light rounded-3xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/3 -right-8 w-16 h-16 glass-light rounded-2xl -rotate-12 animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
