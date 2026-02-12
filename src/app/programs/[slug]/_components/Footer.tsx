import Image from "next/image";
import Link from "next/link";

const logo = "/images/CSD-logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src={logo} alt="Community Self Defense Logo" width={48} height={48} />
              <div>
                <div className="font-semibold">CSD</div>
                <div className="text-xs text-gray-400">
                  Community-Self-Defense
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering our community through martial arts training and real-world self-defense education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#classes" className="hover:text-[hsl(217,63%,47%)]">Classes</a></li>
              <li><a href="#trainers" className="hover:text-[hsl(217,63%,47%)]">Trainers</a></li>
              <li><a href="#membership" className="hover:text-[hsl(217,63%,47%)]">Membership</a></li>
              <li><a href="#contact" className="hover:text-[hsl(217,63%,47%)]">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-sm">
              Programs
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/programs/mma" className="hover:text-[hsl(217,63%,47%)]">
                  MMA Fundamentals
                </Link>
              </li>
              <li>
                <Link href="/programs/striking" className="hover:text-[hsl(217,63%,47%)]">
                  Striking
                </Link>
              </li>
              <li>
                <Link href="/programs/grappling" className="hover:text-[hsl(217,63%,47%)]">
                  Grappling
                </Link>
              </li>
              <li>
                <Link href="/programs/self-defense" className="hover:text-[hsl(217,63%,47%)]">
                  Self-Defense
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold uppercase tracking-wide text-sm">
              Connect
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/community_self_defense/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[hsl(217,63%,47%)]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Community-Self-Defense. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

