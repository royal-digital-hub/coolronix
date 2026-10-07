import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
import { CUSTOMER_REVIEWS } from '../data/servicesData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F4F8FA] border-t border-[#E2EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionLabel variant="gold">CUSTOMER FEEDBACK</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152F] tracking-tight mb-3">
            Customers <span className="text-[#F5B719]">Recommend Coolronix</span>
          </h2>
          <p className="text-base text-[#536785]">
            Real feedback shared by Coolronix customers.
          </p>

          {/* Central 5.0 Google Rating pill */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2.5 rounded-2xl border border-[#E2EAF2] shadow-xs mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5B719] text-[#F5B719]" />
              ))}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-[#06152F]">5.0</span>
              <span className="text-xs text-[#536785] font-semibold">Google Rating</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#E2EAF2] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#06152F] text-[#F5B719] shadow-xs">
                    <Quote className="w-4 h-4 text-[#F5B719] fill-[#F5B719]" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5B719] text-[#F5B719]" />
                    ))}
                  </div>
                </div>

                <p className="text-lg font-bold text-[#06152F] leading-snug mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
