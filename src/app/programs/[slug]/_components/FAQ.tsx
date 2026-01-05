"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import faqBg from 'figma:asset/6e45c47747c5e8f9120ef61ea3c52969f00d138f.png';

const faqs = [
  {
    question: 'WHAT IS MUAY THAI?',
    answer: 'Muay Thai, also known as "The Art of Eight Limbs," is a traditional martial art from Thailand that uses punches, kicks, elbows, and knees. It combines striking techniques with conditioning and clinch work, making it one of the most effective stand-up fighting systems in the world.',
  },
  {
    question: 'BENEFITS',
    answer: 'Training Muay Thai offers numerous benefits including improved cardiovascular fitness, increased strength and flexibility, enhanced self-defense skills, stress relief, and boosted confidence. It\'s a full-body workout that also develops mental discipline and focus.',
  },
  {
    question: 'GEAR',
    answer: 'For beginners, essential gear includes hand wraps, boxing gloves (12-16oz), shin guards, and comfortable athletic wear. As you progress, you may want to add headgear, elbow pads, and Thai pads. We have equipment available for trial classes, and our staff can help recommend quality gear for your training.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="faq-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center border border-blue-600">
              <span className="text-blue-600 text-xs font-serif">CSD</span>
            </div>
            <span className="text-white uppercase tracking-wider text-xs">
              Community-Self-Defense<br/>Muay Thai Institute
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl uppercase tracking-wider text-white"
              style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>
            FAQs
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-blue-600/30 bg-black/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-blue-600 uppercase tracking-wider text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

