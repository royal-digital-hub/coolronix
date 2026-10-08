import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContactButtons } from '@/components/FloatingContactButtons';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { BUSINESS_INFO } from '@/data/servicesData';
import '../index.css';

const SITE_URL = 'https://coolronix.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Coolronix | AC Repair & Services in Hyderabad',
    template: '%s | Coolronix',
  },
  description:
    'AC repair, gas refill, installation and maintenance services in Hyderabad. Call Coolronix at 093928 73096.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo/coolronix-favicon.png',
    apple: '/logo/coolronix-favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Coolronix',
    url: SITE_URL,
    title: 'Coolronix | AC Repair & Services in Hyderabad',
    description:
      'AC repair, gas refill, installation and maintenance services in Hyderabad.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Coolronix | AC Repair & Services in Hyderabad',
    description:
      'AC repair, gas refill, installation and maintenance services in Hyderabad.',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_INFO.name,
  url: SITE_URL,
  telephone: BUSINESS_INFO.phoneRaw,
  description:
    'AC repair, gas refill, installation and maintenance services in Hyderabad.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: BUSINESS_INFO.pincode,
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'City',
    name: BUSINESS_INFO.city,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  priceRange: 'â‚¹â‚¹',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <div className="flex min-h-screen flex-col bg-white font-sans text-[#07152E]">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <FloatingContactButtons />
          <MobileBottomBar />
        </div>
      </body>
    </html>
  );
}

