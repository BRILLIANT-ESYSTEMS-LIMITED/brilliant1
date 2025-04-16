export interface Statistic {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'government' | 'education' | 'corporate' | 'local';
  description: string;
  image: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}