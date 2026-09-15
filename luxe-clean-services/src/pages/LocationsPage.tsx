import React from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink, CheckCircle2 } from 'lucide-react';
import { mainOffice, serviceAreas } from '../components/data/locationsData';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

export const LocationsPage: React.FC = () => {
  const handleOpenMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      e.preventDefault();
      window.open(mainOffice.appleMapsUrl, '_blank');
    } else if (/android/i.test(userAgent)) {
      e.preventDefault();
      window.open(mainOffice.googleMapsUrl, '_blank');
    } else {
      e.preventDefault();
      window.open(mainOffice.googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="bg-white min-h-screen relative font-sans text-[#192338]">
      
      <div className="relative bg-[#192338] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-between">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#192338] via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 space-y-3 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#d9e1f1] font-medium uppercase tracking-[0.2em] text-xs">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#d9e1f1] inline-block"></span>
            DS Luxe Clean Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
            Our <span className="text-[#d9e1f1] font-normal">Locations</span>
          </h1>
          <p className="text-justify sm:text-center text-[#d9e1f1]/80 max-w-2xl mx-auto text-sm sm:text-base font-light pt-2 px-2 sm:px-0">
            Proudly delivering premier cleaning excellence across Austin and all surrounding Central Texas communities.
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

      <section className="bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-[#192338] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#31487a]/30 pointer-events-none blur-2xl"></div>

          <div className="space-y-6 z-10">
            <div className="inline-flex items-center gap-2 bg-[#31487a]/50 text-[#d9e1f1] px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#d9e1f1]/20">
              <MapPin className="w-3.5 h-3.5 text-[#d9e1f1]" /> Headquarters Office
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
              Based in <span className="font-normal text-[#d9e1f1]">Austin, Texas</span>
            </h2>

            <p className="text-justify text-[#d9e1f1]/80 text-sm sm:text-base font-light leading-relaxed">
              Our central office coordinates all dispatch teams ensuring prompt, reliable, and elite cleaning standards for every commercial and residential client.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-[#d9e1f1]">
                <MapPin className="w-5 h-5 text-[#31487a] bg-white rounded-full p-1 flex-shrink-0 mt-0.5" />
                <span>{mainOffice.addressLine1}, {mainOffice.cityStateZip}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#d9e1f1]">
                <Phone className="w-5 h-5 text-[#31487a] bg-white rounded-full p-1 flex-shrink-0" />
                <span>Office: {mainOffice.phoneOffice}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#d9e1f1]">
                <Mail className="w-5 h-5 text-[#31487a] bg-white rounded-full p-1 flex-shrink-0" />
                <span>{mainOffice.email}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={mainOffice.googleMapsUrl}
                onClick={handleOpenMap}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#192338] hover:bg-[#d9e1f1] font-medium py-3 px-6 rounded-md transition text-xs sm:text-sm tracking-widest uppercase shadow-md text-center"
              >
                <Navigation className="w-4 h-4 text-[#31487a] flex-shrink-0" />
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70 flex-shrink-0" />
              </a>
            </div>
          </div>

          <div className="relative z-10 w-full h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#d9e1f1]/30 bg-slate-200">
            <iframe
              title="Google Maps Location - DS Luxe Clean Services"
              src="https://maps.google.com/maps?q=1106+Clayton+Ln,+Austin,+TX+78723&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs">
            <span className="w-2 h-2 rotate-45 bg-[#31487a] inline-block"></span>
            Service Coverage Area
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#192338] tracking-tight">
            Areas Where We <span className="font-normal text-[#31487a]">Operate</span>
          </h2>
          <p className="text-justify sm:text-center text-[#192338]/70 text-sm sm:text-base font-light px-2 sm:px-0">
            We provide dependable, top-tier cleaning services across Austin and all neighboring communities throughout Central Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceAreas.map((area) => (
            <div 
              key={area.id} 
              className="bg-white rounded-2xl border border-[#d9e1f1] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div className="h-32 bg-gradient-to-b from-[#192338]/5 to-transparent p-6 flex items-start justify-between">
                <span className="text-xs font-medium uppercase tracking-wider bg-[#192338] text-white px-3 py-1 rounded-md shadow-xs">
                  Texas, USA
                </span>
                <MapPin className="w-6 h-6 text-[#31487a] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="px-6 sm:px-8 pb-4 -mt-4">
                <h3 className="text-2xl font-medium text-[#192338] tracking-tight group-hover:text-[#31487a] transition-colors">
                  {area.name}
                </h3>
              </div>

              <div className="p-6 sm:p-8 pt-4 border-t border-[#d9e1f1]/60 flex items-center justify-between mt-auto">
                <span className="text-xs text-[#192338]/60 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#31487a]" /> Active Service Zone
                </span>
                <Link
                  to="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-[#31487a] hover:text-[#192338] transition"
                >
                  Book Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToActionBanner />
      <WhatsAppButton />

    </div>
  );
};