export interface GalleryItem {
  url: string;
  prompt: string;
}

export interface Destination {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  highlights: string[];
  price: string;
  gallery: GalleryItem[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    year: "1889",
    description: "Vivez la Belle Époque à son apogée. Assistez à l'inauguration de la Tour Eiffel et à l'Exposition Universelle.",
    longDescription: "Plongez au cœur de la Ville Lumière lors d'une année charnière. Flânez sur les grands boulevards haussmanniens, admirez la dame de fer fraîchement achevée et découvrez les merveilles technologiques de l'Exposition Universelle. Une époque d'élégance, d'art et de progrès sans précédent.",
    image: "/images/Paris/0.jpg",
    tags: ["Culture", "Histoire", "Romantisme"],
    highlights: ["Montée de la Tour Eiffel", "Gala à l'Opéra Garnier", "Balade à Montmartre"],
    price: "2 500 €",
    gallery: [
      {
        url: "/images/Paris/paris.mp4",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, elegant train station platform with steam engines, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/0.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, crowd marveling at the newly built Eiffel Tower, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/2.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, elegant couple strolling along the Seine at sunset, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/3.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, busy street scene with horse-drawn carriages and early bicycles, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/4.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, artists painting en plein air in Montmartre, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/5.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, grand foyer of the Opera Garnier with chandeliers, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/6.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, steam boat navigating the Seine river, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/7.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, intricate ironwork details of the Grand Palais, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/8.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, lush gardens of the Tuileries with people relaxing, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/9.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, bustling market street with fresh produce and flowers, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/10.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, night view of the illuminated gas lamps on a bridge, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/11.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, interior of a luxury department store like Le Bon Marché, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/12.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, patrons enjoying coffee at a sidewalk bistro, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/13.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, view from the top of the Eiffel Tower looking over the city, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Paris/14.jpg",
        prompt: "Paris 1889, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, street performers entertaining a crowd near Notre Dame, vibrant but elegant colors, 8K, ultra detailed"
      }
    ]
  },
  {
    id: "cretaceous",
    title: "Période Crétacé",
    year: "-65M",
    description: "Une aventure brute au pays des géants. Observez les Tricératops et les T-Rex dans leur habitat naturel.",
    longDescription: "Voyagez 65 millions d'années dans le passé pour une aventure safari ultime. Marchez parmi les fougères géantes, observez les majestueux troupeaux de Tricératops et ressentez le frisson de voir un Tyrannosaurus Rex régner sur son territoire. Une expérience pour les aventuriers intrépides.",
    image: "/images/Cretacious/cretaceous (1).jpg",
    tags: ["Aventure", "Nature", "Faune"],
    highlights: ["Safari T-Rex", "Vol en Ptéranodon", "Nuit sous les étoiles préhistoriques"],
    price: "3 200 €",
    gallery: [
      {
        url: "/images/Cretacious/Vidéo de dinosaure.mp4",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, footprint of a giant dinosaur in the mud, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (1).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, T-Rex roaring in a dense jungle clearing, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (2).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, Triceratops herd grazing on fern plains, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (3).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, Pteranodons soaring over a volcanic landscape, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (4).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, sunlight filtering through giant prehistoric trees, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (5).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, baby dinosaurs hatching in a nest, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (6).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, majestic waterfall in a primeval forest, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (7).jpg",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, close-up of a dinosaur eye with reflection of the landscape, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (1).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, dragonfly with massive wingspan resting on a leaf, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (2).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, velociraptors hunting in tall grass, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (3).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, sunset over a prehistoric ocean with marine reptiles, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (4).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, giant herbivore reaching for high branches, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (5).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, meteor shower lighting up the night sky, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (6).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, misty swamp at dawn with silhouette of a sauropod, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Cretacious/cretaceous (7).png",
        prompt: "Période Crétacé, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, vibrant prehistoric flowers and strange vegetation, vibrant but elegant colors, 8K, ultra detailed"
      }
    ]
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    year: "1504",
    description: "Arpentez les rues de la Florence de la Renaissance. Rencontrez Michel-Ange et assistez au dévoilement du David.",
    longDescription: "La Renaissance italienne à son paroxysme. Florence est le centre du monde artistique et intellectuel. Discutez philosophie avec Machiavel, observez Léonard de Vinci au travail et soyez témoin de l'histoire de l'art en train de s'écrire.",
    image: "/images/Florence/florence (1).jpg",
    tags: ["Art", "Histoire", "Renaissance"],
    highlights: ["Atelier de Michel-Ange", "Dévoilement du David", "Dîner au Palazzo Vecchio"],
    price: "2 800 €",
    gallery: [
      {
        url: "/images/Florence/Florence_City_Duomo_Tracking_Shot.mp4",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, panoramic tracking shot of the Florence Duomo, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (1).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, Michelangelo chipping away at the block of marble for David, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (2).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, Leonardo da Vinci sketching in a notebook near the Arno, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (3).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, Brunelleschi's dome dominating the skyline at sunrise, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (4).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, bustling Piazza della Signoria with merchants and citizens, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (5).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, interior of a painter's studio filled with pigments and canvases, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (6).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, elegant noblewoman in Renaissance attire posing for a portrait, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (7).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, scholars debating philosophy in a Medici garden, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (8).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, view of the Ponte Vecchio with goldsmith shops, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (9).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, candlelit dinner in a frescoed palazzo hall, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (10).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, monks illuminating manuscripts in a monastery library, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (11).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, street festival with musicians and flag throwers, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (12).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, detail of a marble statue's hand, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (13).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, panoramic view of red tiled roofs and cypress trees, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (14).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, artisans working on leather and gold in a workshop, vibrant but elegant colors, 8K, ultra detailed"
      },
      {
        url: "/images/Florence/florence (15).jpg",
        prompt: "Florence 1504, cinematic travel photography, luxury campaign style, golden hour lighting, professional color grading, shot on medium format camera, depth of field, National Geographic quality, aspirational mood, sunset reflection on the Arno river, vibrant but elegant colors, 8K, ultra detailed"
      }
    ]
  }
];
