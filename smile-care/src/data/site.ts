import type { ImageMetadata } from "astro";
import heroConsulta from "@/assets/images/hero-consulta.png";
import revisionDental from "@/assets/images/revision-dental.png";
import sonrisaSana from "@/assets/images/sonrisa-sana.png";
import endodonciaImg from "@/assets/images/endodoncia.png";
import cirugiaOral from "@/assets/images/cirugia-oral.png";
import consultaPersonalizada from "@/assets/images/consulta-personalizada.png";

export interface NavLink {
  href: string;
  label: string;
}

export interface ImageAsset {
  src: ImageMetadata;
  alt: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  content: string;
  avatar: string;
}

export interface InsightItem {
  title: string;
  excerpt: string;
  dateLabel: string;
  dateIso: string;
  cardTone: string;
  image?: ImageAsset;
}

export const navigationLinks: NavLink[] = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#works", label: "Trabajos" },
  { href: "#testimonials", label: "Opiniones" },
];

export const phoneLink = {
  href: "tel:+18005550199",
  label: "Llamar a SmileCare Dental",
};

export const heroContent = {
  image: {
    src: heroConsulta,
    alt: "Paciente recibiendo tratamiento dental profesional con equipo moderno",
  },
};

export const aboutContent = {
  leftImage: {
    src: revisionDental,
    alt: "Dentista realizando una revisión dental completa a un paciente",
  },
  bottomImage: {
    src: sonrisaSana,
    alt: "Sonrisa sana y luminosa después de un tratamiento dental",
  },
  rightImage: {
    src: endodonciaImg,
    alt: "Dentista realizando una endodoncia con instrumentos de precisión",
  },
};

export const servicesContentVideo: ImageAsset = {
  src: cirugiaOral,
  alt: "Profesional dental realizando un procedimiento de cirugía oral",
};

export const worksContent = {
  members: [
    { initials: "JM", tone: "bg-gray-300" },
    { initials: "AS", tone: "bg-gray-400" },
    { initials: "KL", tone: "bg-gray-200" },
  ],
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Laura Gómez",
    title: "Cero dolor, cero estrés",
    content:
      "Llegué con miedo por una endodoncia y salí sonriendo. No sentí nada y me explicaron cada paso con calma.",
    avatar:
      heroConsulta,
  },
  {
    name: "Miguel Torres",
    title: "Mi ortodoncia sin dramas",
    content:
      "El tratamiento fue mucho más cómodo de lo que imaginaba. El equipo siempre estuvo atento y los resultados se notan.",
    avatar:
      revisionDental,
  },
  {
    name: "Carmen Ruiz",
    title: "Volví sin miedo al dentista",
    content:
      "Después de años evitando al dentista, aquí me hicieron sentir cómoda desde la primera visita. Totalmente recomendado.",
    avatar:
      endodonciaImg,
  },
  {
    name: "Sara Jiménez",
    title: "Planes dentales integrales",
    content:
      "El equipo de SmileCare hizo que mi experiencia fuera comodísima. Recomiendo su atención a quien busque calidad.",
    avatar:
      cirugiaOral,
  },
  {
    name: "Diego Fernández",
    title: "Endodoncia sin dolor",
    content:
      "Me preocupaba mi endodoncia, pero todo fue rápido e indoloro. Una atención sobresaliente de principio a fin.",
    avatar:
      revisionDental,
  },
];

export const insights: InsightItem[] = [
  {
    title: "Ortodoncia invisible sin brackets",
    excerpt:
      "Los alineadores transparentes corrigen tus dientes casi sin que se note. Te contamos cómo funciona y para quién es ideal.",
    dateLabel: "12 de agosto de 2026",
    dateIso: "2026-08-12",
    cardTone: "bg-soft-beige",
  },
  {
    title: "Implantes: muerde con confianza",
    excerpt:
      "Un implante bien colocado se siente como un diente natural. Resolvemos las dudas más comunes antes de tu primera visita.",
    dateLabel: "28 de julio de 2026",
    dateIso: "2026-07-28",
    cardTone: "bg-soft-blue",
    image: {
      src: consultaPersonalizada,
      alt: "Consulta odontológica sobre implantes dentales",
    },
  },
  {
    title: "Blanqueamiento: lo que debes saber",
    excerpt:
      "No todos los blanqueamientos son iguales. Te explicamos las opciones seguras para una sonrisa más luminosa.",
    dateLabel: "9 de julio de 2026",
    dateIso: "2026-07-09",
    cardTone: "bg-soft-pink",
  },
];

export const footerGroups = [
  {
    label: "Enlaces de la empresa",
    links: [
      { href: "#hero", label: "Inicio" },
      { href: "#about", label: "Por qué elegirnos" },
      { href: "#services", label: "Tratamientos" },
      { href: "#", label: "Tecnología" },
      { href: "#", label: "Contacto" },
    ],
  },
  {
    label: "Enlaces sobre nosotros",
    links: [
      { href: "#", label: "Nuestra misión" },
      { href: "#", label: "Empleo" },
      { href: "#blog", label: "Blog" },
      { href: "#services", label: "Servicios" },
      { href: "#", label: "Prensa" },
    ],
  },
];

export const socialLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://youtube.com", label: "YouTube" },
];
