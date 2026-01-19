import React from "react";
import { notFound } from "next/navigation";
import { Hero } from "./_components/Hero";
import { Curriculum } from "./_components/Curriculum";
import { FAQ } from "./_components/FAQ";
import { ImageWithFallback } from "@/components/backup/ImageWithFallback";
import { Link, Menu } from "lucide-react";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
const logo = "/images/CSD-logo.png";  
 
const PROGRAMS = {
  mma: {
    name: "MMA",
    heroImage: "https://cdn.britannica.com/14/190014-050-31961004/trading-punches-American-Ronda-Rousey-knockout-UFC-2015.jpg",
    description: "Train all aspects of mixed martial arts.",
    curriculum: [
      {
        title: 'STRIKING BASICS',
        description: 'Master fundamental striking techniques including punches, kicks, elbows, and knees from multiple disciplines.',
        image: 'https://images.unsplash.com/photo-1708723636238-e4c384d5d428?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'GRAPPLING FUNDAMENTALS',
        description: 'Learn takedowns, ground control, and submission techniques combining wrestling and Brazilian Jiu-Jitsu.',
        image: 'https://images.unsplash.com/photo-1615117029952-b84f7ce2b955?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'WALL WORK',
        description: 'Develop skills specific to MMA competition including cage wrestling, wall walking, and clinch work.',
        image: 'https://images.unsplash.com/photo-1680022702604-292f21514497?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'LIVE SPARRING',
        description: 'Put it all together with controlled live rounds, blending striking and grappling in realistic scenarios.',
        image: 'https://images.unsplash.com/photo-1680022546558-550eaf22351e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
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
        answer: "Wear comfortable athletic clothing, bring water, MMA gloves,Shin guards, and Mouth Guard.",
      },
    ],
  },
  "brazilian-jiu-jitsu": {
    name: "Brazilian Jiu Jitsu",
    heroImage: "https://www.nagafighter.com/wp-content/uploads/bjj-scoring-scaled.jpg",
    description: "Master grappling, submissions, and control.",
    curriculum: [
      {
        title: 'FUNDAMENTAL POSITIONS',
        description: 'Learn essential BJJ positions including guard, mount, side control, and back control with proper escapes.',
        image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'GI TECHNIQUES',
        description: 'Master gi-specific grips, chokes, and submissions using the traditional Brazilian Jiu-Jitsu uniform.',
        image: 'https://images.unsplash.com/photo-1728498942768-b0b86d368ce5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'SUBMISSIONS',
        description: 'Develop a complete submission game including armbars, triangles, kimuras, and various choke techniques.',
        image: 'https://plus.unsplash.com/premium_photo-1713170700434-b86395ae77b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'LIVE ROLLING',
        description: 'Test your skills with live sparring sessions, learning to apply techniques under pressure with training partners.',
        image: 'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
    faqs: [
      {
        question: "What is Brazilian Jiu-Jitsu?",
        answer: "BJJ is a martial art focusing on ground fighting and submission holds, emphasizing technique and leverage over strength.",
      },
      {
        question: "Do I need a gi?",
        answer: "We offer both gi and no-gi classes. Beginners can start with either.",
      },
      {
        question: "How long does it take to get a belt?",
        answer: "Belt progression varies by individual, typically taking 2-3 years for a blue belt with consistent training.",
      },
    ],
  },
  "muay-thai": {
    name: "Muay Thai",
    heroImage: "https://www.kstmuaythai.com/wp-content/uploads/2020/02/LINE_ALBUM_KST-walk_241014_12.jpg",
    description: "The art of eight limbs.",
    curriculum: [
      {
        title: 'PARTNER PADWORK',
        description: 'Engage in drills with a partner to practice and perfect striking combinations, enhancing timing and coordination.',
        image: 'https://images.unsplash.com/photo-1611816153165-fed23698666d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'TECHNIQUE',
        description: 'Learn and refine fundamental and advanced Muay Thai techniques, including punches, kicks, elbows, and knees.',
        image: 'https://images.unsplash.com/photo-1729673517080-44353fa68fe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'STRENGTH & CONDITIONING',
        description: 'Participate in exercises designed to improve overall fitness, power, and endurance specific to Muay Thai.',
        image: 'https://images.unsplash.com/photo-1637974013743-82656f7c3f49?q=80&w=648&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'SPARRING',
        description: 'Controlled sparring for sharpening your tactical edge. From technical drills to competitive sparring rounds under supervision.',
        image: 'https://images.unsplash.com/photo-1601039834205-4e3f1e932f5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
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
        answer: "Boxing or Thai gloves, shin guards, and bring comfortable workout clothes and water.",
      },
    ],
  },
  boxing: {
    name: "Boxing",
    heroImage: "https://cdn.evolve-mma.com/wp-content/uploads/2023/09/canelo-boxing-edited.jpg",
    description: "Sharpen striking, footwork, and timing.",
    curriculum: [
      {
        title: 'BASIC STANCE & GUARD',
        description: 'Master the fundamentals of boxing stance, proper guard position, and footwork foundation.',
        image: 'https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'PUNCH TECHNIQUES',
        description: 'Learn proper form for jabs, crosses, hooks, and uppercuts with focus on power and precision.',
        image: 'https://images.unsplash.com/photo-1636302925863-6ad504baaf3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'DEFENSE & HEAD MOVEMENT',
        description: 'Develop defensive skills including slips, rolls, blocks, and parries to avoid and counter punches.',
        image: 'https://images.unsplash.com/photo-1636581563884-39569e81cbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'BAG WORK & SPARRING',
        description: 'Put techniques into practice with heavy bag drills, mitt work, and controlled sparring sessions.',
        image: 'https://images.unsplash.com/photo-1606335543042-57c525922933?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
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
    heroImage: "https://cdn.evolve-mma.com/wp-content/uploads/2024/07/superbon-kickboxing.jpg",
    description: "High-energy striking that blends boxing and powerful kicks.",
    curriculum: [
      {
        title: 'STRIKING COMBINATIONS',
        description: 'Learn dynamic punch and kick combinations that blend boxing fundamentals with powerful kicking techniques.',
        image: 'https://images.unsplash.com/photo-1575800605380-ca1d27744f2c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'KICKING TECHNIQUES',
        description: 'Master roundhouse kicks, front kicks, side kicks, and spinning techniques with proper form and power.',
        image: 'https://images.unsplash.com/photo-1620123646588-b9117246a9d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpY2tib3hpbmd8ZW58MHx8MHx8fDA%3D'
      },
      {
        title: 'CARDIO & CONDITIONING',
        description: 'High-intensity training sessions that combine technique work with cardiovascular conditioning for maximum fitness.',
        image: 'https://images.unsplash.com/photo-1686133368810-24f662f65cad?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'PAD WORK & SPARRING',
        description: 'Apply techniques through pad work drills and controlled sparring to build confidence and skill.',
        image: 'https://images.unsplash.com/photo-1758778933112-af9fde620101?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
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
    heroImage: "https://cdn.evolve-mma.com/wp-content/uploads/2025/02/greco-roman-wrestling-1.jpg",
    description: "Control, takedowns, and top pressure.",
    curriculum: [
      {
        title: 'TAKEDOWN FUNDAMENTALS',
        description: 'Master essential takedowns including single legs, double legs, and throws with proper set-up and execution.',
        image: 'https://images.unsplash.com/photo-1736723212593-2183d03535df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'POSITIONAL CONTROL',
        description: 'Learn to maintain dominant positions including top control, side control, and back control with pressure.',
        image: 'https://images.unsplash.com/photo-1542468019-550cb643a5e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'DEFENSE & ESCAPES',
        description: 'Develop defensive skills including sprawls, whizzers, and escapes from bottom positions.',
        image: 'https://images.unsplash.com/photo-1533777528790-c6996cffa35e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'LIVE WRESTLING',
        description: 'Practice takedowns and positional control in live wrestling rounds to build mat awareness and timing.',
        image: 'https://images.unsplash.com/photo-1764908912127-885314cb5c21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
    faqs: [
      {
        question: "What should I expect?",
        answer: "Drilling takedowns, positional control, and live grappling with coaching oversight.",
      },
    ],
  },
  "no-gi": {
    name: "No Gi",
    heroImage: "https://www.nagafighter.com/wp-content/uploads/578A5856-2-scaled.jpg",
    description: "Submission grappling without the gi.",
    curriculum: [
      {
        title: 'GRIPLESS POSITIONS',
        description: 'Learn to control and attack from all positions without gi grips, focusing on body control and underhooks.',
        image: 'https://images.unsplash.com/photo-1682545888368-587f56efd06e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        title: 'LEG LOCKS',
        description: 'Develop a comprehensive leg lock game including heel hooks, toe holds, and knee bars for submission threats.',
        image: 'https://www.elitesports.com/cdn/shop/articles/ultimate-guide-bjj-leg-locks-escape.jpg?v=1736960950&width=1000'
      },
      {
        title: 'FAST PACED EXCHANGES',
        description: 'Adapt to the faster pace of no-gi grappling with emphasis on scrambles, transitions, and athletic movement.',
        image: 'https://carlsongracieteamhouston.com/wp-content/uploads/2024/07/Dynamic1-1024x683.png'
      },
      {
        title: 'LIVE ROLLING',
        description: 'Test your no-gi skills with live rolling sessions, developing speed, fluidity, and submission awareness.',
        image: 'https://warriorcollective.co.uk/cdn/shop/articles/PI-Copy-1-Web_263e5f95-576c-4d15-9a5a-4f7d3561b70e.jpg?v=1678905826&width=1100'
      },
    ],
    faqs: [
      {
        question: "Is No Gi different from BJJ?",
        answer: "Same principles but without grips on a gi; faster scrambles and leg lock focus.",
      },
    ],
  },
  "kids-jiu-jitsu": {
    name: "Kids Jiu Jitsu",
    heroImage: "https://lbnyjj.com/wordpress/wp-content/uploads/2015/07/pic-home-1a.jpg",
    description: "Confidence, discipline, and fun on the mats.",
    curriculum: [
      {
        title: 'FUN FUNDAMENTALS',
        description: 'Age-appropriate introduction to BJJ positions and movements through games and engaging drills.',
        image: 'https://cdn.shopify.com/s/files/1/0649/5197/6188/files/kids-jiu-jitsu_jpeg.webp?v=1657062915'
      },
      {
        title: 'BASIC TECHNIQUES',
        description: 'Learn fundamental BJJ techniques including guard positions, escapes, and age-appropriate submissions.',
        image: 'https://jiujitsuhaus.com/wp-content/uploads/2023/06/signed-url-redirect-1.jpg'
      },
      {
        title: 'CHARACTER BUILDING',
        description: 'Develop respect, discipline, confidence, and leadership skills while learning martial arts in a safe environment.',
        image: 'https://gentleartdojoflorida.com/wp-content/uploads/2021/11/KIDS-BJJ-5-8-4.jpg'
      },
      {
        title: 'BELT PROGRESSION',
        description: 'Progress through the belt system with structured testing and recognition for hard work and improvement.',
        image: 'https://cobrinhabjjlasvegas.com/wp-content/uploads/2022/07/279172503_5368331386563747_1328396224980389663_n_jpg-e1658159845881-1134x1250.jpg'
      },
    ],
    faqs: [
      {
        question: "What age can kids start?",
        answer: "Typically ages 5+, with age-appropriate classes and coaching.",
      },
    ],
  },
  "kids-muay-thai": {
    name: "Kids Muay Thai",
    heroImage: "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2018/10/12/1feed3ac-cdeb-11e8-9460-2e07e264bd11_1280x720_214944.jpg?itok=KBVoqHxo",
    description: "Striking fundamentals in a safe setting.",
    curriculum: [
      {
        title: 'BASIC STRIKES',
        description: 'Learn fundamental Muay Thai strikes including punches and kicks with emphasis on proper form and safety.',
        image: 'https://cdn.evolve-mma.com/wp-content/uploads/2020/09/mt-kid-punching.jpg'
      },
      {
        title: 'STANCE & FOOTWORK',
        description: 'Develop proper Muay Thai stance, balance, and footwork through fun drills and movement exercises.',
        image: 'https://arashido.com/wp/wp-content/uploads/2021/07/Rowen-2501.jpg'
      },
      {
        title: 'CONDITIONING FUN',
        description: 'Improve fitness, coordination, and athleticism through age-appropriate conditioning games and exercises.',
        image: 'https://cdn.shopify.com/s/files/1/0253/7245/9094/files/muay_thai_safe_for_kids.jpg?v=1641796396'
      },
      {
        title: 'LIGHT CONTACT DRILLS',
        description: 'Practice techniques with carefully supervised light contact drills in a controlled, safe environment.',
        image: 'https://switchfitsd.com/wp-content/uploads/2023/11/switch-78-scaled-1.jpg'
      },
    ],
    faqs: [
      {
        question: "Is contact controlled?",
        answer: "Yes. Technique-first drills with carefully supervised light contact as students progress.",
      },
    ],
  },
  "kids-no-gi-jiu-jitsu": {
    name: "Kids No Gi Jiu Jitsu",
    heroImage: "https://www.dragonmartialarts.uk/wp-content/uploads/2021/10/brazilian-jiujitsu-gloucester-kids-2.jpg",
    description: "Submission grappling without the gi.",
    curriculum: [
      {
        title: 'GRIPLESS POSITIONS',
        description: 'Learn to control and attack from all positions without gi grips, focusing on body control and underhooks.',
        image: 'https://nationathletic.com/cdn/shop/files/jiujitsu.junior_1754413438369.jpg?v=1757352497&width=1440'
      },
      {
        title: 'FUNDAMENTAL TECHNIQUES',
        description: 'Learn fundamental no-gi grappling techniques including guard positions, escapes, and submissions.',
        image: 'https://shop.jiujitsumodern.com/cdn/shop/products/DSC05189.jpg?v=1743018438&width=1445'
      },
      {
        title: 'CHARACTER BUILDING',
        description: 'Develop respect, discipline, confidence, and leadership skills while learning martial arts in a safe environment.',
        image: 'https://socabjj.com/wp-content/uploads/2019/02/LRG_DSC02416.jpg'
      },
      {
        title: 'LIVE ROLLING',
        description: 'Test your no-gi skills with live rolling sessions, developing speed, fluidity, and submission awareness.',
        image: 'https://okbjj.com/wp-content/uploads/2024/03/PHOTO-2024-02-12-18-31-56-10-1800x1000.jpg'
      },
    ],
    faqs: [
      {
        question: "Differences between No Gi and Gi?",
        answer: "No Gi is without grips on a gi, while Gi is with grips on a gi. No Gi is faster and more dynamic, while Gi is more technical and controlled.",
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
  {/* Navigation */}
  <Header />
      <Hero 
        title={program.name}
        subtitle={program.description}
        image={program.heroImage}
      />
      <Curriculum 
        curriculum={program.curriculum}
        programName={program.name}
      />
      <FAQ 
        programName={program.name}
        faqs={program.faqs}
      />
      <Footer />
    </div>
  );
}

