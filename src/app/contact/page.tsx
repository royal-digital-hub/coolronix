import type { Metadata } from 'next';
import { ContactPage } from '@/page-components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Coolronix | AC Service in Hyderabad',
  description:
    'Contact Coolronix for AC repair, gas refill, installation and maintenance in Hyderabad. Call 093928 73096.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactPage />;
}
