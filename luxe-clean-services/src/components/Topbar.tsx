import React from 'react';
import { Phone, ShieldCheck, Clock } from 'lucide-react';
import { companyData } from './data/content';

export const Topbar: React.FC = () => {
  return (
    <div className="bg-white text-[#192338] text-xs md:text-sm py-2.5 px-4 sm:px-6 lg:px-8 border-b border-[#d9e1f1] shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start text-[#192338]/80">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#31487a]" />
            <span>24/7 Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Licensed, Bonded & Insured</span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-medium bg-[#f8fafc] px-3.5 py-1 rounded-full border border-[#d9e1f1]">
          <Phone className="w-4 h-4 text-[#31487a]" />
          <span className="text-[#192338]/70">Austin, TX:</span>
          <a href={`tel:${companyData.phoneOffice}`} className="text-[#31487a] hover:underline font-semibold">
            {companyData.phoneOffice}
          </a>
        </div>

      </div>
    </div>
  );
};