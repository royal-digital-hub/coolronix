'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ShieldCheck, Wrench, Clock, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { FinalCTA } from '../components/FinalCTA';
import { BUSINESS_INFO, HYDERABAD_AREAS, SERVICES_DATA } from '../data/servicesData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* Page Header / Breadcrumbs */}
      <div className="bg-[#F4F8FA] border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: 'About Coolronix' }]} />
        </div>
      </div>

      {/* About Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F4F8FA] to-white border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SectionLabel variant="pill">ABOUT COOLRONIX</SectionLabel>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#06152F] tracking-tight leading-tight">
                Keeping Hyderabad Cool,{' '}
                <span className="text-[#F5B719] block mt-1">One AC at a Time.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#536785] leading-relaxed max-w-2xl">
                Coolronix is an established local AC Repair &amp; Services provider based in Uppal, Hyderabad. We deliver direct, honest, and reliable cooling solutions for residential homes and local commercial spaces across Hyderabad, Telangana.
              </p>

              <div className="flex items-center gap-3 pt-2 text-sm text-[#06152F] font-semibold">
                <div className="w-8 h-8 rounded-full bg-[#E8F2FA] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#1D4E89]" />
                </div>
                <span>Service Base: {BUSINESS_INFO.address}</span>
              </div>
            </div>

            {/* Right Hero Stats Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#06152F] rounded-3xl p-8 sm:p-10 text-white border border-[#162F5E] shadow-xl">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F5B719] block mb-2">
                  OUR MOTTO
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold leading-snug mb-6 text-white">
                  &ldquo;{BUSINESS_INFO.tagline}&rdquo;
                </p>
                <div className="space-y-4 pt-4 border-t border-[#162F5E] text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0" />
                    <span>Specialized in Split &amp; Window AC systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0" />
                    <span>Fast dispatch across Hyderabad twin cities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B719] shrink-0" />
                    <span>Direct phone and WhatsApp assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS COOLRONIX - Visual Storytelling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Box: Graphic Overview */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-[#F8FBFE] border border-[#E2EAF2] rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-[#06152F]">
                  Our Operational Pillars
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-[#F5B719]" />,
                      title: 'Transparent Diagnostics',
                      desc: 'We identify the real root cause and never recommend unnecessary part replacements.',
                    },
                    {
                      icon: <Wrench className="w-5 h-5 text-[#F5B719]" />,
                      title: 'Expert Hands-On Skill',
                      desc: 'Skilled in copper line flaring, electrical capacitors, and high-pressure jet cleaning.',
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-[#F5B719]" />,
                      title: 'Responsive Scheduling',
                      desc: 'Prompt appointments scheduled when Hyderabad summer temperatures soar.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-[#E8EFF6]">
                      <div className="p-2 bg-[#06152F] rounded-lg shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#06152F]">{item.title}</h4>
                        <p className="text-xs text-[#536785] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionLabel variant="blue">WHO IS COOLRONIX?</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight leading-tight">
                Practical AC Solutions for Every Hyderabad Household
              </h2>
              <div className="space-y-4 text-base text-[#536785] leading-relaxed">
                <p>
                  Hyderabad experiences severe summer heatwaves followed by humid monsoon spells. In these climate conditions, air conditioners work continuously under heavy thermal strain. When an AC stops cooling or begins leaking water, families need fast, trustworthy help.
                </p>
                <p>
                  Coolronix was built on a simple promise: provide clear, straightforward AC services without inflated jargon or surprise fees. Whether you need a seasonal deep coil jet wash, a precision gas recharge, or a complete unit relocation, we treat every job with professional diligence.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#06152F] border border-[#DCE6F1] font-bold px-6 py-3 rounded-xl transition-colors"
                >
                  <span>Explore Services &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICE APPROACH (4 STEPS) */}
      <section className="py-20 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel variant="gold">HOW WE WORK</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight mb-3">
              Our 4-Step <span className="text-[#F5B719]">Service Approach</span>
            </h2>
            <p className="text-base text-[#536785]">
              Every Coolronix service call follows a standardized, transparent process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Inspection & Test',
                desc: 'Testing electrical draw, compressor engagement, and baseline airflow.',
              },
              {
                step: '02',
                title: 'Clear Quotation',
                desc: 'Explaining the issue in plain terms and quoting fair rates upfront.',
              },
              {
                step: '03',
                title: 'Precision Execution',
                desc: 'Performing jet wash, flare repair, gas refill, or bracket installation with clean work ethics.',
              },
              {
                step: '04',
                title: 'Cooling Verification',
                desc: 'Measuring temperature drop before we consider the assignment complete.',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-[#E2EAF2] shadow-xs relative"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#06152F] text-white font-extrabold text-sm mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-[#06152F] mb-2">{step.title}</h3>
                <p className="text-sm text-[#536785] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDERABAD SERVICE AREA SECTION */}
      <section className="py-20 bg-white border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel variant="blue">LOCAL HYDERABAD COVERAGE</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight mb-3">
              Servicing Homes &amp; Offices Across <span className="text-[#F5B719]">Hyderabad</span>
            </h2>
            <p className="text-base text-[#536785]">
              Based in Uppal, Coolronix technicians promptly cover central, eastern, and western Hyderabad neighborhoods.
            </p>
          </div>

          {/* Area Chips Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {HYDERABAD_AREAS.map((area) => (
              <div
                key={area}
                className="p-3 bg-[#F8FBFE] border border-[#E2EAF2] rounded-xl text-center hover:border-[#F5B719] hover:bg-white transition-all shadow-2xs"
              >
                <span className="text-xs sm:text-sm font-bold text-[#06152F]">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#536785]">
              Don&apos;t see your colony? Call us directly at{' '}
              <a href={BUSINESS_INFO.phoneTel} className="text-[#06152F] font-bold underline">
                {BUSINESS_INFO.phoneDisplay}
              </a>{' '}
              to check service availability.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
};
