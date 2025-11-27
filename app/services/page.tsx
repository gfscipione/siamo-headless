export const metadata = {
  title: "Services — Siamo Design",
  description: "Interior design services offered by Siamo Design across the Riviera Maya.",
};

import Image from "next/image";
import PortfolioNav from "../components/PortfolioNav";

import { playfairFont, poppinsFont } from "../fonts";

const services = [
  {
    title: "Full-Service Interior Design",
    subtitle: "The luxury of a professionally designed home tailored to your lifestyle.",
    description:
      "Experience custom design creation with our Full-Service Interior Design. Our experts manage every detail, from space planning to final installation, providing a personalized and stress-free journey to your dream home.",
    image: "/assets/img/post4.jpeg",
    cta: "Find out more",
  },
  {
    title: "Virtual Interior Design",
    subtitle: "Reimagine your space effortlessly on your own timeline.",
    description:
      "Our Virtual Interior Design service delivers the same custom design creation paired with the flexibility of remote collaboration. Reimagine your space with tailored plans and curated shopping lists from our designers.",
    image: "/assets/img/post6.jpeg",
    cta: "Find out more",
  },
];

const promises = [
  {
    title: "Proven Track Record",
    copy:
      "Our designers bring years of experience and a collaborative process that pairs tailored perspectives with flawless delivery.",
    icon: "desk",
  },
  {
    title: "Detail-Oriented Planning",
    copy:
      "From finish schedules to procurement and installation, every step is managed with precision, keeping you as involved as you want to be.",
    icon: "book",
  },
  {
    title: "Intentional Design",
    copy:
      "We curate spaces that feel elevated and timeless, with every project crafted uniquely for the client and their lifestyle.",
    icon: "cabinet",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PortfolioNav
        styleVars={{
          ['--nav-col-gap' as any]: "0px",
          ['--nav-inner-maxw' as any]: "1700px",
          ['--nav-item-gap' as any]: "44px",
          ['--nav-title-fs' as any]: "14px",
          ['--nav-title-fs-m' as any]: "12px",
          ['--nav-bar-h-desktop' as any]: "50px",
          ['--nav-bar-h-mobile' as any]: "40px",
          ['--brand-fs' as any]: "22px",
          ['--brand-fs-m' as any]: "14px",
          ['--wwd-title-w' as any]: "400",
          ['--nav-cta-padx' as any]: "42px",
          ['--nav-cta-pady' as any]: "14px",
          ['--hero-cta-padx-m' as any]: "22px",
          ['--hero-cta-pady-m' as any]: "8px",
          ['--nav-cta-bg' as any]: "#F4F2EA",
          ['--nav-cta-ink' as any]: "#111111",
          ['--nav-cta-bg-hover' as any]: "#F4F2EA",
        }}
        isHero
      />

      <main className="services-page overscroll-safe">
        <section className="services-hero" aria-label="Services hero">
          <div className="services-hero__scrim" />
          <div className="services-hero__content">
            <h1 className={`services-hero__title ${playfairFont.className}`}>Services</h1>
            <p className={`services-hero__lead ${playfairFont.className}`}>
              Siamo Design offers full-service and virtual interior design, blending warmth, texture, and thoughtful detail. Our services shape relaxed yet refined spaces across the Riviera Maya and for clients wherever they call home.
            </p>
          </div>
        </section>

        <section className="services-section" aria-label="Our services">
          <div className="services-section__inner">
            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                  id={service.title.toLowerCase().includes("virtual") ? "virtual" : "on-site"}
                >
                  <div className="service-card__media">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>
                  <div className="service-card__body">
                    <h3 className={`service-card__title ${playfairFont.className}`}>
                      {service.title}
                    </h3>
                    <p className={`service-card__subtitle ${playfairFont.className}`}>
                      {service.subtitle}
                    </p>
                    <p className={`service-card__copy ${poppinsFont.className}`}>
                      {service.description}
                    </p>
                    <button className="service-card__cta">{service.cta}</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="promises-section" aria-label="Our promises">
          <div className="promises-section__inner">
            <div className="promises-header">
              <h2 className={`promises-title ${playfairFont.className}`}>Our Promises</h2>
            </div>

            <div className="promises-grid">
              {promises.map((promise) => (
                <article className="promise-card" key={promise.title}>
                  <div className="promise-card__icon" aria-hidden="true">
                    {promise.icon === "desk" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M10 26h44v4H10z" />
                        <path d="M18 30h4v16h-4zM42 30h4v16h-4z" />
                        <path d="M20 20h8v6h-8zM36 20h8v6h-8z" />
                        <path d="M12 46h8v4h-8zM44 46h8v4h-8z" />
                      </svg>
                    )}
                    {promise.icon === "book" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M18 14h28v36H18z" />
                        <path d="M24 18h16v2H24zM24 24h16v2H24zM24 30h16v2H24zM24 36h10v2H24z" />
                      </svg>
                    )}
                    {promise.icon === "cabinet" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M12 18h40v28H12z" />
                        <path d="M12 30h40v4H12z" />
                        <circle cx="26" cy="32" r="2" />
                        <circle cx="38" cy="32" r="2" />
                      </svg>
                    )}
                  </div>
                  <h3 className={`promise-card__title ${playfairFont.className}`}>
                    {promise.title}
                  </h3>
                  <p className={`promise-card__copy ${poppinsFont.className}`}>
                    {promise.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
