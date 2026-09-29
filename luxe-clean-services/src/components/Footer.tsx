import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { companyData } from './data/content';
import { contactData } from './data/contactData';
import logoImage from '/src/assets/Logo.jpeg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#192338] text-white font-sans border-t border-[#31487a]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#d9e1f1]/15">
          
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#d9e1f1]/30 bg-white flex items-center justify-center p-0.5 shadow-sm">
                <img 
                  src={logoImage} 
                  alt={`${companyData.name} Logo`} 
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="font-bold tracking-tight text-white text-base sm:text-lg flex items-center gap-1.5">
                <span className="font-light text-white">DS LUXE CLEAN</span> 
                <span className="font-normal text-[#d9e1f1]">SERVICES</span>
              </div>
            </Link>

            <p className="text-justify text-[#d9e1f1]/80 text-sm leading-relaxed font-light max-w-sm">
              Professional cleaning solutions designed to elevate commercial spaces, corporate offices, and residential properties with absolute excellence.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-sm pt-1">
              <div className="flex items-center gap-3 bg-[#31487a]/40 border border-[#d9e1f1]/20 rounded-xl p-3 transition-all hover:bg-[#31487a]/60">
                <div className="p-2 bg-[#192338] rounded-lg text-[#d9e1f1]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#d9e1f1] uppercase tracking-wider leading-tight">Licensed</span>
                  <span className="text-[10px] text-white/70 block">& Insured</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#31487a]/40 border border-[#d9e1f1]/20 rounded-xl p-3 transition-all hover:bg-[#31487a]/60">
                <div className="p-2 bg-[#192338] rounded-lg text-[#d9e1f1]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#d9e1f1] uppercase tracking-wider leading-tight">24/7 Support</span>
                  <span className="text-[10px] text-white/70 block">Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#d9e1f1] font-semibold text-base tracking-wide border-b border-[#31487a] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Locations', path: '/locations' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-[#d9e1f1]/75 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#d9e1f1]/50 group-hover:text-white transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

   
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#d9e1f1] font-semibold text-base tracking-wide border-b border-[#31487a] pb-2 inline-block">
              Headquarters
            </h4>
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d9e1f1] mt-1 flex-shrink-0" />
                <a 
                  href={contactData.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#d9e1f1]/80 hover:text-white transition-colors leading-relaxed block"
                >
                  <span className="font-semibold text-white block">{contactData.headquartersTitle}</span>
                  {contactData.addressLine1}, <br />
                  {contactData.cityStateZip}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#d9e1f1] font-semibold text-base tracking-wide border-b border-[#31487a] pb-2 inline-block">
              Contact Info
            </h4>
            
            <div className="space-y-3 pt-1">

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d9e1f1] mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] font-bold text-[#d9e1f1]/70 uppercase tracking-wider">Email Us</span>
                  <a href={`mailto:${contactData.email}`} className="text-xs sm:text-sm text-white hover:underline break-all">
                    {contactData.email}
                  </a>
                </div>
              </div>


              <div className="flex items-start gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#d9e1f1] mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <span className="block text-[10px] font-bold text-[#d9e1f1]/70 uppercase tracking-wider">Office Phone</span>
                    <a href={`tel:${contactData.phoneOffice}`} className="text-xs sm:text-sm text-white hover:underline">
                      {contactData.phoneOffice}
                    </a>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#d9e1f1]/70 uppercase tracking-wider">Direct / Personal</span>
                    <a href={`tel:${contactData.phonePersonal}`} className="text-xs sm:text-sm text-white hover:underline">
                      {contactData.phonePersonal}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#d9e1f1]/60 font-light gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};