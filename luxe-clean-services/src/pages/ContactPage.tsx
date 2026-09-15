import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { contactData, cleaningServicesList, emergencySupportData } from '../components/data/contactData';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    commercialAddress: '',
    city: '',
    fullName: '',
    phone: '',
    email: '',
    serviceType: cleaningServicesList[0],
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenMap = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white min-h-screen relative font-sans text-[#192338]">
    
      <div className="relative bg-[#192338] text-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-between">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 space-y-3 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#d9e1f1] font-medium uppercase tracking-[0.2em] text-xs">
            <span className="w-2.5 h-2.5 rotate-45 bg-[#d9e1f1] inline-block"></span>
            DS Luxe Clean Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight">
            Contact <span className="text-[#d9e1f1] font-normal">Us</span>
          </h1>
          <p className="text-justify sm:text-center text-[#d9e1f1]/80 max-w-2xl mx-auto text-sm sm:text-base font-light pt-2 px-2 sm:px-0">
            Get your free quote today or reach out directly to our Austin headquarters. We are ready to elevate your space.
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

      {/*FORMULARIO Y DATOS/MAPA LATERAL */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Formulario de Cotizacin */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#d9e1f1] shadow-xl p-6 sm:p-10">
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2 text-[#31487a] font-medium uppercase tracking-[0.2em] text-xs">
                <span className="w-2 h-2 rotate-45 bg-[#31487a] inline-block"></span>
                Free Estimation
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#192338] tracking-tight">
                Request Your <span className="font-normal text-[#31487a]">Free Quote Today!</span>
              </h2>
              <p className="text-[#192338]/70 text-sm font-light">
                Tell us about your business or cleaning needs, and our team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#192338]/5 border border-[#31487a]/30 rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#31487a] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-[#192338]">Message Sent Successfully!</h3>
                <p className="text-sm text-[#192338]/70 font-light max-w-md mx-auto">
                  Thank you for contacting us. We have received your details and will get in touch shortly to coordinate your quote.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-block bg-[#192338] text-white hover:bg-[#31487a] font-medium py-2.5 px-6 rounded-md transition text-xs uppercase tracking-widest"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                    Company Name / Business Type *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Business Corp LLC"
                    className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                    Commercial Address *
                  </label>
                  <input
                    type="text"
                    name="commercialAddress"
                    required
                    value={formData.commercialAddress}
                    onChange={handleChange}
                    placeholder="e.g. 1106 Clayton Ln, Austin, TX"
                    className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Austin / Central Texas"
                      className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                    >
                      {cleaningServicesList.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(512) 000-0000"
                      className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@company.com"
                    className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#192338]">
                    Additional Details or Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about facility size or special requirements..."
                    className="w-full bg-white border border-[#d9e1f1] rounded-xl px-4 py-3 text-sm text-[#192338] placeholder-gray-400 focus:outline-none focus:border-[#31487a] focus:ring-1 focus:ring-[#31487a] transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#192338] hover:bg-[#31487a] text-white font-medium py-4 px-8 rounded-xl transition shadow-lg text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </form>
            )}
          </div>

          {/*Mapa Interactivo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-[#d9e1f1] shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-[#d9e1f1]/60 pb-5">
                <span className="text-xs font-medium uppercase tracking-wider bg-[#192338] text-white px-3 py-1 rounded-md shadow-xs">
                  Headquarters
                </span>
                <h3 className="text-2xl font-medium text-[#192338] tracking-tight mt-3">
                  {contactData.headquartersTitle}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-[#192338]/80">
                  <MapPin className="w-5 h-5 text-[#31487a] flex-shrink-0 mt-0.5" />
                  <span className="font-light">{contactData.addressLine1}, {contactData.cityStateZip}</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-[#192338]/80">
                  <Phone className="w-5 h-5 text-[#31487a] flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">Office: {contactData.phoneOffice}</span>
                    <span className="text-xs text-[#192338]/70">Direct/Personal: {contactData.phonePersonal}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#192338]/80">
                  <Mail className="w-5 h-5 text-[#31487a] flex-shrink-0" />
                  <span className="font-light">{contactData.email}</span>
                </div>
              </div>

              {/* Mapa embebido */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-[#d9e1f1] bg-slate-100">
                <iframe
                  title="Google Maps Location - Austin HQ"
                  src={contactData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div>
                <a
                  href={contactData.googleMapsUrl}
                  onClick={(e) => handleOpenMap(e, contactData.googleMapsUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#192338] text-white hover:bg-[#31487a] font-medium py-3 px-6 rounded-xl transition text-xs tracking-widest uppercase shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>

            </div>

            <div className="bg-[#192338] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-3">
              <h4 className="text-lg font-medium tracking-tight text-white relative z-10">
                {emergencySupportData.title}
              </h4>
              <p className="text-[#d9e1f1]/80 text-sm font-light leading-relaxed relative z-10">
                {emergencySupportData.description}
              </p>
            </div>

          </div>

        </div>
      </section>
      <CallToActionBanner />
      <WhatsAppButton />
    </div>
  );
};