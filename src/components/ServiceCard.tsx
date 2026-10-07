import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Snowflake,
  Layers,
  Settings,
  Wind,
  LayoutGrid,
  Sparkles,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export const getServiceIcon = (slug: string) => {
  switch (slug) {
    case 'ac-repair-service':
      return <Wrench className="w-5 h-5 text-[#F5B719]" />;
    case 'ac-gas-refill':
      return <Snowflake className="w-5 h-5 text-[#F5B719]" />;
    case 'ac-installation':
      return <Layers className="w-5 h-5 text-[#F5B719]" />;
    case 'ac-maintenance':
      return <Settings className="w-5 h-5 text-[#F5B719]" />;
    case 'split-ac-service':
      return <Wind className="w-5 h-5 text-[#F5B719]" />;
    case 'window-ac-service':
      return <LayoutGrid className="w-5 h-5 text-[#F5B719]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#F5B719]" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <div
      id={`service-card-${service.slug}`}
      className={`group bg-white rounded-2xl p-7 border border-[#E2EAF2] shadow-xs hover:shadow-md hover:border-[#F5B719]/50 transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#06152F] shadow-xs group-hover:bg-[#0B1E40] transition-colors">
            {getServiceIcon(service.slug)}
          </div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Hyderabad
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#06152F] mb-3 group-hover:text-[#06152F] transition-colors">
          {service.title}
        </h3>

        <p className="text-[14px] leading-relaxed text-[#536785] mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-2 border-t border-slate-50">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F5B719] group-hover:text-[#D99A04] transition-colors"
        >
          <span>Get Service</span>
          <span className="transition-transform duration-150 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};
