export type Lang = 'es' | 'en';

export type Text = Record<Lang, string>;

export interface Fact {
  label: Text;
  highlight: Text;
  before?: Text;
  after?: Text;
}

export interface TimelineEntry {
  period: Text;
  current?: boolean;
  title: Text;
  org: Text;
  bullets?: Text[];
  description?: Text;
  tags?: Text[];
}

export type ProjectLink =
  | { kind: 'repo'; url: string }
  | { kind: 'live'; url: string }
  | { kind: 'private'; note: Text };

export type CoverVariant = 'green' | 'amber' | 'black' | 'mint';

export type ImageKind = 'architecture' | 'database' | 'results' | 'screenshot';

export interface ProjectImage {
  src: string;
  kind: ImageKind;
  caption: Text;
  alt: Text;
}

export interface TechRow {
  area: Text;
  items: string;
}

export interface ProjectDetails {
  overview: Text;
  features: Text[];
  tech?: TechRow[];
  highlights?: Text[];
  gallery: ProjectImage[];
}

export interface Project {
  slug: string;
  name: Text;
  category: Text;
  status: Text;
  description: Text;
  stack: string[];
  link: ProjectLink;
  cover: CoverVariant;
  featured?: boolean;
  details?: ProjectDetails;
}

export interface SkillGroup {
  title: Text;
  items: Text;
}

export interface ContactLink {
  label: string;
  value: string;
  url?: string;
  copyable?: boolean;
}
