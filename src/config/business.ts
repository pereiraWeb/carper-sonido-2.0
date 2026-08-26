export interface BusinessAddress {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface BusinessSocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  /**
   * Logo image URL shown in the header and footer, for use on light
   * backgrounds. Defaults to a bundled SVG placeholder until you add your
   * own; set to an empty string (or leave unset) to fall back to the text
   * brand name instead (see `BrandMark.astro`).
   *
   * Prefer SVG or WebP, and keep the file small (a few KB, not hundreds) —
   * it loads on every single page. If you only have a PNG/JPG, run it
   * through an optimizer (e.g. https://squoosh.app) first.
   */
  logo?: string;
  /**
   * Optional logo variant for dark backgrounds (e.g. a header/footer with a
   * dark `backgroundColor`, or a `HeaderCta`/`FooterCta` that's styled dark
   * by default) — typically the same mark in white/light colors. Every
   * header/footer variant accepts its own `logo` prop, so pass
   * `logo={business.logoDark}` explicitly wherever you set a dark
   * background. Falls back to `logo` itself when unset.
   */
  logoDark?: string;
  /**
   * Intrinsic width/height of `logo` (and `logoDark`), in pixels — set as
   * the `<img>`'s `width`/`height` attributes by `BrandMark.astro` so the
   * browser can reserve the right amount of space before the image loads
   * (avoids layout shift). Each header/footer still controls the *displayed*
   * height with its own CSS; these just need to match the logo file's real
   * aspect ratio.
   */
  logoWidth?: number;
  logoHeight?: number;
  address: BusinessAddress;
  hours: BusinessHours[];
  social: BusinessSocialLinks;
  siteUrl: string;
  /**
   * BCP 47 language tag for the whole site, e.g. `"es-ES"`, `"es"`, `"en-US"`.
   * Used as-is for `<html lang="...">` (see `BusinessLayout.astro`) and
   * derived into the underscore form (e.g. `es_ES`) for `og:locale` (see
   * `src/lib/seo.ts`) — the single source of truth for both, so they can
   * never drift out of sync. Change this to fully re-language the site.
   */
  language: string;
}

export const business: BusinessInfo = {
  name: 'Carper Sonido Profesional',
  legalName: 'Jose Carlos Pereira Silva',
  tagline: 'Sonido profesional en Vigo y Pontevedra.',
  description:
    'Sonido profesional en Vigo y Pontevedra: alquiler de sonido e iluminación, instalaciones, control de ruidos, servicio técnico multi-marca y equipos para videoconferencia. Más de 30 años en el sector.',
  email: 'info@carpersonido.com',
  phone: '+34 986 17 76 21',
  logo: '/img/carper-sonido-logo.png',
  logoDark: '/img/carper-sonido-logo.png',
  logoWidth: 250,
  logoHeight: 134,
  language: 'es-ES',
  address: {
    street: 'C/ Pi y Margal 43 Bajo',
    city: 'Vigo',
    region: 'Pontevedra',
    postalCode: '36202',
    country: 'España',
  },
  hours: [],
  social: {
    facebook: 'https://www.facebook.com/Carper-Sonido-102586472187044',
    instagram: 'https://instagram.com/carpersonido',
    linkedin: 'https://www.linkedin.com/in/jose-carlos-pereira-silva-570251198/',
    twitter: '',
  },
  siteUrl: 'https://carpersonido.com',
};

/** Email específico del taller de servicio técnico, tal como aparece en la web actual. */
export const satEmail = 'sat@carpersonido.com';

/** Coordenadas aproximadas del local en C/ Pi y Margal 43, Vigo. */
export const geoCoordinates = {
  latitude: 42.2376,
  longitude: -8.7209,
};

/** Áreas de servicio para SEO local y schema.org. */
export const serviceAreas = [
  { type: 'City', name: 'Vigo' },
  { type: 'AdministrativeArea', name: 'Pontevedra' },
  { type: 'AdministrativeArea', name: 'Galicia' },
] as const;
