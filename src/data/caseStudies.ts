import type { CaseStudyData } from '../types';

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'jbknowledge',
    title: 'JBKnowledge',
    subtitle: 'Crecimiento profesional en una tech company que desarrolla soluciones para empresas de seguros',
    role: 'UX/UI Designer → UX/UI Lead',
    period: 'Agosto 2021 – Presente',
    type: 'Enterprise',
    status: 'active',
    seoTitle: 'JBKnowledge — Case Study | Gonzalo Daniel Pérez',
    seoDescription: 'Diseño de sistemas, liderazgo de equipo e integración de IA en una tech company con presencia global.',
    sections: [
      {
        id: 'context',
        title: 'El Contexto',
        content: [
          'JBKnowledge es una tech company con sede en Bryan, Texas, con equipos en Argentina, Sudáfrica, Portugal y Escocia. Desarrolla soluciones de software para empresas de seguros y gestión de riesgos.',
          'Ingresé en agosto de 2021 como UX/UI Designer. Con el tiempo, el trabajo fue creciendo en alcance y responsabilidad hasta llegar al rol de liderazgo desde 2025.',
          'A lo largo de ese camino hubo varios proyectos. Acá me enfoco en dos que marcaron mi desarrollo: el trabajo con CCMSI y luego con GCM.',
        ],
      },
    ],
    subProjects: [
      {
        slug: 'ccmsi',
        title: 'CCMSI — Design System',
        period: 'Agosto 2021 – 2023',
        description: 'Expansión de un sistema de diseño existente para CCMSI, empresa de seguros cliente de JBKnowledge.',
        status: 'completed',
        sections: [
          {
            id: 'context',
            title: 'El Proyecto',
            content: [
              'CCMSI es una de las empresas de seguros para las que JBKnowledge desarrolla soluciones. Al incorporarme al proyecto, existía un sistema de diseño incipiente con algunos componentes base, y el desafío era llevarlo a un nivel que pudiera sostener el crecimiento del producto.',
              'El trabajo no partió de cero. Tomé lo que había, entendí la lógica del equipo, y fui ampliando y documentando el sistema en Adobe XD.',
            ],
          },
          {
            id: 'communication',
            title: 'Mejorar la Comunicación entre Áreas',
            content: [
              'Uno de los primeros aprendizajes fue sobre la dinámica de trabajo: no todos los developers participaban de las reuniones de diseño, lo que generaba que ciertos detalles requirieran conversaciones adicionales para resolverse.',
              'Propuse incluir representantes de cada área en las instancias de revisión: BA, QA, desarrolladores front y back. Esto permitió alinear expectativas de manera más directa y hacer más fluido el proceso para todos.',
            ],
          },
          {
            id: 'design-system',
            title: 'El Design System en Adobe XD',
            content: [
              'Amplié el sistema de diseño que existía en el proyecto, incorporando componentes con variantes, patrones de interacción, reglas de uso y navegación pensada para que cualquier miembro del equipo pudiera apoyarse en él, tanto en el presente como si alguien nuevo se sumaba más adelante.',
              'El objetivo no era que el equipo consulte menos, sino que tuvieran una herramienta concreta donde apoyarse para tomar decisiones con más contexto. Los devs, BA y futuros diseñadores.',
              'El equipo adoptó el sistema con buena disposición. Hubo una curva de aprendizaje normal, pero la recepción fue positiva desde el inicio.',
            ],
            pullQuote: 'Diseñé pensando en los que iban a seguir después de mí.',
          },
          {
            id: 'results',
            title: 'Resultados',
            content: [
              'Consultas entre devs y BA: de 2 horas/semana por persona a 1 hora/semana. Ahorro total del equipo: 7 horas semanales. Consistencia visual del producto: sistema unificado. Bugs relacionados a inconsistencias visuales: reducción significativa.',
            ],
          },
        ],
      },
      {
        slug: 'gcm',
        title: 'GCM — Liderazgo e IA',
        period: '2024 – Presente',
        description: 'Nuevo proyecto, nuevo cliente, nuevo rol. En GCM asumí el liderazgo del equipo de diseño y más tarde integré IA al flujo de trabajo.',
        status: 'active',
        sections: [
          {
            id: 'context',
            title: 'Un Nuevo Proyecto, Un Nuevo Desafío',
            content: [
              'GCM es otro cliente de JBKnowledge. Ingresé al proyecto en 2024, en un momento en que el producto estaba en construcción activa: había pantallas por diseñar, un sistema de diseño por armar, y una identidad visual de producto que definir.',
              'A principios de 2025 asumí el liderazgo del equipo de diseño. La particularidad fue que el colega que incorporamos era un diseñador senior, pero nuevo en el proyecto. Eso hizo que el liderazgo se basara en el conocimiento del contexto más que en la jerarquía.',
            ],
          },
          {
            id: 'leadership',
            title: 'El Rol de Liderazgo',
            content: [
              'Liderar en este contexto implicó coordinar el trabajo de diseño, mantener la coherencia del sistema visual, y ser referente para decisiones que necesitaban contexto del proyecto.',
              'Una de las iniciativas que traje fue la de design reviews: revisiones del trabajo de los desarrolladores antes de pasar a QA, para garantizar la fidelidad al diseño y detectar ajustes temprano. En ese proceso experimenté con Microsoft Loop para estructurar las revisiones, pero la herramienta tenía limitaciones técnicas al compartir con varios usuarios. Lo descartamos y encontramos un flujo más simple.',
            ],
            pullQuote: 'Suelo hacer muchas pruebas que no siempre terminan en éxito, pero me gusta explorar nuevas opciones.',
          },
          {
            id: 'notebooklm',
            title: 'NotebookLM: Base de Conocimiento del Proyecto',
            content: [
              'Hacia fines de 2025, junto a mi colega Gonzalo Micheleti, empezamos a explorar cómo la IA podía mejorar el flujo de trabajo del equipo. El primer experimento fue construir una base de conocimiento del proyecto usando NotebookLM.',
              'Cargamos documentación relevante del proyecto y entrenamos el sistema iterativamente: cuando la IA daba respuestas imprecisas, identificábamos el gap en la documentación y lo corregíamos. El resultado fue un asistente que cualquier miembro del equipo podía consultar para entender el contexto del proyecto.',
              'El impacto más claro fue en el onboarding: pasar de revisar grabaciones de reuniones durante horas a hacer consultas activas al sistema redujo significativamente el tiempo de adaptación de personas nuevas.',
              'Un mes después del lanzamiento, el cliente decidió suspender el uso de herramientas de IA por una política interna. El aprendizaje quedó, el sistema se archivó.',
            ],
          },
          {
            id: 'ia-validation',
            title: 'IA para Agilizar la Validación',
            content: [
              'En paralelo al NotebookLM, incorporé herramientas de IA generativa para acelerar los ciclos de validación. Diseñar y validar un concepto podía tomar varios días; con IA, pasó a ser una iteración de media hora seguida de una sesión de validación directa con el equipo.',
              'Usé Figma Make para generar wireframes desde prompts, Claude para maquetación rápida de conceptos, y Stitch para mockups de flujos más complejos.',
              'El ciclo completo de diseño pasó de alrededor de 7 días a 1 día de trabajo.',
            ],
          },
          {
            id: 'documentation',
            title: 'Documentar Todo lo Vivido',
            content: [
              'Uno de los aprendizajes más valiosos de esta etapa fue el de documentar de forma continua. No solo el Design System, sino las decisiones de reuniones, los cambios en el diseño, los motivos de cada ajuste, los datos relevantes y hasta las tareas del día a día.',
              'Esa documentación se convierte en memoria del proyecto: permite entender por qué cada cosa es como es, mantiene un ojo crítico sobre el diseño, y hace posible que cualquier persona que se sume pueda ponerse al día sin depender de que alguien le explique todo.',
            ],
          },
          {
            id: 'results',
            title: 'Resultados',
            content: [
              'Tiempo de validación de concepto: de varios días a media hora de sesión con el equipo (reducción de 93.75%). Ciclo de diseño completo: de 7 días a 1 día (87.5% de reducción). Onboarding con NotebookLM: de horas de grabaciones a consulta activa. Design reviews pre-QA: implementadas como práctica regular del equipo.',
            ],
          },
          {
            id: 'reflection',
            title: 'Si Volviera a Empezar',
            content: [
              'Arrancaría con NotebookLM desde el primer día del proyecto, no cuando el proyecto ya está maduro. El conocimiento temprano acelera todo lo demás.',
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
          'Cuando tomé el rol en Coderhouse ya llevaba años trabajando en UX/UI en JBKnowledge. No lo hice para validar el perfil. Lo hice porque me interesaba, y lo que encontré fue el momento de mayor plenitud profesional de mi vida.',
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
