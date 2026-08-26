export interface TextBlockContent {
  title: string;
  /** Optional short text shown right below the title. Set to an empty string (or omit the prop) to skip it. */
  description?: string;
  paragraph: string;
}

/**
 * Editable copy for `src/components/text/TextBlock.astro`. Replace this
 * placeholder lorem ipsum with real content before publishing.
 */
export const textBlockContent: TextBlockContent = {
  title: 'Nuestra meta',
  description: 'Más de 30 años en el sector del sonido profesional.',
  paragraph:
    'Con mas de 30 años en el sector del sonido profesional, Nuestra única meta es ofrecerte el mejor servicio y llevarte el mejor sonido.',
};
