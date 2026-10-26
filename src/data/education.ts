import type { TimelineEntry } from '../types';

export const education: TimelineEntry[] = [
  {
    period: { es: 'En curso', en: 'In progress' },
    current: true,
    title: { es: 'Bachillerato en Ingeniería en Computación', en: 'B.Sc. in Computer Engineering' },
    org: { es: 'Instituto Tecnológico de Costa Rica', en: 'Costa Rica Institute of Technology' },
    description: {
      es: 'Estructuras de Datos, Análisis de Algoritmos, Bases de Datos I y II, Inteligencia Artificial, Diseño y Calidad de Software, Sistemas Operativos.',
      en: 'Data Structures, Algorithm Analysis, Databases I & II, Artificial Intelligence, Software Design and Quality, Operating Systems.',
    },
  },
  {
    period: { es: '2018 — 2020', en: '2018 — 2020' },
    title: { es: 'Técnico Medio en Redes de Computadoras', en: 'Technical Diploma in Computer Networking' },
    org: { es: 'Colegio Técnico Profesional de Pital', en: 'Colegio Técnico Profesional de Pital' },
    description: {
      es: 'Cisco CCNA, Routing & Switching · Coursera: Agile con Jira, Programación con Java',
      en: 'Cisco CCNA, Routing & Switching · Coursera: Agile with Jira, Programming with Java',
    },
  },
];
