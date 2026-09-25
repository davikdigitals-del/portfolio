"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass-nav py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with Glass Effect */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative glass-card px-3 py-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold gradient-text">Ajibola</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${pathname === link.path
                    ? "glass-card text-slate-900"
                    : "text-slate-700 hover:glass-light"
                  }`}
              >
                {link.name}
                {pathname === link.path && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-2 liquid-btn">
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-card p-3 rounded-xl text-slate-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-4 animate-slide-down">
            <div className="glass-card rounded-3xl p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-5 py-3 rounded-xl font-medium transition-all duration-300 ${pathname === link.path
                      ? "bg-white/50 text-slate-900 shadow-sm"
                      : "text-slate-700 hover:bg-white/30"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-center mt-4 w-full block liquid-btn">
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
