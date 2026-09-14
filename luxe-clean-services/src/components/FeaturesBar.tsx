import React from 'react';
import { Clock, ShieldCheck, UserCheck } from 'lucide-react';

export const FeaturesBar: React.FC = () => {
  return (
    <div className="bg-[#192338] text-white py-10 sm:py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#1e2e4f] text-[#8fb3e2] rounded-lg border border-[#31487a]/40 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-base tracking-wide text-white">24/7 Availability</h3>
            <p className="text-[#d9e1f1]/70 text-xs mt-1 leading-relaxed">We clean seamlessly on your schedule, day or night.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#1e2e4f] text-[#8fb3e2] rounded-lg border border-[#31487a]/40 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-base tracking-wide text-white">Licensed & Insured</h3>
            <p className="text-[#d9e1f1]/70 text-xs mt-1 leading-relaxed">Fully bonded, insured, and certified corporate cleaning.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#1e2e4f] text-[#8fb3e2] rounded-lg border border-[#31487a]/40 shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-base tracking-wide text-white">Expert Professionals</h3>
            <p className="text-[#d9e1f1]/70 text-xs mt-1 leading-relaxed">Highly trained teams delivering meticulous precision.</p>
          </div>
        </div>

      </div>
    </div>
  );
};