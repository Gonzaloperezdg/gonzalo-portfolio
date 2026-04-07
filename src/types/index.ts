export interface TimelineEntry {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  status: 'completed' | 'active';
  description: string;
  parallel?: boolean;
  note?: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  pullQuote?: string;
}

export interface CaseStudyCredit {
  name: string;
  role: string;
  url?: string;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  credits?: CaseStudyCredit[];
  type: string;
  status: 'completed' | 'active';
  seoTitle: string;
  seoDescription: string;
}

export interface SubProject {
  slug: string;
  title: string;
  generation?: string;
  period: string;
  description: string;
  motivation?: string;
  stack?: string[];
  workflow?: string[];
  insights?: string[];
  status: 'completed' | 'active';
  sections?: CaseStudySection[];
}

export interface CaseStudyData extends CaseStudyMeta {
  sections: CaseStudySection[];
  subProjects?: SubProject[];
}
