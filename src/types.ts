export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroHighlight: string;
  intro: string;
  commonProblems: {
    title: string;
    description: string;
  }[];
  whatIsIncluded: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  acTypes: string[];
  serviceCategory: 'repair' | 'gas' | 'installation' | 'maintenance' | 'split' | 'window' | 'pre-piping';
  warranties?: string[];
}

export interface ACProblemItem {
  number: string;
  title: string;
  description: string;
  suggestedServiceSlug: string;
}

export interface ReviewItem {
  number: string;
  quote: string;
  source: string;
  rating: number;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}
