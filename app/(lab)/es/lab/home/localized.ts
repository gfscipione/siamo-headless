import { homepageCopy, navigation, services, projects } from "./content";

export type Locale = "es" | "en";
export type RouteMode = "lab" | "public";
const es = {
  hero: homepageCopy, navigation, services, projects,
  home: "/es/", languageHref: "/lab/home/", language: "English", languageShort: "EN",
  skip: "Saltar al contenido", menu: "Menú", close: "Cerrar menú", navLabel: "Navegación principal", mobileNav: "Navegación móvil",
  consult: "Agendar consulta", loading: "Abriendo cuestionario…",
  doctors: "Qué hacemos", doctorsTitle: "Diseñamos hogares que reflejan a quienes los habitan y funcionan en armonía",
  doctorsIntro: "Del diseño a la instalación, coordinamos cada decisión y detalle para dar forma a tu hogar.",
  servicesLabel: "Nuestros servicios", servicesHref: "/es/servicios/", explore: "Explorar",
  projectsLabel: "Proyectos", projectsTitle: "Cada hogar tiene su propia historia",
  projectsIntro: "Conoce cómo combinamos distribución, materiales y mobiliario para crear espacios con carácter propio.",
  project: "Proyecto", projectsNav: "Navegación de proyectos", previousProjects: "Proyectos anteriores", nextProjects: "Proyectos siguientes",
  about: "Conócenos", aboutAction: "Conócenos", aboutHref: "/es/conocenos/",
  aboutLines: ["Dirección de arte y styling", "Dirección de diseño y 3D", "Dirección de estilo y materiales"],
  aboutVideo: "Conoce al equipo de Siamo Design", pauseVideo: "Pausar video del estudio", playVideo: "Reproducir video del estudio",
  testimonials: "Lo que dicen nuestros clientes", testimonialsIntro: "Así lo vivieron nuestros clientes.",
  testimonial: "Testimonio de", playTestimonial: "Reproducir testimonio de", chooseTestimonial: "Elegir testimonio", previousTestimonial: "Testimonio anterior", nextTestimonial: "Testimonio siguiente",
  follow: "Síguenos", post: "Ver publicación", instagram: "de Siamo en Instagram", interior: "Interior de Siamo Design — publicación", email: "Correo", social: "Redes sociales",
};
const en = {
  ...es,
  hero: {
    title: { desktop: "Your new home,\nwithout managing it all", mobile: "Your new home,\nwithout managing\nit all" },
    subline: "Full-service interior design in Riviera Maya and Cancún. We coordinate the design, furniture, purchasing and installation of your home.",
    serviceAction: { label: "Full-Service Design", href: "/services/full-service/" },
    projectAction: { label: "Tell us about your project", href: "/questionnaire/" },
  },
  navigation: [{ label: "About us", href: "/get-to-know-us/" }, { label: "Services", href: "/services/" }, { label: "Portfolio", href: "/portfolio/" }],
  services: [
    { ...services[0], title: "Full-Service Design", href: "/services/full-service/", description: "Design, purchasing and installation, coordinated by one team." },
    { ...services[1], title: "Virtual Interior Design", href: "/services/virtual-design/", description: "A design plan for your space, ready for you to bring to life." },
    { ...services[2], title: "Studio Journal", description: "Studio updates, stories and a look behind the scenes." },
  ],
  projects: projects.map((project, i) => ({ ...project, href: ["/portfolio/serene-jungle/", "/portfolio/mayan-sanctuary/", "/portfolio/timeless-nature/", "/portfolio/soul-in-concrete/"][i] })),
  home: "/", languageHref: "/es/lab/home/", language: "Español", languageShort: "ES",
  skip: "Skip to content", menu: "Menu", close: "Close menu", navLabel: "Main navigation", mobileNav: "Mobile navigation",
  consult: "Tell us about your project", loading: "Opening questionnaire…",
  doctors: "What we do", doctorsTitle: "Homes that feel like you, designed for everyday life",
  doctorsIntro: "From design to installation, we coordinate the decisions and details that bring your home together.",
  servicesLabel: "Explore our services", servicesHref: "/services/", explore: "Explore",
  projectsLabel: "Projects", projectsTitle: "Every home has its own story",
  projectsIntro: "Explore how layout, materials and furniture come together to give each home its own character.",
  project: "Project", projectsNav: "Project navigation", previousProjects: "Previous projects", nextProjects: "Next projects",
  about: "Meet Siamo", aboutAction: "Meet the team", aboutHref: "/get-to-know-us/",
  aboutLines: ["Art direction & styling", "Design & 3D direction", "Style & materials direction"],
  aboutVideo: "Meet the Siamo Design team", pauseVideo: "Pause studio video", playVideo: "Play studio video",
  testimonials: "What our clients say", testimonialsIntro: "Their experience, in their own words.",
  testimonial: "Testimonial from", playTestimonial: "Play testimonial from", chooseTestimonial: "Choose a testimonial", previousTestimonial: "Previous testimonial", nextTestimonial: "Next testimonial",
  follow: "Follow our studio", post: "View post", instagram: "from Siamo on Instagram", interior: "Siamo Design interior — post", email: "Email us", social: "Social media",
};

export function getContent(locale: Locale = "es", routeMode: RouteMode = "lab") {
  const copy = locale === "en" ? en : es;
  return routeMode === "public" ? { ...copy, languageHref: locale === "en" ? "/es/" : "/" } : copy;
}
