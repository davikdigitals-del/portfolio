import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShoppingCart } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "E-Commerce Solutions | Online Store Development",
  description: "Complete e-commerce solutions that drive sales. Custom online stores with secure payment processing, inventory management, and seamless shopping experiences.",
};

export default function EcommercePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-blob" />

        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-2xl">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">E-Commerce Solutions</h1>
          </div>

          <p className="text-xl text-slate-700 max-w-3xl">
            Complete online stores that drive sales and deliver seamless shopping experiences for your customers.
          </p>
        </div>
      </section>

      {/* E-Commerce Features */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">E-Commerce Features</h2>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              "Product Catalog Management",
              "Shopping Cart & Checkout",
              "Secure Payment Processing",
              "Inventory Management",
              "Order Management System",
              "Customer Account Portal",
              "Product Search & Filters",
              "Wishlist & Favorites",
              "Product Reviews & Ratings",
              "Discount & Coupon System",
              "Shipping Integration",
              "Email Notifications",
            ].map((item, index) => (
              <div key={index} className="glass-card flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-purple-600 flex-shrink-0 mt-0.5 md:mt-1" />
                <span className="text-xs md:text-sm lg:text-base text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Platform Options */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Payment & Platform Options</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Payment Gateways</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">PayPal</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Square</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Apple Pay & Google Pay</span>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">E-Commerce Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Custom Build (React/Next.js)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">WooCommerce (WordPress)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Shopify</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-sm md:text-base">Headless Commerce APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Development Process */}
      <section className="py-20">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">E-Commerce Development Process</h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Store Planning & Strategy",
                description: "Define your product catalog, payment methods, shipping options, and business requirements. Choose the right platform for your needs.",
              },
              {
                step: "02",
                title: "Design & User Experience",
                description: "Create an attractive, user-friendly store design optimized for conversions. Design product pages, checkout flow, and mobile experience.",
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Build your store with secure payment processing, inventory management, and all necessary integrations for shipping, taxes, and analytics.",
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "Thoroughly test all purchase flows, payment processing, and order management. Launch your store and provide training on managing products and orders.",
              },
            ].map((process, index) => (
              <div key={index} className="glass-card relative">
                <div className="absolute -left-4 top-6 md:-left-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg">
                  {process.step}
                </div>
                <div className="pl-12 md:pl-16">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-slate-900">{process.title}</h3>
                  <p className="text-sm md:text-lg text-slate-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose My E-Commerce Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Why Choose My E-Commerce Services</h2>

          <div className="space-y-6">
            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Conversion-Optimized</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Every element is designed to maximize sales. Simplified checkout, trust signals, product recommendations, and mobile optimization all work together to increase conversions.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Secure & PCI Compliant</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Security is critical for e-commerce. I implement industry-standard security practices, SSL certificates, and work with PCI-compliant payment processors.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-900">Easy Management</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Manage your products, orders, and customers with an intuitive admin panel. I provide full training and documentation so you can run your store with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Selling Online?"
        description="Let's build an e-commerce store that drives sales and grows your business."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </div>
  );
}
