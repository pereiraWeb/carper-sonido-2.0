export interface FooterContentConfig {
  columns: {
    companyHeading: string;
    linksHeading: string;
    contactHeading: string;
    missionHeading: string;
    mission: string;
    copyright: string;
  };
  cta: { title: string; description?: string; ctaText: string; ctaHref: string };
}

/** Editable copy for every component in `src/components/footer/`. */
export const footerContent: FooterContentConfig = {
  columns: {
    companyHeading: 'Nuestras redes',
    linksHeading: 'Servicios',
    contactHeading: 'Contacto',
    missionHeading: 'Nuestra meta',
    mission:
      'Con mas de 30 años en el sector del sonido profesional, Nuestra única meta es ofrecerte el mejor servicio y llevarte el mejor sonido.',
    copyright: 'Todos los derechos reservados',
  },
  cta: {
    title: '¿Hablamos de tu evento o instalación?',
    description: 'Pide presupuesto sin compromiso. Te respondemos lo antes posible.',
    ctaText: 'Solicitar presupuesto',
    ctaHref: '/contacto',
  },
};
