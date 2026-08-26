export interface Brand {
  name: string;
  image: string;
}

/**
 * Marcas con las que trabaja Carper Sonido, según la página actual.
 * Logos reutilizados de `public/img/2018`–`2020` (los mismos archivos
 * que usa carpersonido.com).
 */
export const brands: Brand[] = [
  { name: 'Pioneer DJ', image: '/img/2020/04/pioneer-authorised.png' },
  { name: 'JBL Professional', image: '/img/2020/04/49.png' },
  { name: 'Soundcraft', image: '/img/2018/12/venta-de-repuestos-soundcraft.png' },
  { name: 'Shure', image: '/img/2018/12/Shure-Logo.jpg' },
  { name: 'JTS', image: '/img/2020/04/jts.png' },
  { name: 'Electro-Voice', image: '/img/2020/04/electro-voice.png' },
  { name: 'Dynacord', image: '/img/2020/04/dynacord.png' },
  { name: 'Stageline', image: '/img/2020/04/stageline.png' },
  { name: 'Chauvet', image: '/img/2020/04/chauvet.png' },
  { name: 'Chauvet DJ', image: '/img/2020/04/ChauvetDJ.png' },
  { name: 'Sunlite', image: '/img/2020/04/sunlite-logo.png' },
  { name: 'Iluminarc', image: '/img/2020/04/Iluminarc.png' },
  { name: 'Acustica Audio', image: '/img/2020/04/acustica-audio.png' },
  { name: 'Derksen', image: '/img/2020/04/derksen.jpg' },
  { name: 'Elan', image: '/img/2020/04/elan.png' },
  { name: 'Electron', image: '/img/2020/04/electron.png' },
  { name: 'Enttec', image: '/img/2020/04/enttec.jpg' },
  { name: 'Euromet', image: '/img/2020/04/euromet.png' },
  { name: 'dbx', image: '/img/2020/04/43.png' },
  { name: 'Crown', image: '/img/2020/04/40.png' },
];

export const brandsContent = {
  eyebrow: 'Marcas',
  title: 'Marcas de sonido profesional en Vigo y Pontevedra',
  description:
    'Trabajamos con primeras marcas de sonido profesional, iluminación, DJ e informática musical para instalaciones y alquileres en Vigo y Pontevedra.',
  heading: 'Nuestras marcas',
};
