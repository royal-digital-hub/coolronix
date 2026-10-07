'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { CoolronixLogo } from './CoolronixLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#051126] text-white pt-16 pb-10 border-t border-[#112447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <CoolronixLogo size="md" />
            <p className="text-slate-300 text-sm font-medium">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                id="footer-phone-link"
                className="text-[#F5B719] hover:text-[#FFD25E] text-xl font-extrabold tracking-tight transition-colors inline-block"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <p className="text-xs text-slate-400 mt-1">
                Mon - Sun: 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#F5B719] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-[#F5B719] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#F5B719] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-slate-300 hover:text-[#F5B719] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#F5B719] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 hover:text-[#F5B719] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Area */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contact
            </h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  PHONE
                </span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-white hover:text-[#F5B719] font-bold text-base transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  LOCATION
                </span>
                <p className="text-slate-300 leading-snug">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#25D366]/60 bg-[#0B1E40] text-white hover:border-[#25D366] hover:bg-[#25D366]/15 rounded-lg text-sm font-bold transition-all duration-150 shadow-2xs group"
                >
                  <WhatsAppIcon variant="color" className="w-4 h-4 shrink-0" />
                  <span className="text-[#E2EAF2] group-hover:text-white">WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#112447] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Coolronix. All Rights Reserved.</p>
          <p className="text-slate-400">
            AC Repair &amp; Services in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};
