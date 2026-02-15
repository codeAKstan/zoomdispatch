import React from 'react';
import Link from 'next/link';
import MaterialIcon from './MaterialIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-primary/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1 rounded-lg text-white">
                <MaterialIcon icon="local_shipping" className="text-xl block" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">ZoomDispatch</span>
            </div>
            <p className="text-accent-dark/60 dark:text-white/60 text-sm leading-relaxed mb-6">
              Leading the last-mile delivery revolution with speed, transparency, and reliability across the nation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <MaterialIcon icon="public" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <MaterialIcon icon="thumb_up" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-accent-dark dark:text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-accent-dark/60 dark:text-white/60">
              <li><Link href="/book" className="hover:text-primary transition-colors">Book a Delivery</Link></li>
              <li><Link href="/track" className="hover:text-primary transition-colors">Track a Package</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Become a Rider</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-accent-dark dark:text-white">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-accent-dark/60 dark:text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Policies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-accent-dark dark:text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm font-medium text-accent-dark/60 dark:text-white/60">
              <li className="flex items-center gap-2">
                <MaterialIcon icon="mail" className="text-primary text-lg" />
                support@zoomdispatch.com
              </li>
              <li className="flex items-center gap-2">
                <MaterialIcon icon="call" className="text-primary text-lg" />
                +1 (555) 000-DISPATCH
              </li>
              <li className="pt-4">
                <a href="https://wa.me/1234567890" target="_blank" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold hover:brightness-105 transition-all">
                  <MaterialIcon icon="chat" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-accent-dark/40 dark:text-white/40 uppercase tracking-widest">
          <p>© 2024 ZoomDispatch Logistics. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
