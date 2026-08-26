export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCenteredContent {
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  height: string;
}

export interface HeroSplitContent {
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  height: string;
}

export interface HeroBackgroundContent {
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  height: string;
}

export interface HeroMinimalContent {
  tag: string;
  ctaText: string;
  ctaHref: string;
  highlights: string[];
  height: string;
}

export interface HeroFeaturesContent {
  ctaText: string;
  ctaHref: string;
  stats: HeroStat[];
  height: string;
}

export interface HeroContentConfig {
  centered: HeroCenteredContent;
  split: HeroSplitContent;
  background: HeroBackgroundContent;
  minimal: HeroMinimalContent;
  features: HeroFeaturesContent;
}

/**
 * Editable copy and layout defaults for every component in `src/components/hero/`.
 * Update the strings below to customize CTAs, labels, highlights and stats
 * without touching any component markup or logic. `height` accepts any valid
 * CSS length (e.g. "auto", "480px", "70vh").
 */
export const heroContent: HeroContentConfig = {
  centered: {
    primaryCtaText: 'Solicitar presupuesto',
    primaryCtaHref: '/contacto',
    secondaryCtaHref: '/services',
    height: 'auto',
  },
  split: {
    primaryCtaText: 'Solicitar presupuesto',
    primaryCtaHref: '/contacto',
    secondaryCtaHref: '/services',
    height: 'auto',
  },
  background: {
    primaryCtaText: 'Ver más',
    primaryCtaHref: '/services/teletrabajo',
    secondaryCtaHref: '/contacto',
    height: '100vh',
  },
  minimal: {
    tag: 'Vigo',
    ctaText: 'Contacto',
    ctaHref: '/contacto',
    highlights: ['Alquiler', 'Instalaciones', 'Servicio técnico'],
    height: 'auto',
  },
  features: {
    ctaText: 'Solicitar presupuesto',
    ctaHref: '/contacto',
    stats: [
      { value: '30+', label: 'Años en el sector' },
      { value: '50+', label: 'Empresas confían en nosotros' },
      { value: 'Galicia', label: 'Y Portugal' },
    ],
    height: 'auto',
  },
};
