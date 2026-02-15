import React from 'react';
import Link from 'next/link';
import MaterialIcon from './MaterialIcon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e6dfdb] dark:border-white/10 px-4 md:px-10 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <MaterialIcon icon="local_shipping" className="block text-2xl" />
          </div>
          <h1 className="text-[#181411] dark:text-white text-xl font-black tracking-tight">ZoomDispatch</h1>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#how-it-works" className="text-sm font-semibold hover:text-primary transition-colors">How It Works</Link>
            <Link href="/book" className="text-sm font-semibold hover:text-primary transition-colors">Book Delivery</Link>
            <Link href="/track" className="text-sm font-semibold hover:text-primary transition-colors">Track Package</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-bold px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">Login</button>
            <Link href="#" className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
