"use client";
import { ImageWithFallback } from '@/components/backup/ImageWithFallback';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Header } from '../programs/[slug]/_components/Header';
import { Footer } from '../programs/[slug]/_components/Footer';

interface ClassSession {
  time: string;
  name: string;
  instructor: string;
  level?: string;
  type: 'bjj' | 'no-gi' | 'muay-thai' | 'wrestling' | 'boxing' | 'mma' | 'conditioning' | 'kids' | 'toddler' | 'open-mat' | 'empty';
}

interface DaySchedule {
  day: string;
  classes: ClassSession[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Sunday',
    classes: [
      { time: 'All Day', name: 'NO CLASSES', instructor: '', type: 'empty' },
    ]
  },
  {
    day: 'Monday',
    classes: [
      { time: '9:00 AM - 10:00 AM', name: 'NO GI Jiu-Jitsu', instructor: 'COACH MYLES', type: 'no-gi' },
      { time: '5:00 PM - 6:00 PM', name: 'KIDS Jiu-Jitsu', instructor: 'COACH SID, COACH MYLES', type: 'kids' },
      { time: '6:00 PM - 7:00 PM', name: 'Boxing', instructor: 'COACH SID', type: 'boxing' },
      { time: '7:00 PM - 8:30 PM', name: 'NO GI Jiu-Jitsu', instructor: 'COACH SID', type: 'no-gi' },
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '9:00 AM - 10:30 AM', name: 'NO GI Jiu-Jitsu', instructor: 'COACH MYLES', type: 'no-gi' },
      { time: '10:30 AM - 11:30 AM', name: 'Muay Thai', instructor: 'COACH DOM', type: 'muay-thai' },
      { time: '4:00 PM - 5:00 PM', name: 'KIDS Striking', instructor: 'COACH SID', type: 'kids' },
      { time: '5:00 PM - 6:00 PM', name: 'KIDS Jiu-Jitsu Advanced', instructor: 'COACH SID', type: 'kids' },
      { time: '5:30 PM - 6:00 PM', name: 'Toddler Class', instructor: 'COACH MYLES', type: 'toddler' },
      { time: '6:00 PM - 7:00 PM', name: 'Muay Thai', instructor: 'COACH SID', type: 'muay-thai' },
      { time: '7:00 PM - 8:30 PM', name: 'Wrestling', instructor: 'COACH MYLES', type: 'wrestling' },
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '9:00 AM - 10:00 AM', name: 'Muay Thai', instructor: 'COACH MYLES', type: 'muay-thai' },
      { time: '10:00 AM - 11:00 AM', name: 'Wrestling', instructor: 'COACH MYLES', type: 'wrestling' },
      { time: '5:00 PM - 6:00 PM', name: 'KIDS Jiu-Jitsu', instructor: 'COACH SID, COACH MYLES', type: 'kids' },
      { time: '6:00 PM - 7:00 PM', name: 'Boxing', instructor: 'COACH SID', type: 'boxing' },
      { time: '7:00 PM - 8:30 PM', name: 'NO GI Jiu-Jitsu', instructor: 'COACH SID', type: 'no-gi' },
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { time: '9:00 AM - 10:30 AM', name: 'GI Jiu-Jitsu', instructor: 'COACH MYLES', type: 'bjj' },
      { time: '10:30 AM - 11:30 AM', name: 'Boxing', instructor: 'COACH DOM', type: 'boxing' },
      { time: '4:00 PM - 5:00 PM', name: 'KIDS Striking', instructor: 'COACH SID', type: 'kids' },
      { time: '5:00 PM - 6:00 PM', name: 'KIDS Jiu-Jitsu Advanced', instructor: 'COACH SID', type: 'kids' },
      { time: '5:30 PM - 6:00 PM', name: 'Toddler Class', instructor: 'COACH MYLES', type: 'toddler' },
      { time: '6:00 PM - 7:00 PM', name: 'Muay Thai', instructor: 'COACH SID', type: 'muay-thai' },
      { time: '7:00 PM - 8:30 PM', name: 'NO GI Jiu-Jitsu', instructor: 'COACH SID', type: 'no-gi' },
    ]
  },
  {
    day: 'Friday',
    classes: [
      { time: '9:00 AM - 10:00 AM', name: 'Boxing', instructor: 'COACH MYLES', type: 'boxing' },
      { time: '10:00 AM - 11:00 AM', name: 'MMA', instructor: 'COACH MYLES', type: 'mma' },
      { time: '5:00 PM - 6:00 PM', name: 'KIDS Jiu-Jitsu', instructor: 'COACH SID, COACH MYLES', type: 'kids' },
      { time: '6:00 PM - 7:00 PM', name: 'Muay Thai', instructor: 'COACH MYLES', type: 'muay-thai' },
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 AM - 10:00 AM', name: 'Strength + Conditioning', instructor: 'COACH MYLES', type: 'conditioning' },
      { time: '10:00 AM - 11:00 AM', name: 'OPEN MAT', instructor: 'COACH MYLES', type: 'open-mat' },
    ]
  }
];

const getClassColor = (type: ClassSession['type']) => {
  const colors = {
    'bjj': 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500',
    'no-gi': 'bg-blue-500/10 border-blue-500/30 hover:border-blue-500',
    'muay-thai': 'bg-red-500/10 border-red-500/30 hover:border-red-500',
    'wrestling': 'bg-purple-500/10 border-purple-500/30 hover:border-purple-500',
    'boxing': 'bg-amber-500/10 border-amber-500/30 hover:border-amber-500',
    'mma': 'bg-green-500/10 border-green-500/30 hover:border-green-500',
    'conditioning': 'bg-gray-500/10 border-gray-500/30 hover:border-gray-500',
    'kids': 'bg-pink-500/10 border-pink-500/30 hover:border-pink-500',
    'toddler': 'bg-pink-400/10 border-pink-400/30 hover:border-pink-400',
    'open-mat': 'bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-500',
    'closed': 'bg-neutral-700/10 border-neutral-700/30 hover:border-neutral-700',
  };
  return colors[type];
};

const getClassBadgeColor = (type: ClassSession['type']) => {
  const colors = {
    'bjj': 'bg-blue-500 text-white',
    'no-gi': 'bg-blue-500 text-white',
    'muay-thai': 'bg-red-500 text-white',
    'wrestling': 'bg-purple-500 text-white',
    'boxing': 'bg-amber-500 text-white',
    'mma': 'bg-green-500 text-white',
    'conditioning': 'bg-gray-500 text-white',
    'kids': 'bg-pink-500 text-white',
    'toddler': 'bg-pink-400 text-white',
    'open-mat': 'bg-cyan-500 text-white',
    'closed': 'bg-neutral-700 text-white',
  };
  return colors[type];
};

const getClassLabel = (type: ClassSession['type']) => {
  const labels = {
    'bjj': 'GI BJJ',
    'no-gi': 'NO GI',
    'muay-thai': 'Muay Thai',
    'wrestling': 'Wrestling',
    'boxing': 'Boxing',
    'mma': 'MMA',
    'conditioning': 'Conditioning',
    'kids': 'Kids',
    'toddler': 'Toddler',
    'open-mat': 'Open Mat',
    'closed': 'Closed',
  };
  return labels[type];
};

export default function App() {
  const [activeFilters, setActiveFilters] = useState<Set<ClassSession['type']>>(
    new Set(['bjj', 'no-gi', 'muay-thai', 'wrestling', 'boxing', 'mma', 'conditioning', 'kids', 'toddler', 'open-mat'])
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleFilter = (type: ClassSession['type']) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(type)) {
      newFilters.delete(type);
    } else {
      newFilters.add(type);
    }
    setActiveFilters(newFilters);
  };

  const filteredSchedule = schedule.map(day => ({
    ...day,
    classes: day.classes.filter(classSession => activeFilters.has(classSession.type))
  }));

  const classTypes = ['bjj', 'no-gi', 'muay-thai', 'wrestling', 'boxing', 'mma', 'conditioning', 'kids', 'toddler', 'open-mat'] as const;

  return (
    <div className="min-h-screen bg-black text-white">
    <Header />
      {/* Header */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1708134003412-7a05fe510a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNTUElMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjYwMTE3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="MMA Training"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Class Schedule</h1>
          <p className="text-xl text-neutral-300 text-center max-w-2xl">
            Train with world-class instructors across multiple disciplines
          </p>
        </div>
      </div>

      {/* Filter Toggle Button (Mobile Only) */}
      <div className="md:hidden max-w-7xl mx-auto px-4 py-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
        >
          <span className="font-medium">Filter Classes</span>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Legend - Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 pb-4">
          <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-4 space-y-2">
            {classTypes.map(type => {
              const isActive = activeFilters.has(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleFilter(type)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${
                    isActive 
                      ? `${getClassBadgeColor(type)} border-transparent` 
                      : 'bg-transparent border-neutral-700 text-neutral-500 hover:border-neutral-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded flex-shrink-0 ${isActive ? 'bg-white/30' : 'bg-neutral-700'}`} />
                  <span className="text-sm font-medium">{getClassLabel(type)}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Legend - Desktop (Hidden on Mobile) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {classTypes.map(type => {
            const isActive = activeFilters.has(type);
            return (
              <button
                key={type}
                onClick={() => toggleFilter(type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                  isActive 
                    ? `${getClassBadgeColor(type)} border-transparent` 
                    : 'bg-transparent border-neutral-700 text-neutral-500 hover:border-neutral-500'
                }`}
              >
                <div className={`w-4 h-4 rounded ${isActive ? 'bg-white/30' : 'bg-neutral-700'}`} />
                <span className="text-sm font-medium">{getClassLabel(type)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSchedule.map((day) => (
            <div key={day.day} className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
              <div className="bg-neutral-800 px-6 py-4 border-b border-neutral-700">
                <h2 className="text-xl font-semibold">{day.day}</h2>
              </div>
              <div className="p-4 space-y-3">
                {day.classes.length > 0 ? (
                  day.classes.map((classSession, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${getClassColor(classSession.type)}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-semibold text-neutral-400">{classSession.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getClassBadgeColor(classSession.type)}`}>
                          {getClassLabel(classSession.type)}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-1">{classSession.name}</h3>
                      <p className="text-sm text-neutral-400">{classSession.instructor}</p>
                      {classSession.level && <p className="text-xs text-neutral-500 mt-1">{classSession.level}</p>}
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-neutral-500">
                    No classes match your filters
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <Footer />
    </div>
  );
}