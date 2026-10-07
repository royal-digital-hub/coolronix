'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { FinalCTA } from '../components/FinalCTA';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, HYDERABAD_AREAS, SERVICES_DATA } from '../data/servicesData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceRequired: 'AC Repair & Service',
    area: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Coolronix! I need AC service in Hyderabad.\n` +
      `*Name:* ${formData.name || 'Customer'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Location/Area:* ${formData.area || 'Hyderabad'}\n` +
      (formData.message ? `*Details:* ${formData.message}` : '')
    );
    window.open(`https://wa.me/919392873096?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Page Breadcrumbs */}
      <div className="bg-[#F4F8FA] border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 lg:py-18 bg-gradient-to-b from-[#F4F8FA] via-[#F8FBFE] to-white border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SectionLabel variant="pill">GET IN TOUCH</SectionLabel>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06152F] tracking-tight leading-tight mb-4">
            Contact <span className="text-[#F5B719]">Coolronix</span>
          </h1>

          <p className="text-base sm:text-lg text-[#536785] leading-relaxed">
            Need fast AC repair or servicing in Hyderabad? Call or WhatsApp us directly for quick scheduling and honest quotes.
          </p>
        </div>
      </section>

      {/* Quick Direct Action Cards (Call & WhatsApp) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:border-[#F5B719]/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#06152F] flex items-center justify-center mb-4 text-[#F5B719]">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  CALL DIRECTLY
                </span>
                <h3 className="text-2xl font-extrabold text-[#06152F] mb-2">
                  {BUSINESS_INFO.phoneDisplay}
                </h3>
                <p className="text-xs text-[#536785] mb-6 leading-relaxed">
                  Direct line for urgent AC cooling emergencies and scheduling.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.phoneTel}
                id="contact-page-call-btn"
                className="w-full bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold py-3 rounded-xl text-center text-sm shadow-2xs transition-all"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-2xl p-7 flex flex-col justify-between shadow-2xs hover:border-[#25D366]/60 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center mb-4 text-white">
                  <WhatsAppIcon variant="white" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  WHATSAPP CHAT
                </span>
                <h3 className="text-2xl font-extrabold text-[#06152F] mb-2">
                  {BUSINESS_INFO.phoneDisplay}
                </h3>
                <p className="text-xs text-[#536785] mb-6 leading-relaxed">
                  Send photos of your AC issue or share your location for rapid booking.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-page-whatsapp-btn"
                className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 rounded-xl text-center text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon variant="white" className="w-4 h-4 text-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-2xl p-7 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#06152F] flex items-center justify-center mb-4 text-[#F5B719]">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  LOCATION &amp; HOURS
                </span>
                <h3 className="text-lg font-extrabold text-[#06152F] mb-1">
                  Uppal, Hyderabad
                </h3>
                <p className="text-xs text-[#536785] mb-3 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#536785] font-medium pt-2 border-t border-slate-200">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{BUSINESS_INFO.operatingHours}</span>
                </div>
              </div>
              <div className="pt-4">
                <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-bold text-[#06152F]">
                  Area: All Hyderabad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Service Information Section */}
      <section className="py-16 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Direct-to-WhatsApp Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EAF2] shadow-xs">
              <SectionLabel variant="gold">DIRECT ENQUIRY</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight mb-3">
                Send Your AC Service Requirement
              </h2>
              <p className="text-xs sm:text-sm text-[#536785] mb-6 leading-relaxed">
                Fill in your details below. Clicking submit connects you directly via WhatsApp with all details pre-filled so our technician can assist you immediately without email delays.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#06152F] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6F1] bg-[#F8FBFE] text-sm text-[#06152F] focus:outline-none focus:border-[#F5B719] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#06152F] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 093928 73096"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6F1] bg-[#F8FBFE] text-sm text-[#06152F] focus:outline-none focus:border-[#F5B719] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Required Field */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#06152F] mb-1.5"
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6F1] bg-[#F8FBFE] text-sm text-[#06152F] focus:outline-none focus:border-[#F5B719] focus:bg-white transition-all"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Emergency Inspection">Emergency Inspection</option>
                      <option value="Other AC Problem">Other AC Problem</option>
                    </select>
                  </div>

                  {/* Hyderabad Colony / Area */}
                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-extrabold uppercase tracking-wider text-[#06152F] mb-1.5"
                    >
                      Your Area in Hyderabad
                    </label>
                    <input
                      id="contact-area"
                      type="text"
                      name="area"
                      placeholder="e.g. Uppal, Habsiguda, Tarnaka"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6F1] bg-[#F8FBFE] text-sm text-[#06152F] focus:outline-none focus:border-[#F5B719] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-extrabold uppercase tracking-wider text-[#06152F] mb-1.5"
                  >
                    Describe AC Problem (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Split AC is turning on but blowing room-temperature air. Water was dripping yesterday."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#DCE6F1] bg-[#F8FBFE] text-sm text-[#06152F] focus:outline-none focus:border-[#F5B719] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="w-full bg-[#06152F] hover:bg-[#0E244B] active:bg-[#040D1E] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-sm sm:text-base cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#F5B719]" />
                    <span>Book Your AC Service with Coolronix via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No account creation required &bull; Direct connection with our Hyderabad AC technician
                </p>
              </form>
            </div>

            {/* Right Column: Service Area & Quick Help FAQ */}
            <div className="lg:col-span-5 space-y-6">
              {/* Coverage Highlight Box */}
              <div className="bg-white rounded-3xl p-8 border border-[#E2EAF2] shadow-2xs space-y-4">
                <SectionLabel variant="blue">LOCAL DISPATCH</SectionLabel>
                <h3 className="text-xl font-bold text-[#06152F]">
                  Hyderabad Service Coverage
                </h3>
                <p className="text-xs sm:text-sm text-[#536785] leading-relaxed">
                  Coolronix provides prompt on-site attendance across all municipal wards of Hyderabad and Secunderabad, including:
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {HYDERABAD_AREAS.slice(0, 12).map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 bg-[#F4F8FA] rounded-md text-[11px] font-bold text-[#06152F] border border-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 bg-[#FEF6E0] rounded-md text-[11px] font-bold text-[#D99A04]">
                    + all Hyderabad zones
                  </span>
                </div>
              </div>

              {/* Quick Help Box */}
              <div className="bg-[#06152F] rounded-3xl p-8 text-white border border-[#162F5E] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#F5B719]">
                  <HelpCircle className="w-5 h-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">
                    QUICK HELP
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white">
                  AC Emergency during high heat?
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Call our emergency helpline directly. We prioritize homes with infants, elderly family members, or active water leakage dripping onto electrical sockets.
                </p>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
};
