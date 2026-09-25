import Link from "next/link";
import { Mail, MapPin, Sparkles } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Case Studies", path: "/case-studies" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Website Design", path: "/services" },
      { name: "Web Development", path: "/services" },
      { name: "E-Commerce", path: "/services" },
      { name: "Web Applications", path: "/services" },
    ],
  },
];

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@joseph_4124" },
  { name: "YouTube", url: "https://www.youtube.com/@AjibolaGbengaJoseph1" },
  { name: "Google Maps", url: "https://share.google/aXjcfG6DMAOnPqXk4" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="glass-card p-2 rounded-xl">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Ajibola
              </h3>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Professional website designer and developer creating beautiful, functional websites for businesses worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm glass-light px-3 py-2 rounded-xl w-fit">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a
                  href="mailto:gbengajosephajibola@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  gbengajosephajibola@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm glass-light px-3 py-2 rounded-xl w-fit">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4 text-lg">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Ajibola Gbenga Joseph. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
