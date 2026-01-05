import { ImageWithFallback } from './backup/ImageWithFallback.tsx';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Muay Thai Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-red-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-red-600" />
              <span className="text-red-600 uppercase tracking-widest text-xs font-semibold">
                Kings MMA Anaheim
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl uppercase mb-6" 
              style={{ 
                fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                letterSpacing: '0.05em',
                lineHeight: '0.9',
              }}>
            <span className="text-white">MUAY</span>{' '}
            <span className="text-red-600">THAI</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Master the Art of Eight Limbs at Southern California's Premier Muay Thai Training Facility
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-red-600 text-white uppercase tracking-wider text-sm font-semibold hover:bg-red-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-black transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
