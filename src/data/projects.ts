import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: { es: 'Financy', en: 'Financy' },
    category: { es: 'Full stack', en: 'Full stack' },
    status: { es: 'Completado', en: 'Completed' },
    description: {
      es: 'Dashboard de finanzas personales con autenticación, CRUD de gastos e ingresos, y gráficos filtrables por día, semana, mes o rango.',
      en: 'Personal finance dashboard with authentication, expense and income CRUD, and charts filtered by day, week, month or range.',
    },
    stack: ['Django', 'PostgreSQL', 'Tailwind'],
    link: { kind: 'repo', url: 'https://github.com/ccorella111/Finance-Dashboard' },
    cover: 'green',
  },
  {
    name: { es: 'Apiario local', en: 'Local apiary' },
    category: { es: 'Sitio web', en: 'Website' },
    status: { es: 'Cliente real', en: 'Client project' },
    description: {
      es: 'Landing page con misión, productos, contacto y redes sociales para dar visibilidad a un negocio local.',
      en: 'Landing page with mission, products, contact and social channels to give a local business visibility.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    link: { kind: 'private' },
    cover: 'amber',
  },
  {
    name: { es: 'JarvisTEC', en: 'JarvisTEC' },
    category: { es: 'IA / API', en: 'AI / API' },
    status: { es: 'En desarrollo', en: 'In progress' },
    description: {
      es: 'API REST que sirve diez modelos de ML, con transcripción de voz, comandos y reconocimiento de emociones en la nube.',
      en: 'REST API serving ten ML models, with speech transcription, commands and cloud emotion recognition.',
    },
    stack: ['Python', 'FastAPI', 'Azure', 'GCP'],
    link: { kind: 'repo', url: 'https://github.com/ccorella111/jarvistec' },
    cover: 'black',
  },
];
