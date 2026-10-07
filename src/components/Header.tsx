'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { CoolronixLogo } from './CoolronixLogo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/servicesData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinkClass = (isActive: boolean) =>
    `text-[15px] font-semibold transition-colors duration-150 py-2 ${
      isActive ? 'text-[#06152F] border-b-2 border-[#F5B719]' : 'text-[#2D3F5A] hover:text-[#06152F]'
    }`;

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E2EAF2] shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <div className="flex items-center">
            <CoolronixLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden md:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            <Link href="/" className={navLinkClass(pathname === "/")}>Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={navLinkClass(pathname.startsWith("/services"))}
              >
                Services
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-[#E2EAF2] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#F5B719]">
                      AC Services in Hyderabad
                    </p>
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#182B4A] hover:bg-[#F4F8FA] hover:text-[#06152F] font-medium transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B719] shrink-0" />
                        <span>{service.title}</span>
                      </div>
                    </Link>
                  ))}
                  <div className="px-4 pt-2 pb-1 border-t border-slate-100 mt-1">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#06152F] hover:text-[#D99A04] flex items-center justify-between"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span>View All 6 Services</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={navLinkClass(pathname === "/about")}>
              About
            </Link>

            <Link
              href="/#reviews"
              className="text-[15px] font-semibold text-[#2D3F5A] hover:text-[#06152F] transition-colors duration-150 py-2"
              onClick={() => {
                if (pathname === '/') {
                  const el = document.getElementById('reviews');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Reviews
            </Link>

            <Link href="/contact" className={navLinkClass(pathname === "/contact")}>
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-call-btn"
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#F5B719] hover:bg-[#E0A30B] active:bg-[#C88E00] text-[#06152F] font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-150 flex flex-col items-center justify-center leading-tight hover:shadow-md"
            >
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#06152F]/90">
                Call Now
              </span>
              <span className="text-[15px] font-extrabold tracking-tight">
                {BUSINESS_INFO.phoneDisplay}
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-[#F5B719] text-[#06152F] px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-xs"
              aria-label="Call Coolronix"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#06152F] hover:bg-[#F4F8FA] rounded-md focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-white border-b border-[#E2EAF2] px-4 pt-2 pb-6 space-y-3 shadow-lg"
        >
          <div className="space-y-1 pt-2 pb-3 border-b border-slate-100">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#06152F] hover:bg-[#F4F8FA]"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#06152F] hover:bg-[#F4F8FA]"
            >
              All Services
            </Link>

            {/* Individual services in mobile drawer */}
            <div className="pl-4 space-y-1 border-l-2 border-slate-100 ml-3 my-1">
              {SERVICES_DATA.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  onClick={closeMobileMenu}
                  className="block px-2 py-1.5 text-sm text-[#536785] hover:text-[#06152F] font-medium"
                >
                  &bull; {srv.title}
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#06152F] hover:bg-[#F4F8FA]"
            >
              About Coolronix
            </Link>
            <Link
              href="/#reviews"
              onClick={() => {
                closeMobileMenu();
                if (pathname === '/') {
                  const el = document.getElementById('reviews');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#06152F] hover:bg-[#F4F8FA]"
            >
              Customer Reviews
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-[#06152F] hover:bg-[#F4F8FA]"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-2 space-y-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full bg-[#F5B719] hover:bg-[#E0A30B] text-[#06152F] font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <Phone className="w-4 h-4 text-[#06152F]" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <WhatsAppIcon variant="white" className="w-4 h-4 text-white" />
              <span>WhatsApp Coolronix</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

