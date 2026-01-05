"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900/30">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="text-2xl font-bold text-white">
              KINGS <span className="text-red-600">MMA</span>
            </div>
            <div className="text-[10px] text-gray-400 tracking-widest uppercase">Anaheim</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#schedule" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
            Schedule
          </a>
          <div className="relative group">
            <button className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm flex items-center gap-1">
              Programs
              <span className="text-xs">▼</span>
            </button>
          </div>
          <a href="#recovery" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
            Recovery Center
          </a>
          <a href="#contact" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
            Contact Us
          </a>
          <a href="#trial" className="px-6 py-2 bg-red-600 text-white uppercase tracking-wider text-sm hover:bg-red-700 transition-colors">
            Book Trial Class
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-red-900/30">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#schedule" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
              Schedule
            </a>
            <a href="#programs" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
              Programs
            </a>
            <a href="#recovery" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
              Recovery Center
            </a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
              Contact Us
            </a>
            <a href="#trial" className="text-white hover:text-red-600 transition-colors uppercase tracking-wider text-sm">
              Book Trial Class
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
