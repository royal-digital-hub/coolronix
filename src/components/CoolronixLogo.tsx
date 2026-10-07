import React from 'react';
import Link from 'next/link';

interface CoolronixLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CoolronixLogo: React.FC<CoolronixLogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-13 sm:h-15',
  };

  return (
    <Link
      href="/"
      id="brand-logo-link"
      className={`inline-flex flex-col items-start select-none group transition-opacity hover:opacity-95 ${className}`}
      aria-label="Coolronix AC Repair & Services"
    >
      <img
        src="/logo/coolronix-logo.png"
        alt="Coolronix - AC Repair & Services Hyderabad"
        referrerPolicy="no-referrer"
        className={`${heightClasses[size]} w-auto object-contain rounded-lg shadow-2xs border border-[#162744]/40`}
      />

      {showTagline && (
        <p className="text-[13px] text-slate-300 font-medium mt-2">
          Beat the Heat, Not Your Budget.
        </p>
      )}
    </Link>
  );
};
