export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: '¿Qué servicios de sonido ofrecéis en Vigo y Pontevedra?',
    answer:
      'Alquiler de sonido e iluminación, instalaciones y sonorizaciones, control de ruidos, servicio técnico multi-marca y equipos para videoconferencia, streaming y teletrabajo. Trabajamos en Vigo, Pontevedra y el resto de Galicia.',
  },
  {
    question: '¿Dónde está el taller de Carper Sonido en Vigo?',
    answer:
      'En C/ Pi y Margal 43 Bajo, 36202 Vigo, Pontevedra. Tel: +34 986 17 76 21. Email: info@carpersonido.com. El servicio técnico atiende también sat@carpersonido.com.',
  },
  {
    question: '¿Hacéis control de ruidos en Pontevedra y fuera de Vigo?',
    answer:
      'Sí. Instalamos limitadores y registradores en Vigo, Pontevedra y toda Galicia. mas de 50 empresas confían en Carper Sonido.',
  },
  {
    question: '¿Alquiláis sonido e iluminación para eventos en Vigo?',
    answer:
      'Sí. Alquilamos altavoces, mesas de mezcla, microfonía, controladoras DJ, pantallas, proyectores e iluminación para conferencias, fiestas y conciertos en Vigo y Pontevedra.',
  },
  {
    question: '¿Reparáis equipos de otras marcas en Vigo?',
    answer:
      'Sí. Servicio técnico multi-marca para equipos de sonido, iluminación e imagen. Reparamos mesas de mezclas, sistemas de micrófono inalámbrico, altavoces, etapas de potencia y ecualizadores, con garantía de 3 meses tras la reparación.',
  },
  {
    question: '¿Hacéis instalaciones de sonido para locales en Vigo y Pontevedra?',
    answer:
      'Sí. Instalamos sonido profesional, iluminación y audiovisuales en locales, hoteles y comercios de Vigo y Pontevedra, adaptándonos al presupuesto y trabajando con primeras marcas.',
  },
];

export interface FaqContentConfig {
  accordion: { eyebrow?: string; title: string; description?: string };
  twoColumn: { eyebrow?: string; title: string; description?: string };
  cards: { eyebrow?: string; title: string; description?: string };
  split: { eyebrow?: string; title: string; description: string; ctaText: string; ctaHref: string };
  minimal: { title: string; description?: string };
}

/**
 * Editable copy for every component in `src/components/faq/`.
 * The `faqs` list above is shared across all variants.
 */
export const faqContent: FaqContentConfig = {
  accordion: {
    title: 'Preguntas frecuentes sobre sonido en Vigo',
  },
  twoColumn: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
  },
  cards: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
  },
  split: {
    eyebrow: 'FAQ',
    title: '¿Tienes más dudas?',
    description: 'Escríbenos desde Vigo o Pontevedra y te ayudamos a elegir el equipo o el servicio que necesitas.',
    ctaText: 'Contactar',
    ctaHref: '/contacto',
  },
  minimal: {
    title: 'Preguntas frecuentes',
  },
};
