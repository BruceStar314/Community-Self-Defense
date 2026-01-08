import { ImageWithFallback } from '@/components/backup/ImageWithFallback';

type CurriculumItem = {
  title: string;
  description: string;
  image: string;
};

type CurriculumProps = {
  curriculum: CurriculumItem[];
  programName: string;
};

export function Curriculum({ curriculum, programName }: CurriculumProps) {
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
            Our comprehensive training program covers all aspects of {programName}, from fundamentals to advanced techniques.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculum.map((item, index) => (
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

