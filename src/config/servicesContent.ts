export interface ServiceBlock {
  title: string;
  content: string;
  image?: string;
  features?: string[];
  extra?: string;
  href?: string;
  hrefText?: string;
}

export interface Service {
  /** URL-friendly identifier used for the individual service page (`/services/{slug}`). */
  slug: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  /** Optional looping muted video behind the service-page hero overlay. The still `image` remains as poster. */
  heroVideo?: string;
  /** Longer copy shown on the individual service page. */
  content?: string;
  /** Bullet points shown on the individual service page. */
  features?: string[];
  /** Home page band copy (identical to the current homepage sections). */
  homeTitle: string;
  homeSubtitle: string;
  homeDescription: string;
  homeCta: string;
  homeImage: string;
  /** Extra content blocks on the service page. */
  blocks?: ServiceBlock[];
  /** `"cards"` shows blocks in a 3-column grid; omit for the default text+image bands. */
  blocksLayout?: 'bands' | 'cards';
  blocksTitle?: string;
  /** Show the contact form at the bottom of this service page. */
  showForm?: boolean;
  workshopNote?: string;
  /** Title/description for search engines (Vigo + Pontevedra). Falls back to `title`/`description`. */
  seoTitle?: string;
  seoDescription?: string;
  /** Mid-page CTA (used on instalaciones while there is no portfolio). */
  ctaBanner?: {
    eyebrow?: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const services: Service[] = [
  {
    slug: 'teletrabajo',
    title: 'Videoconferencia, streaming y teletrabajo',
    description:
      'Equipos para videoconferencia, streaming y teletrabajo en Vigo y Pontevedra. Pantallas interactivas, cámaras PTZ y proyectores.',
    seoTitle: 'Videoconferencia y streaming en Vigo y Pontevedra',
    seoDescription:
      'Alquiler y venta de equipos para videoconferencia, streaming y teletrabajo en Vigo y Pontevedra. Cámaras PTZ, monitores táctiles, pantallas y proyectores.',
    image: '/img/2020/11/chuttersnap-Q_KdjKxntH8-unsplash.jpg',
    homeTitle: 'Comprar y alquilar equipos audiovisuales para todo tipo de conferencias',
    homeSubtitle: 'Videoconferencia, streaming y teletrabajo en Vigo y Pontevedra',
    homeDescription: 'Equipo para streaming, videoconferencia y teletrabajo en Vigo y Pontevedra.',
    homeCta: 'VER MÁS',
    homeImage: '/img/2020/11/chuttersnap-Q_KdjKxntH8-unsplash.jpg',
    content:
      'Comprar y alquilar equipos audiovisuales para teletrabajo. Contamos con pantallas interactivas, Camaras PTZ profesionales y todo tipo de equipos para videoconferencia.',
    blocks: [
      {
        title: 'MONITORES TÁCTILES INTERACTIVOS',
        image: '/img/2020/12/Monitor-NEC-MultiSync-C861Q-SST-Shadow-Sense-2-324x324-1.jpg',
        content:
          'Los monitores táctiles interactivos son la solución perfecta para presentaciones, reuniones y conferencias. Con una pantalla táctil de alta resolución y una interfaz fácil de usar, estos monitores permiten una interacción intuitiva y dinámica con tus presentaciones.\n\nAdemás, su diseño elegante y moderno los convierte en una opción ideal para cualquier espacio de trabajo. Descubre nuestra amplia selección de monitores táctiles interactivos y lleva tu experiencia de presentación al siguiente nivel.',
      },
      {
        title: 'CÁMARAS PARA VIDEOCONFERENCIA Y SISTEMA DE PUNTO A PUNTO',
        image: '/img/2020/12/SVC100_noaver-324x324-1.png',
        content:
          'Nuestras cámaras para videoconferencia y sistemas de punto a punto te permiten conectarte con tus colegas y clientes en cualquier lugar del mundo de manera fácil y efectiva. Con una calidad de video HD y un audio nítido, nuestras cámaras garantizan una experiencia de videoconferencia de alta calidad.\n\nAdemás, nuestro sistema de punto a punto garantiza una conexión segura y confiable para que puedas tener reuniones en línea sin preocupaciones. Descubre nuestra amplia selección de cámaras para videoconferencia y sistemas de punto a punto y lleva tus reuniones virtuales a un nuevo nivel de productividad.',
      },
      {
        title: 'CÁMARAS PTZ PROFESIONALES Y DE SEGUIMIENTO AUTOMÁTICO',
        image: '/img/2020/12/PTZ310-324x324-1.png',
        content:
          '¿Buscas cámaras de alta calidad para tus producciones en vivo o grabaciones? Nuestras cámaras PTZ profesionales y de seguimiento automático son la elección perfecta.\n\nCon la capacidad de girar, inclinarse y acercarse, nuestras cámaras PTZ permiten una gran flexibilidad y control remoto, mientras que nuestras cámaras de seguimiento automático mantienen al sujeto en foco en todo momento.\n\nAdemás, con una calidad de imagen de alta definición y funciones avanzadas, nuestras cámaras son ideales para cualquier tipo de producción, desde eventos en vivo hasta grabaciones de videos corporativos. Descubre nuestra amplia selección de cámaras PTZ y de seguimiento automático y lleva tus producciones audiovisuales al siguiente nivel.',
      },
      {
        title: 'PANTALLAS DE PROYECCIÓN',
        image: '/img/2020/12/PLEGABLE-WEB-324x324-1.gif',
        content:
          '¿Necesitas una pantalla de proyección para tus presentaciones o eventos especiales? En nuestra tienda, encontrarás una amplia selección de pantallas de proyección de alta calidad y a precios competitivos.\n\nNuestras pantallas están disponibles en diferentes tamaños y formatos, desde las tradicionales pantallas de formato 4:3 hasta las modernas pantallas panorámicas de formato 16:9. Además, nuestras pantallas son fáciles de transportar y configurar, lo que las hace ideales para presentaciones en diferentes ubicaciones.\n\nYa sea que necesites una pantalla para tu sala de conferencias, tu aula o tu evento especial, nuestras pantallas de proyección garantizan una calidad de imagen impresionante y una experiencia visual inolvidable. Explora nuestra selección y encuentra la pantalla de proyección perfecta para ti.',
      },
      {
        title: 'PROYECTORES',
        image: '/img/2020/12/Proyector-NEC-PA653U-324x324-1.jpg',
        content:
          'En nuestra tienda, encontrarás una amplia selección de proyectores de alta calidad para tus necesidades de presentación y entretenimiento. Desde proyectores portátiles hasta modelos de instalación permanente, nuestros proyectores ofrecen una calidad de imagen excepcional y una larga vida útil.\n\nNuestros proyectores utilizan tecnología de vanguardia para producir imágenes nítidas y brillantes, incluso en ambientes con poca luz. Además, nuestra selección incluye proyectores con funciones avanzadas, como corrección trapezoidal, zoom digital y conectividad inalámbrica.\n\nYa sea que necesites un proyector para tus presentaciones de trabajo o para una noche de cine en casa, nuestros proyectores son la elección perfecta. Descubre nuestra selección y encuentra el proyector ideal para ti.',
      },
    ],
  },
  {
    slug: 'alquiler',
    title: 'Alquileres de sonido e imagen',
    description: 'Alquiler de sonido e iluminación en Vigo y Pontevedra. Backline para conferencias, fiestas y conciertos.',
    seoTitle: 'Alquiler de sonido e iluminación en Vigo y Pontevedra',
    seoDescription:
      'Alquila altavoces, mesas de mezcla, microfonía, controladoras DJ, pantallas e iluminación en Vigo y Pontevedra. Presupuesto en 24h.',
    image: '/img/2018/10/mitchell-leach-593902-unsplash.jpg',
    heroVideo: '/videos/12548280-hd_1920_1080_30fps.mp4',
    homeTitle: 'ALQUILERES DE SONIDO E IMAGEN',
    homeSubtitle: 'Alquilar sonido e iluminación en Vigo y Pontevedra',
    homeDescription: 'Expertos en backline para todo tipo de eventos, ya sean conferencias o conciertos grandes.',
    homeCta: 'ALQUILAR EQUIPOS',
    homeImage: '/img/2018/10/mitchell-leach-593902-unsplash.jpg',
    content: 'Alquilar equipos de sonido profesional, para dj o iluminación.',
    blocks: [
      {
        title: 'ALQUILAR ALTAVOCES',
        image: '/img/2018/11/ALTAVOCES.png',
        content:
          '¿Necesitas sonido de calidad para tu evento especial? En nuestra tienda, ofrecemos alquiler de altavoces de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas hasta conferencias y conciertos.\n\nNuestros altavoces están disponibles en diferentes tamaños y potencias, y son compatibles con una amplia gama de equipos de sonido y música. Además, nuestros altavoces son fáciles de transportar y configurar, lo que los hace ideales para eventos en diferentes ubicaciones.\n\nYa sea que necesites altavoces para una presentación en interiores o un evento al aire libre, nuestros altavoces garantizan un sonido claro y de alta calidad para todos tus invitados. Explora nuestra selección de altavoces para alquilar y haz que tu evento sea un éxito total.\n\nContamos con una amplia gama de altavoces pasivos y activos, con su cableado necesario y trípodes de calidad. Nuestro equipo te recomendará la mejor opción para que le saques el mejor partido.',
      },
      {
        title: 'ALQUILAR CONTROLADORAS DJ',
        image: '/img/2018/11/CONTROLADORASDJ.png',
        content:
          '¿Quieres que tus fiestas sean un éxito total? En nuestra tienda, ofrecemos alquiler de controladoras DJ de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestras controladoras DJ están diseñadas para ser fáciles de usar y ofrecen una amplia gama de funciones, desde mezcla de música hasta efectos de iluminación. Además, nuestras controladoras DJ son compatibles con una amplia gama de software y dispositivos, lo que las hace ideales para DJs profesionales y aficionados por igual.\n\nYa sea que necesites una controladora DJ para una fiesta en interiores o al aire libre, nuestras controladoras DJ garantizan una experiencia de música y entretenimiento única. Explora nuestra selección de controladoras DJ para alquilar y haz que tu evento sea inolvidable.\n\nLo ultimo en controladores midi para DJ, controladoras de marcas como Pioneer DJ y Denon Dj para profesionales o principiantes para dar color a tus eventos.',
      },
      {
        title: 'ALQUILAR MESA PARA DJ',
        image: '/img/2018/11/MESASDJ.png',
        content:
          '¿Necesitas una mesa de DJ para Tus reproductores de CD o Giradiscos? Nosotros tenemos equipos de calidad para alquiler por días. Mesas Denon Dj y Pioneer DJ.\nEn nuestra tienda, ofrecemos alquiler de mesas para DJ de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestras mesas para DJ están diseñadas para ofrecer un rendimiento excepcional y una fácil integración con otros equipos de DJ, como controladoras, reproductores de CD y tornamesas. Además, nuestras mesas para DJ tienen una amplia gama de funciones, como ecualización de sonido, efectos de sonido y control de nivel de sonido.\n\nYa sea que necesites una mesa para DJ para una fiesta en interiores o al aire libre, nuestras mesas para DJ garantizan una experiencia de música y entretenimiento única. Explora nuestra selección de mesas para DJ para alquilar y haz que tu evento sea un éxito total.',
      },
      {
        title: 'ALQUILAR MESAS DE MEZCLA',
        image: '/img/2018/11/MESAS.png',
        content:
          '¿Necesitas una mesa de mezcla para tu evento especial? En nuestra tienda, ofrecemos alquiler de mesas de mezcla de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestras mesas de mezcla están diseñadas para ofrecer un rendimiento excepcional y una fácil integración con otros equipos de sonido, como altavoces, reproductores de CD y micrófonos. Además, nuestras mesas de mezcla tienen una amplia gama de funciones, como ecualización de sonido, efectos de sonido y control de nivel de sonido.\n\nYa sea que necesites una mesa de mezcla para una presentación en interiores o un evento al aire libre, nuestras mesas de mezcla garantizan una experiencia de sonido y entretenimiento única. Explora nuestra selección de mesas de mezcla para alquilar y haz que tu evento sea un éxito total.\n\nMesas de mezcla disponibles para alquiler por día de las marcas Yamaha y Soundcraft desde 8 canales para eventos pequeños a 32 canales para eventos de gran formato.',
      },
      {
        title: 'ALQUILAR MICRÓFONOS',
        image: '/img/2018/11/MICROFONOS.png',
        content:
          'Micrófonos analógicos e inalambricos para alquiler por día. Marcas Shure y AKG. Disponemos de sets completos para todo tipo de eventos, Micrófonos de Mano, diadema y de solapa.\n\nEn nuestra tienda, ofrecemos alquiler de micrófonos de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestros micrófonos están diseñados para ofrecer una calidad de sonido excepcional y una fácil integración con otros equipos de sonido, como mesas de mezcla y altavoces. Además, nuestros micrófonos tienen una amplia gama de características, desde micrófonos inalámbricos hasta micrófonos de diadema y de solapa.\n\nYa sea que necesites un micrófono para una presentación, un evento musical o un discurso, nuestros micrófonos garantizan una calidad de sonido excepcional y una experiencia de sonido única. Explora nuestra selección de micrófonos para alquilar y haz que tu evento sea un éxito total.',
      },
      {
        title: 'ALQUILAR PANTALLAS Y PROYECTORES',
        image: '/img/2018/11/PROYECTORES.jpg',
        content:
          '¿Necesitas una pantalla o un proyector para tu evento especial? En nuestra tienda, ofrecemos alquiler de pantallas y proyectores de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestras pantallas y proyectores están diseñados para ofrecer una calidad de imagen excepcional y una fácil integración con otros equipos de video, como computadoras portátiles, reproductores de DVD y cámaras de video. Además, nuestras pantallas y proyectores tienen una amplia gama de características, desde pantallas de gran tamaño hasta proyectores portátiles y con tecnología inalámbrica.\n\nYa sea que necesites una pantalla o un proyector para una presentación, una película al aire libre o un evento deportivo, nuestras pantallas y proyectores garantizan una experiencia visual y de entretenimiento única. Explora nuestra selección de pantallas y proyectores para alquilar y haz que tu evento sea un éxito total.\n\nPantallas portátiles y de instalación para proyección frontal y retro-proyección. Proyectores de alta calidad de diferentes modelos dependiendo del formato del evento y la iluminación.',
      },
      {
        title: 'ALQUILAR EQUIPOS DE ILUMINACIÓN',
        image: '/img/2018/11/iluminacion.png',
        content:
          'En nuestra tienda, ofrecemos alquiler de equipos de iluminación de alta calidad y a precios competitivos para todo tipo de eventos, desde bodas y fiestas privadas hasta eventos corporativos y festivales.\n\nNuestros equipos de iluminación están diseñados para ofrecer una iluminación espectacular y una fácil integración con otros equipos de sonido y video, como mesas de mezcla y pantallas de proyección. Además, nuestros equipos de iluminación tienen una amplia gama de características, desde luces LED hasta luces móviles y efectos de iluminación de alta tecnología.\n\nYa sea que necesites equipos de iluminación para crear un ambiente elegante, una fiesta animada o un espectáculo impresionante, nuestros equipos de iluminación garantizan una experiencia visual única. Explora nuestra selección de equipos de iluminación para alquilar y haz que tu evento sea un éxito total.\n\nCabezas móviles, efectos led, estrobos, lasers, bolas de espejo, maquinas de humo y muchísimo mas. Sorprende a tus invitados con el mejor color e Iluminación.',
      },
    ],
  },
  {
    slug: 'control-de-ruidos',
    title: 'Control de ruidos',
    description:
      'Control de ruidos en Vigo, Pontevedra y Galicia. Limitadores, registradores y control ambiental remoto. mas de 50 empresas confían en Carper Sonido.',
    seoTitle: 'Control de ruidos en Vigo y Pontevedra',
    seoDescription:
      'Empresa de control de ruidos en Vigo y Pontevedra. Limitadores LM7, registradores Bcity y sistema Boanerges. Instalación y mantenimiento en toda Galicia.',
    image: '/img/2018/11/moon1grande.jpg',
    homeTitle: 'CONTROL DE RUIDOS',
    homeSubtitle: 'Tu empresa de control de ruidos profesional en Vigo y Pontevedra',
    homeDescription:
      'Tu empresa de control de ruidos de calidad para toda Galicia. mas de 50 empresas confían en Carper Sonido.',
    homeCta: 'MÁS INFO',
    homeImage: '/img/2018/11/moon1grande.jpg',
    content: 'Control de ruidos en Vigo. Te traemos lo ultimo en limitadores y registradores de audio profesionales.',
    blocksLayout: 'cards',
    blocksTitle: 'Limitadores de audio',
    blocks: [
      {
        title: 'Limitadores LM7',
        image: '/img/2018/11/lm7.png',
        extra: 'Control frecuencial y calidad de sonido',
        content:
          'Los limitadores lm7 le proporcionan el control necesario sobre la instalación aprovechando al máximo el aislamiento del local. Es seguro, fácil de instalar y standard, además de ofrecer una sobresaliente calidad de sonido.',
        features: [
          'Control frecuencial',
          'Tecnología SC que minimiza la perceción del funcionamiento por parte sus clientes.',
          'Varios sistemas de control configurables para adaptarse a cualquier situación',
          'Hasta 30 años de memoria.',
          'Interfaz lmUI que facilita la configuración y la extracción de datos SIN software adicional. Sólo necesita un navegador web.',
          'Conexión con Boanerges',
          'Múltiples sistemas de seguridad y supervisión.',
        ],
        href: '/contacto',
        hrefText: 'Más información',
      },
      {
        title: 'Registradores Bcity',
        image: '/img/2018/11/bcity.png',
        extra: 'Registro de sonido seguro',
        content:
          'Nuestros registradores le dan la seguridad necesaria frente a las instituciones, además de un registro seguro y con un aspecto elegante.\n\nPodrá cumplir los requisitos de su ayuntamiento sin romper la estética de su local.\n\nBCity: Equipos con pantalla informativa, alta resitencia',
        href: '/contacto',
        hrefText: 'Más información',
      },
      {
        title: 'Control ambiental remoto',
        image: '/img/2018/11/boanerges-1.png',
        extra: 'Boanerges',
        content:
          'Boanerges, nuestro sistema de control ambiental remoto, facilita la inspección y control remotos de equipos, ahorrando costes y molestias, tanto para usted, como para los usuarios de los locales.\n\nCon Boanerges tendrá un sistema con el que inspeccionar en tiempo real sus equipos, desde cualquier lugar y con cualquier pc, tablet o móvil moderno. Nuestros servidores almacenarán de forma exhaustiva todos los datos y mantendrá sus informes accesibles.\nAdemás de ello, cualquier registrador de su ayuntamiento podrá enviar sus datos de una forma segura, simple y abierta.\n\nConsulte con nosotros para ver todas las ventajas que Boanerges puede ofrecer y cumpla con las normativas medioambientales europeas ¡reduciendo costes!.',
        href: '/contacto',
        hrefText: 'Más información',
      },
    ],
  },
  {
    slug: 'instalaciones',
    title: 'Instalaciones y sonorizaciones',
    description:
      'Instalaciones de sonido, iluminación y audiovisuales para locales en Vigo y Pontevedra. Nos amoldamos a tu presupuesto y trabajamos con primeras marcas.',
    seoTitle: 'Instalaciones de sonido en Vigo y Pontevedra',
    seoDescription:
      'Instalación de sonido profesional, iluminación y audiovisuales en Vigo y Pontevedra. Proyectos a medida para locales, hoteles y comercios.',
    image: '/img/2018/11/liber1grande.jpg',
    homeTitle: 'INSTALACIONES Y SONORIZACIONES',
    homeSubtitle: 'Instalaciones de sonido para locales comerciales en Vigo y Pontevedra',
    homeDescription:
      'Nos amoldamos a tu presupuesto y siempre te ofrecemos primeras marcas para obtener el mejor resultado.',
    homeCta: 'MÁS INFO',
    homeImage: '/img/2018/11/liber1grande.jpg',
    content:
      'Instalación de sonido profesional, Iluminación y audiovisuales en Vigo y Pontevedra. Nos amoldamos a todo tipo de presupuesto. Tu proyecto en las mejores manos.',
    ctaBanner: {
      eyebrow: 'Galería en preparación',
      title: '¿Quieres ver alguna de nuestras últimas instalaciones?',
      description:
        'Estamos recopilando fotos e información de trabajos reales en Vigo y Pontevedra. Mientras tanto, escríbenos y te enviamos ejemplos de instalaciones de sonido, iluminación o audiovisuales.',
      ctaText: 'Pedir fotos o información',
      ctaHref: '/contacto',
    },
  },
  {
    slug: 'servicio-tecnico',
    title: 'Servicio técnico',
    description:
      'Servicio técnico multi-marca de sonido, iluminación e imagen en Vigo y Pontevedra. Reparación en taller con garantía de 3 meses.',
    seoTitle: 'Servicio técnico de sonido en Vigo y Pontevedra',
    seoDescription:
      'Reparación multi-marca de mesas, altavoces, microfonía e iluminación en Vigo. Taller en C/ Pi y Margal 43. Servicio técnico para Pontevedra y Galicia.',
    image: '/img/2018/12/fancycrave-530800-unsplash.jpg',
    homeTitle: 'SERVICIO TÉCNICO',
    homeSubtitle: 'Servicio tecnico multi-marca para equipos de sonido,iluminación e imagen en Vigo y Pontevedra',
    homeDescription:
      'Reparación en todo tipo de equipos de Sonido e Iluminación. Ven a visitarnos, no hay equipo que se nos resista.',
    homeCta: 'MÁS INFO',
    homeImage: '/img/2018/12/fancycrave-530800-unsplash.jpg',
    showForm: true,
    workshopNote:
      'Nuestro taller está en: CARPER SONIDO PROFESIONAL. C/Pi y Margal 43 bajo, 36202, Vigo, Pontevedra. Tel: +34 986 17 76 21. Mail: sat@carpersonido.com',
    content:
      'Servicio técnico de sonido e iluminación en Vigo. Son mas de 30 años en el sector del sonido profesional ofreciéndote el mejor servicio de reparación de equipos de sonido e iluminación y llevando el mantenimiento de prestigiosas discotecas y salas de toda Galicia y Portugal. Son muchos los clientes que han confiado en nosotros a los largo del tiempo y siguen confiándonos sus equipos. En Carper Sonido Profesional reparamos tus equipos garantizándote su funcionamiento hasta 3 meses tras su reparación.',
    blocks: [
      {
        title: 'Tu servicio técnico multi marca',
        image: '/img/2018/12/fancycrave-530800-unsplash.jpg',
        content:
          'Contamos con un taller profesional equipado con lo ultimo para ofrecerte el mejor servicio en el menor tiempo posible, y lo mas importante, poder garantizar el buen perfecto funcionamiento de tus equipos.',
      },
      {
        title: 'Reparación de equipos de sonido profesional',
        image: '/img/2018/12/freestocks-org-73101-unsplash.jpg',
        content:
          'Reparamos todo tipo de equipos de sonido profesional, ya sean mesas de mezclas, sistemas de micrófono inalámbrico, altavoces autoamplificados o pasivos, etapas de potencia, ecualizadores y mucho mas.',
      },
    ],
  },
];

/** Builds the URL for a service's individual page. */
export function getServiceHref(service: Pick<Service, 'slug'>): string {
  return `/services/${service.slug}`;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export interface ServicesContentConfig {
  grid: { eyebrow?: string; title: string; description?: string };
  icon: { eyebrow?: string; title: string; description?: string };
  split: {
    eyebrow?: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  showcase: {
    eyebrow?: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaHref: string;
  };
  list: { eyebrow?: string; title: string; description?: string };
  /** Copy shared by every individual service page (`/services/[slug]`). */
  single: { backText: string; ctaText: string; ctaHref: string };
}

/**
 * Editable copy for every component in `src/components/services/`.
 * The `services` list above is shared across all variants.
 */
export const servicesContent: ServicesContentConfig = {
  grid: {
    eyebrow: 'Nuestros servicios',
    title: 'Sonido, imagen e iluminación profesional en Vigo',
  },
  icon: {
    eyebrow: 'Nuestros servicios',
    title: 'Todo lo que necesitas para tu evento o local',
  },
  split: {
    eyebrow: 'Nuestros servicios',
    title: 'Alquiler, instalación, control de ruidos y servicio técnico en Vigo y Pontevedra',
    description:
      'Más de 30 años en el sector del sonido profesional en Vigo y Pontevedra. Pide presupuesto y te recomendamos la mejor opción.',
    ctaText: 'Solicitar presupuesto',
    ctaHref: '/contacto',
  },
  showcase: {
    eyebrow: 'Nuestros servicios',
    title: 'Servicios de sonido profesional en Vigo y Pontevedra',
    ctaText: 'Más info',
    ctaHref: '/contacto',
  },
  list: {
    eyebrow: 'Nuestros servicios',
    title: 'Sonido profesional en Vigo y Pontevedra',
  },
  single: {
    backText: 'Todos los servicios',
    ctaText: 'Solicitar presupuesto',
    ctaHref: '/contacto',
  },
};
