import type { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/servicesData';

const baseUrl = 'https://coolronix.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const services = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...pages, ...services];
}
