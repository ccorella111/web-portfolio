import type { Text } from '../types';

/** Textos fijos de la interfaz */
export const nav: { id: string; label: Text }[] = [
  { id: 'perfil', label: { es: 'Perfil', en: 'Profile' } },
  { id: 'experiencia', label: { es: 'Experiencia', en: 'Experience' } },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'formacion', label: { es: 'Formación', en: 'Education' } },
  { id: 'contacto', label: { es: 'Contacto', en: 'Contact' } },
];

export const ui = {
  sections: {
    profile: { es: 'Perfil', en: 'Profile' },
    experience: { es: 'Experiencia', en: 'Experience' },
    projects: { es: 'Proyectos', en: 'Projects' },
    education: { es: 'Formación', en: 'Education' },
    skills: { es: 'Habilidades', en: 'Skills' },
  },
  seeProjects: { es: 'Ver proyectos', en: 'See projects' },
  getInTouch: { es: 'Contactar', en: 'Get in touch' },
  viewRepo: { es: 'Ver en GitHub', en: 'View on GitHub' },
  viewLive: { es: 'Ver sitio en vivo', en: 'View live site' },
  privateCode: { es: 'Código privado por confidencialidad del cliente', en: 'Private code, client confidentiality' },
  contactTitleBefore: { es: 'Hablemos de tu próximo ', en: "Let's talk about your next " },
  contactTitleEm: { es: 'proyecto', en: 'project' },
  copy: { es: 'Copiar', en: 'Copy' },
  copied: { es: 'Copiado', en: 'Copied' },
  madeIn: { es: 'Hecho en Costa Rica', en: 'Made in Costa Rica' },
  languageGroup: { es: 'Idioma', en: 'Language' },
  techStrip: { es: 'Tecnologías', en: 'Technologies' },
} satisfies Record<string, Text | Record<string, Text>>;
