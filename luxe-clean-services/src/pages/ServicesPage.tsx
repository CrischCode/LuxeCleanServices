import React, { useState } from 'react';
import { servicesData } from '../components/data/servicesData';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { CheckCircle2, Sparkles, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<any | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen relative font-sans text-[#192338]">
      <div className="relative bg-[#192338] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-between">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop" 
            alt="Services Background" 
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
            Our <span className="text-[#d9e1f1] font-normal">Services</span>
          </h1>
          <p className="text-[#d9e1f1]/80 max-w-2xl mx-auto text-sm sm:text-base font-light pt-2">
            Professional cleaning solutions designed to elevate commercial spaces, corporate offices, and residential properties with absolute excellence.
          </p>
        </div>

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

      <section className="bg-white pt-12 pb-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'commercial', label: 'Commercial & Offices' },
            { id: 'residential', label: 'Residential & Move-In' },
            { id: 'specialized', label: 'Specialized & Post-Construction' },
            { id: 'recurring', label: 'Recurring Maintenance' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#192338] text-white shadow-sm'
                  : 'bg-[#d9e1f1]/40 text-[#192338] hover:bg-[#31487a] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {filteredServices.map((service) => (
            <div key={service.id} className="group relative flex flex-col items-center">
              
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-sm relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192338]/60 via-transparent to-transparent"></div>
              </div>

              <div className="w-[85%] sm:w-[75%] bg-white -mt-20 sm:-mt-24 relative z-10 p-6 sm:p-8 rounded-2xl shadow-xl border border-[#d9e1f1]/60 text-center flex flex-col items-center justify-between transition-transform duration-500 group-hover:-translate-y-2">
                <div className="space-y-3">
                  <div className="w-10 h-10 mx-auto bg-[#31487a]/10 text-[#31487a] rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#192338] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#192338]/70 text-xs sm:text-sm font-light leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 w-full">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#192338] hover:bg-[#31487a] text-white font-medium py-3 px-6 rounded-md transition text-xs sm:text-sm tracking-widest uppercase"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 text-[#d9e1f1]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#d9e1f1] text-left max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-[#192338]/60 hover:text-[#192338] p-2 rounded-full bg-[#d9e1f1]/30 hover:bg-[#d9e1f1] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs mb-2">
              <span className="w-2 h-2 rotate-45 bg-[#31487a] inline-block"></span>
              Service Specification
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-[#192338] mb-4">
              {activeModalService.title}
            </h2>

            <p className="text-[#192338]/80 text-sm sm:text-base font-light leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            <div className="border-t border-[#d9e1f1] pt-6 mb-8">
              <h4 className="text-sm font-semibold text-[#192338] uppercase tracking-wider mb-4">
                What this service includes:
              </h4>
              <ul className="space-y-3">
                {activeModalService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#192338]/70">
                    <CheckCircle2 className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#d9e1f1]">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-md border border-[#192338]/30 text-[#192338] text-xs uppercase font-medium hover:bg-gray-50 transition"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#192338] hover:bg-[#31487a] text-white px-6 py-3 rounded-md text-xs uppercase font-medium transition"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4 text-[#d9e1f1]" />
              </Link>
            </div>

          </div>
        </div>
      )}
      <CallToActionBanner />

    </div>
  );
};