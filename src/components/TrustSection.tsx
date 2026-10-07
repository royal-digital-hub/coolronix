import React from 'react';
import {
  Star,
  Wrench,
  Layers,
  Wind,
  PhoneCall,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { BUSINESS_INFO } from '../data/servicesData';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WHY_CHOOSE_FEATURES: FeatureItem[] = [
  {
    icon: <Wrench className="w-5 h-5 text-[#F5B719]" />,
    title: 'Professional AC Service',
    description:
      'Reliable AC repair, servicing, installation and maintenance for common AC requirements.',
  },
  {
    icon: <Layers className="w-5 h-5 text-[#F5B719]" />,
    title: 'Complete AC Solutions',
    description:
      'From AC repair and gas refill to installation and maintenance, get the service you need in one place.',
  },
  {
    icon: <Wind className="w-5 h-5 text-[#F5B719]" />,
    title: 'Split & Window AC Service',
    description:
      'Service options for both Split AC and Window AC systems across residential and commercial spaces.',
  },
  {
    icon: <PhoneCall className="w-5 h-5 text-[#F5B719]" />,
    title: 'Easy to Contact',
    description:
      'Call or WhatsApp Coolronix directly to discuss your AC service requirement and schedule on-site support.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#F5B719]" />,
    title: 'Local Hyderabad Service',
    description:
      'AC service focused on customers in Hyderabad, with responsive coverage across Uppal and twin cities.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#F5B719]" />,
    title: 'Customer-Focused Approach',
    description:
      'Clear communication and practical service options based on the customer’s requirement.',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section
      id="why-choose-coolronix"
      className="bg-[#06152F] text-white py-18 lg:py-24 border-t border-[#12274E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block with Rating Integration */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl space-y-3.5">
            <SectionLabel variant="gold">WHY COOLRONIX?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]">
              Why Choose <span className="text-[#F5B719]">Coolronix?</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
              Professional AC repair and service with clear solutions for homes and businesses across Hyderabad.
            </p>
          </div>

          {/* Authentic 5.0 Google Rating Badge */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-4 bg-[#0B1E40] border border-[#1C3563] rounded-2xl px-6 py-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#06152F] border border-[#234479] flex items-center justify-center shrink-0">
                <span className="text-xl font-extrabold text-[#F5B719]">5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B719] text-[#F5B719]" />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Google Rating</span>
                  <span className="text-xs text-slate-400 font-medium">Verified Customer Feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Attractive Feature Cards (3x2 on desktop, 2x3 on tablet, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#0B1E40]/80 hover:bg-[#0B1E40] border border-[#1C3563] hover:border-[#F5B719]/50 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#06152F] border border-[#234277] flex items-center justify-center mb-5 group-hover:border-[#F5B719]/40 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#F5B719] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#162F5E]/60 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Hyderabad, Telangana</span>
                <span className="text-[#F5B719] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Action Bar */}
        <div className="mt-12 pt-8 border-t border-[#162F5E] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-sm font-bold text-white block">
              Have an AC issue or need maintenance?
            </span>
            <span className="text-xs text-slate-400">
              Speak directly with Coolronix technicians today.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#06152F]" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
