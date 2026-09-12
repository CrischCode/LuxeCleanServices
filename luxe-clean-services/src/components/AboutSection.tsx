import React from 'react';
import { companyData } from './data/content';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import logoImage from '/src/assets/Logo.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#d9e1f1] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs mb-3">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#31487a] inline-block"></span>
              Track record and absolute commitment to excellence
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#192338] tracking-tight leading-tight">
              About <span className="text-[#31487a] font-normal">Us</span>
            </h1>
          </div>

          <p className="text-[#192338]/70 text-sm sm:text-base md:text-lg font-light max-w-md leading-relaxed text-justify md:text-left">
            Discover the values, philosophy, and professional framework that make <strong className="font-semibold text-[#192338]">{companyData.name}</strong> the leading choice in Austin, TX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-xl sm:text-2xl font-medium text-[#192338] leading-snug">
              Structured solutions for professional spaces of the highest standard
            </h2>
            
            <p className="text-[#192338]/70 text-sm sm:text-base font-light leading-relaxed text-justify">
              {companyData.valueProposition}
            </p>

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
  );
};