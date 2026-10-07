import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/page-components/ServiceDetailPage';
import { SERVICES_DATA, BUSINESS_INFO } from '@/data/servicesData';

const SITE_URL = 'https://coolronix.in';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: service.heroHeadline,
    description: `${service.shortDescription} Professional on-site service across Hyderabad by Coolronix. Call 093928 73096.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    serviceType: service.title,
    provider: {
      '@type': 'HVACBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phoneRaw,
      url: SITE_URL,
    },
    ...(service.warranties?.length ? { warranty: service.warranties.join('; ') } : {}),
    areaServed: {
      '@type': 'City',
      name: BUSINESS_INFO.city,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = service.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]),
        }}
      />
      <ServiceDetailPage slug={service.slug} />
    </>
  );
}
