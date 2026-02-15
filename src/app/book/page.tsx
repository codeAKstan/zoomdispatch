'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialIcon from '@/components/MaterialIcon';

export default function BookingPage() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [packageSize, setPackageSize] = useState('small');
  const [deliveryType, setDeliveryType] = useState('standard');

  const prices = {
    small: 12.50,
    medium: 25.00,
    large: 45.00,
  };

  const baseFare = prices[packageSize as keyof typeof prices];
  const distanceFare = 4.20;
  const speedFare = deliveryType === 'express' ? 10.00 : 0.00;
  const total = baseFare + distanceFare + speedFare;

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
      <Header />

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 pt-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#181411] dark:text-white tracking-tight mb-2">Book a Delivery</h2>
              <p className="text-[#8c725f] dark:text-gray-400">Real-time tracking and instant quotes for all your logistics needs.</p>
            </div>

            {/* Step 1: Locations */}
            <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#e6dfdb] dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="text-lg font-bold">Location Details</h3>
              </div>
              <div className="space-y-5 relative">
                <div className="absolute left-[23px] top-[48px] bottom-[48px] w-0.5 border-l-2 border-dotted border-primary/40"></div>

                <div className="relative">
                  <label className="block text-sm font-semibold mb-2">Pickup Address</label>
                  <div className="flex group">
                    <div className="flex items-center justify-center w-12 bg-background-light dark:bg-white/5 border border-r-0 border-[#e6dfdb] dark:border-white/10 rounded-l-lg text-primary">
                      <MaterialIcon icon="location_on" />
                    </div>
                    <input
                      type="text"
                      className="flex-1 h-12 bg-white dark:bg-transparent border-[#e6dfdb] dark:border-white/10 focus:ring-primary focus:border-primary rounded-r-lg text-sm transition-all px-4"
                      placeholder="123 Sender St, Downtown"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-semibold mb-2">Drop-off Address</label>
                  <div className="flex group">
                    <div className="flex items-center justify-center w-12 bg-background-light dark:bg-white/5 border border-r-0 border-[#e6dfdb] dark:border-white/10 rounded-l-lg text-primary">
                      <MaterialIcon icon="flag" />
                    </div>
                    <input
                      type="text"
                      className="flex-1 h-12 bg-white dark:bg-transparent border-[#e6dfdb] dark:border-white/10 focus:ring-primary focus:border-primary rounded-r-lg text-sm transition-all px-4"
                      placeholder="456 Receiver Ave, Uptown"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2: Contact Info */}
            <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#e6dfdb] dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="text-lg font-bold">Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Sender Phone</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-[#e6dfdb] dark:border-white/10 bg-background-light dark:bg-white/5 text-gray-500 text-sm font-medium">+1</span>
                    <input
                      type="tel"
                      className="flex-1 h-12 bg-white dark:bg-transparent border-[#e6dfdb] dark:border-white/10 focus:ring-primary focus:border-primary rounded-r-lg text-sm px-4"
                      placeholder="(555) 000-0000"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Receiver Phone</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-[#e6dfdb] dark:border-white/10 bg-background-light dark:bg-white/5 text-gray-500 text-sm font-medium">+1</span>
                    <input
                      type="tel"
                      className="flex-1 h-12 bg-white dark:bg-transparent border-[#e6dfdb] dark:border-white/10 focus:ring-primary focus:border-primary rounded-r-lg text-sm px-4"
                      placeholder="(555) 000-0000"
                      value={receiverPhone}
                      onChange={(e) => setReceiverPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3: Package Details */}
            <section className="bg-white dark:bg-white/5 p-6 rounded-xl border border-[#e6dfdb] dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="text-lg font-bold">Package & Speed</h3>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold mb-4">Package Size</p>
                <div className="grid grid-cols-3 gap-3">
                  <SizeOption
                    selected={packageSize === 'small'}
                    onClick={() => setPackageSize('small')}
                    icon="drafts"
                    label="Small"
                    sub="Up to 2kg"
                  />
                  <SizeOption
                    selected={packageSize === 'medium'}
                    onClick={() => setPackageSize('medium')}
                    icon="package_2"
                    label="Medium"
                    sub="Up to 10kg"
                  />
                  <SizeOption
                    selected={packageSize === 'large'}
                    onClick={() => setPackageSize('large')}
                    icon="inventory_2"
                    label="Large"
                    sub="Up to 30kg"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-4">Delivery Type</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SpeedOption
                    selected={deliveryType === 'standard'}
                    onClick={() => setDeliveryType('standard')}
                    title="Standard Delivery"
                    description="Delivered within 3-5 hours"
                  />
                  <SpeedOption
                    selected={deliveryType === 'express'}
                    onClick={() => setDeliveryType('express')}
                    title="Express Delivery"
                    description="Immediate pickup & 60m delivery"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Quote Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white dark:bg-white/5 border border-[#e6dfdb] dark:border-white/10 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                  <MaterialIcon icon="receipt_long" className="text-primary" />
                  Order Summary
                </h3>
                <div className="space-y-4 border-b border-[#e6dfdb] dark:border-white/10 pb-6 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8c725f] dark:text-gray-400">Base Fare ({packageSize.charAt(0).toUpperCase() + packageSize.slice(1)})</span>
                    <span className="font-semibold">${baseFare.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8c725f] dark:text-gray-400">Distance (8.4 km)</span>
                    <span className="font-semibold">${distanceFare.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary font-bold flex items-center gap-1">
                      <MaterialIcon icon="bolt" className="text-[16px]" /> {deliveryType === 'express' ? 'Express Speed' : 'Standard Speed'}
                    </span>
                    <span className="font-semibold">+${speedFare.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-black text-[#8c725f] dark:text-gray-400 mb-1">Estimated Total</p>
                    <p className="text-4xl font-black text-primary">${total.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full inline-block mb-1">Available Now</p>
                    <p className="text-xs text-[#8c725f] dark:text-gray-400">ETA: {deliveryType === 'express' ? '45 - 60 mins' : '3 - 5 hours'}</p>
                  </div>
                </div>
                <button className="hidden lg:block w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                  Confirm Booking
                </button>
                <p className="text-[10px] text-center text-[#8c725f] dark:text-gray-500 mt-4 px-4">
                  By confirming, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>

              {/* Mini Map Preview */}
              <div className="hidden lg:block bg-[#e6dfdb] dark:bg-white/5 rounded-2xl h-48 relative overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzYaWcwhQXC61jfpb0I9Ejbi7uAqCEDXYTor9OtR5cnAnphKSI1MylO-B5vrfn3XELCB1LOW6hb4n3xp-zxl1GXYlHF1mOlalf3igCwS4o1ZbSDYogfY2SgUfXRJohGsWjpujLGeoCmz7YXapsfbcoALijkl4oe6uhoNxpaoggbbSqdsrSL5QoEu25vh-tTwAiQ372LMjmIwYtptOYESScYQEATSFpS4Aloypg0RucPXj8VteI6lpcsw1KlE4_IIhQjVjfb9vs')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest">Route Overview</p>
                  <p className="text-sm opacity-80">Fastest route via Main St.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-[#e6dfdb] dark:border-white/10 z-[60]">
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#8c725f] uppercase tracking-tighter">Est. Total</span>
            <span className="text-xl font-black text-primary">${total.toFixed(2)}</span>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[10px] font-bold text-[#8c725f] uppercase tracking-tighter">Speed</span>
            <span className="text-sm font-bold text-[#181411] dark:text-white flex items-center">
              <MaterialIcon icon="bolt" className="text-[16px] mr-1" />{deliveryType.charAt(0).toUpperCase() + deliveryType.slice(1)}
            </span>
          </div>
        </div>
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
          Confirm Booking
        </button>
      </div>

      <Footer />
    </div>
  );
}

function SizeOption({ selected, onClick, icon, label, sub }: { selected: boolean, onClick: () => void, icon: string, label: string, sub: string }) {
  const activeClasses = "border-primary bg-primary/5 text-primary";
  const inactiveClasses = "border-[#e6dfdb] dark:border-white/10 hover:border-primary/50 text-gray-600 dark:text-gray-300";

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer group transition-all ${selected ? activeClasses : inactiveClasses}`}
    >
      <MaterialIcon icon={icon} className={`text-3xl mb-2 ${selected ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}`} />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      <span className={`text-[10px] ${selected ? 'text-primary/70' : 'text-gray-400'}`}>{sub}</span>
    </div>
  );
}

function SpeedOption({ selected, onClick, title, description }: { selected: boolean, onClick: () => void, title: string, description: string }) {
  const activeClasses = "border-primary bg-primary/5";
  const inactiveClasses = "border-[#e6dfdb] dark:border-white/10 hover:border-primary/50";

  return (
    <div
      onClick={onClick}
      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${selected ? activeClasses : inactiveClasses}`}
    >
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selected ? 'border-primary' : 'border-gray-300'}`}>
        {selected && <div className="w-2 h-2 rounded-full bg-primary"></div>}
      </div>
      <div className="ml-3">
        <p className="text-sm font-bold text-[#181411] dark:text-white">{title}</p>
        <p className="text-xs text-[#8c725f] dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
