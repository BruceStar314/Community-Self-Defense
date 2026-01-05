export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white mb-1">
                KINGS <span className="text-red-600">MMA</span>
              </div>
              <div className="text-[10px] text-gray-400 tracking-widest uppercase">Anaheim</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite Muay Thai Training<br />
              Southern California's Premier<br />
              Combat Sports Facility
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white uppercase tracking-wider mb-4 text-sm font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Programs
                </a>
              </li>
              <li>
                <a href="#trial" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Book Trial Class
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white uppercase tracking-wider mb-4 text-sm font-bold">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>123 Fighter Street</li>
              <li>Anaheim, CA 92805</li>
              <li className="pt-2">
                <a href="mailto:info@kingsmma.com" className="hover:text-red-600 transition-colors">
                  info@kingsmma.com
                </a>
              </li>
              <li>
                <a href="tel:555-123-4567" className="hover:text-red-600 transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white uppercase tracking-wider mb-4 text-sm font-bold">Training Hours</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Mon-Fri: 6AM - 9PM</li>
              <li>Saturday: 8AM - 6PM</li>
              <li>Sunday: 9AM - 4PM</li>
              <li className="pt-2">
                <button className="px-6 py-2 bg-red-600 text-white text-xs uppercase tracking-wider hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-red-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Kings MMA Anaheim. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
