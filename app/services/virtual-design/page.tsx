import Image from "next/image";
import PortfolioNav from "../../components/PortfolioNav";
import FaqAccordion from "../../components/FaqAccordion";
import { playfairFont, poppinsFont } from "../../fonts";

export const metadata = {
  title: "Virtual Interior Design — Siamo Design",
  description:
    "Remote interior design with tailored plans, curated shopping lists, and expert guidance to reimagine your space from anywhere.",
};

export default function VirtualDesignPage() {
  const styleVars = {
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
  };

  const heroBgHeightPx = 390;

  const benefits = [
    {
      title: "Cost Effective",
      copy: "Save on traditional designer fees while still receiving transformed home designs.",
      icon: "pig",
    },
    {
      title: "Flexible Implementation",
      copy: "Maximise your time by working through the design process from your own home.",
      icon: "clock",
    },
    {
      title: "Expert Designers",
      copy: "Receive a custom design plan tailored to your style preferences.",
      icon: "desk",
    },
  ];

  const deliverables = [
    {
      title: "Mood Board",
      copy: "An important foundation! Your designer will curate a group of images, colors, and design elements to inspire the look and concept of your project.",
      icon: "mood",
    },
    {
      title: "Space Plan & Elevations",
      copy: "We provide you with a floorplan, focusing on improving flow and functionality of each space. Your designer will draw your interior elevations for your builder to implement the design.",
      icon: "plan",
    },
    {
      title: "Finishes Selection",
      copy: "Our team designs every detail of your project for a cohesive and beautiful design, from tile and hardwood to fixtures and faucets.",
      icon: "finishes",
    },
    {
      title: "Furniture Selection",
      copy: "Our designers select furnishings with attention to all the details—lifestyle, scale, color, and budget. Our styling team adds the finishing touches to elevate your design and tell your story.",
      icon: "furniture",
    },
    {
      title: "Video Walkthrough",
      copy: "Our designers will send you videos you can use to review your project with your builder or refer back to them as you order products for your new space.",
      icon: "video",
    },
    {
      title: "Shoppable Item List",
      copy: "Our designers will provide you with a list with links for every selection, allowing you to implement on your own timeline. We also extend a discount for any McGee & Co. pieces on your list!",
      icon: "tag",
    },
  ];

  const faqs = [
    {
      question: "What is the difference between Full Service Interior Design and Virtual Interior Design?",
      answer:
        "Full Service Interior Design involves larger scale projects and include in-person consultations, comprehensive project management, site visits, furniture procurement, and hands-on installation. Virtual Interior Design offers a more flexible, remote approach for one space at a time to create custom design plans and shopping lists that can be implemented on your own as time and budget allow.",
    },
    {
      question: "How do I know which service is right for me?",
      answer:
        "To identify what service better suits you and your lifestyle, there are several key project factors to consider, including time frame, size and scope, budget, and level of involvement. Please visit our Virtual Interior Design page and our Full Service Interior Design page to review the key differences in more depth and determine the service that best meets your project needs.",
    },
    {
      question: "How much do your design services cost?",
      answer:
        "Fees vary by scope. We start with a consultation to define your needs, then share a tailored proposal with a flat design fee and estimated furnishings budget.",
    },
    {
      question: "Can I see examples of your past work?",
      answer: (
        <>
          In a range of styles while all embracing the Siamo Design aesthetic, our design
          portfolio showcases our recent projects and provides endless inspiration:{" "}
          <a href="/portfolio">View Our Portfolio</a>
        </>
      ),
    },
    {
      question: "Do you work with clients outside of your local area?",
      answer:
        "Yes. We serve clients both locally and remotely. For on-site projects, we travel as needed; for remote projects, our Virtual Interior Design service keeps everything coordinated from afar.",
    },
    {
      question: "What interior design styles do you specialize in?",
      answer:
        "We have garnered a reputation for beautifully balanced spaces that feel both refreshingly modern and endlessly classic. The signature Siamo Design style is warm, thoughtful, and inviting. We have designed homes with traditional details and vintage pieces, and homes with sleek lines and organic materials, all while weaving our signature style throughout. Our talented team of design professionals tailor their work to the needs of each client, taking into account how they’ll live within the space, and whether the home is a new build or a renovation. We also work to matchmake, aligning each design team to a client’s unique aesthetic and lifestyle.",
    },
  ];

  return (
    <>
      <PortfolioNav styleVars={styleVars} isHero />

      <main className="services-page overscroll-safe about-hero-page">
        <section
          className="services-hero hero-virtual-compact"
          aria-label="Virtual design hero"
          style={{
            backgroundImage: "none",
            alignItems: "flex-start",
            ["--virtual-hero-bg-h" as any]: `${heroBgHeightPx}px`,
            ["--virtual-hero-pad-top" as any]: "9rem",
            ["--virtual-hero-pad-x" as any]: "24px",
          }}
        >
          <div className="services-hero__content">
            <section className="portfolio-hero-block" aria-label="Virtual design intro" style={{ margin: "0 0 0" }}>
              <div className="portfolio-crumb" style={{ color: "#f4f2ea", opacity: 1 }}>
                HOME • SERVICES • VIRTUAL DESIGN
              </div>
              <h1
                className={`portfolio-hero-title ${playfairFont.className}`}
                style={{ color: "#f4f2ea", opacity: 1 }}
              >
                Virtual Interior Design
              </h1>
              <div className="portfolio-filter-row">
                <button className="portfolio-filter-btn">
                  FILTER <span className="chevron">⌄</span>
                </button>
              </div>
            </section>
          </div>
        </section>

        <div className="virtual-hero-image">
          <Image
            src="/assets/img/post6.jpeg"
            alt="Virtual design inspiration"
            fill
            sizes="100vw"
            priority={false}
            className="virtual-hero-image__media"
          />
        </div>

        <section className="about-story" aria-label="About Siamo story">
          <h2 className={`about-story__headline ${playfairFont.className}`}>
            Discover the convenience and flexibility of Siamo Design's Virtual Interior Design Services—an efficient alternative to our traditional full-service projects. Ideal for clients who prefer an approach that can be adapted to their lifestyle and executed on their own terms.
          </h2>
        </section>

        <section className="how-it-works" aria-label="How it works">
          <div className="how-it-works__inner">
            <h2 className={`how-it-works__title ${playfairFont.className}`}>How it Works</h2>
            <div className="how-it-works__grid">
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>1</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Select a Service
                  <br />
                  &amp; Your Room
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>2</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Personalized
                  <br />
                  Design Creation
                </div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>3</div>
                <div className={`how-step__label ${playfairFont.className}`}>Design Review Sessions</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>4</div>
                <div className={`how-step__label ${playfairFont.className}`}>Finishing Touches</div>
              </article>
              <article className="how-step">
                <div className={`how-step__number ${playfairFont.className}`}>5</div>
                <div className={`how-step__label ${playfairFont.className}`}>
                  Implement the
                  <br />
                  Design
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="virtual-benefits" aria-label="Benefits of virtual design">
          <div className="virtual-benefits__inner">
            <h2 className={`virtual-benefits__title ${playfairFont.className}`}>Benefits of Virtual Design</h2>
            <div className="virtual-benefits__grid">
              {benefits.map((benefit) => (
                <article className="virtual-benefit" key={benefit.title}>
                  <div className="virtual-benefit__icon" aria-hidden="true">
                    {benefit.icon === "pig" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M12 32c0-9.5 8-17 18-17h12c9 0 16 7.5 16 17v2c0 1.1-.9 2-2 2h-5l-3 4-3-4H38c-1.3 0-2.5-.8-3-2l-.8-2H26c-6.6 0-12-4.5-12-10z" />
                        <path d="M12 30l-6-3" />
                        <circle cx="23" cy="30" r="2" />
                        <path d="M50 30c2 0 4 2 4 4s-2 3-3.5 3" />
                        <path d="M28 47v5M40 47v5" />
                      </svg>
                    )}
                    {benefit.icon === "clock" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <circle cx="32" cy="32" r="22" />
                        <path d="M32 18v14l9 6" />
                      </svg>
                    )}
                    {benefit.icon === "desk" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M10 28h44v6H10z" />
                        <path d="M18 34h4v16h-4zM42 34h4v16h-4z" />
                        <path d="M22 22h8v6h-8zM34 22h8v6h-8z" />
                        <path d="M12 50h8v4h-8zM44 50h8v4h-8z" />
                      </svg>
                    )}
                  </div>
                  <h3 className={`virtual-benefit__title ${playfairFont.className}`}>{benefit.title}</h3>
                  <p className={`virtual-benefit__copy ${poppinsFont.className}`}>{benefit.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="virtual-video-bridge" aria-label="Virtual design video teaser">
          <div className="virtual-video-bridge__inner">
            <div className="virtual-video-bridge__frame">
              <Image
                src="/assets/img/virtual.png"
                alt="Virtual design video"
                fill
                sizes="100vw"
                priority={false}
                className="virtual-video-bridge__poster"
              />
              <div className="virtual-video-bridge__play" aria-hidden="true">
                ▶
              </div>
            </div>
          </div>
        </section>

        <section className="virtual-deliverables" aria-label="Deliverables">
          <div className="virtual-deliverables__inner">
            <h2 className={`virtual-deliverables__title ${playfairFont.className}`}>Deliverables</h2>
            <div className="virtual-deliverables__grid">
              {deliverables.map((item) => (
                <article className="virtual-deliverable" key={item.title}>
                  <div className="virtual-deliverable__icon" aria-hidden="true">
                    {item.icon === "mood" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <rect x="10" y="10" width="44" height="34" rx="3" />
                        <rect x="16" y="16" width="16" height="12" />
                        <path d="M36 20h12M36 26h8" />
                        <path d="M16 46h32" />
                      </svg>
                    )}
                    {item.icon === "plan" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <rect x="12" y="10" width="40" height="44" rx="3" />
                        <path d="M20 10v44M44 26H20M32 10v10M32 36v18" />
                        <path d="M32 26h12v18H32" />
                      </svg>
                    )}
                    {item.icon === "finishes" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M22 14h20l8 10-8 10H22l-8-10z" />
                        <path d="M22 34h20l8 10-8 10H22l-8-10z" />
                      </svg>
                    )}
                    {item.icon === "furniture" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M14 34h36v8H14z" />
                        <path d="M18 22h28v12H18z" />
                        <path d="M22 42v10M42 42v10" />
                        <path d="M18 28h-4v6h4M46 28h4v6h-4" />
                      </svg>
                    )}
                    {item.icon === "video" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <rect x="10" y="16" width="44" height="32" rx="3" />
                        <path d="M30 26l12 6-12 6z" />
                        <path d="M10 44h44M20 48v4M44 48v4" />
                      </svg>
                    )}
                    {item.icon === "tag" && (
                      <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M14 12h22l14 14-22 22L8 34V18a6 6 0 0 1 6-6z" />
                        <circle cx="22" cy="22" r="3" />
                      </svg>
                    )}
                  </div>
                  <h3 className={`virtual-deliverable__title ${playfairFont.className}`}>{item.title}</h3>
                  <p className={`virtual-deliverable__copy ${poppinsFont.className}`}>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section" aria-label="Frequently asked questions">
          <div className="faq-section__inner">
            <div className="faq-section__title-col">
              <h2 className={`faq-section__title ${playfairFont.className}`}>
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <footer
          className="portfolio-footer"
          style={{
            ["--footer-lift" as any]: "0px",
            ["--footer-overlap" as any]: "40px",
            ["--footer-pad-top" as any]: "82px",
            ["--footer-pad-top-mobile" as any]: "32px",
            ["--footer-pad-bottom-mobile" as any]: "18px",
            ["--footer-overlap-mobile" as any]: "40px",
            ["--footer-h" as any]: "200px",
            ["--footer-bottom-maxw" as any]: "1100px",
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
                <a className="social__link" href="https://www.instagram.com/siamodesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
