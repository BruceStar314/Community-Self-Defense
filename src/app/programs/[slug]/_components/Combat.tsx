import Link from "next/link";
import { ImageWithFallback } from "./backup/ImageWithFallback";

type CombatSectionProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  description: string[];
  image: string;
  experience?: string;
  programSlug: string;
};

export function CombatSection({
  eyebrow = "Program Overview",
  title,
  highlight,
  description,
  image,
  experience = "10+",
  programSlug,
}: CombatSectionProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="diamond-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 L60 30 L30 60 L0 30 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
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
                {eyebrow}
              </span>
            </div>

            <h2
              className="text-5xl md:text-7xl uppercase mb-6 text-white"
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                lineHeight: "1",
                letterSpacing: "0.02em",
              }}
            >
              {title}
              <br />
              <span className="text-blue-600">{highlight}</span>
            </h2>

            {description.map((text, index) => (
              <p
                key={index}
                className="text-gray-400 text-lg mb-6 leading-relaxed"
              >
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/programs/${programSlug}#trial`}
                className="px-8 py-3 bg-blue-600 text-white uppercase tracking-wider text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Trial Class
              </Link>

              <Link
                href="/schedule"
                className="px-8 py-3 border border-white text-white uppercase tracking-wider text-sm font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={`${highlight} Training`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-6 rounded-lg">
              <div className="text-4xl font-bold text-white mb-1">
                {experience}
              </div>
              <div className="text-sm text-white/90 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
