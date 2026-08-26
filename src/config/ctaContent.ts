export interface CtaContentConfig {
  centered: {
    eyebrow?: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    /** Any valid CSS length (e.g. "auto", "320px", "50vh"). */
    height: string;
    /** Full-bleed photo behind the overlay. */
    image: string;
  };
  split: {
    eyebrow?: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaHref: string;
    /** Any valid CSS length (e.g. "auto", "320px", "50vh"). */
    height: string;
    image: string;
  };
  boxed: {
    eyebrow?: string;
    title: string;
    description?: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    /** Any valid CSS length (e.g. "auto", "320px", "50vh"). */
    height: string;
    image: string;
  };
}

/** Editable copy for every component in `src/components/cta/`. */
export const ctaContent: CtaContentConfig = {
  centered: {
    eyebrow: 'Presupuesto',
    title: 'Solicitar presupuesto',
    description: 'Cuéntanos tu evento, local o reparación en Vigo o Pontevedra y te proponemos la mejor opción.',
    ctaText: 'Contactar',
    ctaHref: '/contacto',
    secondaryCtaText: 'Ver servicios',
    secondaryCtaHref: '/services',
    height: 'auto',
    image: '/img/2018/11/IMG_5795.jpg',
  },
  split: {
    eyebrow: '¿Tienes un proyecto?',
    title: 'Pide presupuesto sin compromiso',
    description: 'Te respondemos lo antes posible.',
    ctaText: 'Contactar',
    ctaHref: '/contacto',
    height: 'auto',
    image: '/img/2018/11/publicgrande2.jpg',
  },
  boxed: {
    eyebrow: 'Carper Sonido',
    title: 'Solicitar presupuesto',
    description: 'Alquiler, instalaciones, control de ruidos y servicio técnico en Vigo y Pontevedra.',
    ctaText: 'Solicitar presupuesto',
    ctaHref: '/contacto',
    secondaryCtaText: 'Ver servicios',
    secondaryCtaHref: '/services',
    height: 'auto',
    image: '/img/2018/11/moon1grande.jpg',
  },
};
