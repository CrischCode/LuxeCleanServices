import React from 'react';
import { CheckSquare } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-tr-[120px] rounded-br-3xl rounded-bl-[120px] rounded-tl-3xl shadow-xl border border-[#d9e1f1]">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional cleaning team" 
                  className="w-full h-[520px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8fb3e2]/20 rounded-full blur-2xl -z-10"></div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              
              <div>
                <h1 className="text-3xl md:text-5xl font-light text-[#192338] tracking-tight leading-[1.2]">
                  <span className="text-[#31487a] font-normal">Experience and dedication</span> in reliable cleaning
                </h1>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <CheckSquare className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-1" />
                  <p className="text-[#192338] text-justify text-sm md:text-base font-normal">
                    Providing services to businesses in Austin and surrounding Texas communities.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckSquare className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-1" />
                  <p className="text-[#192338] text-sm md:text-base font-normal">
                    Certified with strict operational safety standards.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckSquare className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-1" />
                  <p className="text-[#192338] text-sm md:text-base font-normal">
                    Experts in commercial cleaning and short-term rentals.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckSquare className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-1" />
                  <p className="text-[#192338] text-sm md:text-base font-normal">
                    Fully bonded and insured cleaning company.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[#192338]/80 text-justify text-sm md:text-base font-light leading-relaxed border-t border-[#d9e1f1] pt-6">
                <p>
                  There is no shortage of reasons to hire professional cleaning services. Many of our commercial clients also realized that outsourcing the cleaning of their facilities made much more sense. We all have a reason to take advantage of the benefits of a professional cleaning service, and our goal is to exceed your expectations no matter what brought you to us.
                </p>
                <p>
                  The goal of <strong>DS Luxe Clean Services</strong> is to simplify our clients' lives by removing cleaning from their to-do list. With free time for friends, family, fun, or focus on the task at hand, it won't be long before you begin to wonder how you managed to survive without our professional cleaners taking care of your space.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      <AboutSection />
      
    </div>
  );
};