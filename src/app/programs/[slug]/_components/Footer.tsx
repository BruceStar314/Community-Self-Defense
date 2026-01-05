import Image from "next/image";
import Link from "next/link";
import logo from "@/app/components/images/0D74BBA2CSD-logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src={logo} alt="CSD Logo" width={48} height={48} />
                <div>
                  <div>CSD</div>
                  <div className="text-xs text-gray-400">Community-Self-Defense</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering our community through martial arts training and self-defense education.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#classes" className="hover:text-[hsl(217,63%,47%)] transition-colors">Classes</a></li>
                <li><a href="#trainers" className="hover:text-[hsl(217,63%,47%)] transition-colors">Trainers</a></li>
                <li><a href="#membership" className="hover:text-[hsl(217,63%,47%)] transition-colors">Membership</a></li>
                <li><a href="#contact" className="hover:text-[hsl(217,63%,47%)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>MMA Fundamentals</li>
                <li>Striking</li>
                <li>Grappling</li>
                <li>Self-Defense</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Facebook</li>
                <li><a href="https://www.instagram.com/community_self_defense/" className="hover:text-[hsl(217,63%,47%)]">Instagram</a></li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Community-Self-Defense. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}
