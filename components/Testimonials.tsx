import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "👩‍💼",
    rating: 5,
    text: "Working with Ajibola was fantastic! He delivered a beautiful, fast website that exceeded our expectations. Highly professional and responsive.",
  },
  {
    name: "Michael Chen",
    role: "Owner, Chen's Restaurant",
    image: "👨‍🍳",
    rating: 5,
    text: "Our new website has brought in so many more customers. The online ordering system works perfectly. Great attention to detail!",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Bloom Boutique",
    image: "👩‍💻",
    rating: 5,
    text: "The e-commerce site is stunning and easy to manage. Sales have increased by 200% since launch. Couldn't be happier!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full blur-3xl opacity-10 animate-blob" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle mt-4">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-20" />
                <Quote className="w-10 h-10 text-blue-600 relative" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
