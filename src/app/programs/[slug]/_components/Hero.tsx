import { ImageWithFallback } from '@/components/backup/ImageWithFallback';

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          
          <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold">
            Community Self Defense
          </span>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl uppercase mb-6"
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              letterSpacing: '0.05em',
              lineHeight: '0.9',
            }}
          >
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            {subtitle}
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white uppercase tracking-wider text-sm font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-black transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

