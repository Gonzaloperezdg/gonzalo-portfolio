import type { CaseStudyData } from '../types';
import type { Language } from '../i18n/translations';

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'jbknowledge',
    title: 'InsurTech Global',
    subtitle: 'Crecimiento profesional en una compañía B2B desarrollando soluciones de software corporativo',
    role: 'UX/UI Designer → UX/UI Lead',
    period: 'Agosto 2021 – Presente',
    type: 'Enterprise',
    status: 'active',
    seoTitle: 'InsurTech Global — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Diseño de sistemas, liderazgo de equipo e integración de IA en una tech company con presencia global.',
    sections: [
      {
        id: 'context',
        title: 'El Contexto',
        content: [
          'Me incorporé a una empresa tecnológica internacional que desarrolla software especializado en la gestión de riesgos y seguros. La dinámica de trabajo implica colaborar en un entorno completamente distribuido, coordinando con equipos de desarrollo y producto ubicados en América, África y Europa.',
          'Ingresé en agosto de 2021 como UX/UI Designer. Con el tiempo, el trabajo fue creciendo en alcance y responsabilidad técnica, llevándome a asumir un rol de liderazgo en diseño a partir de 2025.',
          'A lo largo de este camino participé en múltiples desarrollos. Acá me enfoco en dos proyectos clave que marcaron mi evolución técnica y de gestión.',
        ],
      },
    ],
    subProjects: [
      {
        slug: 'ccmsi',
        title: 'Proyecto 1 — Expansión de Design System',
        period: 'Agosto 2021 – 2023',
        description: 'Expansión de un Design System para el producto principal de un cliente corporativo del sector seguros.',
        status: 'completed',
        sections: [
          {
            id: 'context',
            title: 'El Proyecto',
            content: [
              'El desafío consistió en tomar un sistema de diseño incipiente para el producto principal de un cliente corporativo y llevarlo a un nivel de madurez que pudiera sostener el escalado de la plataforma.',
              'El trabajo no partió de cero. Tomé la base existente, analicé la lógica de los equipos involucrados, y me enfoqué en ampliar y documentar todo el sistema de forma integral.',
            ],
          },
          {
            id: 'communication',
            title: 'Mejorar la Comunicación entre Áreas',
            content: [
              'Identifiqué un cuello de botella en la dinámica del equipo: la falta de participación de ciertos desarrolladores en las revisiones de diseño generaba fricciones y retrabajos.',
              'Propuse e implementé un modelo de revisión cruzada incluyendo representantes clave — Business Analysts, QA, desarrolladores Front-end y Back-end — para alinear expectativas tempranamente y hacer más fluido el proceso para todos.',
            ],
          },
          {
            id: 'design-system',
            title: 'El Design System como Herramienta de Decisión',
            content: [
              'Evolucioné el sistema incorporando componentes con variantes, patrones de interacción y reglas claras de uso. El objetivo fue crear una fuente de verdad accionable para que cualquier miembro del equipo — devs, BAs o nuevos diseñadores — pudiera tomar decisiones autónomas con contexto técnico.',
              'No se trataba de que el equipo consulte menos. Se trataba de que tuvieran una herramienta concreta donde apoyarse. Diseñé pensando en los que iban a seguir después de mí.',
            ],
            pullQuote: 'Diseñé pensando en los que iban a seguir después de mí.',
          },
          {
            id: 'results',
            title: 'Resultados',
            content: [
              'Reducción de tiempos muertos: consultas entre desarrolladores y Business Analysts de 2 horas a 1 hora semanal por persona.',
              'Eficiencia de equipo: ahorro total comprobado de 7 horas semanales para el equipo core.',
              'Estabilidad del producto: consolidación de un sistema unificado con reducción significativa de bugs reportados por inconsistencias visuales en front-end.',
            ],
          },
        ],
      },
      {
        slug: 'gcm',
        title: 'Proyecto 2 — Liderazgo e IA Generativa',
        period: '2024 – Presente',
        description: 'Liderazgo del equipo de diseño en un producto en construcción activa, con integración de IA generativa al flujo de trabajo.',
        status: 'active',
        sections: [
          {
            id: 'context',
            title: 'Un Nuevo Desafío',
            content: [
              'Asumí el liderazgo del equipo de diseño para un producto que se encontraba en fase de construcción activa. El reto principal fue coordinar el esfuerzo visual, definir la identidad del producto desde cero y crear un sistema de diseño escalable mientras se maquetaban las pantallas principales.',
              'Al incorporar a un diseñador senior al equipo, el enfoque de liderazgo se basó estrictamente en la transferencia de contexto y la gestión eficiente del conocimiento técnico — no en la jerarquía.',
            ],
          },
          {
            id: 'leadership',
            title: 'Implementación de Nuevos Procesos',
            content: [
              'Introduje la práctica de Design Reviews previas a la etapa de QA. Esto permitió asegurar la fidelidad de la implementación frente a los prototipos y detectar ajustes en etapas tempranas.',
              'Experimenté continuamente con diferentes herramientas de documentación asíncrona hasta dar con el flujo más eficiente para el equipo.',
            ],
            pullQuote: 'Suelo hacer muchas pruebas que no siempre terminan en éxito, pero me gusta explorar nuevas opciones.',
          },
          {
            id: 'notebooklm',
            title: 'Base de Conocimiento y Aceleración con IA',
            content: [
              'Para optimizar el flujo de trabajo, lideré la integración de herramientas de IA. Desarrollamos una base de conocimiento dinámica entrenada con la documentación técnica del proyecto.',
              'Esto transformó el onboarding de nuevos integrantes: pasaron de consumir horas de grabaciones a realizar consultas activas, reduciendo drásticamente la curva de aprendizaje.',
              'En paralelo, adopté herramientas generativas para la creación rápida de wireframes y mockups. Todo este proceso fue acompañado de una política estricta de documentación continua de decisiones y contexto.',
            ],
          },
          {
            id: 'documentation',
            title: 'Documentar Todo lo Vivido',
            content: [
              'Uno de los aprendizajes más valiosos de esta etapa fue el de documentar de forma continua. No solo el Design System, sino las decisiones de reuniones, los cambios en el diseño, los motivos de cada ajuste, los datos relevantes y hasta las tareas del día a día.',
              'Esa documentación se convierte en memoria del proyecto: permite entender por qué cada cosa es como es y hace posible que cualquier persona que se sume pueda ponerse al día sin depender de que alguien le explique todo.',
            ],
          },
          {
            id: 'results',
            title: 'Resultados',
            content: [
              'Velocidad de validación: el tiempo de diseño y validación de conceptos se redujo de varios días a iteraciones de media hora — una reducción del 93.75% en los tiempos de respuesta.',
              'Eficiencia del ciclo de vida: el ciclo completo de diseño pasó de un promedio de 7 días a solo 1 día de trabajo efectivo — 87.5% de reducción de tiempo.',
              'Optimización del onboarding: transformación del proceso de capacitación inicial mediante sistemas automatizados de consulta.',
              'Design reviews pre-QA implementadas como práctica regular del equipo.',
            ],
          },
          {
            id: 'reflection',
            title: 'Si Volviera a Empezar',
            content: [
              'Arrancaría con la base de conocimiento desde el primer día del proyecto, no cuando el proyecto ya está maduro. El conocimiento temprano acelera todo lo demás.',
              'Documentaría las decisiones desde el inicio. Entre más crece el proyecto, más valiosa es esa historia.',
              'Y en lugar de esperar a que el Design System esté completo para integrar IA, las usaría juntas desde el principio: la IA para la ejecución visual, yo enfocado en las decisiones de UX.',
            ],
            pullQuote: 'No se trata de ir más rápido. Se trata de que el proceso sea mejor para todos los que lo viven.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ratt',
    title: 'RATT',
    subtitle: 'Narrativa como decisión de diseño para el sitio de RATT (Red Alto al Tráfico y la Trata)',
    role: 'UX/UI Lead',
    period: 'Septiembre 2024 – Febrero 2025',
    credits: [
      {
        name: 'Florencia Manzoni',
        role: 'UX/UI Designer',
        url: 'https://www.linkedin.com/in/florenciamanzoni/',
      },
    ],
    type: 'Social Impact',
    status: 'completed',
    seoTitle: 'RATT — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Rediseño UX/UI como voluntariado. Narrativa emocional como decisión central de diseño para una causa social.',
    sections: [
      {
        id: 'context',
        title: 'El Punto de Partida',
        content: [
          'El sitio anterior de RATT tenía una situación común en organizaciones sociales: mucho texto, muy denso, difícil de procesar. La información importante estaba ahí, pero no llegaba.',
          'En un tema como el tráfico o la trata, que la información no llegue no es solo un problema de diseño: es una oportunidad de impacto que se pierde.',
          'El desafío no era técnico. Era narrativo. ¿Cómo transformar un sitio informativo en una experiencia que mueva a la acción?',
        ],
      },
      {
        id: 'research',
        title: 'Mes 1: Research Antes de Diseñar',
        content: [
          'Tomé una decisión que definió el proyecto: un mes completo de research antes de arrancar con el diseño. Análisis heurístico del sitio existente, estudio de casos de otras organizaciones similares, comprensión del contexto: quién llega al sitio, qué siente, qué lo lleva a denunciar o donar.',
          'Un tema como el tráfico o la trata merece profundidad. Saltear esa etapa hubiera sido un error.',
        ],
      },
      {
        id: 'three-paths',
        title: 'Los 3 Caminos del Usuario',
        content: [
          'Del análisis y de una decisión conjunta con el equipo de RATT surgió la arquitectura del sitio alrededor de tres acciones con peso diferenciado:',
          'Denunciar — Prioridad principal. El núcleo de la misión de RATT. El usuario que llega a denunciar tiene que encontrar el camino sin fricciones.',
          'Donar — Segunda prioridad. Sostén económico de la causa.',
          'Capacitar — Tercera prioridad. Amplía el alcance y a veces genera ingresos.',
          'Los tres caminos tienen peso diferenciado pero son complementarios: el usuario navega hacia la acción que más resuena con él.',
        ],
      },
      {
        id: 'narrative',
        title: 'La Decisión Central: El Sitio Como Cuento',
        content: [
          'Frente al texto denso, tomamos la decisión de diseño más importante del proyecto: estructurar cada página como una historia.',
          'Inicio: un hook emocional, algo que detiene al usuario. Nudo: la información clave, el problema, los datos. Desenlace: la llamada a la acción, la esperanza, lo que puede hacer.',
          'Las páginas juntas forman un arco completo: no son secciones independientes, son capítulos de una narrativa mayor.',
          'En lugar de posicionar al visitante como testigo de una tragedia, el diseño lo pone como protagonista. Su denuncia, su donación, son actos concretos de cambio.',
        ],
        pullQuote: 'Cambiar es simple; el impacto inmenso. La diferencia empieza con vos.',
      },
      {
        id: 'implementation',
        title: 'Del Diseño a la Implementación',
        content: [
          'El sitio fue implementado en Wix. Desde el inicio sabíamos que el resultado no sería una réplica exacta del diseño, y lo asumimos sin problema.',
          'Lo esencial se logró: la narrativa de cada página se preservó, las frases clave llegaron al sitio, el posicionamiento del usuario como protagonista se mantuvo, y los CTAs invitan a la acción.',
        ],
      },
      {
        id: 'strategy',
        title: 'Emociones + Datos',
        content: [
          'RATT no solo necesitaba emocionar. Necesitaba convencer. La solución fue trabajar en dos niveles al mismo tiempo: narrativa emocional (frases de empoderamiento, identidad visual con urgencia pero sin caer en el morbo) y datos concretos (números reales, logros documentados, impacto cuantificable).',
          'La secuencia: llegar emocionalmente, sostener con datos, mover a la acción.',
        ],
      },
      {
        id: 'honesty',
        title: 'Post-Lanzamiento',
        content: [
          'RATT no comparte analytics. No tenemos acceso a métricas de denuncias, donaciones ni conversión. Lo que sabemos: al equipo de RATT les gustó el resultado.',
        ],
      },
      {
        id: 'reflection',
        title: 'Si Volviera a Empezar',
        content: [
          'Usaría IA para acelerar la ejecución visual y dedicar más tiempo a profundizar en la narrativa. Probaría más variaciones de copy con audiencias similares antes de definir las frases clave. Y desde el día 1 propondría un plan de medición simple que RATT pudiera sostener con sus propios recursos.',
        ],
        pullQuote: 'Reducir texto denso no es perder información. Es transformarla en algo procesable.',
      },
    ],
  },
  {
    slug: 'coderhouse',
    title: 'Coderhouse',
    subtitle: 'Enseñar UX/UI y lo que eso me dejó como diseñador',
    role: 'UX/UI Design Instructor',
    period: 'Mayo 2023 – Octubre 2023',
    type: 'Teaching',
    status: 'completed',
    seoTitle: 'Coderhouse — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Experiencia docente en UX/UI: 70+ estudiantes, rating 4.92/5, y cómo enseñar mejoró mi diseño.',
    sections: [
      {
        id: 'context',
        title: 'Por Qué Enseñar',
        content: [
          'Cuando tomé el rol en Coderhouse ya llevaba años trabajando en UX/UI en InsurTech Global. No lo hice para validar el perfil. Lo hice porque me interesaba, y lo que encontré fue el momento de mayor plenitud profesional de mi vida.',
          'Investigaba los temas a fondo para poder enseñarlos, diseñaba durante el día, enseñaba de noche. Tres roles que se retroalimentaban. Descubrí que explicar algo bien es otra forma de entenderlo.',
        ],
      },
      {
        id: 'audience',
        title: 'El Programa y el Público',
        content: [
          'Curso de UX/UI Design nivel introductorio, sin requerimientos previos. Lo interesante era la diversidad: administración, marketing, oficios técnicos, diseño gráfico, y muchos que nunca habían diseñado nada.',
          'El desafío que me planteé fue cómo podía yo explicar bien los conceptos a personas con backgrounds tan distintos, sin perder profundidad y sin recurrir a tecnicismos que no aportaran.',
        ],
      },
      {
        id: 'method',
        title: 'El Método del Hermanito',
        content: [
          'Si mi hermano (9-10 años) entiende el concepto y me lo puede explicar de vuelta, la clase fue un éxito.',
          'No era una metáfora. Ensayaba las clases con él antes de darlas. Si en algún punto el concepto se quebraba, volvía al principio y lo reformulaba.',
          'La lógica es simple: si un concepto no se puede explicar en términos accesibles, probablemente no está del todo claro todavía. La simplicidad no opone al rigor, lo complementa.',
        ],
        pullQuote: 'Si el usuario no lo entiende, es una oportunidad para mejorar el diseño.',
      },
      {
        id: 'show',
        title: 'Las Clases Como Show',
        content: [
          'Preparaba cada clase como si fuera una presentación. No alcanzaba con que el contenido fuera correcto: tenía que ser interesante.',
          'Fui desarrollando un método propio: buscar un elemento llamativo que funcione de gancho para capturar la atención justo antes de explicar un tema complejo. Cuando la gente está enganchada, aprende más y mejor.',
          'Las camisas fueron parte de eso. Empecé con ropa normal y fui incorporando camisas cada vez más llamativas y variadas, distintas en cada clase. Los estudiantes ya esperaban ver con qué llegaba. Ese momento de sorpresa era la entrada perfecta para el tema del día.',
          'El ejemplo más recordado: me disfracé de Walter White de Breaking Bad para enseñar Atomic Design. La clase arrancó con la intro de la serie. Los estudiantes se rieron, se conectaron, y aprendieron el concepto. Un tema que suele generar resistencia se convirtió en algo memorable.',
        ],
      },
      {
        id: 'safety',
        title: 'Espacio para Expresarse',
        content: [
          'Aprender algo nuevo puede ser intimidante. Trabajé para que el espacio de clase fuera uno donde la frustración se pudiera expresar sin miedo al juicio.',
          'No era solo transmitir conocimiento: era facilitar el proceso de aprendizaje. Que alguien se sienta cómodo para preguntar o decir que no entendió es condición necesaria para que el aprendizaje pase.',
        ],
      },
      {
        id: 'results',
        title: 'El Impacto',
        content: [
          '70+ estudiantes en 6 meses. Rating promedio de 4.92 sobre 5. Clases presenciales, 2 horas, dos veces por semana.',
        ],
      },
      {
        id: 'transfer',
        title: 'Lo que Enseñar Me Enseñó',
        content: [
          'Aprendí a explicar mejor temas técnicos. Eso tiene un impacto directo en el trabajo de diseño:',
          'Cuando tenés que explicar una decisión de diseño a alguien que viene de otro contexto, la claridad que entrenás enseñando te ayuda. Documentar para que alguien más lo entienda también mejora la documentación. Entender qué confunde a alguien es entender qué confunde al usuario final: es la misma habilidad.',
          'La simplicidad no es degradar el concepto. Es encontrar la forma más refinada de expresarlo.',
        ],
      },
      {
        id: 'reflection',
        title: '¿Volvería a Enseñar?',
        content: [
          'Sí. Sin dudarlo. Con una condición: que esté integrado en el horario laboral, no como carga adicional de noche.',
          'La pedagogía y el diseño comparten un principio: si el otro no lo entiende, es una oportunidad que uno puede resolver.',
        ],
        pullQuote: 'El método del hermanito no es solo una técnica para preparar clases. Es una postura frente al trabajo.',
      },
    ],
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    subtitle: 'Tres generaciones de metodología AI-native, de idea a producto deployado',
    role: 'Designer + Builder',
    period: 'Octubre 2025 – Presente',
    type: 'AI Methodology',
    status: 'active',
    seoTitle: 'AI Experiments — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Tres generaciones de metodología AI-native en 5 meses. De herramientas aisladas a workflow documentado y reproducible.',
    sections: [
      {
        id: 'context',
        title: 'El Punto de Partida',
        content: [
          'En octubre de 2025 tomé el curso de AI para UXers de Johan Villalba. Ese fue el detonante. Johan, junto a Cristian Morales Achiardi, influyeron mucho en cómo empecé a pensar el uso de IA como algo más que una herramienta.',
          'Desde ahí arranqué a llevar proyectos propios de idea a producto deployado. No como experimentos aislados, sino como un proceso que fue evolucionando con cada iteración. En pocos meses, ese proceso pasó por tres versiones completamente distintas.',
          'Lo que conecta a todos los proyectos no es el stack ni el tema. Es la pregunta que los guía: ¿cómo llevo una idea desde cero a un producto real usando IA de la mejor manera posible?',
        ],
      },
      {
        id: 'evolution',
        title: 'La Evolución en 3 Generaciones',
        content: [
          'Generación 1 (Noviembre 2025): Workflow lineal. ChatGPT para research, Stitch para prototipo, Google AI Studio para hacerlo funcional, Antigravity y Netlify. Herramientas separadas, sin documentación formal.',
          'Generación 2 (Diciembre 2025 - Enero 2026): Research más profundo. Integración de MCP: NotebookLM dentro de Antigravity. Stack consistente: React + Vite + TS + Supabase. Mayor registro del proceso.',
          'Generación 3 (Febrero - Marzo 2026): Cambio de paradigma. NotebookLM + Perplexity para research, Claude Code desde terminal generando PRD + Design System + Content System, referencias visuales descritas por LLM, ASCII mockups antes del código, implementación local iterativa y deploy.',
        ],
      },
      {
        id: 'discovery',
        title: 'El Descubrimiento que lo Cambió Todo',
        content: [
          'La documentación local y el trabajo desde terminal. Le tenía mucho miedo a la terminal, pero fue ahí donde vi un cambio enorme en el rendimiento y en los resultados.',
          'Sin interfaces visuales que distraigan: enfoque total en la estructura. Control completo sobre los documentos. Iteración rápida sin saltar entre plataformas. Integración natural con el repositorio local.',
        ],
        pullQuote: 'Le tenía miedo a la terminal. Fue ahí donde vi un cambio enorme en el rendimiento.',
      },
      {
        id: 'differentiator',
        title: 'El Diferenciador Real',
        content: [
          'Llevar una idea al deploy es hoy una capacidad que cada vez más personas tienen. En poco tiempo no va a ser novedad.',
          'El factor diferenciador está en la investigación y en la comprensión de los usuarios, el producto y el negocio. Lo que hace a esta metodología diferente no es el stack ni las herramientas. Es que cada proyecto arranca con research profundo, documentación estructurada y comprensión de tres dimensiones al mismo tiempo.',
          'La IA acelera la ejecución. El criterio humano decide qué delegar, qué no, y cómo evaluar los resultados.',
        ],
      },
      {
        id: 'reflection',
        title: 'Lo Que Quiero Demostrar',
        content: [
          'Evolución rápida y aprendizaje continuo. No es cuántos proyectos shipié. Es cómo mi proceso cambió en cinco meses. De herramientas aisladas a metodología reproducible. De miedo a la terminal a trabajo nativo en CLI.',
          'Metodología experimental con estructura, no caótica. Criterio para decidir qué automatizar y qué no. Comprensión integral: usuarios, producto y negocio.',
        ],
        pullQuote: 'La vanguardia no es la última herramienta. Es saber por qué la estás usando.',
      },
    ],
    subProjects: [
      {
        slug: 'feriaflow',
        title: 'FeriaFlow',
        generation: 'Generación 1',
        period: 'Noviembre 2025',
        description: 'Interfaz para feriantes: carga de productos mientras se vende, con generación automática de reportes de ventas por feria.',
        motivation: 'Necesidad real del emprendimiento personal. Vender en una feria implica llevar registro manual de lo que se vende, a qué precio y cuántas unidades. Un proceso que tenía mucho potencial de mejora.',
        stack: ['React', 'Vite', 'TypeScript', 'Antigravity', 'Netlify'],
        workflow: [
          'ChatGPT — Research inicial',
          'Stitch — Superprompt inicial, primer prototipo',
          'Google AI Studio — De prototipo a funcional',
          'Antigravity — Base de datos y backend',
          'Netlify — Deploy',
        ],
        insights: [
          'Workflow lineal, herramienta tras herramienta en secuencia',
          'Sin documentación formal: sin PRD, sin Design System definido',
          'Research inicial, suficiente para arrancar y validar',
          'El producto llegó a producción y está en uso real',
        ],
        status: 'active',
      },
      {
        slug: 'dodocalendar',
        title: 'DodoCalendar',
        generation: 'Generación 2',
        period: 'Diciembre 2025 – Enero 2026',
        description: 'App para planificar fechas de fabricación de productos y fechas de ferias.',
        motivation: 'Necesidad detectada después de FeriaFlow: coordinar cuándo fabricar para tener stock suficiente en cada feria.',
        stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'Netlify'],
        workflow: [
          'Research más profundo',
          'MCP de NotebookLM integrado dentro de Antigravity (paso clave)',
          'Stitch — Prototipado',
          'Antigravity / Google AI Studio — Desarrollo funcional',
          'Supabase — Backend',
          'Netlify — Deploy',
        ],
        insights: [
          'Integrar NotebookLM como MCP fue el paso evolutivo de esta generación',
          'Research más estructurado que Gen 1',
          'El stack se consolida: React + Vite + TS',
        ],
        status: 'completed',
      },
      {
        slug: 'portfolio',
        title: 'Este Portfolio',
        generation: 'Generación 3',
        period: 'Febrero – Marzo 2026',
        description: 'Portfolio profesional construido con la metodología AI-native completa, de research hasta deploy.',
        motivation: 'Aplicar la metodología evolucionada a un proyecto que demuestra el proceso mismo.',
        stack: ['React 19', 'Vite', 'TypeScript', 'React Router', 'Netlify'],
        workflow: [
          'NotebookLM + Perplexity — Research profundo, documentación local',
          'Claude Code desde terminal — PRD + Design System + Content System + Plan',
          'Referencias visuales + descripción LLM en markdown',
          'ASCII mockups — Estructura antes del visual',
          'Implementación local con React + Vite + TS',
          'Iteraciones locales antes del deploy',
          'Deploy en Netlify',
        ],
        insights: [
          'La documentación local y el trabajo desde terminal cambiaron todo',
          'PRD + Design System + Content System desde CLI: estructura primero',
          'ASCII mockups antes de abrir el editor de código',
          'El proceso es tan importante como el producto',
        ],
        status: 'active',
      },
      {
        slug: 'finanzas',
        title: 'App de Finanzas Personales',
        generation: 'Generación 3',
        period: 'Marzo 2026',
        description: 'Control de gastos y presupuesto personal usando la misma metodología Gen 3.',
        motivation: 'Necesidad personal de organizar las finanzas, y a la vez validar que la metodología es reproducible en dominios distintos.',
        stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'Netlify'],
        workflow: [
          'NotebookLM + Perplexity — Research',
          'Claude Code — PRD + DS + CS + Plan',
          'Referencias visuales + descripción LLM',
          'ASCII mockups',
          'Implementación local',
          'Deploy',
        ],
        insights: [
          'Misma metodología Gen 3 en un dominio diferente',
          'Validación de que el workflow es reproducible',
          'En construcción activa',
        ],
        status: 'active',
      },
    ],
  },
];

// ─── English version ────────────────────────────────────────
const CASE_STUDIES_EN: CaseStudyData[] = [
  {
    slug: 'jbknowledge',
    title: 'InsurTech Global',
    subtitle: 'Professional growth at a B2B company building corporate software solutions',
    role: 'UX/UI Designer → UX/UI Lead',
    period: 'August 2021 – Present',
    type: 'Enterprise',
    status: 'active',
    seoTitle: 'InsurTech Global — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Systems design, team leadership and AI integration at a globally distributed tech company.',
    sections: [
      {
        id: 'context',
        title: 'The Context',
        content: [
          'I joined an international technology company that develops specialized software for risk management and insurance. The work dynamic involves collaborating in a fully distributed environment, coordinating with development and product teams located across the Americas, Africa, and Europe.',
          'I joined in August 2021 as a UX/UI Designer. Over time, the work grew in scope and technical responsibility, leading me to take on a design leadership role starting in 2025.',
          'Along the way I worked on multiple projects. Here I focus on two key ones that shaped my technical and management evolution.',
        ],
      },
    ],
    subProjects: [
      {
        slug: 'ccmsi',
        title: 'Project 1 — Design System Expansion',
        period: 'August 2021 – 2023',
        description: 'Expansion of a Design System for the main product of a corporate client in the insurance sector.',
        status: 'completed',
        sections: [
          {
            id: 'context',
            title: 'The Project',
            content: [
              'The challenge was to take an early-stage design system for a corporate client\'s main product and bring it to a maturity level that could sustain the platform\'s scaling.',
              'The work didn\'t start from scratch. I took what existed, understood the team\'s logic, and focused on expanding and documenting the entire system comprehensively.',
            ],
          },
          {
            id: 'communication',
            title: 'Improving Cross-Team Communication',
            content: [
              'I identified a bottleneck in the team dynamic: the lack of participation from certain developers in design reviews was generating friction and rework.',
              'I proposed and implemented a cross-review model including key representatives — Business Analysts, QA, Front-end and Back-end developers — to align expectations early and streamline the process for everyone.',
            ],
          },
          {
            id: 'design-system',
            title: 'The Design System as a Decision Tool',
            content: [
              'I evolved the system by incorporating components with variants, interaction patterns, and clear usage rules. The goal was to create an actionable source of truth so any team member — devs, BAs, or new designers — could make autonomous decisions with technical context.',
              'It wasn\'t about having the team consult less. It was about giving them a concrete tool to lean on. I designed thinking about those who would come after me.',
            ],
            pullQuote: 'I designed thinking about those who would come after me.',
          },
          {
            id: 'results',
            title: 'Results',
            content: [
              'Reduced downtime: developer and Business Analyst consultations dropped from 2 hours/week per person to 1 hour/week.',
              'Team efficiency: proven total savings of 7 hours per week for the core team.',
              'Product stability: a unified system with a significant reduction in bugs reported due to front-end visual inconsistencies.',
            ],
          },
        ],
      },
      {
        slug: 'gcm',
        title: 'Project 2 — Leadership & Generative AI',
        period: '2024 – Present',
        description: 'Design team leadership on a product under active construction, with integration of generative AI into the workflow.',
        status: 'active',
        sections: [
          {
            id: 'context',
            title: 'A New Challenge',
            content: [
              'I took on design team leadership for a product in active construction. The main challenge was coordinating the visual effort, defining the product identity from scratch, and creating a scalable design system while building out the main screens.',
              'When a senior designer joined the team, the leadership approach was strictly based on context transfer and efficient management of technical knowledge — not hierarchy.',
            ],
          },
          {
            id: 'leadership',
            title: 'Implementing New Processes',
            content: [
              'I introduced the practice of Design Reviews prior to the QA stage. This ensured implementation fidelity against prototypes and allowed catching adjustments early.',
              'I continuously experimented with different async documentation tools until finding the most efficient workflow for the team.',
            ],
            pullQuote: 'I tend to run many tests that don\'t always succeed, but I like to explore new options.',
          },
          {
            id: 'notebooklm',
            title: 'Knowledge Base and AI Acceleration',
            content: [
              'To optimize the workflow, I led the integration of AI tools. We developed a dynamic knowledge base trained on the project\'s technical documentation.',
              'This transformed onboarding for new team members: they went from consuming hours of recordings to making active queries, drastically reducing the learning curve.',
              'In parallel, I adopted generative tools for rapid wireframe and mockup creation. All of this was accompanied by a strict policy of continuous documentation of decisions and context.',
            ],
          },
          {
            id: 'documentation',
            title: 'Documenting Everything',
            content: [
              'One of the most valuable learnings of this stage was continuous documentation. Not just the Design System, but meeting decisions, design changes, the reasons for each adjustment, relevant data, and even day-to-day tasks.',
              'That documentation becomes the project\'s memory: it explains why things are the way they are, and makes it possible for anyone who joins to get up to speed without depending on someone to explain everything.',
            ],
          },
          {
            id: 'results',
            title: 'Results',
            content: [
              'Validation speed: concept design and validation time reduced from several days to half-hour iterations — a 93.75% reduction in response times.',
              'Lifecycle efficiency: the complete design cycle went from an average of 7 days to just 1 effective working day — 87.5% time reduction.',
              'Onboarding optimization: initial training transformed through automated query systems.',
              'Pre-QA design reviews implemented as a regular team practice.',
            ],
          },
          {
            id: 'reflection',
            title: 'If I Started Over',
            content: [
              'I would start the knowledge base from day one of the project, not when the project is already mature. Early knowledge accelerates everything else.',
              'I would document decisions from the beginning. The more the project grows, the more valuable that history becomes.',
              'And instead of waiting for the Design System to be complete before integrating AI, I would use them together from the start: AI for visual execution, me focused on UX decisions.',
            ],
            pullQuote: 'It\'s not about going faster. It\'s about making the process better for everyone who lives it.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ratt',
    title: 'RATT',
    subtitle: 'Narrative as a design decision for the RATT website (Red Alto al Tráfico y la Trata)',
    role: 'UX/UI Lead',
    period: 'September 2024 – February 2025',
    credits: [
      {
        name: 'Florencia Manzoni',
        role: 'UX/UI Designer',
        url: 'https://www.linkedin.com/in/florenciamanzoni/',
      },
    ],
    type: 'Social Impact',
    status: 'completed',
    seoTitle: 'RATT — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'UX/UI redesign as volunteer work. Emotional narrative as the central design decision for a social cause.',
    sections: [
      {
        id: 'context',
        title: 'The Starting Point',
        content: [
          'RATT\'s previous website had a situation common in social organizations: lots of text, very dense, hard to process. The important information was there, but it wasn\'t landing.',
          'On a topic like trafficking or human exploitation, information not landing isn\'t just a design problem — it\'s an impact opportunity lost.',
          'The challenge wasn\'t technical. It was narrative. How do you transform an informational site into an experience that moves people to action?',
        ],
      },
      {
        id: 'research',
        title: 'Month 1: Research Before Designing',
        content: [
          'I made a decision that defined the project: a full month of research before starting design. Heuristic analysis of the existing site, case studies of similar organizations, understanding the context: who visits the site, what they feel, what leads them to report or donate.',
          'A topic like trafficking or human exploitation deserves depth. Skipping that stage would have been a mistake.',
        ],
      },
      {
        id: 'three-paths',
        title: 'The 3 User Paths',
        content: [
          'From the analysis and a joint decision with the RATT team, the site architecture emerged around three weighted actions:',
          'Report — Primary priority. The core of RATT\'s mission. The user who comes to report must find the path without friction.',
          'Donate — Second priority. Economic support for the cause.',
          'Train — Third priority. Expands reach and sometimes generates revenue.',
          'The three paths have differentiated weight but are complementary: the user navigates toward the action that resonates most with them.',
        ],
      },
      {
        id: 'narrative',
        title: 'The Central Decision: The Site as a Story',
        content: [
          'Faced with dense text, we made the most important design decision of the project: structure each page as a story.',
          'Beginning: an emotional hook, something that stops the user. Middle: key information, the problem, the data. End: the call to action, the hope, what they can do.',
          'The pages together form a complete arc: they\'re not independent sections, they\'re chapters of a larger narrative.',
          'Instead of positioning the visitor as a witness to a tragedy, the design puts them as the protagonist. Their report, their donation, are concrete acts of change.',
        ],
        pullQuote: 'Change is simple; the impact immense. The difference starts with you.',
      },
      {
        id: 'implementation',
        title: 'From Design to Implementation',
        content: [
          'The site was implemented in Wix. From the start we knew the result wouldn\'t be an exact replica of the design, and we accepted that without issue.',
          'The essentials were achieved: the narrative of each page was preserved, the key phrases made it to the site, the positioning of the user as protagonist was maintained, and the CTAs invite action.',
        ],
      },
      {
        id: 'strategy',
        title: 'Emotion + Data',
        content: [
          'RATT didn\'t just need to move people emotionally. It needed to convince them. The solution was working on two levels simultaneously: emotional narrative (empowerment phrases, visual identity with urgency but avoiding sensationalism) and concrete data (real numbers, documented achievements, quantifiable impact).',
          'The sequence: connect emotionally, sustain with data, drive to action.',
        ],
      },
      {
        id: 'honesty',
        title: 'Post-Launch',
        content: [
          'RATT doesn\'t share analytics. We don\'t have access to metrics on reports, donations, or conversion. What we know: the RATT team liked the result.',
        ],
      },
      {
        id: 'reflection',
        title: 'If I Started Over',
        content: [
          'I would use AI to accelerate visual execution and dedicate more time to deepening the narrative. I would test more copy variations with similar audiences before defining the key phrases. And from day 1, I would propose a simple measurement plan that RATT could sustain with their own resources.',
        ],
        pullQuote: 'Reducing dense text isn\'t losing information. It\'s transforming it into something processable.',
      },
    ],
  },
  {
    slug: 'coderhouse',
    title: 'Coderhouse',
    subtitle: 'Teaching UX/UI and what it left me as a designer',
    role: 'UX/UI Design Instructor',
    period: 'May 2023 – October 2023',
    type: 'Teaching',
    status: 'completed',
    seoTitle: 'Coderhouse — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Teaching experience in UX/UI: 70+ students, 4.92/5 rating, and how teaching improved my design.',
    sections: [
      {
        id: 'context',
        title: 'Why Teach',
        content: [
          'When I took the role at Coderhouse I had already been working in UX/UI at InsurTech Global for years. I didn\'t do it to validate my profile. I did it because I was genuinely interested — and what I found was the most professionally fulfilling moment of my life.',
          'I researched topics deeply to teach them, designed during the day, taught at night. Three roles feeding into each other. I discovered that explaining something well is another way of understanding it.',
        ],
      },
      {
        id: 'audience',
        title: 'The Program and the Audience',
        content: [
          'Introductory-level UX/UI Design course, no prior requirements. The interesting part was the diversity: business administration, marketing, technical trades, graphic design, and many who had never designed anything.',
          'The challenge I set for myself: how could I explain concepts clearly to people with such different backgrounds, without losing depth and without resorting to jargon that didn\'t add value.',
        ],
      },
      {
        id: 'method',
        title: 'The Little Brother Method',
        content: [
          'If my brother (9-10 years old) understands the concept and can explain it back to me, the class was a success.',
          'It wasn\'t a metaphor. I would rehearse classes with him before teaching them. If the concept broke down at some point, I\'d go back to the beginning and reformulate.',
          'The logic is simple: if a concept can\'t be explained in accessible terms, it probably isn\'t fully clear yet. Simplicity doesn\'t oppose rigor — it complements it.',
        ],
        pullQuote: 'If the user doesn\'t understand it, it\'s an opportunity to improve the design.',
      },
      {
        id: 'show',
        title: 'Classes as a Show',
        content: [
          'I prepared each class as if it were a presentation. It wasn\'t enough for the content to be correct: it had to be interesting.',
          'I developed my own method: find a striking element that works as a hook to capture attention right before explaining a complex topic. When people are hooked, they learn more and better.',
          'The shirts were part of that. I started with normal clothes and gradually incorporated increasingly colorful and varied shirts, different for each class. Students were already waiting to see what I\'d show up in. That moment of surprise was the perfect entry point for the day\'s topic.',
          'The most memorable example: I dressed as Walter White from Breaking Bad to teach Atomic Design. The class started with the show\'s intro. Students laughed, connected, and learned the concept. A topic that usually generates resistance became something memorable.',
        ],
      },
      {
        id: 'safety',
        title: 'Space to Express Yourself',
        content: [
          'Learning something new can be intimidating. I worked to make the classroom a space where frustration could be expressed without fear of judgment.',
          'It wasn\'t just about transmitting knowledge: it was about facilitating the learning process. Having someone feel comfortable enough to ask a question or say they didn\'t understand is a necessary condition for learning to happen.',
        ],
      },
      {
        id: 'results',
        title: 'The Impact',
        content: [
          '70+ students over 6 months. Average rating of 4.92 out of 5. In-person classes, 2 hours, twice a week.',
        ],
      },
      {
        id: 'transfer',
        title: 'What Teaching Taught Me',
        content: [
          'I learned to explain technical topics better. That has a direct impact on design work:',
          'When you need to explain a design decision to someone from a different background, the clarity you train through teaching helps. Documenting so someone else understands also improves the documentation. Understanding what confuses someone is understanding what confuses the end user — it\'s the same skill.',
          'Simplicity isn\'t degrading the concept. It\'s finding the most refined way to express it.',
        ],
      },
      {
        id: 'reflection',
        title: 'Would I Teach Again?',
        content: [
          'Yes. Without hesitation. With one condition: that it\'s integrated into working hours, not as an additional night-time burden.',
          'Pedagogy and design share a principle: if the other person doesn\'t understand it, it\'s an opportunity you can solve.',
        ],
        pullQuote: 'The little brother method isn\'t just a technique for preparing classes. It\'s a stance toward work.',
      },
    ],
  },
  {
    slug: 'ai-experiments',
    title: 'AI Experiments',
    subtitle: 'Three generations of AI-native methodology, from idea to deployed product',
    role: 'Designer + Builder',
    period: 'October 2025 – Present',
    type: 'AI Methodology',
    status: 'active',
    seoTitle: 'AI Experiments — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Three generations of AI-native methodology in 5 months. From isolated tools to documented and reproducible workflow.',
    sections: [
      {
        id: 'context',
        title: 'The Starting Point',
        content: [
          'In October 2025 I took Johan Villalba\'s AI for UXers course. That was the trigger. Johan, along with Cristian Morales Achiardi, greatly influenced how I started thinking about AI as something more than just a tool.',
          'From there I started taking my own projects from idea to deployed product. Not as isolated experiments, but as a process that evolved with each iteration. In just a few months, that process went through three completely different versions.',
          'What connects all the projects isn\'t the stack or the topic. It\'s the question guiding them: how do I take an idea from zero to a real product using AI in the best possible way?',
        ],
      },
      {
        id: 'evolution',
        title: 'The Evolution in 3 Generations',
        content: [
          'Generation 1 (November 2025): Linear workflow. ChatGPT for research, Stitch for prototype, Google AI Studio to make it functional, Antigravity and Netlify. Separate tools, no formal documentation.',
          'Generation 2 (December 2025 - January 2026): Deeper research. MCP integration: NotebookLM inside Antigravity. Consistent stack: React + Vite + TS + Supabase. Greater process documentation.',
          'Generation 3 (February - March 2026): Paradigm shift. NotebookLM + Perplexity for research, Claude Code from terminal generating PRD + Design System + Content System, visual references described by LLM, ASCII mockups before code, local iterative implementation and deploy.',
        ],
      },
      {
        id: 'discovery',
        title: 'The Discovery That Changed Everything',
        content: [
          'Local documentation and working from the terminal. I had a lot of fear of the terminal, but that\'s where I saw a huge shift in performance and results.',
          'Without visual interfaces to distract: total focus on structure. Complete control over documents. Fast iteration without jumping between platforms. Natural integration with the local repository.',
        ],
        pullQuote: 'I was afraid of the terminal. That\'s where I saw a huge shift in performance.',
      },
      {
        id: 'differentiator',
        title: 'The Real Differentiator',
        content: [
          'Taking an idea to deploy is today a capability more and more people have. In a short time it won\'t be novel.',
          'The differentiating factor lies in research and understanding of users, the product, and the business. What makes this methodology different isn\'t the stack or the tools. It\'s that every project starts with deep research, structured documentation, and understanding three dimensions simultaneously.',
          'AI accelerates execution. Human judgment decides what to delegate, what not to, and how to evaluate results.',
        ],
      },
      {
        id: 'reflection',
        title: 'What I Want to Demonstrate',
        content: [
          'Fast evolution and continuous learning. It\'s not how many projects I shipped. It\'s how my process changed in five months. From isolated tools to reproducible methodology. From fear of the terminal to native CLI work.',
          'Experimental methodology with structure, not chaos. Judgment to decide what to automate and what not to. Comprehensive understanding: users, product, and business.',
        ],
        pullQuote: 'The cutting edge isn\'t the latest tool. It\'s knowing why you\'re using it.',
      },
    ],
    subProjects: [
      {
        slug: 'feriaflow',
        title: 'FeriaFlow',
        generation: 'Generation 1',
        period: 'November 2025',
        description: 'Interface for market vendors: load products while selling, with automatic sales report generation per fair.',
        motivation: 'A real need from a personal venture. Selling at a fair means keeping manual records of what\'s sold, at what price, and how many units. A process with huge potential for improvement.',
        stack: ['React', 'Vite', 'TypeScript', 'Antigravity', 'Netlify'],
        workflow: [
          'ChatGPT — Initial research',
          'Stitch — Initial superprompt, first prototype',
          'Google AI Studio — From prototype to functional',
          'Antigravity — Database and backend',
          'Netlify — Deploy',
        ],
        insights: [
          'Linear workflow, tool after tool in sequence',
          'No formal documentation: no PRD, no defined Design System',
          'Initial research, enough to start and validate',
          'The product reached production and is in real use',
        ],
        status: 'active',
      },
      {
        slug: 'dodocalendar',
        title: 'DodoCalendar',
        generation: 'Generation 2',
        period: 'December 2025 – January 2026',
        description: 'App for planning product manufacturing dates and fair dates.',
        motivation: 'A need identified after FeriaFlow: coordinating when to manufacture to have enough stock at each fair.',
        stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'Netlify'],
        workflow: [
          'Deeper research',
          'NotebookLM MCP integrated inside Antigravity (key step)',
          'Stitch — Prototyping',
          'Antigravity / Google AI Studio — Functional development',
          'Supabase — Backend',
          'Netlify — Deploy',
        ],
        insights: [
          'Integrating NotebookLM as MCP was the evolutionary step of this generation',
          'More structured research than Gen 1',
          'The stack consolidates: React + Vite + TS',
        ],
        status: 'completed',
      },
      {
        slug: 'portfolio',
        title: 'This Portfolio',
        generation: 'Generation 3',
        period: 'February – March 2026',
        description: 'Professional portfolio built with the complete AI-native methodology, from research to deploy.',
        motivation: 'Apply the evolved methodology to a project that demonstrates the process itself.',
        stack: ['React 19', 'Vite', 'TypeScript', 'React Router', 'Netlify'],
        workflow: [
          'NotebookLM + Perplexity — Deep research, local documentation',
          'Claude Code from terminal — PRD + Design System + Content System + Plan',
          'Visual references + LLM description in markdown',
          'ASCII mockups — Structure before the visual',
          'Local implementation with React + Vite + TS',
          'Local iterations before deploy',
          'Deploy on Netlify',
        ],
        insights: [
          'Local documentation and working from terminal changed everything',
          'PRD + Design System + Content System from CLI: structure first',
          'ASCII mockups before opening the code editor',
          'The process is as important as the product',
        ],
        status: 'active',
      },
      {
        slug: 'finanzas',
        title: 'Personal Finance App',
        generation: 'Generation 3',
        period: 'March 2026',
        description: 'Personal expense and budget tracking using the same Gen 3 methodology.',
        motivation: 'A personal need to organize finances, and at the same time validate that the methodology is reproducible in different domains.',
        stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'Netlify'],
        workflow: [
          'NotebookLM + Perplexity — Research',
          'Claude Code — PRD + DS + CS + Plan',
          'Visual references + LLM description',
          'ASCII mockups',
          'Local implementation',
          'Deploy',
        ],
        insights: [
          'Same Gen 3 methodology in a different domain',
          'Validation that the workflow is reproducible',
          'Actively under construction',
        ],
        status: 'active',
      },
    ],
  },
];

export function getCaseStudies(lang: Language): CaseStudyData[] {
  return lang === 'en' ? CASE_STUDIES_EN : CASE_STUDIES;
}
