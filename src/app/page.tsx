import type { Metadata } from 'next';
import { HomePage } from '@/page-components/HomePage';

export const metadata: Metadata = {
  title: 'AC Repair & Services in Hyderabad',
  description:
    'Professional AC repair, gas refill, installation and maintenance services in Hyderabad. Call Coolronix at 093928 73096.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomePage />;
}
