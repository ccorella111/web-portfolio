import type { TimelineEntry } from '../types';

export const experience: TimelineEntry[] = [
  {
    period: { es: '2025 — hoy', en: '2025 — now' },
    current: true,
    title: { es: 'Asistente de Soporte Técnico', en: 'Technical Support Assistant' },
    org: { es: 'Instituto Tecnológico de Costa Rica', en: 'Costa Rica Institute of Technology' },
    bullets: [
      {
        es: 'Refactoricé y mantengo el sistema de inventario de activos de TI: optimización del código, nuevas funciones y corrección de errores.',
        en: 'Refactored and maintain the IT asset inventory system: optimizing the codebase, building new features and fixing bugs.',
      },
      {
        es: 'Implementé control de acceso por roles (usuario, técnico, administrador) y módulos de incidencias, usuarios, áreas, ubicaciones y categorías.',
        en: 'Implemented role-based access control (user, technician, administrator) and modules for incidents, users, areas, locations and categories.',
      },
      {
        es: 'Reparo equipos y resuelvo problemas de conectividad y red.',
        en: 'Repair computers and troubleshoot connectivity and network issues.',
      },
    ],
    tags: [
      { es: 'Django', en: 'Django' },
      { es: 'PostgreSQL', en: 'PostgreSQL' },
      { es: 'Redes', en: 'Networking' },
    ],
  },
  {
    period: { es: '2023', en: '2023' },
    title: { es: 'Vocal de Junta Directiva', en: 'Board Member' },
    org: {
      es: 'Asociación de Estudiantes de Ingeniería en Computación, TEC',
      en: 'Computer Engineering Student Association, TEC',
    },
    description: {
      es: 'Coordinación de actividades estudiantiles y representación de la asociación en eventos oficiales.',
      en: 'Coordinated student activities and represented the association at official events.',
    },
  },
];
