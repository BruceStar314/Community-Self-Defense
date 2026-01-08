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
    curriculum: [
      {
        title: 'STRIKING BASICS',
        description: 'Master fundamental striking techniques including punches, kicks, elbows, and knees from multiple disciplines.',
        image: 'https://images.unsplash.com/photo-1708134028754-5ba43093fedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'GRAPPLING FUNDAMENTALS',
        description: 'Learn takedowns, ground control, and submission techniques combining wrestling and Brazilian Jiu-Jitsu.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'CAGE WORK',
        description: 'Develop skills specific to MMA competition including cage wrestling, wall walking, and clinch work.',
        image: 'https://images.unsplash.com/photo-1688141402330-f4ed03f6bbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNTUElMjBjYWdlJTIwZmlnaHRpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LIVE SPARRING',
        description: 'Put it all together with controlled live rounds, blending striking and grappling in realistic scenarios.',
        image: 'https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
        answer: "Wear comfortable athletic clothing, bring water, and we'll provide all necessary training equipment.",
      },
    ],
  },
  "brazilian-jiu-jitsu": {
    name: "Brazilian Jiu Jitsu",
    heroImage: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?auto=format&fit=crop&w=1400&q=80",
    description: "Master grappling, submissions, and control.",
    curriculum: [
      {
        title: 'FUNDAMENTAL POSITIONS',
        description: 'Learn essential BJJ positions including guard, mount, side control, and back control with proper escapes.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'GI TECHNIQUES',
        description: 'Master gi-specific grips, chokes, and submissions using the traditional Brazilian Jiu-Jitsu uniform.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'SUBMISSIONS',
        description: 'Develop a complete submission game including armbars, triangles, kimuras, and various choke techniques.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LIVE ROLLING',
        description: 'Test your skills with live sparring sessions, learning to apply techniques under pressure with training partners.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
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
    curriculum: [
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
        answer: "We provide all equipment including gloves, shin guards, and pads. Just bring comfortable workout clothes and water.",
      },
    ],
  },
  boxing: {
    name: "Boxing",
    heroImage: "https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?auto=format&fit=crop&w=1400&q=80",
    description: "Sharpen striking, footwork, and timing.",
    curriculum: [
      {
        title: 'BASIC STANCE & GUARD',
        description: 'Master the fundamentals of boxing stance, proper guard position, and footwork foundation.',
        image: 'https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjYxNDIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'PUNCH TECHNIQUES',
        description: 'Learn proper form for jabs, crosses, hooks, and uppercuts with focus on power and precision.',
        image: 'https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBmaXRuZXNzJTIwY2xhc3N8ZW58MXx8fHwxNzY2MDEyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'DEFENSE & HEAD MOVEMENT',
        description: 'Develop defensive skills including slips, rolls, blocks, and parries to avoid and counter punches.',
        image: 'https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjYxNDIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'BAG WORK & SPARRING',
        description: 'Put techniques into practice with heavy bag drills, mitt work, and controlled sparring sessions.',
        image: 'https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBmaXRuZXNzJTIwY2xhc3N8ZW58MXx8fHwxNzY2MDEyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    heroImage: "https://images.unsplash.com/photo-1677184976710-0bb339946023?auto=format&fit=crop&w=1400&q=80",
    description: "High-energy striking that blends boxing and powerful kicks.",
    curriculum: [
      {
        title: 'STRIKING COMBINATIONS',
        description: 'Learn dynamic punch and kick combinations that blend boxing fundamentals with powerful kicking techniques.',
        image: 'https://images.unsplash.com/photo-1677184976710-0bb339946023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NjYyMTc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'KICKING TECHNIQUES',
        description: 'Master roundhouse kicks, front kicks, side kicks, and spinning techniques with proper form and power.',
        image: 'https://images.unsplash.com/photo-1765303237614-cce413f38aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1OTE5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'CARDIO & CONDITIONING',
        description: 'High-intensity training sessions that combine technique work with cardiovascular conditioning for maximum fitness.',
        image: 'https://images.unsplash.com/photo-1677184976710-0bb339946023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwd29ya291dHxlbnwxfHx8fDE3Njc1Nzc0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'PAD WORK & SPARRING',
        description: 'Apply techniques through pad work drills and controlled sparring to build confidence and skill.',
        image: 'https://images.unsplash.com/photo-1765303237614-cce413f38aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1OTE5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    heroImage: "https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?auto=format&fit=crop&w=1400&q=80",
    description: "Control, takedowns, and top pressure.",
    curriculum: [
      {
        title: 'TAKEDOWN FUNDAMENTALS',
        description: 'Master essential takedowns including single legs, double legs, and throws with proper set-up and execution.',
        image: 'https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'POSITIONAL CONTROL',
        description: 'Learn to maintain dominant positions including top control, side control, and back control with pressure.',
        image: 'https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'DEFENSE & ESCAPES',
        description: 'Develop defensive skills including sprawls, whizzers, and escapes from bottom positions.',
        image: 'https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LIVE WRESTLING',
        description: 'Practice takedowns and positional control in live wrestling rounds to build mat awareness and timing.',
        image: 'https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    heroImage: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?auto=format&fit=crop&w=1400&q=80",
    description: "Submission grappling without the gi.",
    curriculum: [
      {
        title: 'GRIPLESS POSITIONS',
        description: 'Learn to control and attack from all positions without gi grips, focusing on body control and underhooks.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LEG LOCKS',
        description: 'Develop a comprehensive leg lock game including heel hooks, toe holds, and knee bars for submission threats.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'FAST PACED EXCHANGES',
        description: 'Adapt to the faster pace of no-gi grappling with emphasis on scrambles, transitions, and athletic movement.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LIVE ROLLING',
        description: 'Test your no-gi skills with live rolling sessions, developing speed, fluidity, and submission awareness.',
        image: 'https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
    heroImage: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?auto=format&fit=crop&w=1400&q=80",
    description: "Confidence, discipline, and fun on the mats.",
    curriculum: [
      {
        title: 'FUN FUNDAMENTALS',
        description: 'Age-appropriate introduction to BJJ positions and movements through games and engaging drills.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'BASIC TECHNIQUES',
        description: 'Learn fundamental BJJ techniques including guard positions, escapes, and age-appropriate submissions.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'CHARACTER BUILDING',
        description: 'Develop respect, discipline, confidence, and leadership skills while learning martial arts in a safe environment.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'BELT PROGRESSION',
        description: 'Progress through the belt system with structured testing and recognition for hard work and improvement.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
    heroImage: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?auto=format&fit=crop&w=1400&q=80",
    description: "Striking fundamentals in a safe setting.",
    curriculum: [
      {
        title: 'BASIC STRIKES',
        description: 'Learn fundamental Muay Thai strikes including punches and kicks with emphasis on proper form and safety.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'STANCE & FOOTWORK',
        description: 'Develop proper Muay Thai stance, balance, and footwork through fun drills and movement exercises.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'CONDITIONING FUN',
        description: 'Improve fitness, coordination, and athleticism through age-appropriate conditioning games and exercises.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'LIGHT CONTACT DRILLS',
        description: 'Practice techniques with carefully supervised light contact drills in a controlled, safe environment.',
        image: 'https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
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
    curriculum: [
      {
        title: 'AWARENESS & AVOIDANCE',
        description: 'Learn situational awareness, de-escalation techniques, and how to recognize and avoid dangerous situations.',
        image: 'https://images.unsplash.com/photo-1765303206345-30d16b502d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwZGVmZW5zZSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'BASIC STRIKES & ESCAPES',
        description: 'Master fundamental strikes and escape techniques designed to create distance and get to safety.',
        image: 'https://images.unsplash.com/photo-1765303206345-30d16b502d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwZGVmZW5zZSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'GROUND DEFENSE',
        description: 'Learn essential techniques for defending yourself on the ground and getting back to your feet quickly.',
        image: 'https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3J8ZW58MXx8fHwxNzY1OTYxMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        title: 'SCENARIO TRAINING',
        description: 'Practice realistic self-defense scenarios with resistance training to build confidence and muscle memory.',
        image: 'https://images.unsplash.com/photo-1765303206345-30d16b502d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwZGVmZW5zZSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
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

