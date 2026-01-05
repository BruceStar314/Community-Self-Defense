"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ✅ Correct image import
import logo from "@/app/components/images/0D74BBA2CSD-logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="CSD Logo"
                width={48}
                height={48}
                priority
              />
              <div>
                <div className="font-bold">Community-Self-Defense</div>
                <div className="text-xs text-gray-400">CSD</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#classes">Classes</a>
              <a href="#trainers">Trainers</a>
              <a href="#membership">Membership</a>
              <a href="#contact">Location</a>
              <Link href="/schedule">Schedule</Link>
              <a href="#contact">Contact Us</a>
              <a href="#support">Support Our Mission</a>
              <a
                href="#contact"
                className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#classes">Classes</a>
              <a href="#trainers">Trainers</a>
              <a href="#membership">Membership</a>
              <a href="#contact">Location</a>
              <Link href="/schedule">Schedule</Link>
              <a href="#support">Support Our Mission</a>
              <a
                href="#contact"
                className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded w-full"
              >
                Join Now
              </a>
            </div>
          )}
        </div>
      </nav>
  );
}
