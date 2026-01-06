"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  Shield,
  Dumbbell,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Target,
  Zap,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "@/components/backup/ImageWithFallback";
import logo from "@/components/images/0D74BBA2CSD-logo.png";
import sidImage from "@/components/images/sid.png";
import mylesImage from "@/components/images/myles.png";
import domImage from "@/components/images/dom.png";
import supportMissionImage from "@/components/images/group.png";
import presidentImage from "@/components/images/President.webp";
import treasurerImage from "@/components/images/Treasurer.webp";
import secretaryImage from "@/components/images/Secretary.webp";
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(0);

  const programs = [
    {
      name: "BRAZILIAN JIU JITSU",
      image: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "MUAY THAI",
      image: "https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdWF5JTIwVGhhaSUyMGtpY2tib3hpbmd8ZW58MXx8fHwxNzY2MjE3NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "BOXING",
      image: "https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjYxNDIxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "MMA",
      image: "https://images.unsplash.com/photo-1688141402330-f4ed03f6bbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNTUElMjBjYWdlJTIwZmlnaHRpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "WRESTLING",
      image: "https://images.unsplash.com/photo-1615117270691-3bc3cb65f2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmVzdGxpbmclMjBncmFwcGxpbmd8ZW58MXx8fHwxNzY2MjE3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "KICKBOXING",
      image: "https://images.unsplash.com/photo-1677184976710-0bb339946023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NjYyMTc1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "NO GI",
      image: "https://images.unsplash.com/photo-1699464676210-48cd0449df42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCcmF6aWxpYW4lMjBKaXUlMjBKaXRzdSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU3OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "KIDS JIU JITSU",
      image: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "KIDS MUAY THAI",
      image: "https://images.unsplash.com/photo-1635962005741-a9c4904d110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbWFydGlhbCUyMGFydHN8ZW58MXx8fHwxNzY2MTgwNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "SELF DEFENSE",
      image: "https://images.unsplash.com/photo-1765303206345-30d16b502d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwZGVmZW5zZSUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjIxNzU4MXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const classes = [
    {
      name: "MMA Fundamentals",
      description: "Learn the core techniques of mixed martial arts including striking, grappling, and ground control.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1708134003412-7a05fe510a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNTUElMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjYwMTIwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Boxing & Striking",
      description: "Master the art of boxing with professional coaching in technique, footwork, and combinations.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBmaXRuZXNzJTIwY2xhc3N8ZW58MXx8fHwxNzY2MDEyMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Kickboxing Fitness",
      description: "High-intensity cardio workout combining kickboxing techniques with strength and conditioning.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1765303237614-cce413f38aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1OTE5NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Self-Defense",
      description: "Practical self-defense techniques for real-world situations, suitable for all skill levels.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1550759807-50dc0b381a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3J8ZW58MXx8fHwxNzY1OTYxMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const trainers = [
    {
      name: "Sid Skrob",
      specialty: "MMA & Brazilian Jiu-Jitsu",
      credentials: "Black Belt BJJ, 10+ years teaching experience",
      image: sidImage.src
    },
    
    {
      name: "Myles Moudy",
      specialty: "Kickboxing & MMA",
      credentials: "",
      image: mylesImage.src
    },
    {
      name: "Domic Delgado",
      specialty: "Boxing & MMA",
      credentials: "Amature Muay Thai Phenom",
      image: domImage.src
    }
  ];

  const classBody = [
    {
      name: "Myles Moudy",
      title: "President",
      text: "Myles Moudy is a Brazilian Jiu-Jitsu black belt and the owner of the gym. With years of experience as a coach and mentor, Myles is deeply committed to using martial arts as a tool for personal growth, confidence building, and community empowerment. As President, he provides leadership and vision for the organization, ensuring its mission stays rooted in service, integrity, and positive impact.",
      image: presidentImage.src
    },
    {
      name: "Sid Skrob",
      title: "Treasurer",
      text: "Sid Skrob is a Brazilian Jiu-Jitsu black belt and co-owner of the gym. Known for his discipline and dedication both on and off the mats, Sid brings a steady and thoughtful approach to the organization’s financial oversight. As Treasurer, he is responsible for maintaining transparency, accountability, and the long-term financial health of the nonprofit.",
      image: treasurerImage.src
    },
    {
      name: "Liz Bartrug",
      title: "Secretary",
      text: "Elizabeth Bartrug, BS, CATC III is a Master of Social Work (MSW) student at California State University, Long Beach with a background in behavioral health and substance use counseling. Her involvement in martial arts began alongside her daughter and evolved into a strong commitment to youth empowerment, violence prevention, and community-based skill building. As a Certified Alcohol and Drug Counselor (CATC III), Elizabeth brings a trauma-informed, strengths-based perspective to her work with youth and families. She trains and volunteers with The Community Self-Defense, supporting programming that uses martial arts to build confidence, self-regulation, discipline, and positive social development. Her work reflects a belief that martial arts can be a powerful, accessible tool for fostering resilience and long-term well-being in underserved communities.",
      image: secretaryImage.src
    }
  ];

  const membershipPlans = [
    {
      name: "Adults",
      price: "$125",
      period: "/month",
      features: [
        "Access to all group classes",
        "24/7 gym access",
        "Community events",
        "Open gym access"
      ],
      popular: true
    },
    {
      name: "Children",
      price: "$100",
      period: "/month",
      features: [
        "Age-appropriate classes",
        "Structured learning program",
        "Character development focus",
        "Parent observation area",
        "Belt progression system"
      ]
    },
    {
      name: "Military/Police/Fire/Women",
      price: "$100",
      period: "/month",
      features: [
        "All adult class access",
        "Flexible scheduling",
        "Community support network",
        "Community events",
        "Open gym access"
      ]
    },
    {
      name: "Black Belts",
      price: "$30",
      period: "/month",
      features: [
        "Advanced training access",
        "Sparring sessions",
        "Competition preparation",
        "Mentorship opportunities",
        "Instructor development program"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="CSD Logo" width={48} height={48} />
              <div>
                <div className="font-bold">Community-Self-Defense</div>
                <div className="text-xs text-gray-400">CSD</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#classes" className="hover:text-[hsl(217,63%,47%)] transition-colors">Classes</a>
              <a href="#trainers" className="hover:text-[hsl(217,63%,47%)] transition-colors">Trainers</a>
              <a href="#membership" className="hover:text-[hsl(217,63%,47%)] transition-colors">Membership</a>
              <a href="#contact" className="hover:text-[hsl(217,63%,47%)] transition-colors">Location</a>
              <a href="#schedule" className="hover:text-[hsl(217,63%,47%)] transition-colors">Schedule</a>
              <a href="#contact" className="hover:text-[hsl(217,63%,47%)] transition-colors">Contact Us</a>
              <a href="#support" className="hover:text-[hsl(217,63%,47%)] transition-colors">Support Our Mission</a>
              <button className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded transition-colors">
                Join Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#classes" className="hover:text-[hsl(217,63%,47%)] transition-colors">Classes</a>
              <a href="#trainers" className="hover:text-[hsl(217,63%,47%)] transition-colors">Trainers</a>
              <a href="#membership" className="hover:text-[hsl(217,63%,47%)] transition-colors">Membership</a>
              <a href="#contact" className="hover:text-[hsl(217,63%,47%)] transition-colors">Location</a>
              <a href="#schedule" className="hover:text-[hsl(217,63%,47%)] transition-colors">Schedule</a>
              <a href="#support" className="hover:text-[hsl(217,63%,47%)] transition-colors">Support Our Mission</a>
              <button className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-6 py-2 rounded transition-colors w-full">
                Join Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1708134003412-7a05fe510a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNTUElMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NjYwMTIwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="MMA Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="text-[hsl(217,63%,47%)]">Community</span> Self Defense
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
          More than self-defense. A community that trains, supports, and grows together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              Start Free Trial
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-lg transition-colors">
              Watch Classes
            </button>
          </div>
        </div>
      </section>
      {/* Classes Section */}
      <section id="classes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-5xl mb-4">PROGRAMS</h2>
            <p className="text-gray-600 text-lg">
              We want you to experience the culture that we've created here. If you're ready to diversify your fitness routine and start fighting for yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Program List */}
            <div className="space-y-2">
              {programs.map((program, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredProgram(index)}
                  className={`text-3xl md:text-4xl lg:text-5xl tracking-wider cursor-pointer transition-all duration-300 py-2 ${
                    hoveredProgram === index 
                      ? 'text-[hsl(217,63%,47%)] font-bold pl-4' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: hoveredProgram === index ? 'bold' : '300',
                    letterSpacing: '0.05em'
                  }}
                >
                  {program.name}
                </div>
              ))}
            </div>

            {/* Right Side - Image Display */}
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src={programs[hoveredProgram].image}
                alt={programs[hoveredProgram].name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl mb-2">{programs[hoveredProgram].name}</h3>
                <button className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose CSD?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're more than just a gym. We're a community dedicated to your growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-[hsl(217,63%,47%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-4">Expert Instruction</h3>
              <p className="text-gray-400">
                Train with certified professionals who have competed at the highest levels.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-[hsl(217,63%,47%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-4">Supportive Community</h3>
              <p className="text-gray-400">
                Join a welcoming community that motivates and supports each other's journey.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-[hsl(217,63%,47%)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-4">State-of-the-Art Facility</h3>
              <p className="text-gray-400">
                Modern equipment and spacious training areas designed for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Meet Our Trainers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team is committed to helping you reach your full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{trainer.name}</h3>
                  <div className="text-[hsl(217,63%,47%)] mb-2">{trainer.specialty}</div>
                  <p className="text-gray-600 text-sm">{trainer.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Membership Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your training goals and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-6 ${plan.popular ? 'bg-black text-white shadow-2xl scale-105 border-4 border-[hsl(217,63%,47%)]' : 'bg-gray-50 border-2 border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="bg-[hsl(217,63%,47%)] text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl mb-3">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Star className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[hsl(217,63%,47%)]' : 'text-[hsl(217,63%,47%)]'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg transition-colors text-sm ${plan.popular ? 'bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] text-white' : 'bg-black hover:bg-gray-800 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section id="support" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6">Empowering The Community Through Self Defense</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Community Self Defense, we believe martial arts should be accessible to everyone no matter their background or income. Your support helps us provide free and low-cost training, youth scholarships, uniforms, and safe spaces for families to learn and grow together.
            </p>
          </div>

          {/* Community Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src={supportMissionImage}
              alt="Community Self Defense Family"
              className="w-full h-auto"
              sizes="100vw"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-[hsl(217,63%,47%)] text-4xl mb-4">🎓</div>
              <h3 className="text-xl mb-3">Youth Programs</h3>
              <p className="text-gray-600">
                Provide free training to at-risk youth in our community
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-[hsl(217,63%,47%)] text-4xl mb-4">🏅</div>
              <h3 className="text-xl mb-3">Scholarships</h3>
              <p className="text-gray-600">
                Offer reduced rates for military families and first responders
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-[hsl(217,63%,47%)] text-4xl mb-4">👕</div>
              <h3 className="text-xl mb-3">Uniforms & Equipment</h3>
              <p className="text-gray-600">
                Supply training gear to students in need
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] text-white px-8 py-4 rounded-lg transition-colors">
              Make a Donation
            </button>
            {/*    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg transition-colors">
              Become a Sponsor
            </button> 
            */}
          </div>
          
        </div>
      </section>

      <section id="board" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" />
          <div className="grid md:grid-cols-3 gap-8">
            {classBody.map((classBody, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <ImageWithFallback
                    src={classBody.image}
                    alt={classBody.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2">{classBody.name}</h3>
                  <div className="text-[hsl(217,63%,47%)] mb-2">{classBody.title}</div>
                  <p className="text-gray-600 text-sm">{classBody.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey? Visit us for a free trial class.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[hsl(217,63%,47%)] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Location</h3>
                  <p className="text-gray-600">15201 BEACH BLVD, STE C<br />WESTMINSTER, CA 92683</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[hsl(217,63%,47%)] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Phone</h3>
                  <h2 className="text-xl mb-2">Header-Instructor: Sid Skrob</h2>
                  <p className="text-gray-600">(949)-795-1110</p>
                  <h2 className="text-xl mb-2">Co-Instructor: Myles Moudy</h2>
                  <p className="text-gray-600">(714)-369-5220</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[hsl(217,63%,47%)] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <p className="text-gray-600">CSDONLINE2023@GMAIL.COM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[hsl(217,63%,47%)] p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Mon-Fri: 6:00 AM - 10:00 PM<br />
                    Sat-Sun: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl mb-6">Request a Free Trial</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(217,63%,47%)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(217,63%,47%)]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(217,63%,47%)]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Interested In</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(217,63%,47%)]">
                    <option>MMA Fundamentals</option>
                    <option>Boxing & Striking</option>
                    <option>Kickboxing Fitness</option>
                    <option>Self-Defense</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[hsl(217,63%,47%)] hover:bg-[hsl(217,63%,42%)] text-white py-3 rounded-lg transition-colors"
             >
                  Book Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="CSD Logo" className="w-12 h-12" />
                <div>
                  <div>CSD</div>
                  <div className="text-xs text-gray-400">Community-Self-Defense</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering our community through martial arts training and self-defense education.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#classes" className="hover:text-[hsl(217,63%,47%)] transition-colors">Classes</a></li>
                <li><a href="#trainers" className="hover:text-[hsl(217,63%,47%)] transition-colors">Trainers</a></li>
                <li><a href="#membership" className="hover:text-[hsl(217,63%,47%)] transition-colors">Membership</a></li>
                <li><a href="#contact" className="hover:text-[hsl(217,63%,47%)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>MMA Fundamentals</li>
                <li>Striking</li>
                <li>Grappling</li>
                <li>Self-Defense</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Community-Self-Defense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
