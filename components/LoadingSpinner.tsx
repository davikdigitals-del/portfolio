"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingSpinner() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.8s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Fully remove from DOM after fade completes (0.6s transition)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-600 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      style={{
        background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #e0e7ff 100%)",
        backdropFilter: "blur(12px)",
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative flex flex-col items-center gap-6">
        {/* Outer spinning ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Spinning gradient ring */}
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              background: "conic-gradient(from 0deg, transparent 60%, #3b82f6, #06b6d4, transparent)",
              padding: "4px",
            }}
          >
            <div className="w-full h-full rounded-full bg-white/80" />
          </div>

          {/* Static outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-200/60" />

          {/* Profile image in center */}
          <div className="relative z-10 w-20 h-20 rounded-full overflow-hidden shadow-xl ring-2 ring-white">
            <Image
              src="/ajibola.jpg"
              alt="Ajibola"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Name & loading text */}
        <div className="text-center">
          <p className="text-xl font-bold text-slate-800 tracking-wide">Ajibola</p>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
