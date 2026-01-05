import { ImageWithFallback } from './backup/ImageWithFallback';

export function EightLimbs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="diamond-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-blue-600" />
              <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold">
                The Art of Eight Limbs
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl uppercase mb-6 text-white"
                style={{ 
                  fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  lineHeight: '1',
                  letterSpacing: '0.02em'
                }}>
              WHAT IS<br/>
              <span className="text-blue-600">MUAY THAI?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Muay Thai isn't just a martial art—it's a complete system of strength, strategy, and sheer 
              willpower. Known as the "Art of Eight Limbs," this ancient martial art combines 
              punches, kicks, elbows, and knees into a devastatingly effective fighting style.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Community-Self-Defense, we honor this tradition while infusing modern training 
              techniques to create warriors of all levels. Whether you're stepping into the ring for 
              fitness, discipline, or competition, our Muay Thai program will unleash the 
              fighter within.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white uppercase tracking-wider text-sm font-semibold hover:bg-blue-700 transition-colors">
                Book Trial Class
              </button>
              <button className="px-8 py-3 bg-transparent border border-white text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-black transition-colors">
                View Schedule
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1637055667163-ad033183b329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjBmaWdodGVyfGVufDF8fHx8MTc2NzU3NzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Muay Thai Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-6 rounded-lg">
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-sm text-white/90 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

