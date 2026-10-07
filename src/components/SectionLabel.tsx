import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  variant?: 'gold' | 'blue' | 'pill';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  variant = 'gold',
  className = '',
}) => {
  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F2FA] text-[#1D4E89] text-[12px] font-extrabold uppercase tracking-wider mb-4 ${className}`}>
        {children}
      </div>
    );
  }

  const colorClass =
    variant === 'gold'
      ? 'text-[#F5B719]'
      : 'text-[#1D4E89]';

  return (
    <span
      className={`block text-[13px] font-extrabold uppercase tracking-[0.14em] mb-3 ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
};
