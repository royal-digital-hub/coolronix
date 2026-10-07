'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { ServiceCard } from '../components/ServiceCard';
import { FinalCTA } from '../components/FinalCTA';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export const ServicesPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredServices =
    filterCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.serviceCategory === filterCategory);

  return (
    <div className="bg-white min-h-screen">

      {/* Page Breadcrumbs */}
      <div className="bg-[#F4F8FA] border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={[{ label: 'Services' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F4F8FA] via-[#F8FBFE] to-white border-b border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SectionLabel variant="pill">HYDERABAD COOLING EXPERTS</SectionLabel>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#06152F] tracking-tight leading-tight mb-4">
            AC Repair &amp; Services in{' '}
            <span className="text-[#F5B719]">Hyderabad</span>
          </h1>

          <p className="text-base sm:text-lg text-[#536785] leading-relaxed mb-8">
            Complete cooling solutions engineered for Split and Window AC systems. Pre-Piping is a key Coolronix service for new construction, renovation, and planned AC installations. Select a service below to view details and book assistance.
          </p>

          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#DCE6F1] shadow-2xs text-sm font-semibold text-[#06152F]">
            <span>Need immediate AC guidance?</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-[#06152F] hover:text-[#D99A04] font-extrabold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="pt-10 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'repair', label: 'AC Repair' },
              { id: 'gas', label: 'Gas Refill' },
              { id: 'installation', label: 'Installation' },
              { id: 'pre-piping', label: 'Pre-Piping' },
              { id: 'maintenance', label: 'Maintenance' },
              { id: 'split', label: 'Split AC' },
              { id: 'window', label: 'Window AC' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 ${
                  filterCategory === cat.id
                    ? 'bg-[#06152F] text-white shadow-sm'
                    : 'bg-[#F4F8FA] text-[#536785] hover:bg-[#E8EFF6] hover:text-[#06152F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Services Grid (Concept 2 Numbered Card Design) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Decision Matrix Guide */}
      <section className="py-16 bg-[#F4F8FA] border-t border-[#E2EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#E2EAF2] shadow-sm">
            <SectionLabel variant="gold">SERVICE GUIDE</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06152F] tracking-tight mb-4">
              Not Sure Which Service Your AC Needs?
            </h2>
            <p className="text-sm sm:text-base text-[#536785] mb-8 leading-relaxed">
              Match your AC&apos;s current symptom below to discover the appropriate service:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  symptom: 'AC blowing room-temperature air & outdoor unit silent',
                  solution: 'AC Repair & Service',
                  slug: 'ac-repair-service',
                },
                {
                  symptom: 'Frost or ice visible on copper pipes',
                  solution: 'AC Gas Refill',
                  slug: 'ac-gas-refill',
                },
                {
                  symptom: 'Water dripping or pouring down inside the room',
                  solution: 'Split AC Service / Jet Flush',
                  slug: 'split-ac-service',
                },
                {
                  symptom: 'Weak airflow, foul odor, or pre-summer checkup',
                  solution: 'AC Maintenance',
                  slug: 'ac-maintenance',
                },
                {
                  symptom: 'Moving house or bought a new AC unit',
                  solution: 'AC Installation',
                  slug: 'ac-installation',
                },
                {
                  symptom: 'Excessive rattling noise on window sill',
                  solution: 'Window AC Service',
                  slug: 'window-ac-service',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/services/${item.slug}`}
                  className="p-4 rounded-xl bg-[#F8FBFE] border border-[#E2EAF2] hover:border-[#F5B719] hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <p className="text-xs sm:text-sm text-[#536785] mb-3">
                    <span className="font-bold text-[#06152F]">Symptom:</span> &ldquo;{item.symptom}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#06152F] group-hover:text-[#F5B719]">
                    <span>&rarr; {item.solution}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
