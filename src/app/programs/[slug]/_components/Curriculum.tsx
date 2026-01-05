import { ImageWithFallback } from '@/components/backup/ImageWithFallback';

const curriculumItems = [
  {
    title: 'PARTNER PADWORK',
    description: 'Engage in drills with a partner to practice and perfect striking combinations, enhancing timing and coordination.',
    image: 'https://images.unsplash.com/photo-1708134028754-5ba43093fedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'TECHNIQUE',
    description: 'Learn and refine fundamental and advanced Muay Thai techniques, including punches, kicks, elbows, and knees.',
    image: 'https://images.unsplash.com/photo-1677184976710-0bb339946023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwd29ya291dHxlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'STRENGTH & CONDITIONING',
    description: 'Participate in exercises designed to improve overall fitness, power, and endurance specific to Muay Thai.',
    image: 'https://images.unsplash.com/photo-1708723636238-e4c384d5d428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGd5bXxlbnwxfHx8fDE3Njc1NDIyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'SPARRING',
    description: 'Controlled sparring for sharpening your tactical edge. From technical drills to competitive sparring rounds under supervision.',
    image: 'https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Curriculum() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 40 0 L 40 40 L 0 40 Z" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600" />
            <span className="text-blue-600 uppercase tracking-widest text-xs font-semibold">
              What You'll Learn
            </span>
            <div className="w-12 h-0.5 bg-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-white mb-4"
              style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>
            CURATED <span className="text-blue-600">CURRICULUM</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our comprehensive training program covers all aspects of Muay Thai, from fundamentals to advanced techniques.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden bg-black rounded-lg">
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white uppercase tracking-wider mb-3 group-hover:text-blue-600 transition-colors text-lg font-bold"
                    style={{ letterSpacing: '0.1em' }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

