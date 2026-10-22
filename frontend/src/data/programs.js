import programMzab from '../assets/images/program-mzab.jpg';
import programSahara from '../assets/images/program-sahara.jpg';
import programOasis from '../assets/images/program-oasis.jpg';

const programs = [
  {
    slug: 'ghardaia-vallee-mzab',
    title: 'Ghardaïa & la Vallée du M\'Zab',
    duration: '4 jours / 3 nuits',
    image: programMzab,
    imageAlt: 'Le ksar de Bounoura dans la Vallée du M\'Zab',
    summary:
      'Découverte des ksour millénaires, de l\'architecture pentapole classée à l\'UNESCO et de l\'artisanat local.',
    highlights: [
      'Visite guidée des ksour de Ghardaïa, Beni Isguen et Melika',
      'Rencontre avec des artisans potiers et tisserands',
      'Nuit en hôtel traditionnel au cœur de la vallée',
      'Marché du vendredi à Beni Isguen',
    ],
  },
  {
    slug: 'sahara-grand-erg',
    title: 'Sahara & Grand Erg Occidental',
    duration: '6 jours / 5 nuits',
    image: programSahara,
    imageAlt: 'Vue panoramique sur les oasis et dunes du Sahara algérien',
    summary:
      'Un raid dans les dunes du Grand Erg, bivouac sous les étoiles et traversée des oasis du Touat.',
    highlights: [
      'Bivouac dans le désert avec dîner traditionnel',
      'Traversée en 4x4 des oasis du Touat',
      'Observation des étoiles loin de toute pollution lumineuse',
      'Rencontre avec des familles nomades',
    ],
  },
  {
    slug: 'route-oasis-sud',
    title: 'La Route des Oasis du Sud',
    duration: '5 jours / 4 nuits',
    image: programOasis,
    imageAlt: 'La palmeraie de Beni Isguen vue depuis les hauteurs',
    summary:
      'De palmeraie en palmeraie, un circuit culturel à travers les oasis historiques du sud algérien.',
    highlights: [
      'Palmeraies de Timimoun et ses ksour en toub',
      'Panoramas sur la Sebkha depuis les falaises',
      'Dégustation de dattes et produits du terroir',
      'Visite des canalisations foggara classées',
    ],
  },
];

export default programs;
