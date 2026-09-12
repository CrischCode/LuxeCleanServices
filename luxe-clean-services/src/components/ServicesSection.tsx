import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Building2, 
  Home,  
  ArrowRight 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const featuredServices = [
    {
      title: "Commercial & Office Cleaning",
      description: "Immaculate and professional corporate buildings, offices, and workspaces.",
      icon: <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-[#31487a]" />
    },
    {
      title: "Commercial Buildings",
      description: "Comprehensive maintenance and cleaning tailored to large corporate facilities.",
      icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#31487a]" />
    },
    {
      title: "Airbnb & Short-Term Rentals",
      description: "Fast, detailed turnover ready to welcome new guests with maximum quality.",
      icon: <Home className="w-7 h-7 sm:w-8 sm:h-8 text-[#31487a]" />
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 border-b border-[#d9e1f1]">
      <div className="max-w-7xl mx-square mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs mb-3">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#31487a] inline-block"></span>
              Comprehensive cleaning solutions for every sector
            </div>
  
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#192338] tracking-tight leading-tight">
              Our <span className="text-[#31487a] font-normal">Services</span> 
            </h2>
          </div>

          <p className="text-[#192338]/70 text-sm sm:text-base md:text-lg font-light max-w-md leading-relaxed text-justify md:text-left">
            From corporate offices to specialized spaces, we offer customized services that guarantee pristine environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-xl border border-[#d9e1f1]/80 shadow-2xs hover:shadow-md transition duration-300 flex flex-col justify-between group text-center"
            >
              <div>
                <div className="mx-auto p-4 bg-[#d9e1f1]/30 rounded-xl w-fit mb-6 group-hover:bg-[#31487a]/10 transition flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-medium text-[#192338] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[#192338]/70 text-xs sm:text-sm font-light leading-relaxed text-justify sm:text-center">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#d9e1f1]/40 flex items-center justify-center text-[11px] sm:text-xs uppercase tracking-wider text-[#31487a] font-semibold">
                DS Luxe Clean Service
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center gap-2 bg-[#31487a] hover:bg-[#25385e] text-white font-medium px-8 sm:px-10 py-4 rounded-md transition text-xs sm:text-sm tracking-widest uppercase shadow-sm w-full sm:w-auto"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};