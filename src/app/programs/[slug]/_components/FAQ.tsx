"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  programName?: string;
  faqs: FAQItem[];
};

export function FAQ({ 
  title = "FAQs", 
  programName = "Community-Self-Defense",
  faqs 
}: FAQProps) {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="faq-pattern"
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
            <span className="text-white uppercase tracking-wider text-xs leading-tight">
              Community-Self-Defense
              <br />
              {programName}
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl uppercase tracking-wider text-white"
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            {title}
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
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
