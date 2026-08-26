export interface HeaderContentConfig {
  cta: { ctaText: string; ctaHref: string };
  minimal: { linkText: string; linkHref: string };
  topBar: { message: string };
}

/** Editable copy for every component in `src/components/header/`. */
export const headerContent: HeaderContentConfig = {
  cta: {
    ctaText: 'Contacto',
    ctaHref: '/contacto',
  },
  minimal: {
    linkText: 'Contacto',
    linkHref: '/contacto',
  },
  topBar: {
    message: 'Sonido profesional en Vigo · +34 986 17 76 21',
  },
};
