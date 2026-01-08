"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const logo = "/images/CSD-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Community Self Defense Logo"
              width={48}
              height={48}
              priority
            />
            <div>
              <div className="font-bold">
                Community-Self-Defense
              </div>
              <div className="text-xs text-gray-400 ">CSD</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#classes" className="hover:text-[hsl(217,63%,42%)]">Classes</Link>
            <Link href="/#trainers" className="hover:text-[hsl(217,63%,42%)]">Trainers</Link>
            <Link href="/#membership" className="hover:text-[hsl(217,63%,42%)]">Membership</Link>
            <Link href="/#contact" className="hover:text-[hsl(217,63%,42%)]">Location</Link>   
            <Link href="/schedule" className="hover:text-[hsl(217,63%,47%)] transition-colors">Schedule</Link>
            <Link href="/#contact" className="hover:text-[hsl(217,63%,42%)]"> Contact Us</Link> 
            <Link href="/#support" className="hover:text-[hsl(217,63%,42%)]">Support Our Mission</Link>
            <Link href="/#contact" className="bg-[hsl(217,63%,42%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded transition-colors">Join Now</Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <a href="#classes" onClick={closeMenu}>Classes</a>
            <a href="#trainers" onClick={closeMenu}>Trainers</a>
            <a href="#membership" onClick={closeMenu}>Membership</a>
            <a href="#contact" onClick={closeMenu}>Location</a>

            <Link href="/schedule" onClick={closeMenu}>
              Schedule
            </Link>

            <a href="#support" onClick={closeMenu}>Support Our Mission</a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded text-center font-semibold"
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

