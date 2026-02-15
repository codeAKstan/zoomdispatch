import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialIcon from '@/components/MaterialIcon';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-black text-white py-20 overflow-hidden">
          <div className="absolute inset-0 brightness-[0.3]">
            <Image
              alt="Delivery Background"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000"
              fill
              priority
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-white">
              Fast, Reliable <br/>Delivery.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-2xl mx-auto">
              Book a rider in minutes. Quality Drivers. Great Prices. Tracking. Stress-Free Deliveries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/book" className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                Book Delivery
              </Link>
              <Link href="/track" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all">
                Track Package
              </Link>
            </div>
            <p className="text-white/60 text-sm font-medium mb-24">Currently Serving San Francisco, CA.</p>

            <div className="pt-12 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold mb-8">ZoomDispatch in the press</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale brightness-200">
                <span className="text-xl font-black tracking-tighter">TechCrunch</span>
                <span className="text-xl font-black tracking-tighter">QUARTZ</span>
                <span className="text-xl font-black tracking-tighter">REUTERS</span>
                <span className="text-xl font-black tracking-tighter">Nairametrics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: How It Works */}
        <section className="py-24 bg-white dark:bg-background-dark/40" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">How It Works</h2>
              <p className="text-accent-dark/60 dark:text-white/60 font-medium">Simple steps to get your items moving</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <HowItWorksStep
                icon="map"
                title="Enter Pickup"
                description="Input your pickup and drop-off locations in seconds."
                showArrow
              />
              <HowItWorksStep
                icon="receipt_long"
                title="Confirm Details"
                description="Choose your service type and confirm pricing upfront."
                showArrow
              />
              <HowItWorksStep
                icon="motorcycle"
                title="Rider Assigned"
                description="The nearest available rider picks up your package immediately."
                showArrow
              />
              <HowItWorksStep
                icon="task_alt"
                title="Delivered"
                description="Real-time confirmation once your package arrives safely."
              />
            </div>
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="py-24 bg-background-light dark:bg-background-dark" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Our Services</h2>
                <p className="text-accent-dark/60 dark:text-white/60 font-medium">Tailored logistics solutions for every scale and timeline.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View All Services <MaterialIcon icon="arrow_forward" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon="schedule"
                title="Same-Day Delivery"
                description="Perfect for urgent local deliveries that need to reach their destination before sunset."
              />
              <ServiceCard
                icon="rocket_launch"
                title="Express Delivery"
                description="Our premium service. Priority handling and direct transit for your most time-sensitive items."
                highlighted
              />
              <ServiceCard
                icon="inventory_2"
                title="Bulk Dispatch"
                description="Handling large volumes or multiple drops for e-commerce and corporate partners with ease."
              />
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="py-24 bg-white dark:bg-background-dark/40 overflow-hidden" id="why-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <WhyUsCard icon="speed" title="Fast" description="Average 45min delivery time." />
                    <WhyUsCard icon="payments" title="Affordable" description="Competitive rates for all." className="mt-8" />
                  </div>
                  <div className="space-y-4 pt-12">
                    <WhyUsCard icon="verified_user" title="Secure" description="Insured and verified riders." />
                    <div className="bg-primary p-6 rounded-2xl text-white shadow-lg">
                      <h4 className="font-black text-3xl mb-1">99.9%</h4>
                      <p className="text-sm font-bold opacity-80 uppercase tracking-wide">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                  Your delivery partner for <span className="text-primary italic">every</span> journey.
                </h2>
                <p className="text-lg text-accent-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                  We leverage advanced technology and a massive fleet of vetted riders to ensure your items are handled with care and delivered on time, every single time.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-semibold">
                    <MaterialIcon icon="check_circle" className="text-primary" />
                    Real-time GPS tracking for every order
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <MaterialIcon icon="check_circle" className="text-primary" />
                    Digital proof of delivery with photos
                  </li>
                  <li className="flex items-center gap-3 font-semibold">
                    <MaterialIcon icon="check_circle" className="text-primary" />
                    24/7 dedicated customer support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent-dark text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to start shipping?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="bg-primary text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20">
                Get Started Now
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl text-xl font-bold transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button for Mobile */}
      <Link href="/book" className="fixed bottom-6 right-6 md:hidden w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50">
        <MaterialIcon icon="add" className="text-3xl" />
      </Link>
    </div>
  );
}

function HowItWorksStep({ icon, title, description, showArrow = false }: { icon: string, title: string, description: string, showArrow?: boolean }) {
  return (
    <div className="relative p-6 flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <MaterialIcon icon={icon} className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-accent-dark/60 dark:text-white/60">{description}</p>
      {showArrow && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-primary/20"></div>}
    </div>
  );
}

function ServiceCard({ icon, title, description, highlighted = false }: { icon: string, title: string, description: string, highlighted?: boolean }) {
  const baseClasses = "p-8 rounded-2xl transition-all shadow-sm hover:shadow-xl";
  const classes = highlighted
    ? `${baseClasses} bg-primary text-white shadow-xl shadow-primary/20`
    : `${baseClasses} bg-white dark:bg-accent-dark border border-primary/5 hover:border-primary/20`;

  return (
    <div className={classes}>
      <div className={`mb-6 ${highlighted ? 'text-white' : 'text-primary'}`}>
        <MaterialIcon icon={icon} className="text-4xl" />
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className={`${highlighted ? 'text-white/90' : 'text-accent-dark/70 dark:text-white/70'} leading-relaxed`}>{description}</p>
    </div>
  );
}

function WhyUsCard({ icon, title, description, className = '' }: { icon: string, title: string, description: string, className?: string }) {
  return (
    <div className={`bg-background-light dark:bg-accent-dark p-6 rounded-2xl border border-primary/10 ${className}`}>
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
        <MaterialIcon icon={icon} />
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-accent-dark/60 dark:text-white/60">{description}</p>
    </div>
  );
}
