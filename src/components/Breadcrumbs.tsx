import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      id="page-breadcrumbs"
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs font-semibold text-slate-500 py-3 ${className}`}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-slate-500 hover:text-[#06152F] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="text-[#06152F] font-bold truncate">{item.label}</span>
            ) : (
              <Link
                href={item.path}
                className="text-slate-500 hover:text-[#06152F] transition-colors truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
