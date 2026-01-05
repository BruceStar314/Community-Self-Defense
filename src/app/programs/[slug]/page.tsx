import { notFound } from "next/navigation";
import { Hero } from "./_components/Hero";
import { Curriculum } from "./_components/Curriculum";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";

const PROGRAMS = {
  mma: {
    name: "MMA",
    heroImage: "/images/mma-hero.jpg",
    description: "Train all aspects of mixed martial arts.",
  },
  "brazilian-jiu-jitsu": {
    name: "Brazilian Jiu Jitsu",
    heroImage: "/images/bjj-hero.jpg",
    description: "Master grappling, submissions, and control.",
  },
  "muay-thai": {
    name: "Muay Thai",
    heroImage: "/images/muaythai-hero.jpg",
    description: "The art of eight limbs.",
  },
};

export default function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = PROGRAMS[params.slug as keyof typeof PROGRAMS];

  if (!program) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero program={program} />
      <Curriculum program={program} />
      <FAQ program={program} />
      <Footer />
    </div>
  );
}

