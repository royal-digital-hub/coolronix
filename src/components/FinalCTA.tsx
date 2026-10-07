import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SectionLabel } from './SectionLabel';
import { BUSINESS_INFO } from '../data/servicesData';

interface FinalCTAProps {
  customHeading?: React.ReactNode;
  customSubtitle?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  customHeading,
  customSubtitle,
}) => {
  return (
    <section id="final-cta" className="bg-[#06152F] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Heading & Text */}
          <div className="lg:col-span-8 space-y-4">
            <SectionLabel variant="gold">READY TO GET STARTED?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {customHeading || (
                <>
                  Need AC Repair <span className="text-[#F5B719] block sm:inline">or Service?</span>
                </>
              )}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed pt-1">
              {customSubtitle ||
                'Contact Coolronix for AC repair, gas refill, installation, maintenance, Split AC service and Window AC service in Hyderabad.'}
            </p>
          </div>

          {/* Right CTA Buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-start lg:items-stretch">
            {/* Call Now Button */}
            <a
              id="cta-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#F5B719] hover:bg-[#E0A30B] active:bg-[#C88E00] text-[#06152F] font-bold px-7 py-3.5 rounded-xl shadow-md transition-all duration-150 flex flex-col items-center justify-center leading-tight hover:shadow-lg text-center"
            >
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#06152F]/90">
                CALL NOW
              </span>
              <span className="text-xl font-extrabold tracking-tight mt-0.5 flex items-center gap-2">
                <Phone className="w-5 h-5 fill-[#06152F]" />
                {BUSINESS_INFO.phoneDisplay}
              </span>
            </a>

            {/* WhatsApp Us Button */}
            <a
              id="cta-whatsapp-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B1E40] hover:bg-[#112952] active:bg-[#07152F] text-white border border-[#234277] font-bold px-7 py-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 text-base text-center"
            >
              <WhatsAppIcon variant="color" className="w-5 h-5 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
