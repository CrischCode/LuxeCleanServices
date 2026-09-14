import React, { useState } from 'react';
import { historyAboutUs } from '../components/data/content';
import { ChevronDown, ChevronUp, CheckCircle2, ShieldCheck } from 'lucide-react';
import logoImage from '/src/assets/Logo.jpeg';

export const AboutPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const founderItems = [
    {
      title: "FOUNDER & LEADERSHIP",
      text: historyAboutUs.storyOurFounders[0]
    },
    {
      title: "VISION & COMMITMENT",
      text: historyAboutUs.storyOurFounders[1]
    },
    {
      title: "GROWTH & COMMUNITY IMPACT",
      text: historyAboutUs.storyOurFounders[2]
    }
  ];

  return (
    <div className="bg-white min-h-screen relative font-sans text-[#192338]">
      
      <div className="relative bg-[#192338] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-between">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop" 
            alt="Cleaning background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#192338] via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 space-y-3 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#d9e1f1] font-medium uppercase tracking-[0.2em] text-xs">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#d9e1f1] inline-block"></span>
            DS Luxe Clean Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
            About <span className="text-[#d9e1f1] font-normal">Us</span>
          </h1>
        </div>

        {/* Onda decorativa */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg 
            className="relative block w-full h-16 sm:h-24 md:h-32 text-white" 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,64C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/*SECCIÓN PRINCIPALs */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#d9e1f1]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs mb-3">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#31487a] inline-block"></span>
                Track record and absolute commitment to excellence
              </div>
            </div>

            <p className="text-[#192338]/70 text-sm sm:text-base md:text-lg font-light max-w-md leading-relaxed text-justify md:text-left">
              Discover the values, philosophy, and professional framework that make <strong className="font-semibold text-[#192338]">DS Luxe Clean Services</strong> the leading choice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-xl sm:text-2xl font-medium text-[#192338] leading-snug">
                {historyAboutUs.title}
              </h2>
              
              <div className="space-y-3 text-[#192338]/70 text-sm sm:text-base font-light leading-relaxed text-justify">
                {historyAboutUs.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5 text-[#192338] text-sm sm:text-base font-normal">
                  <CheckCircle2 className="w-6 h-6 text-[#31487a] flex-shrink-0 mt-0.5" />
                  <span>Rigorous standards of quality and operational safety tailored to the commercial sector.</span>
                </div>
                
                <div className="flex items-start gap-3.5 text-[#192338] text-sm sm:text-base font-normal">
                  <CheckCircle2 className="w-6 h-6 text-[#31487a] flex-shrink-0 mt-0.5" />
                  <span>Highly trained, vetted personnel committed to discretion and attention to detail.</span>
                </div>

                <div className="flex items-start gap-3.5 text-[#192338] text-sm sm:text-base font-normal">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Fully bonded, insured, and backed by verifiable professional standards.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-[#31487a]/10 rounded-3xl blur-3xl -z-10"></div>
              
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#d9e1f1]/80 bg-white p-6 flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="DS Luxe Clean Services Logo" 
                  className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* seccion Meet Our Founder  */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-justify">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs mb-3">
                  <span className="w-2.5 h-2.5 rotate-45 bg-[#31487a] inline-block"></span>
                  Leadership & Vision
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-[#192338] tracking-tight mb-8">
                  Meet Our <span className="text-[#31487a] font-normal">Founder</span>
                </h2>
              </div>

              <div className="space-y-4">
                {founderItems.map((item, index) => {
                  const isOpen = openAccordion === index;
                  return (
                    <div 
                      key={index}
                      className={`rounded-xl transition-all duration-300 overflow-hidden bg-white border ${
                        isOpen 
                          ? 'border-[#31487a] shadow-sm' 
                          : 'border-[#d9e1f1]/80 hover:border-[#31487a]/50'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-2.5 h-2.5 rotate-45 transition-colors ${isOpen ? 'bg-[#31487a]' : 'bg-[#d9e1f1]'}`}></span>
                          <span className="font-medium text-[#192338] text-sm sm:text-base tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[#31487a]">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 text-[#192338]/70 text-sm font-light leading-relaxed border-t border-[#d9e1f1]/40">
                          <p>{item.text}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-sm border border-[#d9e1f1]/80 bg-white p-4">
                <img 
                  src="" 
                  alt="Duanis Sifontes - Founder" 
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};