export interface ContactFieldLabels {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  subject: string;
  servicePlaceholder: string;
}

export const contactServiceOptions = [
  { value: 'tienda', label: 'Tienda' },
  { value: 'control-de-ruidos', label: 'Control de ruidos' },
  { value: 'alquileres', label: 'Alquileres' },
  { value: 'instalaciones', label: 'Instalaciones' },
  { value: 'servicio-tecnico', label: 'Servicio técnico' },
] as const;

export const contactServiceValues = contactServiceOptions.map((option) => option.value);

export const contactFieldLabels: ContactFieldLabels = {
  name: 'Tu nombre (requerido)',
  email: 'Tu correo electrónico (requerido)',
  phone: 'Tu Teléfono (requerido)',
  message: 'Tu mensaje',
  service: 'Servicio por el que nos contactas.',
  subject: 'Asunto',
  servicePlaceholder: '—Por favor, elige una opción—',
};

export interface ContactContentConfig {
  split: {
    title: string;
    submitText: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    hoursLabel: string;
  };
  centered: { eyebrow?: string; title: string; description?: string; submitText: string };
  cards: {
    eyebrow?: string;
    title: string;
    description?: string;
    submitText: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
  };
  minimal: { title: string; description?: string; submitText: string };
  stacked: {
    eyebrow?: string;
    title: string;
    description?: string;
    submitText: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
  };
}

/**
 * Editable copy for every component in `src/components/contact/`.
 * Field labels above are shared across all variants.
 */
export const contactContent: ContactContentConfig = {
  split: {
    title: 'Ven a visitarnos!',
    submitText: 'Enviar',
    emailLabel: 'Mail',
    phoneLabel: 'Tel',
    addressLabel: 'Dirección',
    hoursLabel: 'Horario',
  },
  centered: {
    eyebrow: 'Contacto',
    title: 'Ven a visitarnos!',
    description: 'Cuéntanos qué necesitas y te respondemos lo antes posible.',
    submitText: 'Enviar',
  },
  cards: {
    eyebrow: 'Contacto',
    title: 'Ven a visitarnos!',
    description: 'Llámanos, escríbenos o pasa por el local en Vigo.',
    submitText: 'Enviar',
    phoneLabel: 'Teléfono',
    emailLabel: 'Email',
    addressLabel: 'Dirección',
  },
  minimal: {
    title: 'Contacto',
    description: 'Envíanos un mensaje y te responderemos lo antes posible.',
    submitText: 'Enviar',
  },
  stacked: {
    eyebrow: 'Contacto',
    title: 'Ven a visitarnos!',
    description: 'Elige cómo quieres hablar con nosotros, o rellena el formulario.',
    submitText: 'Enviar',
    phoneLabel: 'Llámanos',
    emailLabel: 'Escríbenos',
    addressLabel: 'Visítanos',
  },
};
