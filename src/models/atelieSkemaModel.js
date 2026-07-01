const runwayGallery2023 = Array.from(
  { length: 7 },
  (_, index) => `/runway/desfile-2023/desfile-2023-${String(index + 1).padStart(2, "0")}.jpeg`,
);

const runwayGallery2024 = Array.from(
  { length: 10 },
  (_, index) => `/runway/desfile-2024/desfile-2024-${String(index + 1).padStart(2, "0")}.jpeg`,
);

const runwayGallery2025 = Array.from(
  { length: 8 },
  (_, index) => `/runway/desfile-2025/desfile-2025-${String(index + 1).padStart(2, "0")}.jpeg`,
);
const eventUluruGallery = [
  "/events/evento-uluru/evento-uluru-02.jpeg",
  "/events/evento-uluru/evento-uluru-03.jpeg",
  "/events/evento-uluru/evento-uluru-07.jpeg",
  "/events/evento-uluru/evento-uluru-06.jpeg",
  "/events/evento-uluru/evento-uluru-04.jpeg",
  "/events/evento-uluru/evento-uluru-08.jpeg",
  "/events/evento-uluru/evento-uluru-09.jpeg",
  "/events/evento-uluru/evento-uluru-10.jpeg",
  "/events/evento-uluru/evento-uluru-11.jpeg",
];
const eventAntonioPicciriliGallery = Array.from(
  { length: 6 },
  (_, index) => `/events/antonio-piccirili/antonio-piccirili-${String(index + 1).padStart(2, "0")}.jpg`,
);

const eventAtelieExperienceGallery = [
  "/events/atelie-experience/atelie-experience-01.jpg",
  "/events/atelie-experience/atelie-experience-02.jpg",
  "/events/atelie-experience/atelie-experience-04.jpg",
  "/events/atelie-experience/atelie-experience-05.jpg",
  "/events/atelie-experience/atelie-experience-03.jpg",
  "/events/atelie-experience/atelie-experience-06.jpg",
  "/events/atelie-experience/atelie-experience-07.jpg",
  "/events/atelie-experience/atelie-experience-08.jpg",
  "/events/atelie-experience/atelie-experience-09.jpg",
  "/events/atelie-experience/atelie-experience-10.jpg",
  "/events/atelie-experience/atelie-experience-11.jpg",
];

const eventBossaNovaAnaPardiniGallery = Array.from(
  { length: 11 },
  (_, index) => `/events/bossa-nova-ana-pardini/bossa-nova-ana-pardini-${String(index + 1).padStart(2, "0")}.jpg`,
);

const eventKioskFitClubGallery = Array.from(
  { length: 10 },
  (_, index) => `/events/kiosk-fit-club/kiosk-fit-club-${String(index + 1).padStart(2, "0")}.jpg`,
);

const eventTheNewsGallery = Array.from(
  { length: 11 },
  (_, index) => `/events/the-news/the-news-${String(index + 1).padStart(2, "0")}.jpg`,
);
const backstageVideoOne =
  import.meta.env.VITE_BACKSTAGE_VIDEO_1_URL ?? "/backstage/atelie-skema-v2.mp4";
const backstageVideoTwo =
  import.meta.env.VITE_BACKSTAGE_VIDEO_2_URL ?? "/backstage/skema-fashion-show-video-final.mov";

export const atelieSkemaModel = {
  fontStyles: `
    @font-face {
      font-family: 'Loubag';
      src: url('/fonts/Loubag-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Aileron';
      src: url('/fonts/Aileron-Regular.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
    }
  `,
  siteConfig: {
    brand: "ATELIÊ SKEMA",
    subtitle: "Fashion, Luxury and Entrepreneurship Club",
    description:
      "Ateliê is a Skema Business School association focused on entrepreneurship, dedicated to the fashion and luxury market, and formed by Business and Law students who are passionate about this industry. Our purpose is to build meaningful connections through talks, events, editorials, and collaborative projects that expand knowledge, develop skills, and immerse our members in the market. With a strategic vision, we also lead external projects, connecting brands that reflect our DNA and reinforcing our role in the integration of fashion, creativity, and business.",
    instagram: "@atelieskema",
    instagramUrl: "https://www.instagram.com/atelieskema/",
    email: "atelieskema@gmail.com",
    numero: "+55 31 99629-2120",
    primaryButtonClasses: "bg-[#c9b98a] hover:bg-[#b6a874] text-white",
  },
  heroImage: "/home/skema-landing-page.png",
  runwayShows: [
    {
      id: "desfile-2023",
      title: "1st Runway Show",
      year: "2023",
      location: "Mercado de Origem",
      description:
        "In 2023, we organized our first runway show, held on the rooftop of Mercado de Origem. The opportunity came unexpectedly, just one month before the date, which pushed us to structure the entire project within a very short timeline. Even so, we managed to build an exceptionally well-organized event, gained strong recognition, and learned immensely from every stage of the process. Behind the scenes, our beauty team prepared the 30 models selected through an experienced casting process. Notable brands such as Anna Barroso, Ju Pettit, Espaço Deluxe, and Patrícia Motta presented their collections, captivating the audience with exclusive, high-quality pieces. The show was an absolute success, marked by sophistication, innovation, and above all, the teamwork that made everything possible.",
      coverImage: "/runway/cards/desfile-2023-card.png",
      coverImagePosition: "center 18%",
      gallery: runwayGallery2023,
    },
    {
      id: "desfile-2024",
      title: "2nd Runway Show",
      year: "2024",
      location: "Espaço Centoequatro",
      description:
        "In November 2024, we held our second runway show, a challenging yet extraordinary experience. This time, we had more experience and knew where to begin, which allowed us to structure the project with greater confidence and vision. The result was incredible and far beyond what we had imagined, bringing together more than 300 guests, 8 highly relevant partner brands, and a dedicated team of 25 Ateliê members who helped turn this dream into reality. The event took place at Espaço Centoequatro, an iconic venue in Belo Horizonte that brought even more strength and symbolism to the night. With the presence of standout brands and the scale of the event, it became clear how far Ateliê can go, consolidating our identity as a platform for fashion, creativity, innovation, and excellence.",
      coverImage: "/runway/cards/desfile-2024-card.png",
      gallery: runwayGallery2024,
    },
    {
      id: "desfile-2025",
      title: "3rd Runway Show",
      year: "2025",
      location: "Casarão Eventos",
      description:
        "In November 2025, Ateliê held the third edition of its runway show, solidifying its presence in the fashion and creative scene. After two remarkable editions, the project matured, expanded its reach, and strengthened its positioning. With more than 10 brands, around 350 guests, and a carefully planned infrastructure, the event took place at Casarão Eventos, bringing together creativity, innovation, and purpose in a single experience. In this edition, the focus was to give visibility to brands that were still in the process of consolidation but already aligned with Ateliê’s DNA. More than a runway, the show established itself as a space for connection, strengthening brands and boosting the creative ecosystem around it.",
      coverImage: "/runway/cards/desfile-2025-card.png",
      gallery: runwayGallery2025,
    },
//    {
//      id: "desfile-2026",
//      title: "4th Runway Show",
//      year: "2026",
//      location: "Luxury Hall",
//      description:
//        "Conceived as the continuation of Ateliê’s growth, the 2026 runway show represents ambition, sophistication, and an expanded impact. The proposal combines fashion, luxury, and entrepreneurship in a high-level experience, bringing the association even closer to the market and strengthening its institutional presence. The project reflects Ateliê’s vision for the future and its potential to establish itself as a university reference in the sector.",
//      coverImage:
//        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
//      gallery: [
//        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
//        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
//        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
//        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
//        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
//        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
//      ],
//    },
  ],
  backstageMedia: [
//    {
//      type: "image",
//      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
//    },
    {
      type: "video",
      src: backstageVideoOne,
    },
    {
      type: "video",
      src: backstageVideoTwo,
    },
  ],
  conceptItems: [
    {
      title: "Mission",
      text: "Our goal is to immerse our members in the fashion and luxury market by creating hands-on experiences that combine learning, creativity, and networking. We foster connections between students, brands, and professionals, strengthening the personal and professional development of everyone involved.",
    },
    {
      title: "Values",
      text: [
        "Strategic thinking: acting with planning and long-term vision.",
        "Innovation: constantly seeking new ideas, formats, and creative solutions.",
        "Authenticity and integrity: reflecting a transparent and genuine DNA in every initiative.",
        "Collaboration: valuing teamwork and the diversity of talents.",
        "Excellence: pursuing quality in every detail of our projects and events.",
      ],
    },
    {
      title: "Vision",
      text: "To be recognized as the leading university association in fashion and luxury, a reference in innovation, professionalism, and cultural impact, establishing itself as a bridge between academia and the market.",
    },
  ],
  events: [
    {
      id: "event-antonio-piccirili",
      title: "Talk Antonio Piccirili",
      location: "Belo Horizonte",
      description:
        "A meeting with Antonio Piccirili focused on market perspectives, creative positioning, and conversations that connect fashion, business, and professional development.",
      image: "/events/antonio-piccirili/antonio-piccirili-cover.jpg",
      gallery: eventAntonioPicciriliGallery,
      horizontalGalleryIndexes: [0, 1, 2, 3, 4, 5],
    },
    {
      id: "event-atelie-experience",
      title: "Ateliê Experience",
      location: "Belo Horizonte",
      description:
        "An immersive Ateliê experience designed to bring students closer to fashion, luxury, branding, and the creative market through networking and curated moments.",
      image: "/events/atelie-experience/atelie-experience-cover.jpg",
      gallery: eventAtelieExperienceGallery,
      horizontalGalleryIndexes: [0, 1, 2, 3, 6, 7, 8, 9, 10],
    },
    {
      id: "event-bossa-nova-ana-pardini",
      title: "Bossa Nova + Ana Pardini",
      location: "Belo Horizonte",
      description:
        "A collaborative event with Bossa Nova and Ana Pardini, connecting style, creative entrepreneurship, and brand experience in an intimate setting.",
      image: "/events/bossa-nova-ana-pardini/bossa-nova-ana-pardini-cover.jpg",
      gallery: eventBossaNovaAnaPardiniGallery,
      horizontalGalleryIndexes: [2, 3, 4, 6, 7, 8, 9, 10],
      deepHorizontalGalleryIndexes: [2],
      wideGalleryIndexes: [6],
    },
    {
      id: "event-kiosk-fit-club-2025",
      title: "Kiosk Fit Club 2025",
      location: "Belo Horizonte",
      description:
        "In partnership with Kiosk, Ateliê developed an activation connecting branding, fashion, and community experience around the fitness and lifestyle universe.",
      image: "/events/kiosk-fit-club/kiosk-fit-club-cover.jpg",
      gallery: eventKioskFitClubGallery,
      horizontalGalleryIndexes: [1, 4],
    },
    {
      id: "event-the-news",
      title: "The News",
      location: "Belo Horizonte",
      description:
        "A curated encounter with The News, bringing together communication, trends, and contemporary market conversations through the Ateliê perspective.",
      image: "/events/the-news/the-news-cover.jpg",
      gallery: eventTheNewsGallery,
      horizontalGalleryIndexes: [0, 1, 3, 7, 9],
    },
    {
      id: "event-fashion-concept-presentation",
      title: "Headtalk @rafaabritta @luiza.uluru",
      location: "Campus Event",
      description:
        "A conversation with Rafa Abritta and Luiza Uluru about fashion and gastronomy, presenting concepts and correlations between these two subjects.",
      image: "/events/headtalk-card.png",
      gallery: eventUluruGallery,
      horizontalGalleryIndexes: [2, 3, 8],
    },
  ],
  teamPhoto: "/team/time.png",
  organizersPhoto: "/team/diretoras.jpeg",
  instagramGrid: [
    {
      image: "/instagram/insta-1.png",
      postUrl: "https://www.instagram.com/p/DPMeejPDnBS/?img_index=1",
    },
    {
      image: "/instagram/insta-2.png",
      postUrl: "https://www.instagram.com/p/DVE5Vq8Dmbo/?img_index=1",
    },
    {
      image: "/instagram/insta-3.png",
      postUrl: "https://www.instagram.com/p/DPMXz_gjhVT/?img_index=1",
    },
    {
      image: "/instagram/insta-4.png",
      postUrl: "https://www.instagram.com/p/DPRxxckDkZw/?img_index=1",
    },
    {
      image: "/instagram/insta-5.png",
      postUrl: "https://www.instagram.com/p/DPj0orFicPC/?img_index=1",
    },
  ],
  theme: {
    darkIconButtonClasses:
      "inline-flex items-center justify-center rounded-full bg-[#c9b98a] p-3 text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition duration-300 hover:opacity-60",
    sectionBg: "bg-[#f3ede4]",
    textMain: "text-[#1a1816]",
    textBody: "text-[#4a443f]",
    textMuted: "text-[#6a635c]",
  },
};
