export type Lang = 'es' | 'en';

/** Texto en ambos idiomas */
export type Text = Record<Lang, string>;

export interface Fact {
  label: Text;
  /** Parte resaltada en ámbar */
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
  | { kind: 'private' };

export type CoverVariant = 'green' | 'amber' | 'black';

export interface Project {
  name: Text;
  category: Text;
  status: Text;
  description: Text;
  stack: string[];
  link: ProjectLink;
  cover: CoverVariant;
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
