export interface NavItem {
  label: string;
  href: string;
  /** Optional dropdown items rendered as a submenu under this item. */
  children?: NavItem[];
}

/**
 * Main nav used by every header variant.
 */
export const mainNavigation: NavItem[] = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Servicios',
    href: '/services',
    children: [
      { label: 'Videoconferencia, streaming y teletrabajo', href: '/services/teletrabajo' },
      { label: 'Instalaciones', href: '/services/instalaciones' },
      { label: 'Alquileres', href: '/services/alquiler' },
      { label: 'Control de ruidos', href: '/services/control-de-ruidos' },
      { label: 'Servicio técnico', href: '/services/servicio-tecnico' },
    ],
  },
  { label: 'Contacto', href: '/contacto' },
];

/** Canonical legal routes, reused wherever a legal page is linked (e.g. `ConsentCheckbox`'s privacy policy link). */
export const legalRoutes = {
  legalNotice: '/legal/legal-notice',
  privacy: '/legal/privacy',
  cookies: '/legal/cookies',
} as const;

/**
 * Not a real page — every footer variant renders this as a plain link, and
 * `CookieConsent.astro` listens (via event delegation) for clicks on
 * `a[href="#cookie-preferences"]` anywhere on the page and opens its
 * preferences panel instead of navigating. This is the "permanent link to
 * change or withdraw consent" required by GDPR/ePrivacy — always reachable,
 * regardless of which footer variant a page uses.
 */
export const cookiePreferencesHref = '#cookie-preferences';

export const legalNavigation: NavItem[] = [
  { label: 'Aviso legal', href: legalRoutes.legalNotice },
  { label: 'Política de privacidad', href: legalRoutes.privacy },
  { label: 'Política de cookies', href: legalRoutes.cookies },
  { label: 'Gestionar cookies', href: cookiePreferencesHref },
];

export const footerServiceLinks: NavItem[] = [
  { label: 'Videoconferencia y streaming en Vigo y Pontevedra', href: '/services/teletrabajo' },
  { label: 'Alquiler de sonido en Vigo y Pontevedra', href: '/services/alquiler' },
  { label: 'Control de ruidos en Vigo y Pontevedra', href: '/services/control-de-ruidos' },
  { label: 'Instalaciones de sonido en Vigo y Pontevedra', href: '/services/instalaciones' },
  { label: 'Servicio técnico en Vigo y Pontevedra', href: '/services/servicio-tecnico' },
];
