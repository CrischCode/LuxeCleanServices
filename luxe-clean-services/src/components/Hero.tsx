import React, { useState } from 'react';
import { companyData } from './data/content';
import { cleaningServicesList } from './data/contactData';
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  MapPin,
  Phone,
  CheckCircle2,
  Mail,
  Clock,
  Compass,
  User,
  Home,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    commercialAddress: '',
    city: 'Austin, TX',
    serviceType: cleaningServicesList[0],
    fullName: '',
    phone: '',
    email: '',
    additionalDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Request submitted for ${formData.companyName || formData.fullName}.`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8 font-sans">

      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/src/assets/Austin.png')`,
        }}
      />

      <div className="absolute inset-0 bg-slate-950/75 z-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

        <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">

          <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-4 text-center lg:text-left leading-tight">
            DS Luxes Clean <span className="font-normal text-blue-400">Services</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/15 my-3 backdrop-blur-sm">
            <Compass className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium tracking-wide text-white/90">
              Austin, TX and surrounding areas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 mt-2 mb-4 text-center lg:text-left leading-snug">
            Commercial Cleaning Services in <span className="text-blue-400 font-bold">Austin, TX</span>
          </h2>

          <p className="max-w-xl text-base text-white/80 mb-6 text-center lg:text-left font-normal leading-relaxed">
            Elevating workplace hygiene with meticulous attention to detail. 
            Professional janitorial services structured precisely around your operations.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-white/80 mb-8 bg-slate-900/60 px-3.5 py-2 rounded-md border border-slate-800 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            <span>Serving <strong className="text-white font-medium">{companyData.location}</strong> Area</span>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row justify-center lg:justify-start mb-8">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 shadow-sm"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-white/80 sm:flex-row sm:gap-6 lg:items-start">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>Licensed, Bonded & Insured</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Reliable 24/7 Service</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario completo pero más compacto y estético */}
        <div className="w-full lg:col-span-5">

          <div className="mx-auto w-full max-w-md rounded-2xl bg-white text-slate-900 p-5 sm:p-6 shadow-2xl lg:mx-0 lg:max-w-none border border-slate-100 relative overflow-hidden">

            <div className="mb-4 pt-0">
              <h3 className="text-xl font-light tracking-tight text-[#192338]">
                Request Your <span className="font-normal text-[#31487a]">Free Quote Today!</span>
              </h3>

              <p className="mt-0.5 text-xs text-slate-500 font-light">
                Tell us about your business or cleaning needs, and our team will get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5">

              {/* Company Name / Business Type */}
              <div>
                <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                  Company Name / Business Type <span className="text-[#31487a]">*</span>
                </label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Business Corp LLC"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                  />
                </div>
              </div>

              {/* Commercial Address */}
              <div>
                <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                  Commercial Address <span className="text-[#31487a]">*</span>
                </label>
                <div className="relative">
                  <Home className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1106 Clayton Ln, Austin, TX"
                    value={formData.commercialAddress}
                    onChange={(e) => setFormData({ ...formData, commercialAddress: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                  />
                </div>
              </div>

              {/* City & Service Type (Grid de 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                    City / Location <span className="text-[#31487a]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Austin / Central Texas"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                    Service Type <span className="text-[#31487a]">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white py-2 px-2 text-xs text-[#192338] outline-none transition-colors focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                  >
                    {cleaningServicesList.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Full Name & Phone Number (Grid de 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                    Full Name <span className="text-[#31487a]">*</span>
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                    Phone Number <span className="text-[#31487a]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="(512) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                  Email Address <span className="text-[#31487a]">*</span>
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a]"
                  />
                </div>
              </div>

              {/* Additional Details or Requirements */}
              <div>
                <label className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-[#192338]">
                  Additional Details or Requirements
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    placeholder="Tell us more about facility size or special requirements..."
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-white py-2 px-3 text-xs text-[#192338] outline-none transition-colors placeholder:text-slate-400 focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] resize-none"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#192338] px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#31487a] shadow-md uppercase tracking-widest"
              >
                Submit Request
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-light">
              <Clock className="h-3 w-3 text-[#31487a]" />
              <span>Fast response guaranteed. No obligations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};