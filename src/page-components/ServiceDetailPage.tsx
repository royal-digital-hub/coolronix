'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Gauge,
  Droplets,
  Wind,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { FinalCTA } from '../components/FinalCTA';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { getServiceIcon } from '../components/ServiceCard';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const activeSlug = slug;

  const service = SERVICES_DATA.find((s) => s.slug === activeSlug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return null;
  }

  // Find other services for "Related Services"
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Service-specific icon / badge
  const getServiceAccentIcon = () => {
    switch (service.serviceCategory) {
      case 'repair':
        return <Zap className="w-5 h-5 text-[#F5B719]" />;
      case 'gas':
        return <Gauge className="w-5 h-5 text-[#F5B719]" />;
      case 'installation':
        return <Layers className="w-5 h-5 text-[#F5B719]" />;
      case 'maintenance':
        return <Wind className="w-5 h-5 text-[#F5B719]" />;
      case 'split':
        return <Droplets className="w-5 h-5 text-[#F5B719]" />;
      case 'pre-piping':
        return <Layers className="w-5 h-5 text-[#F5B719]" />;
      case 'window':
        return <ShieldCheck className="w-5 h-5 text-[#F5B719]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#F5B719]" />;
    }
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Page Breadcrumbs */}
      <div className="bg-[#F4F8FA] border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <Breadcrumbs
            items={[
              { label: 'Services', path: '/services' },
              { label: service.title },
            ]}
          />
        </div>
      </div>

      {/* SERVICE SPECIFIC HERO SECTION */}
      <section
        id="service-hero"
        className="py-14 lg:py-20 bg-gradient-to-b from-[#F4F8FA] via-[#F8FBFE] to-white border-b border-[#E2EAF2]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <SectionLabel variant="pill">
                  AC SERVICE &bull; HYDERABAD
                </SectionLabel>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-[#06152F] shadow-2xs">
                  {getServiceAccentIcon()}
                  <span>Verified Service</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#06152F] tracking-tight leading-[1.12]">
                {service.heroHeadline.split(' in Hyderabad')[0]} in{' '}
                <span className="text-[#F5B719]">Hyderabad</span>
              </h1>

              <p className="text-lg font-bold text-[#06152F]">
                {service.heroHighlight}
              </p>

              <p className="text-base text-[#536785] leading-relaxed max-w-2xl">
                {service.intro}
              </p>

              {/* Supported AC Types */}
              <div className="pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                  Systems Covered:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.acTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-white border border-[#DCE6F1] rounded-md text-xs font-bold text-[#06152F] shadow-2xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warranty */}
              {service.warranties?.length ? (
                <div className="pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block mb-2">Warranty</span>
                  <div className="flex flex-wrap gap-2">
                    {service.warranties.map((warranty) => (
                      <span key={warranty} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {warranty}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Primary Call, Booking & WhatsApp CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="bg-[#F5B719] hover:bg-[#E0A30B] active:bg-[#C88E00] text-[#06152F] font-bold px-7 py-3.5 rounded-xl shadow-sm transition-all duration-150 flex items-center justify-center gap-2 text-base text-center"
                >
                  <Phone className="w-5 h-5 fill-[#06152F]" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <Link
                  href="/contact"
                  className="bg-[#06152F] hover:bg-[#102852] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-sm text-base text-center"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F5B719]" />
                  <span>Book Service</span>
                </Link>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-[#0F5132] border border-[#C3E6CB] font-bold px-6 py-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-2xs text-base text-center"
                >
                  <WhatsAppIcon variant="color" className="w-5 h-5 shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Hero Column: Service Quick Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#06152F] text-white rounded-3xl p-8 sm:p-10 border border-[#162F5E] shadow-xl">
                <div className="flex items-center justify-between border-b border-[#162F5E] pb-4 mb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5B719]">
                    COOLRONIX DISPATCH
                  </span>
                  <span className="text-xs font-bold text-slate-300">
                    Hyderabad
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">
                  Why Book With Coolronix?
                </h3>

                <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0 mt-0.5" />
                    <span>Technicians with hands-on toolkits &amp; spare components</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0 mt-0.5" />
                    <span>Transparent quotes explained before work starts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0 mt-0.5" />
                    <span>Local service in Uppal &amp; surrounding Hyderabad areas</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0 mt-0.5" />
                    <span>Verified 5.0 Google Rating from real customers</span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="w-full bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Book This Service</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS THIS SERVICE RESOLVES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="gold">SYMPTOM CHECK</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight mb-3">
              Common Signs Your AC Needs{' '}
              <span className="text-[#F5B719]">{service.title}</span>
            </h2>
            <p className="text-sm sm:text-base text-[#536785]">
              If you observe any of these symptoms in your Split or Window AC, professional inspection is recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.commonProblems.map((prob, idx) => (
              <div
                key={idx}
                className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-2xl p-6 flex flex-col justify-between hover:border-[#F5B719]/50 transition-all shadow-2xs"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#06152F] text-white font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#06152F] mb-2 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536785] leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE SERVICE INCLUDES & BENEFITS (SPLIT LAYOUT) */}
      <section className="py-16 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: What Is Included Checklist */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EAF2] shadow-xs">
              <SectionLabel variant="blue">COMPREHENSIVE CHECKLIST</SectionLabel>
              <h3 className="text-2xl font-extrabold text-[#06152F] tracking-tight mb-6">
                What This Service Includes
              </h3>

              <div className="space-y-4">
                {service.whatIsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-[#FEF6E0] text-[#D99A04] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#F5B719]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#2D3F5A] leading-relaxed font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-5 space-y-5">
              <SectionLabel variant="gold">KEY BENEFITS</SectionLabel>
              <h3 className="text-2xl font-extrabold text-[#06152F] tracking-tight mb-2">
                Why Professional Care Matters
              </h3>

              <div className="space-y-4">
                {service.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-[#E2EAF2] shadow-2xs"
                  >
                    <h4 className="text-base font-bold text-[#06152F] mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#536785] leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Safety Guidance Notice */}
              <div className="p-4 rounded-2xl bg-[#FFF9E6] border border-[#FFE7A3] flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#B87B00] shrink-0 mt-0.5" />
                <p className="text-xs text-[#7A5200] leading-relaxed">
                  <strong className="font-bold">Safety Notice:</strong> Air conditioning circuits operate on high AC voltages and pressurized refrigerants. Never attempt DIY flaring or capacitor handling. Coolronix uses insulated tools and calibrated gauges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PROCESS (4 STEPS) */}
      <section className="py-16 bg-white border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="gold">SERVICE PROTOCOL</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight mb-3">
              How We Execute <span className="text-[#F5B719]">{service.title}</span>
            </h2>
            <p className="text-sm sm:text-base text-[#536785]">
              Straightforward and systematic from the moment you call.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#06152F] text-white font-extrabold text-sm mb-4">
                    {p.step}
                  </span>
                  <h3 className="text-base font-bold text-[#06152F] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#536785] leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel variant="blue">HAVE QUESTIONS?</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight mb-3">
              {service.title} FAQs
            </h2>
            <p className="text-sm text-[#536785]">
              Common questions answered by Coolronix technicians in Hyderabad.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E2EAF2] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-base font-bold text-[#06152F]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 rounded-full bg-slate-100 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm sm:text-base text-[#536785] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-white border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <SectionLabel variant="gold">EXPLORE MORE</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight">
                Related AC Services in Hyderabad
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-[#06152F] hover:text-[#D99A04] flex items-center gap-1.5"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-2xl bg-[#F8FBFE] border border-[#E2EAF2] flex flex-col justify-between hover:border-[#F5B719] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#06152F] flex items-center justify-center mb-3 text-[#F5B719] shadow-2xs">
                    {getServiceIcon(rel.slug)}
                  </div>
                  <h3 className="text-lg font-bold text-[#06152F] mb-2">{rel.title}</h3>
                  <p className="text-xs sm:text-sm text-[#536785] leading-relaxed mb-4">
                    {rel.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/services/${rel.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#F5B719] hover:text-[#D99A04] inline-flex items-center gap-1"
                >
                  <span>Learn More &rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <FinalCTA
        customHeading={
          <>
            Need {service.title}? <span className="text-[#F5B719] block sm:inline">Call Coolronix</span>
          </>
        }
        customSubtitle={`Speak directly with Coolronix technicians in Hyderabad for fast assistance with your ${service.title.toLowerCase()}.`}
      />
    </div>
  );
};
