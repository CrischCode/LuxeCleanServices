import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="relative bg-[#192338] text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-white clip-path-slant pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
          alt="Clean environment background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="flex items-center gap-2 text-[#d9e1f1] font-medium uppercase tracking-[0.2em] text-xs">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#d9e1f1] inline-block"></span>
              Professional Cleaning Solutions
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Professional cleaning services <span className="text-[#d9e1f1] font-normal block sm:inline">that improve lives, one job at a time</span>
            </h2>

            <p className="text-[#d9e1f1]/80 text-sm sm:text-base font-light leading-relaxed text-justify max-w-2xl">
              At <strong className="font-semibold text-white">DS Luxe Clean Services</strong>, we understand that maintaining a clean environment is the first step toward better health and well-being. Contact us today to schedule your consultation and experience superior cleaning services from experts obsessed with your satisfaction!
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white font-medium px-8 py-4 rounded-md transition border border-white/40 text-xs sm:text-sm tracking-widest uppercase group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#d9e1f1]" />
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-[#31487a]/40 rounded-full blur-3xl"></div>
            
            <div className="relative border border-white/10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm text-center space-y-4 max-w-sm">
              <div className="w-12 h-12 mx-auto bg-[#31487a] rounded-xl flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-6 h-6 text-[#d9e1f1]" />
              </div>
              <h3 className="text-lg font-medium text-white">Excellence in Every Detail</h3>
              <p className="text-xs text-[#d9e1f1]/70 font-light leading-relaxed">
                Committed to transforming corporate and high-end residential spaces with precision, safety, and rigorous quality standards.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};