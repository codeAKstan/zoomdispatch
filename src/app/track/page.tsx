'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MaterialIcon from '@/components/MaterialIcon';
import Image from 'next/image';

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('ZD-884291');

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
      <Header />

      <main className="flex-1 px-4 md:px-20 py-10 max-w-7xl mx-auto w-full">
        {/* Hero Tracking Section */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight mb-4 dark:text-white">Track your package</h1>
          <p className="text-[#8c725f] text-lg mb-8 dark:text-white/60">Enter your tracking ID to get real-time delivery updates</p>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <MaterialIcon icon="search" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c725f]" />
              <input
                className="h-14 w-full rounded-xl border-none bg-white px-12 text-base font-medium shadow-sm ring-1 ring-[#f5f2f0] focus:ring-2 focus:ring-primary dark:bg-white/5 dark:ring-white/10 dark:text-white"
                placeholder="Enter Tracking ID (e.g. ZD-123456)"
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </div>
            <button className="h-14 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
              Track Package
            </button>
          </div>
        </div>

        {/* Status View Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Badge & ETA */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f5f2f0] dark:bg-white/5 dark:border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    In Transit
                  </span>
                  <h3 className="mt-3 text-3xl font-black dark:text-white">12:45 PM</h3>
                  <p className="text-sm text-[#8c725f] font-medium dark:text-white/60">Estimated Arrival Today</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#8c725f] uppercase tracking-widest dark:text-white/40">Tracking ID</p>
                  <p className="text-sm font-bold dark:text-white">{trackingId}</p>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="relative mt-8">
                <div className="flex justify-between relative">
                  <ProgressStep icon="check" label="Requested" completed />
                  <ProgressStep icon="check" label="Picked" completed />
                  <ProgressStep icon="local_shipping" label="In Transit" active />
                  <ProgressStep icon="home" label="Delivered" />

                  {/* Connecting Lines */}
                  <div className="absolute top-4 left-0 h-0.5 w-full bg-[#f5f2f0] -z-0 dark:bg-white/10"></div>
                  <div className="absolute top-4 left-0 h-0.5 w-[66%] bg-primary -z-0"></div>
                </div>
              </div>
            </div>

            {/* Rider Profile */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f5f2f0] dark:bg-white/5 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    alt="Rider Portrait"
                    className="h-16 w-16 rounded-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxoZ-yFtZVTVclYXh_EYAHuW1Jo2bMXTE3qbIUjMr_L2zZj3OCN-CpnS3LjgbaZhbZYEQ2wipf0T0mFlvm9_Yxa0T6VWa1HyJdRGVvwZ_9ePVZy9H3ICXd-Dw7JUF1hiLfsK_2QM5RsgLT9eTKLkJCLIEleZMjBeVkLQnM4YKP1pXZ3hgzXlLE2VBPG8YKKtSCJy8n1R8cH6aeVML3XVAMLNjxam_fOvLAQdwZFP4NA2em-aQqE_a0XkCDtaFJTvV9SqWbq6qY"
                    width={64}
                    height={64}
                  />
                  <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-green-500 dark:border-background-dark"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold dark:text-white">Alex Johnson</h4>
                  <div className="flex items-center gap-1 text-sm text-[#8c725f] dark:text-white/60">
                    <MaterialIcon icon="star" className="text-sm text-primary" />
                    <span className="font-bold text-[#181411] dark:text-white">4.9</span>
                    <span>(2.4k deliveries)</span>
                  </div>
                </div>
                <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 transition-all">
                  <MaterialIcon icon="chat" />
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f5f2f0] dark:bg-white/5 dark:border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#8c725f] mb-4 dark:text-white/40">Shipment Details</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MaterialIcon icon="radio_button_checked" className="text-primary" />
                  <div>
                    <p className="text-xs font-bold text-[#8c725f] uppercase dark:text-white/40">From</p>
                    <p className="text-sm font-medium dark:text-white">Downtown Distribution Center, SF</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MaterialIcon icon="location_on" className="text-[#8c725f]" />
                  <div>
                    <p className="text-xs font-bold text-[#8c725f] uppercase dark:text-white/40">To</p>
                    <p className="text-sm font-medium dark:text-white">452 Oakwood Ave, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#f5f2f0] shadow-sm dark:border-white/10">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-[#f0edea] dark:bg-white/5">
                <Image
                  alt="Map background"
                  className="h-full w-full object-cover opacity-50 mix-blend-multiply grayscale dark:mix-blend-normal dark:grayscale-0 dark:opacity-20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB54B9c5veeVOYbMZshgyaEBC3zdqbtYQ4jvG_On8ARaYKrlR4AKF3tW1ZDvG3cs4gn3PFzAzvJyXKvpoMhqChzE_byj7DtUc4ul6Bi72XYlkSPTyovDIiCWJr_rNxnZsyH4hAZTFcUI482t3JnmpC6tF3NSAxjJAs6ISIn3jxFGghTATgHAO4RKbo_x2A6qvbaYuvWK667pSw2Snqbuu__19N8FsxZzcZs0eUZNbPGqdMlsydhAUQeyE0tgKIuyY2JZqUf4YbO"
                  fill
                />
              </div>
              {/* Map Overlay Elements */}
              <div className="absolute inset-0 pointer-events-none p-10">
                {/* Delivery Destination Pin */}
                <div className="absolute top-[30%] right-[30%] flex flex-col items-center">
                  <div className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold shadow-xl dark:bg-background-dark dark:text-white">Your Home</div>
                  <MaterialIcon icon="home_pin" className="text-3xl text-primary drop-shadow-md" />
                </div>
                {/* Rider Active Pin */}
                <div className="absolute bottom-[25%] left-[35%] flex flex-col items-center">
                  <div className="rounded-lg bg-primary px-3 py-1.5 text-[10px] font-bold text-white shadow-xl">Rider (Alex)</div>
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-primary/20">
                    <MaterialIcon icon="delivery_dining" className="text-xl" />
                  </div>
                </div>
                {/* Route Path (SVG Simulation) */}
                <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 35 75 Q 45 65, 55 55 T 70 30" fill="none" stroke="#f97415" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.6" />
                </svg>
              </div>
              {/* Map Controls */}
              <div className="absolute bottom-6 right-6 flex flex-col gap-2 pointer-events-auto">
                <MapControlButton icon="add" />
                <MapControlButton icon="remove" />
                <MapControlButton icon="near_me" primary />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProgressStep({ icon, label, active = false, completed = false }: { icon: string, label: string, active?: boolean, completed?: boolean }) {
  let iconClasses = "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shadow-sm ";
  let labelClasses = "mt-2 text-[10px] font-bold uppercase ";

  if (completed) {
    iconClasses += "bg-primary text-white";
    labelClasses += "text-[#8c725f] dark:text-white/60";
  } else if (active) {
    iconClasses += "bg-primary text-white ring-4 ring-primary/20";
    labelClasses += "text-primary";
  } else {
    iconClasses += "bg-[#f5f2f0] text-[#181411] dark:bg-white/10 dark:text-white opacity-40";
    labelClasses += "text-[#8c725f] opacity-40";
  }

  return (
    <div className="z-10 flex flex-col items-center">
      <div className={iconClasses}>
        <MaterialIcon icon={icon} className="text-sm" />
      </div>
      <span className={labelClasses}>{label}</span>
    </div>
  );
}

function MapControlButton({ icon, primary = false }: { icon: string, primary?: boolean }) {
  const classes = primary
    ? "flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg"
    : "flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-lg dark:bg-background-dark dark:text-white";

  return (
    <button className={classes}>
      <MaterialIcon icon={icon} className={primary ? 'text-[20px]' : ''} />
    </button>
  );
}
