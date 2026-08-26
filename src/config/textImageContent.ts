export interface TextImageContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  /** Any valid CSS length (e.g. "100vh", "600px", "auto"). */
  height: string;
}

/**
 * Editable copy and layout defaults for `src/components/media/TextImage.astro`.
 * Update the strings below to customize this section without touching any
 * component markup or logic.
 */
export const textImageContent: TextImageContent = {
  eyebrow: 'Nuestra meta',
  title: 'El mejor servicio y el mejor sonido',
  description:
    'Con mas de 30 años en el sector del sonido profesional, Nuestra única meta es ofrecerte el mejor servicio y llevarte el mejor sonido.',
  ctaText: 'Contactar',
  ctaHref: '/contacto',
  height: 'auto',
};
