// Approved ES copy and destinations; presentation/motion live separately.
export const homepageCopy = {
  title: { desktop: "Tu nuevo hogar,\nsin tener que coordinarlo todo", mobile: "Tu nuevo hogar,\nsin tener que\ncoordinarlo todo" },
  subline: "Diseño de interiores llave en mano en Riviera Maya y Cancún. Coordinamos el diseño, mobiliario, compras e instalación de tu hogar.",
  serviceAction: { label: "Servicio llave en mano", href: "/es/servicios/diseno-llave-en-mano/" },
  projectAction: { label: "Cuéntanos tu proyecto", href: "/es/cuestionario/" },
} as const;

export const navigation = [
  { label: "Conócenos", href: "/es/conocenos/" },
  { label: "Servicios", href: "/es/servicios/" },
  { label: "Portafolio", href: "/es/portafolio/" },
] as const;

export const services = [
  { title: "Servicio llave en mano", image: "/assets/img/onsite.webp", href: "/es/servicios/diseno-llave-en-mano/", description: "Diseño, compras e instalación para tu hogar, con un mismo equipo." },
  { title: "Diseño de interiores virtual", image: "/assets/img/virtual.jpg", href: "/es/servicios/diseno-virtual/", description: "Un plan de diseño para tu espacio. Tú lo haces realidad, a tu ritmo." },
  { title: "Diario del estudio", image: "/assets/img/content.png", href: "https://www.youtube.com/@siamodesign", description: "Novedades, detrás de cámaras y actualizaciones del estudio." },
] as const;

export const projects = [
  { year: "2024", title: "Serene Jungle", image: "/assets/serene-jungle/terrace-1.webp", href: "/es/portafolio/serene-jungle/" },
  { year: "2024", title: "Mayan Sanctuary", image: "/assets/mayan-sanctuary/lounge-terrace-3.webp", href: "/es/portafolio/mayan-sanctuary/" },
  { year: "2018", title: "Timeless Nature", image: "/assets/timeless-nature/living-room-14.jpg", href: "/es/portafolio/naturaleza-atemporal/" },
  { year: "2019", title: "Soul in Concrete", image: "/assets/soul-in-concrete/master-bedroom-4.webp", href: "/es/portafolio/soul-in-concrete/" },
] as const;

// Quotes and media are kept together so choosing a video cannot mismatch its author.
export const testimonials = [
  { author: "Laura", src: "/assets/videos/testimonials.mp4", poster: "/assets/videos/testimonials-thumb.webp", quote: "Seamless process, stunning results. I felt heard at every step and the outcome exceeded expectations." },
  { author: "Jan", src: "/assets/videos/capitulo1.mp4", poster: "/assets/videos/capitulo1-thumb.jpg", quote: "From creating the perfect layout to finding pieces I absolutely loved, my designer really took my space to the next level. I never dreamed my home could look — and feel — this good!" },
  { author: "Matt", src: "/assets/videos/capitulo2.mp4", poster: "/assets/videos/capitulo2-thumb.jpg", quote: "They captured exactly what I wanted and made the process effortless. The space finally feels like home." },
] as const;

export const socialProfiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/siamo-design/" },
  { label: "YouTube", href: "https://www.youtube.com/@siamodesign" },
  { label: "TikTok", href: "https://www.tiktok.com/@siamodesign" },
  { label: "Instagram", href: "https://www.instagram.com/siamo_design" },
] as const;
