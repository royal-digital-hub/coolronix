import type { Metadata } from 'next';
import { ServicesPage } from '@/page-components/ServicesPage';

export const metadata: Metadata = {
  title: 'AC Repair & Services in Hyderabad',
  description:
    'Explore AC repair, gas refill, installation, maintenance, Split AC and Window AC services in Hyderabad.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return <ServicesPage />;
}
