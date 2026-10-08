'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Wrench, CalendarDays, MapPin, X, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, HYDERABAD_AREAS, SERVICES_DATA } from '../data/servicesData';

type PopupType = 'services' | 'booking' | 'areas' | null;

export const MobileBottomBar: React.FC = () => {
  const [popup, setPopup] = useState<PopupType>(null);

  const closePopup = () => setPopup(null);

  const sendBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = String(form.get('name') || '');
    const phone = String(form.get('phone') || '');
    const service = String(form.get('service') || '');
    const acType = String(form.get('acType') || '');
    const date = String(form.get('date') || '');
    const time = String(form.get('time') || '');
    const location = String(form.get('location') || '');
    const details = String(form.get('details') || '');

    const message = `🔧 *Coolronix Service Booking*

*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*AC Type:* ${acType}
*Preferred Date:* ${date}
*Preferred Time:* ${time}
*Location:* ${location}
*Problem / Details:* ${details || 'Not provided'}

Please confirm my service booking.`;

    window.open(
      `https://wa.me/919392873096?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      {/* Mobile bottom navigation */}
      <nav
        className="coolronix-mobile-bar"
        aria-label="Quick actions"
      >
        <a href={BUSINESS_INFO.phoneTel} className="coolronix-mobile-action">
          <Phone />
          <span>Call</span>
        </a>

        <button
          type="button"
          className="coolronix-mobile-action"
          onClick={() => setPopup('services')}
        >
          <Wrench />
          <span>Services</span>
        </button>

        <button
          type="button"
          className="coolronix-mobile-action coolronix-book-action"
          onClick={() => setPopup('booking')}
        >
          <CalendarDays />
          <span>Book Now</span>
        </button>

        <button
          type="button"
          className="coolronix-mobile-action"
          onClick={() => setPopup('areas')}
        >
          <MapPin />
          <span>Service Areas</span>
        </button>
      </nav>

      {/* Popup */}
      {popup && (
        <div
          className="coolronix-popup-overlay"
          onClick={closePopup}
          role="presentation"
        >
          <div
            className="coolronix-popup"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="coolronix-popup-header">
              <div>
                <p className="coolronix-popup-eyebrow">COOLRONIX</p>
                <h2>
                  {popup === 'services' && 'Our AC Services'}
                  {popup === 'booking' && 'Book AC Service'}
                  {popup === 'areas' && 'Service Areas'}
                </h2>
              </div>

              <button
                type="button"
                onClick={closePopup}
                className="coolronix-popup-close"
                aria-label="Close"
              >
                <X />
              </button>
            </div>

            {popup === 'services' && (
              <div className="coolronix-service-list">
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={closePopup}
                    className="coolronix-service-item"
                  >
                    <span>{service.title}</span>
                    <ChevronRight />
                  </Link>
                ))}
              </div>
            )}

            {popup === 'areas' && (
              <div className="coolronix-area-content">
                <p className="coolronix-area-intro">
                  Coolronix provides AC repair, servicing, installation and
                  related services across Hyderabad and nearby areas.
                </p>

                <div className="coolronix-area-grid">
                  {HYDERABAD_AREAS.map((area) => (
                    <span key={area} className="coolronix-area-chip">
                      {area}
                    </span>
                  ))}
                </div>

                <div className="coolronix-surrounding">
                  <strong>Also Serving Hyderabad Surrounding Areas</strong>
                  <p>
                    We also provide service in nearby areas around Hyderabad,
                    subject to technician availability.
                  </p>
                </div>
              </div>
            )}

            {popup === 'booking' && (
              <form
                className="coolronix-booking-form"
                onSubmit={sendBooking}
              >
                <div className="coolronix-form-grid">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required
                  />

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Mobile Number *"
                    required
                  />

                  <select name="service" required defaultValue="">
                    <option value="" disabled>
                      Select Service *
                    </option>
                    {SERVICES_DATA.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>

                  <select name="acType" required defaultValue="">
                    <option value="" disabled>
                      AC Type *
                    </option>
                    <option>Split AC</option>
                    <option>Window AC</option>
                    <option>Inverter AC</option>
                    <option>Non-Inverter AC</option>
                    <option>Not Sure</option>
                  </select>

                  <input
                    name="date"
                    type="date"
                    required
                  />

                  <select name="time" required defaultValue="">
                    <option value="" disabled>
                      Preferred Time *
                    </option>
                    <option>8:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 2:00 PM</option>
                    <option>2:00 PM - 4:00 PM</option>
                    <option>4:00 PM - 6:00 PM</option>
                    <option>6:00 PM - 9:00 PM</option>
                  </select>
                </div>

                <input
                  name="location"
                  type="text"
                  placeholder="Location / Area *"
                  required
                />

                <textarea
                  name="details"
                  rows={3}
                  placeholder="Problem / Additional Details"
                />

                <button type="submit" className="coolronix-book-submit">
                  Send Booking on WhatsApp
                </button>

                <p className="coolronix-form-note">
                  Your booking details will open in WhatsApp for confirmation.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};


