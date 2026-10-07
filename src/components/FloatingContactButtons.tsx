import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/servicesData';

export const FloatingContactButtons: React.FC = () => {
  return (
    <aside
      id="floating-contact-actions"
      aria-label="Quick contact buttons"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Coolronix on WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] active:scale-95 text-white font-bold py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <WhatsAppIcon variant="white" className="w-5 h-5 text-white shrink-0" />
        <span className="text-sm font-semibold tracking-wide sm:inline">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        id="floating-call-btn"
        href={BUSINESS_INFO.phoneTel}
        aria-label="Call Coolronix directly at 093928 73096"
        className="group flex items-center gap-2 bg-[#F5B719] hover:bg-[#E0A30B] active:scale-95 text-[#06152F] font-extrabold py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-[#DE9E07]/40"
      >
        <Phone className="w-4 h-4 fill-[#06152F] text-[#06152F] shrink-0" />
        <span className="text-sm font-bold tracking-wide sm:inline">
          Call
        </span>
      </a>
    </aside>
  );
};
