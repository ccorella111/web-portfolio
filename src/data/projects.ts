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
      es: 'Dashboard de finanzas personales con inicio de sesión por correo o Google, registro de ingresos y gastos, y gráficos filtrables por día, semana, mes, año o rango.',
      en: 'Personal finance dashboard with email or Google sign-in, income and expense tracking, and charts filtered by day, week, month, year or custom range.',
    },
    stack: ['Django', 'PostgreSQL', 'Tailwind', 'Chart.js'],
    link: { kind: 'repo', url: 'https://github.com/ccorella111/Finance-Dashboard' },
    cover: 'green',
    details: {
      overview: {
        es: 'Aplicación web para llevar las finanzas personales. Cada usuario registra sus ingresos por fuente y sus gastos por categoría, y un dashboard le muestra su balance, totales y gráficos para el periodo que elija. Los montos se manejan en colones.',
        en: 'Web application to manage personal finances. Each user records income by source and expenses by category, and a dashboard shows their balance, totals and charts for any period they choose. Amounts are handled in Costa Rican colones.',
      },
      features: [
        {
          es: 'Registro e inicio de sesión con correo o con Google. Si ya existe una cuenta con el mismo correo, se vincula automáticamente.',
          en: 'Sign-up and sign-in with email or Google. If an account with the same email already exists, it is linked automatically.',
        },
        {
          es: 'Registro, edición y eliminación de ingresos (9 fuentes) y gastos (9 categorías), con paginación y mensajes de confirmación.',
          en: 'Create, edit and delete income (9 sources) and expenses (9 categories), with pagination and confirmation messages.',
        },
        {
          es: 'Dashboard con balance, ingresos y gastos totales, y los últimos 5 movimientos.',
          en: 'Dashboard with balance, total income and expenses, and the 5 latest transactions.',
        },
        {
          es: 'Cuatro gráficos: ingresos vs. gastos, balance acumulado, gastos por categoría e ingresos por fuente.',
          en: 'Four charts: income vs. expenses, cumulative balance, expenses by category and income by source.',
        },
        {
          es: 'Filtro de periodo: hoy, última semana, último mes, último año o un rango personalizado.',
          en: 'Period filter: today, last week, last month, last year or a custom range.',
        },
      ],
      tech: [
        { area: { es: 'Backend', en: 'Backend' }, items: 'Python, Django 6' },
        { area: { es: 'Autenticación', en: 'Auth' }, items: 'Django auth, django-allauth (Google OAuth 2.0)' },
        { area: { es: 'Base de datos', en: 'Database' }, items: 'PostgreSQL, psycopg2' },
        { area: { es: 'Frontend', en: 'Frontend' }, items: 'Django templates, Tailwind CSS, JavaScript' },
        { area: { es: 'Gráficos', en: 'Charts' }, items: 'Chart.js 4' },
        { area: { es: 'Interfaz', en: 'UI' }, items: 'SweetAlert2, Font Awesome' },
        { area: { es: 'Configuración', en: 'Config' }, items: 'python-decouple (.env)' },
      ],
      highlights: [
        {
          es: 'Un endpoint JSON calcula los datos de los gráficos directamente en la base de datos (Sum, TruncDay, TruncMonth). Agrupa por día, o por mes si el rango supera 60 días, y completa los periodos sin movimientos para que las líneas sean continuas.',
          en: 'A JSON endpoint computes chart data directly in the database (Sum, TruncDay, TruncMonth). It groups by day, or by month when the range exceeds 60 days, and fills in periods with no transactions so the lines stay continuous.',
        },
        {
          es: 'Cada consulta se filtra por el usuario autenticado: nadie puede ver, editar ni borrar registros de otra persona. Las vistas exigen inicio de sesión y las eliminaciones solo se aceptan por POST.',
          en: 'Every query is scoped to the signed-in user, so no one can view, edit or delete another person’s records. Views require login and deletions are only accepted via POST.',
        },
        {
          es: 'Adaptador propio de django-allauth: usa el correo como nombre de usuario, toma el nombre desde Google y omite los mensajes automáticos en inglés.',
          en: 'Custom django-allauth adapter: it uses the email as username, takes the name from Google and skips the automatic English messages.',
        },
      ],
      gallery: [
        {
          src: 'projects/financy/arquitectura.png',
          kind: 'architecture',
          caption: { es: 'Arquitectura: Django, autenticación con Google y PostgreSQL', en: 'Architecture: Django, Google sign-in and PostgreSQL' },
          alt: {
            es: 'Diagrama: el navegador se conecta a Django, que tiene vistas de ingresos y gastos, una API para los gráficos y autenticación con allauth, y guarda los datos en PostgreSQL.',
            en: 'Diagram: the browser connects to Django, which has income and expense views, a chart data API and allauth authentication, and stores data in PostgreSQL.',
          },
        },
        {
          src: 'projects/financy/base-de-datos.png',
          kind: 'database',
          caption: { es: 'Modelo de datos: usuarios, transacciones y cuentas de Google', en: 'Data model: users, transactions and Google accounts' },
          alt: {
            es: 'Diagrama entidad-relación: un usuario tiene muchas transacciones y puede tener una cuenta de Google vinculada.',
            en: 'Entity-relationship diagram: a user has many transactions and can have a linked Google account.',
          },
        },
        {
          src: 'projects/financy/dashboard.png',
          kind: 'screenshot',
          caption: { es: 'Dashboard: ingresos vs. gastos del último año', en: 'Dashboard: income vs. expenses over the last year' },
          alt: { es: 'Captura del dashboard con un gráfico de barras de ingresos y gastos por mes', en: 'Dashboard screenshot with a monthly income and expense bar chart' },
        },
        {
          src: 'projects/financy/categorias.png',
          kind: 'screenshot',
          caption: { es: 'Gastos por categoría', en: 'Expenses by category' },
          alt: { es: 'Captura del dashboard con un gráfico de dona de gastos por categoría', en: 'Dashboard screenshot with a doughnut chart of expenses by category' },
        },
        {
          src: 'projects/financy/gastos.png',
          kind: 'screenshot',
          caption: { es: 'Registro de gastos con paginación', en: 'Expense records with pagination' },
          alt: { es: 'Captura de la tabla de gastos', en: 'Screenshot of the expenses table' },
        },
      ],
    },
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
    category: { es: 'IA · Proyecto en equipo', en: 'AI · Team project' },
    status: { es: 'Completo', en: 'Completed' },
    description: {
      es: 'Asistente de IA por voz y cámara: reconoce comandos hablados, detecta emociones en el rostro y sirve 10 modelos de machine learning desde una sola API REST.',
      en: 'Voice and camera AI assistant: it understands spoken commands, detects facial emotions and serves 10 machine learning models through one REST API.',
    },
    stack: ['Python', 'FastAPI', 'scikit-learn', 'OpenCV', 'Azure'],
    link: { kind: 'repo', url: 'https://github.com/ccorella111/jarvistec' },
    cover: 'black',
    details: {
      overview: {
        es: 'Asistente de IA web desarrollado en equipo (3 estudiantes) en el Tecnológico de Costa Rica. El usuario le habla o se muestra a la cámara: el asistente reconoce la voz, detecta la emoción, responde comandos y lee sus respuestas en voz alta. Además, sirve 10 modelos de machine learning a través de una sola API REST.',
        en: 'Web-based AI assistant built as a team project (3 students) at Tecnológico de Costa Rica. The user talks to it or shows their face to the camera: it recognizes speech, detects the user’s emotion, answers voice commands and reads its answers aloud. It also serves 10 machine learning models through one REST API.',
      },
      features: [
        {
          es: 'Comandos de voz: voz a texto en inglés con Azure Speech, un intérprete que convierte lo que dice el usuario en una acción, y respuesta leída en voz alta por el navegador.',
          en: 'Voice commands: English speech-to-text with Azure Speech, an interpreter that maps what the user says to an action, and the answer read aloud by the browser.',
        },
        {
          es: 'Detección de emociones con la cámara: detecta el rostro y clasifica 8 emociones (felicidad, tristeza, enojo, sorpresa, miedo, asco, desprecio y neutral) con un nivel de confianza.',
          en: 'Webcam emotion detection: finds the face and classifies 8 emotions (happiness, sadness, anger, surprise, fear, disgust, contempt and neutral) with a confidence score.',
        },
        {
          es: 'Explorador de modelos: se elige cualquiera de los 10 modelos, se ve su descripción y se ejecutan predicciones desde un formulario.',
          en: 'Model explorer: pick any of the 10 models, read its description and run predictions from a form.',
        },
        {
          es: 'Interfaz web de una sola página, servida por la misma API en /ui.',
          en: 'Single-page web interface served by the same API at /ui.',
        },
      ],
      tech: [
        { area: { es: 'Backend', en: 'Backend' }, items: 'Python, FastAPI, Uvicorn, Pydantic, Swagger/OpenAPI' },
        { area: { es: 'ML / datos', en: 'ML / data' }, items: 'scikit-learn, pandas, NumPy, Matplotlib, Seaborn, Jupyter, joblib' },
        { area: { es: 'Visión', en: 'Vision' }, items: 'OpenCV, HSEmotion (ONNX), ONNX Runtime' },
        { area: { es: 'Nube', en: 'Cloud' }, items: 'Azure Speech (speech-to-text)' },
        { area: { es: 'Frontend', en: 'Frontend' }, items: 'HTML, CSS, JavaScript, getUserMedia, MediaRecorder, Web Speech' },
        { area: { es: 'Calidad', en: 'Testing' }, items: 'pytest (25 pruebas / tests), .env con proveedores simulados / mock providers' },
      ],
      highlights: [
        {
          es: '10 modelos de regresión y clasificación entrenados con datos públicos (grasa corporal, cirrosis, hepatitis C, precio del aguacate y más), cada uno con su notebook de Jupyter y comparado contra un modelo base.',
          en: '10 regression and classification models trained on public datasets (body fat, cirrhosis, hepatitis C, avocado prices and more), each with its own Jupyter notebook and compared against a baseline.',
        },
        {
          es: 'Registro automático de modelos: se cargan con joblib al iniciar, y un modelo nuevo queda disponible como endpoint sin modificar el código de las rutas.',
          en: 'Automatic model registry: models load with joblib at startup, and a new model becomes an endpoint without changing the router code.',
        },
        {
          es: 'Cuando Google dejó de ofrecer la detección de emociones en Cloud Vision, se reemplazó por un modelo local (OpenCV + HSEmotion) que funciona sin internet, sin claves y sin límite de uso.',
          en: 'When Google deprecated emotion detection in Cloud Vision, it was replaced with a local model (OpenCV + HSEmotion) that runs offline, with no keys and no usage limits.',
        },
        {
          es: 'Proveedores simulados configurables en .env, para desarrollar y probar sin claves de API.',
          en: 'Mock providers configurable in .env, to develop and test without API keys.',
        },
      ],
      gallery: [
        {
          src: 'projects/jarvistec/arquitectura.png',
          kind: 'architecture',
          caption: { es: 'Arquitectura: interfaz web, API en FastAPI, modelos y servicios', en: 'Architecture: web interface, FastAPI service, models and services' },
          alt: {
            es: 'Diagrama: la interfaz web se conecta a una API en FastAPI con rutas de voz, comandos, emociones y modelos; usa Azure Speech y un modelo local de emociones.',
            en: 'Diagram: the web interface connects to a FastAPI service with voice, command, emotion and model routes; it uses Azure Speech and a local emotion model.',
          },
        },
        {
          src: 'projects/jarvistec/resultados.png',
          kind: 'results',
          caption: { es: 'Resultados de los 10 modelos con datos de prueba', en: 'Results of the 10 models on test data' },
          alt: {
            es: 'Tabla con los 5 modelos de clasificación y los 5 de regresión, qué predice cada uno y su métrica principal.',
            en: 'Table of the 5 classification and 5 regression models, what each predicts and its key metric.',
          },
        },
        {
          src: 'projects/jarvistec/interfaz.png',
          kind: 'screenshot',
          caption: { es: 'Interfaz: cámara, asistente de voz y explorador de modelos', en: 'Interface: camera, voice assistant and model explorer' },
          alt: {
            es: 'Captura de la interfaz de JarvisTEC con un comando respondido y un modelo seleccionado.',
            en: 'Screenshot of the JarvisTEC interface with an answered command and a selected model.',
          },
        },
      ],
    },
  },
];
