'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Phone, ArrowRight, AlertCircle } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { ServiceCard } from '../components/ServiceCard';
import { TrustSection } from '../components/TrustSection';
import { CustomerReviews } from '../components/CustomerReviews';
import { FinalCTA } from '../components/FinalCTA';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BUSINESS_INFO, SERVICES_DATA, AC_PROBLEMS } from '../data/servicesData';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">

      {/* HERO SECTION - Exact Concept 2 Composition */}
      <section
        id="hero-section"
        className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#F5F9FC] via-[#F8FBFE] to-white border-b border-[#E8EFF6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Uppercase Pill */}
              <SectionLabel variant="pill">AC SERVICE IN HYDERABAD</SectionLabel>

              {/* Huge Bold Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#06152F] tracking-tight leading-[1.08]">
                AC Not Cooling?{' '}
                <span className="text-[#F5B719] block mt-1 sm:mt-2">We Can Help.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#536785] leading-relaxed max-w-xl">
                Professional AC repair, gas refill, installation and maintenance services for Split and Window ACs.
              </p>

              {/* Service Quick Tags */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['AC Repair', 'AC Gas Refill', 'AC Installation', 'AC Maintenance'].map((tag) => (
                  <div
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#DCE6F1] shadow-2xs text-xs sm:text-[13px] font-bold text-[#06152F]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#06152F] stroke-[2.5]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  id="hero-call-now-btn"
                  href={BUSINESS_INFO.phoneTel}
                  className="bg-[#F5B719] hover:bg-[#E0A30B] active:bg-[#C88E00] text-[#06152F] font-bold px-8 py-3.5 rounded-xl shadow-sm transition-all duration-150 flex flex-col items-center justify-center leading-tight hover:shadow-md text-center"
                >
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#06152F]/90">
                    CALL NOW
                  </span>
                  <span className="text-xl font-extrabold tracking-tight mt-0.5 flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-[#06152F]" />
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </a>

                <a
                  id="hero-whatsapp-btn"
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 active:bg-slate-100 text-[#0F5132] border border-[#C3E6CB] font-bold px-7 py-4 rounded-xl transition-all duration-150 flex items-center justify-center gap-2.5 shadow-2xs text-base text-center"
                >
                  <WhatsAppIcon variant="color" className="w-5 h-5 shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right Hero Column: Concept 2 Navy Card */}
            <div className="lg:col-span-5">
              <div
                id="hero-side-card"
                className="bg-[#06152F] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#132A55] relative overflow-hidden"
              >
                {/* Small gold label */}
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#F5B719] mb-3">
                  NEED AC SERVICE?
                </span>

                {/* Card Heading */}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight mb-4">
                  Don&apos;t Stay Without{' '}
                  <span className="text-[#F5B719]">Comfort.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Contact Coolronix for AC repair and service in Hyderabad.
                </p>

                {/* Primary Gold Card Button */}
                <Link
                  href="/services"
                  id="hero-card-get-service-btn"
                  className="w-full bg-[#F5B719] hover:bg-[#E0A30B] active:bg-[#C88E00] text-[#06152F] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 shadow-md text-base mb-8"
                >
                  <span>Get AC Service</span>
                  <ArrowRight className="w-4 h-4 text-[#06152F]" />
                </Link>

                {/* 3 Quick Pill Links at Bottom of Card */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#162F5E]">
                  <Link
                    href="/services/split-ac-service"
                    className="bg-white hover:bg-slate-100 text-[#06152F] text-center text-[11px] font-extrabold py-2 px-1 rounded-lg transition-colors truncate shadow-2xs"
                  >
                    Split AC Service
                  </Link>
                  <Link
                    href="/services/window-ac-service"
                    className="bg-white hover:bg-slate-100 text-[#06152F] text-center text-[11px] font-extrabold py-2 px-1 rounded-lg transition-colors truncate shadow-2xs"
                  >
                    Window AC Service
                  </Link>
                  <Link
                    href="/services/ac-gas-refill"
                    className="bg-white hover:bg-slate-100 text-[#06152F] text-center text-[11px] font-extrabold py-2 px-1 rounded-lg transition-colors truncate shadow-2xs"
                  >
                    AC Gas Refill
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHOOSE YOUR AC SERVICE */}
      <section id="services-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel variant="blue">WHAT DO YOU NEED?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight mb-3">
              Choose Your <span className="text-[#F5B719]">AC Service</span>
            </h2>
            <p className="text-base text-[#536785]">
              Select the service you need and contact Coolronix directly.
            </p>
          </div>

          {/* 6 Service Cards Grid (3x2) - Now using icons, no numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: AC PROBLEMS SECTION */}
      <section id="problems-section" className="py-20 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel variant="gold">AC PROBLEMS?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight mb-3">
              What&apos;s Wrong <span className="text-[#F5B719]">With Your AC?</span>
            </h2>
            <p className="text-base text-[#536785]">
              Tell us what you are experiencing and contact Coolronix for the appropriate AC service.
            </p>
          </div>

          {/* 6 AC Problems Cards Grid - Clean diagnosis icon, no numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {AC_PROBLEMS.map((problem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#E2EAF2] shadow-xs hover:shadow-md hover:border-[#F5B719]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E8F2FA] text-[#1D4E89] group-hover:bg-[#06152F] group-hover:text-[#F5B719] transition-colors">
                      <AlertCircle className="w-5 h-5" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#06152F] mb-2.5">
                    {problem.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#536785] mb-6">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F5B719] hover:text-[#D99A04] transition-colors"
                  >
                    <span>Talk to Coolronix</span>
                    <span>&rarr;</span>
                  </a>
                  <span className="text-xs text-slate-400 font-medium">On-Site Inspection</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE COOLRONIX? */}
      <TrustSection />

      {/* SECTION 5: CUSTOMER REVIEWS */}
      <CustomerReviews />

      {/* SECTION 6: FINAL CTA */}
      <FinalCTA />
    </div>
  );
};
