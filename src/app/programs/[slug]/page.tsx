import React from "react";
import { notFound } from "next/navigation";
import { Hero } from "./_components/Hero";
import { Curriculum } from "./_components/Curriculum";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";

const PROGRAMS = {
  mma: {
    name: "MMA",
    heroImage: "https://images.unsplash.com/photo-1688141402330-f4ed03f6bbf9?auto=format&fit=crop&w=1400&q=80",
    description: "Train all aspects of mixed martial arts.",
    faqs: [
      {
        question: "What is MMA?",
        answer: "Mixed Martial Arts (MMA) combines techniques from various combat sports including boxing, wrestling, Brazilian Jiu-Jitsu, and Muay Thai.",
      },
      {
        question: "Do I need prior experience?",
        answer: "No prior experience is necessary. Our classes are designed for all skill levels, from beginners to advanced practitioners.",
      },
      {
        question: "What should I bring to class?",
        answer: "Wear comfortable athletic clothing, bring water, and we'll provide all necessary training equipment.",
      },
    ],
  },
  "brazilian-jiu-jitsu": {
    name: "Brazilian Jiu Jitsu",
    heroImage: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?auto=format&fit=crop&w=1400&q=80",
    description: "Master grappling, submissions, and control.",
    faqs: [
      {
        question: "What is Brazilian Jiu-Jitsu?",
        answer: "BJJ is a martial art focusing on ground fighting and submission holds, emphasizing technique and leverage over strength.",
      },
      {
        question: "Do I need a gi?",
        answer: "We offer both gi and no-gi classes. Beginners can start with either, and we have loaner gis available.",
      },
      {
        question: "How long does it take to get a belt?",
        answer: "Belt progression varies by individual, typically taking 2-3 years for a blue belt with consistent training.",
      },
    ],
  },
  "muay-thai": {
    name: "Muay Thai",
    heroImage: "https://images.unsplash.com/photo-1696454411278-a64de1369e83?auto=format&fit=crop&w=1400&q=80",
    description: "The art of eight limbs.",
    faqs: [
      {
        question: "What is Muay Thai?",
        answer: "Muay Thai is a combat sport from Thailand that uses fists, elbows, knees, and shins - known as the 'art of eight limbs'.",
      },
      {
        question: "Is it safe for beginners?",
        answer: "Yes, our classes are structured with safety as the top priority. We start with fundamentals and proper technique before any contact.",
      },
      {
        question: "What equipment do I need?",
        answer: "We provide all equipment including gloves, shin guards, and pads. Just bring comfortable workout clothes and water.",
      },
    ],
  },
  boxing: {
    name: "Boxing",
    heroImage: "https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?auto=format&fit=crop&w=1400&q=80",
    description: "Sharpen striking, footwork, and timing.",
    faqs: [
      {
        question: "Is boxing good for beginners?",
        answer: "Yes. We start with stance, guard, and footwork before adding combinations.",
      },
      {
        question: "Do I need my own gloves?",
        answer: "Loaner gloves are available, but we recommend bringing your own for hygiene.",
      },
    ],
  },
  kickboxing: {
    name: "Kickboxing",
    heroImage: "https://images.unsplash.com/photo-1677184976710-0bb339946023?auto=format&fit=crop&w=1400&q=80",
    description: "High-energy striking that blends boxing and powerful kicks.",
    faqs: [
      {
        question: "Is this cardio-focused?",
        answer: "Classes mix technique with conditioning for a great workout and skill building.",
      },
      {
        question: "What gear do I need?",
        answer: "Gloves and shin guards recommended; loaners may be available at the gym.",
      },
    ],
  },
  wrestling: {
    name: "Wrestling",
    heroImage: "https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?auto=format&fit=crop&w=1400&q=80",
    description: "Control, takedowns, and top pressure.",
    faqs: [
      {
        question: "What should I expect?",
        answer: "Drilling takedowns, positional control, and live grappling with coaching oversight.",
      },
    ],
  },
  "no-gi": {
    name: "No Gi",
    heroImage: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?auto=format&fit=crop&w=1400&q=80",
    description: "Submission grappling without the gi.",
    faqs: [
      {
        question: "Is No Gi different from BJJ?",
        answer: "Same principles but without grips on a gi; faster scrambles and leg lock focus.",
      },
    ],
  },
  "kids-jiu-jitsu": {
    name: "Kids Jiu Jitsu",
    heroImage: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?auto=format&fit=crop&w=1400&q=80",
    description: "Confidence, discipline, and fun on the mats.",
    faqs: [
      {
        question: "What age can kids start?",
        answer: "Typically ages 5+, with age-appropriate classes and coaching.",
      },
    ],
  },
  "kids-muay-thai": {
    name: "Kids Muay Thai",
    heroImage: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?auto=format&fit=crop&w=1400&q=80",
    description: "Striking fundamentals in a safe setting.",
    faqs: [
      {
        question: "Is contact controlled?",
        answer: "Yes. Technique-first drills with carefully supervised light contact as students progress.",
      },
    ],
  },
  "self-defense": {
    name: "Self Defense",
    heroImage: "https://images.unsplash.com/photo-1765303206345-30d16b502d64?auto=format&fit=crop&w=1400&q=80",
    description: "Practical skills for real-world situations.",
    faqs: [
      {
        question: "Who is this for?",
        answer: "Anyone looking for practical situational awareness and escape-focused skills.",
      },
    ],
  },
};

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS[slug as keyof typeof PROGRAMS];

  if (!program) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero 
        title={program.name}
        subtitle={program.description}
        image={program.heroImage}
      />
      <Curriculum />
      <FAQ 
        programName={program.name}
        faqs={program.faqs}
      />
      <Footer />
    </div>
  );
}

