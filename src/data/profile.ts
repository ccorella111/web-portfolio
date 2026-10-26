import type { ContactLink, Fact, Text } from '../types';

export const profile = {
  firstName: 'Cristian',
  lastName: 'Corella Reyes',
  shortName: 'C. Corella',
  availability: { es: 'Disponible para pasantías', en: 'Open to internships' } as Text,
  degree: { es: 'Ingeniería en Computación,', en: 'Computer Engineering,' } as Text,
  school: { es: 'Instituto Tecnológico de Costa Rica', en: 'Costa Rica Institute of Technology' } as Text,
  summary: {
    es: 'Desarrollo aplicaciones web full stack con Django y Next.js, e integro modelos de inteligencia artificial en sistemas que la gente usa a diario.',
    en: 'I build full-stack web applications with Django and Next.js, and integrate AI models into systems people use every day.',
  } as Text,
  about: {
    leadBefore: { es: 'Empecé configurando redes y hoy construyo ', en: 'I started by configuring networks; today I build ' } as Text,
    leadMark: { es: 'el software que las organizaciones usan para operar', en: 'the software organizations use to operate' } as Text,
    body: {
      es: 'Me gradué como técnico en Redes de Computadoras en el CTP de Pital y estudio Ingeniería en Computación en el TEC. En la universidad mantengo el sistema de inventario de activos de TI, y en paralelo desarrollo proyectos propios de web e inteligencia artificial. Fuera del código me gustan el cine, los acertijos lógicos y armar cosas con mis propias manos.',
      en: "I graduated as a Computer Networking technician from CTP de Pital and I'm studying Computer Engineering at TEC. At the university I maintain the IT asset inventory system, and alongside it I build my own web and AI projects. Outside of code I enjoy film, logic puzzles and building things with my hands.",
    } as Text,
  },
};

export const facts: Fact[] = [
  {
    label: { es: 'Rol actual', en: 'Current role' },
    highlight: { es: 'Asistente de Soporte Técnico', en: 'Technical Support Assistant' },
    after: { es: ', TEC', en: ', TEC' },
  },
  {
    label: { es: 'Especialidad', en: 'Focus' },
    highlight: { es: 'Full stack', en: 'Full stack' },
    after: { es: ' · Django', en: ' · Django' },
  },
  {
    label: { es: 'Certificación', en: 'Certification' },
    highlight: { es: 'Cisco CCNA', en: 'Cisco CCNA' },
  },
  {
    label: { es: 'Idiomas', en: 'Languages' },
    before: { es: 'Español · ', en: 'Spanish · ' },
    highlight: { es: 'Inglés B2', en: 'English B2' },
  },
];

/** Tecnologías de la cinta animada */
export const marqueeTech = [
  'Python', 'Django', 'PostgreSQL', 'Next.js', 'TypeScript', 'FastAPI',
  'React', 'Java', 'Azure', 'Google Cloud', 'Tailwind CSS', 'Cisco CCNA',
];

export const contact: ContactLink[] = [
  { label: 'Email', value: 'cristian.corella02@gmail.com', copyable: true },
  { label: 'LinkedIn', value: 'cristian-corella-a4b149291', url: 'https://www.linkedin.com/in/cristian-corella-a4b149291' },
  { label: 'GitHub', value: 'ccorella111', url: 'https://github.com/ccorella111' },
];
