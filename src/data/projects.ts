import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'inventario',
    featured: true,
    name: { es: 'Sistema de Inventario de Equipos e Infraestructura', en: 'IT Equipment & Infrastructure Inventory' },
    category: { es: 'Sistema web · TEC', en: 'Web system · TEC' },
    status: { es: 'Completado', en: 'Completed' },
    description: {
      es: 'Aplicación web para gestionar el inventario de equipos tecnológicos de una sede universitaria, con un mapa interactivo de equipos, cableado de fibra y áreas físicas, y consulta de direcciones IP con verificación de conectividad en tiempo real.',
      en: 'Web application to manage the IT equipment inventory of a university campus, with an interactive map of devices, fiber runs and physical areas, and an IP address lookup with real-time connectivity checks.',
    },
    stack: ['Django', 'GeoDjango', 'PostGIS', 'Leaflet', 'JavaScript'],
    link: {
      kind: 'private',
      note: { es: 'Código institucional, no público', en: 'Institutional code, not public' },
    },
    cover: 'mint',
    details: {
      overview: {
        es: 'Sistema web interno para registrar y controlar los equipos e infraestructura tecnológica de una sede universitaria. Lleva el ciclo de vida de cada equipo (alta, ubicación, estado, incidentes y mantenimiento) y muestra su ubicación exacta en un mapa georreferenciado. Está en uso en un servidor Windows dentro de la red institucional, con acceso por usuario y permisos por rol.',
        en: 'Internal web system to register and track the IT equipment and infrastructure of a university campus. It manages each device’s lifecycle (registration, location, status, incidents and maintenance) and shows its exact position on a georeferenced map. It runs on a Windows server inside the campus network, with user login and role-based permissions.',
      },
      features: [
        {
          es: 'Gestión de equipos con búsqueda, filtros combinables, paginación, duplicado de registros y exportación a Excel.',
          en: 'Equipment management with search, combinable filters, pagination, record duplication and Excel export.',
        },
        {
          es: 'Atributos dinámicos por categoría: cada tipo de equipo define sus propios campos (IP, MAC, voltaje…).',
          en: 'Dynamic attributes per category: each device type defines its own fields (IP, MAC, voltage…).',
        },
        {
          es: 'Historial de incidentes por equipo, con costos, responsables, filtros por fecha y exportación.',
          en: 'Incident history per device, with costs, assignees, date filters and export.',
        },
        {
          es: 'Mapa interactivo: equipos como puntos, fibra como líneas y áreas como polígonos, con dibujo y edición sobre el mapa y captura por GPS.',
          en: 'Interactive map: devices as points, fiber as lines and areas as polygons, with on-map drawing and editing and GPS capture.',
        },
        {
          es: 'Colores por categoría asignados con un algoritmo de máxima diferencia perceptual en el espacio de color CIELAB.',
          en: 'Per-category colors assigned with a maximum perceptual distance algorithm in the CIELAB color space.',
        },
        {
          es: 'Consulta de IP con detección de duplicadas y ping desde el servidor que distingue «en línea», «intermitente» y «sin respuesta».',
          en: 'IP lookup with duplicate detection and server-side ping that tells apart “online”, “intermittent” and “no response”.',
        },
        {
          es: 'Búsqueda global agrupada por sección y permisos por rol: Administrador, Técnico y Usuario.',
          en: 'Global search grouped by section and role-based permissions: Administrator, Technician and User.',
        },
      ],
      tech: [
        { area: { es: 'Backend', en: 'Backend' }, items: 'Python 3.12, Django 4.2, GeoDjango' },
        { area: { es: 'Base de datos', en: 'Database' }, items: 'PostgreSQL 18, PostGIS 3.6' },
        { area: { es: 'Geoespacial', en: 'Geospatial' }, items: 'GDAL, GEOS, GeoJSON, EPSG:4326' },
        { area: { es: 'Frontend', en: 'Frontend' }, items: 'HTML, CSS, JavaScript, jQuery' },
        { area: { es: 'Mapas', en: 'Maps' }, items: 'Leaflet 1.9, Leaflet.draw, OpenStreetMap' },
        { area: { es: 'Datos', en: 'Data' }, items: 'pandas, openpyxl' },
        { area: { es: 'Despliegue', en: 'Deployment' }, items: 'Windows Server 2019, Waitress, WhiteNoise' },
        { area: { es: 'Calidad', en: 'Testing' }, items: 'Django unittest (87 pruebas / tests)' },
      ],
      highlights: [
        {
          es: 'Reestructuré el código base: vistas separadas en módulos por tema y lógica repetida (filtros, paginación, permisos) en funciones reutilizables, con documentación y pruebas automatizadas.',
          en: 'Restructured the codebase: views split into modules by topic and repeated logic (filters, pagination, permissions) moved into reusable functions, with documentation and automated tests.',
        },
        {
          es: 'Puesta en producción en Windows Server con Waitress y WhiteNoise, registro de errores rotativo, configuración en variables de entorno y una migración de base de datos sin pérdida de información.',
          en: 'Production deployment on Windows Server with Waitress and WhiteNoise, rotating error logs, environment-based configuration and a zero-data-loss database migration.',
        },
        {
          es: 'Seguridad: permisos por rol en cada vista, protección CSRF, consultas parametrizadas y ping ejecutado sin intérprete de comandos, solo sobre IP validadas del inventario.',
          en: 'Security: role checks on every view, CSRF protection, parameterized queries and ping executed without a shell, only on validated IPs from the inventory.',
        },
      ],
      gallery: [
        {
          src: 'projects/inventario/arquitectura.png',
          kind: 'architecture',
          caption: { es: 'Arquitectura del sistema en el servidor institucional', en: 'System architecture on the campus server' },
          alt: {
            es: 'Diagrama: el navegador se conecta a Waitress y Django en Windows Server, que usa PostgreSQL con PostGIS y hace ping a los equipos de la red.',
            en: 'Diagram: the browser connects to Waitress and Django on Windows Server, which uses PostgreSQL with PostGIS and pings network devices.',
          },
        },
        {
          src: 'projects/inventario/base-de-datos.png',
          kind: 'database',
          caption: { es: 'Modelo de datos: equipos, categorías, atributos e incidentes', en: 'Data model: devices, categories, attributes and incidents' },
          alt: { es: 'Diagrama entidad-relación de la base de datos', en: 'Entity-relationship diagram of the database' },
        },
        {
          src: 'projects/inventario/mapa.png',
          kind: 'screenshot',
          caption: { es: 'Mapa interactivo con equipos, fibra y áreas', en: 'Interactive map with devices, fiber and areas' },
          alt: { es: 'Captura del mapa del sistema', en: 'Screenshot of the system map' },
        },
        {
          src: 'projects/inventario/equipos.png',
          kind: 'screenshot',
          caption: { es: 'Listado de equipos con filtros', en: 'Equipment list with filters' },
          alt: { es: 'Captura del listado de equipos', en: 'Screenshot of the equipment list' },
        },
        {
          src: 'projects/inventario/ip.png',
          kind: 'screenshot',
          caption: { es: 'Consulta de IP con verificación de conectividad', en: 'IP lookup with connectivity check' },
          alt: { es: 'Captura de la consulta de direcciones IP', en: 'Screenshot of the IP address lookup' },
        },
      ],
    },
  },
  {
    slug: 'financy',
    name: { es: 'Financy', en: 'Financy' },
    category: { es: 'Desarrollo web', en: 'Web development' },
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
    slug: 'apiario',
    name: { es: 'Apiario local', en: 'Local apiary' },
    category: { es: 'Sitio web', en: 'Website' },
    status: { es: 'Cliente real', en: 'Client project' },
    description: {
      es: 'Landing page con misión, productos, contacto y redes sociales para dar visibilidad a un negocio local.',
      en: 'Landing page with mission, products, contact and social channels to give a local business visibility.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    link: {
      kind: 'private',
      note: { es: 'Código privado por confidencialidad del cliente', en: 'Private code, client confidentiality' },
    },
    cover: 'amber',
  },
  {
    slug: 'jarvistec',
    name: { es: 'JarvisTEC', en: 'JarvisTEC' },
    category: { es: 'IA / API', en: 'AI / API' },
    status: { es: 'Completado', en: 'Completed' },
    description: {
      es: 'API REST que sirve diez modelos de ML, con transcripción de voz, comandos y reconocimiento de emociones en la nube.',
      en: 'REST API serving ten ML models, with speech transcription, commands and cloud emotion recognition.',
    },
    stack: ['Python', 'FastAPI', 'Azure', 'GCP'],
    link: { kind: 'repo', url: 'https://github.com/ccorella111/jarvistec' },
    cover: 'black',
  },
];
