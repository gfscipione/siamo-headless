import PortfolioNav from "../components/PortfolioNav";
import { playfairFont, poppinsFont } from "../fonts";
import AboutHeroVideo from "./video";

export const metadata = {
  title: "Get to Know Us — Siamo Design",
  description: "Learn about Siamo Design, our ethos, and the team behind our work.",
};

export default function GetToKnowUsPage() {
  const wwdItems = [
    {
      title: "Interior Design Firm",
      copy:
        "We lead projects end-to-end under our creative direction, crafting balanced spaces that feel classic and current.",
      icon: (
        <svg viewBox="0 0 64 64" className="about-wwd__icon" aria-hidden="true">
          <rect x="10" y="12" width="44" height="40" stroke="currentColor" fill="none" strokeWidth="2" />
          <line x1="10" y1="28" x2="54" y2="28" stroke="currentColor" strokeWidth="2" />
          <line x1="22" y1="28" x2="22" y2="52" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="28" x2="32" y2="52" stroke="currentColor" strokeWidth="2" />
          <line x1="42" y1="28" x2="42" y2="52" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Editorial Content",
      copy:
        "We share guidance, lifestyle inspiration, and design stories to help you bring the Siamo aesthetic into your own spaces.",
      icon: (
        <svg viewBox="0 0 64 64" className="about-wwd__icon" aria-hidden="true">
          <rect x="12" y="16" width="40" height="32" stroke="currentColor" fill="none" strokeWidth="2" />
          <line x1="18" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="18" y1="30" x2="46" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="18" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Product Design",
      copy:
        "We collaborate with partners to design pieces that reflect our signature warmth and balance, from furniture to styling accents.",
      icon: (
        <svg viewBox="0 0 64 64" className="about-wwd__icon" aria-hidden="true">
          <path d="M16 32c0-6 4-10 10-10h12c6 0 10 4 10 10v12h-4v-6H20v6h-4V32Z" stroke="currentColor" fill="none" strokeWidth="2" />
          <path d="M20 44v4c0 2 1 3 3 3h18c2 0 3-1 3-3v-4" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const journeyEntries = [
    {
      year: "2014",
      title: "The Beginning",
      copy:
        "Siamo Design nació con la misión de diseñar espacios acogedores y funcionales que se sientan como un refugio, combinando creatividad con ejecución impecable.",
      image: "/assets/img/post1.jpeg",
    },
    {
      year: "2016",
      title: "Siamo Design & Co.",
      copy:
        "Exploramos productos y curaduría, ampliando nuestra mirada al diseño integral y a la selección de piezas que elevan cada ambiente.",
      image: "/assets/img/post2.jpeg",
    },
    {
      year: "2018",
      title: "The Siamo Design Home",
      copy:
        "Consolidamos nuestro enfoque en proyectos residenciales y de hospitalidad, sumando dirección creativa y gestión de obra de principio a fin.",
      image: "/assets/img/post3.jpeg",
    },
    {
      year: "2020",
      title: "Expanding Our Reach",
      copy:
        "Crecimos hacia colaboraciones internacionales y estrategias digitales para compartir el estilo Siamo con más hogares y marcas.",
      image: "/assets/img/post4.jpeg",
    },
  ];
  return (
    <>
      <PortfolioNav
        styleVars={{
          ["--nav-col-gap" as any]: "0px",
          ["--nav-inner-maxw" as any]: "1700px",
          ["--nav-item-gap" as any]: "44px",
          ["--nav-title-fs" as any]: "14px",
          ["--nav-title-fs-m" as any]: "12px",
          ["--nav-bar-h-desktop" as any]: "50px",
          ["--nav-bar-h-mobile" as any]: "40px",
          ["--brand-fs" as any]: "22px",
          ["--brand-fs-m" as any]: "14px",
          ["--wwd-title-w" as any]: "400",
          ["--nav-cta-padx" as any]: "42px",
          ["--nav-cta-pady" as any]: "14px",
          ["--hero-cta-padx-m" as any]: "22px",
          ["--hero-cta-pady-m" as any]: "8px",
          ["--nav-cta-bg" as any]: "#F4F2EA",
          ["--nav-cta-ink" as any]: "#111111",
          ["--nav-cta-bg-hover" as any]: "#F4F2EA",
        }}
        isHero
        variant="gtku"
      />

      <main className="about-hero-page">
        <section className="about-hero" aria-label="About hero">
          <div className="about-hero__content">
            <h1 className={`about-hero__title ${playfairFont.className}`}>About</h1>
          </div>
          <div className="about-hero__media">
            <AboutHeroVideo src="/assets/videos/about.mp4" ariaLabel="About Siamo Design" />
          </div>
        </section>

        <section className="about-story" aria-label="About Siamo story">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Siamo Design is a multi-disciplinary interior design firm known for creating beautifully balanced spaces that feel classic and current.
          </h2>

          <div className="about-story__grid">
            <div className="about-story__media">
              <img src="/assets/img/post4.jpeg" alt="Shelving and styling details" />
            </div>
            <div className="about-story__body">
              <h3 className={`about-story__title ${playfairFont.className}`}>
                Our mission is to make life beautiful for ourselves and those around us.
              </h3>
              <p className={poppinsFont.className}>
                Led by a passionate team of designers and project leads, Siamo Design blends strategic planning with tactile, human details. We guide clients from concept to installation, balancing form and function to create warm, elevated interiors.
              </p>
              <p className={poppinsFont.className}>
                Our portfolio spans residential and hospitality projects, and we craft content to help clients and followers bring the Siamo aesthetic into their own spaces. From bespoke builds to curated refreshes, we tailor every project to the people who will live in it.
              </p>
            </div>
          </div>
        </section>

        <section className="about-wwd" aria-label="What we do">
          <div className="about-wwd__inner">
            <h2 className={`about-wwd__title ${playfairFont.className}`}>What We Do</h2>
            <div className="about-wwd__grid">
              {wwdItems.map((item) => (
                <article className="about-wwd__item" key={item.title}>
                  {item.icon}
                  <h3 className={`${playfairFont.className}`}>{item.title}</h3>
                  <p className={poppinsFont.className}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey-placeholder" aria-label="Upcoming timeline section">
          <div className="about-journey-placeholder__inner">
            <h2 className={`about-journey__title ${playfairFont.className}`}>Siamo Design</h2>
            <p className={`about-journey__subtitle ${playfairFont.className}`}>Through The Years</p>
            <div className="about-journey__grid">
              {journeyEntries.map((entry) => (
                <article className="about-journey__item" key={entry.image}>
                  <div className="about-journey__image">
                    <img src={entry.image} alt={`${entry.title} (${entry.year})`} loading="lazy" />
                  </div>
                  <div className="about-journey__meta">
                    <p className={`about-journey__year ${playfairFont.className}`}>{entry.year}</p>
                    <h3 className={`about-journey__entry-title ${playfairFont.className}`}>{entry.title}</h3>
                    <p className={`about-journey__copy ${poppinsFont.className}`}>{entry.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta" aria-label="Explore design services">
          <div className="about-cta__inner">
            <div className="about-cta__text">
              <h3 className={`about-cta__headline ${playfairFont.className}`}>
                Have a project in mind?<br />Explore Our Design Services
              </h3>
              <a className="about-cta__btn" href="/services">Find out more</a>
            </div>
            <div className="about-cta__media">
              <img src="/assets/img/post5.jpeg" alt="Dining room styled by Siamo Design" loading="lazy" />
            </div>
          </div>
        </section>

        <footer
          className="portfolio-footer"
          style={{
            ['--footer-lift' as any]: "0px",
            ['--footer-overlap' as any]: "40px",
            ['--footer-pad-top' as any]: "82px",
            ['--footer-pad-top-mobile' as any]: "32px",
            ['--footer-pad-bottom-mobile' as any]: "18px",
            ['--footer-overlap-mobile' as any]: "40px",
            ['--footer-h' as any]: "200px",
            ['--footer-bottom-maxw' as any]: "1100px",
          }}
        >
          <div className="footer-inner">
            <section className="footer-seo" aria-label="Service areas and keyword index">
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior design services playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging playa del carmen</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design playa del carmen</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging riviera maya</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design riviera maya</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging Cancun</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design Cancun</li>
              </ul>
              <ul className="seo-col">
                <li><span className="check" aria-hidden="true">✓</span> Interior design tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior design services tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Interior designers and decorators tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Home staging tulum</li>
                <li><span className="check" aria-hidden="true">✓</span> Commercial interior design tulum</li>
              </ul>
            </section>

            <div className="footer-explore" aria-label="Explore and social">
              <nav className="explore" aria-label="Explore">
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/get-to-know-us">About</a>
                <a href="mailto:hello@siamodesign.com" aria-label="Email us">Email</a>
                <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  WhatsApp
                </a>
              </nav>
              <div className="social" aria-label="Social profiles">
                <a className="social__link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                    <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.instagram.com/siamo_design" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
                    <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
                    <circle cx="17.4" cy="6.6" r="1" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-legal" aria-label="Legal information">
              <p className="legal-line">
                <span className="left">Siamo Design</span>
                <span className="divider" aria-hidden="true">|</span>
                <span className="right">Interior Design Studio</span>
              </p>
              <p className="legal-line">
                <span className="left">Copyright © 2025 Siamo Design</span>
                <span className="divider" aria-hidden="true">|</span>
                <span className="right">Todos los derechos reservados</span>
              </p>
              <p className="legal-sig">powered by StratUpdate</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
