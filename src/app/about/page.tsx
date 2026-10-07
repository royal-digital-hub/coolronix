import type { Metadata } from 'next';
import { AboutPage } from '@/page-components/AboutPage';

export const metadata: Metadata = {
  title: 'About Coolronix | AC Services in Hyderabad',
  description:
    'Learn about Coolronix, an AC repair and service provider serving Uppal and Hyderabad.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutPage />;
}
