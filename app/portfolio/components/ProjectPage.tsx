import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import PortfolioNav from "../../components/PortfolioNav";
import { playfairFont, poppinsFont } from "../../fonts";
import QuestionnaireCtaLink from "../../components/QuestionnaireCtaLink";

type ProjectSectionImage = {
  src: string;
  alt: string;
};

type ProjectSection = {
  title: string;
  description?: string;
  mainImage?: ProjectSectionImage;
  mainSizes?: string;
  isSquare?: boolean;
  isFloorplan?: boolean;
  duoImages?: ProjectSectionImage[];
  secondaryImage?: ProjectSectionImage & { isSquare?: boolean };
  extraImages?: (ProjectSectionImage & { isSquare?: boolean })[];
};

type FeaturedProject = {
  title: string;
  location: string;
  summary: string;
  image: string;
  href?: string;
};

type SocialItem = {
  image: string;
  text: string;
};

type ProjectPageProps = {
  title: string;
  styleVars?: CSSProperties;
  navLabels?: {
    getToKnowUs?: string;
    services?: string;
    portfolio?: string;
    langDesktop?: string;
    langMobile?: string;
    cta?: string;
  };
  metaLabels?: {
    location?: string;
    workWithUs?: string;
    bookConsultation?: string;
    share?: string;
  };
  sectionLabels?: {
    contentsTitleRight?: string;
    featuredProjects?: string;
    follow?: string;
  };
  footerNavLabels?: {
    services?: string;
    portfolio?: string;
    about?: string;
    email?: string;
    whatsapp?: string;
  };
  footerLegal?: {
    line1: ReactNode;
    line2: ReactNode;
    sig?: ReactNode;
  };
  hero: {
    backgroundImage: string;
    titleSize?: string;
    titleSizeMobile?: string;
    align?: string;
    padTop?: string;
    padTopDesktopPx?: number;
    padBottom?: string;
    contentPadX?: string;
  };
  contents: string[];
  meta: {
    location: string;
    workLinkHref: string;
    shareLinks: { label: string; href: string; aria: string }[];
  };
  navLangHref?: string;
  sections: ProjectSection[];
  featuredProjects: FeaturedProject[];
  socialItems: SocialItem[];
  followHandle?: string;
  footerStyleVars?: CSSProperties;
};

export default function ProjectPage({
  title,
  styleVars,
  navLabels,
  metaLabels,
  sectionLabels,
  footerNavLabels,
  footerLegal,
  hero,
  contents,
  meta,
  sections,
  featuredProjects,
  socialItems,
  followHandle,
  footerStyleVars,
  navLangHref,
}: ProjectPageProps) {
  const slugify = (text: string, fallback: string = "section") => {
    const normalized = (text || fallback)
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "");
    return (
      normalized
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || fallback
    );
  };

  const locationLabel = metaLabels?.location ?? "Location";
  const workWithUsLabel = metaLabels?.workWithUs ?? "Work with us";
  const bookConsultationLabel = metaLabels?.bookConsultation ?? "Book consultation";
  const contentsTitleRight = sectionLabels?.contentsTitleRight ?? "Contents";
  const featuredProjectsLabel = sectionLabels?.featuredProjects ?? "Featured Projects";
  const followLabel = sectionLabels?.follow ?? "Follow";
  const footerServicesLabel = footerNavLabels?.services ?? "Services";
  const footerPortfolioLabel = footerNavLabels?.portfolio ?? "Portfolio";
  const footerAboutLabel = footerNavLabels?.about ?? "About";
  const footerEmailLabel = footerNavLabels?.email ?? "Email";
  const footerWhatsAppLabel = footerNavLabels?.whatsapp ?? "WhatsApp";

  return (
    <>
      <PortfolioNav
        styleVars={styleVars || {}}
        isHero
        langHref={navLangHref}
        labels={navLabels}
      />

      <main className="services-page overscroll-safe">
        <section
          className="services-hero"
          aria-label="Project hero"
          style={{
            alignItems: hero.align || "center",
            ["--project-hero-title-size" as any]: hero.titleSize || "64px",
            ["--project-hero-title-size-mobile" as any]: hero.titleSizeMobile || "50px",
            ["--project-hero-align" as any]: hero.align || "center",
            ["--project-hero-pad-top" as any]: hero.padTopDesktopPx
              ? `${hero.padTopDesktopPx}px`
              : hero.padTop || "clamp(4rem, 8vh, 7rem)",
            ["--project-hero-pad-bottom" as any]: hero.padBottom || "clamp(4rem, 8vh, 7rem)",
            backgroundImage: `url("${hero.backgroundImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="services-hero__scrim" />
          <div
            className="services-hero__content"
            style={{ paddingLeft: hero.contentPadX || "24px", paddingRight: hero.contentPadX || "24px" }}
          >
            <h1 className={`services-hero__title ${playfairFont.className}`}>{title}</h1>
          </div>
        </section>

        <section className="project-contents" aria-label="Project contents">
          <div className="project-contents__inner">
            <div className="project-contents__title project-contents__title--project">{title}</div>
            <div className="project-contents__title project-contents__title--right">{contentsTitleRight}</div>
            <div className="project-contents__divider" aria-hidden="true" />
            <div className="project-contents__list">
              {contents.map((item, idx) => (
                <a
                  className="project-contents__row"
                  key={`${idx}-${item}`}
                  href={`#${slugify(item, `section-${idx + 1}`)}`}
                >
                  <span className="project-contents__index">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="project-contents__label">{item.toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="project-details project-details--m-pad"
          aria-label="Project sections"
          style={{
            ["--project-meta-pad-bottom" as any]: "110px",
          }}
        >
          <div className="project-details__grid">
            <aside className="project-detail__meta">
              <div className={`project-detail__meta-block ${poppinsFont.className}`}>
                <div className="project-detail__meta-label">{locationLabel}</div>
                <div className="project-detail__meta-value">{meta.location}</div>
              </div>
              <div className={`project-detail__meta-block ${poppinsFont.className}`}>
                <div className="project-detail__meta-label">{workWithUsLabel}</div>
                {meta.workLinkHref.startsWith("/questionnaire") ? (
                  <QuestionnaireCtaLink className="project-detail__link" href={meta.workLinkHref}>
                    {bookConsultationLabel}
                  </QuestionnaireCtaLink>
                ) : (
                  <a className="project-detail__link" href={meta.workLinkHref}>
                    {bookConsultationLabel}
                  </a>
                )}
              </div>
            </aside>

            <div className="project-details__list">
              {sections.map((section, idx) => {
                const step = String(idx + 1).padStart(2, "0");
                const mainImageSizes = section.mainImage
                  ? section.mainSizes || (section.isFloorplan
                    ? "(max-width: 768px) 100vw, 55vw"
                    : "(max-width: 768px) 100vw, 70vw")
                  : undefined;

                return (
                  <article
                    className="project-detail"
                    id={slugify(section.title, `section-${idx + 1}`)}
                    key={`${idx}-${section.title}`}
                  >
                    <div className="project-detail__inner">
                      <div className="project-detail__body">
                        <div className="project-detail__header">
                          <span className="project-detail__step">{step}</span>
                          <h2 className={`project-detail__title ${playfairFont.className}`}>{section.title}</h2>
                        </div>
                        {section.description ? (
                          <p className="project-detail__description">
                            {section.description}
                          </p>
                        ) : null}
                        {section.duoImages && (
                          <div className="project-detail__duo">
                            {section.duoImages.map((img) => (
                              <div className="project-detail__duo-img" key={img.src}>
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 45vw"
                                  style={{ objectFit: "cover" }}
                                  priority={false}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        {section.mainImage && (
                          <div
                            className={`project-detail__image ${section.isSquare ? "project-detail__image--square" : ""} ${section.isFloorplan ? "project-detail__image--floorplan" : ""}`}
                          >
                            <Image
                              src={section.mainImage.src}
                              alt={section.mainImage.alt}
                              fill
                              sizes={mainImageSizes}
                              style={{ objectFit: "cover" }}
                              priority={false}
                            />
                          </div>
                        )}
                        {section.secondaryImage && (
                          <div
                            className={`project-detail__image project-detail__image--secondary ${
                              section.secondaryImage.isSquare ? "project-detail__image--square" : ""
                            }`}
                          >
                            <Image
                              src={section.secondaryImage.src}
                              alt={section.secondaryImage.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 70vw"
                              style={{ objectFit: "cover" }}
                              priority={false}
                            />
                          </div>
                        )}
                        {section.extraImages?.map((img) => (
                          <div
                            className={`project-detail__image project-detail__image--secondary ${
                              img.isSquare ? "project-detail__image--square" : ""
                            }`}
                            key={img.src}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 70vw"
                              style={{ objectFit: "cover" }}
                              priority={false}
                            />
                          </div>
                        ))}
                        {idx === sections.length - 1 && (
                          <div className="project-detail__divider" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="featured-projects featured-projects--row"
          aria-label="Featured projects"
          style={{ paddingTop: "3rem", paddingBottom: "2.5rem", background: "#f8f6f2" }}
        >
          <div className="featured-projects__inner">
            <h2 className={`featured-projects__title ${playfairFont.className}`}>{featuredProjectsLabel}</h2>
            <div className="featured-projects__grid">
              {featuredProjects.map((project) => {
                const Card = (
                  <>
                    <div className="featured-project__media">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={false}
                      />
                    </div>
                    <div className="featured-project__body">
                      <h3 className={`featured-project__title ${playfairFont.className}`}>
                        {project.title}
                      </h3>
                      <p className={`featured-project__summary ${playfairFont.className}`}>
                        {project.summary}
                      </p>
                      <p className={`featured-project__location ${poppinsFont.className}`}>
                        {project.location}
                      </p>
                    </div>
                  </>
                );

                return project.href ? (
                  <a key={project.title} className="featured-project" href={project.href}>
                    {Card}
                  </a>
                ) : (
                  <article key={project.title} className="featured-project">
                    {Card}
                  </article>
                );
              })}
            </div>
          </div>
          <div className="project-detail__divider featured-projects__divider" aria-hidden="true" />
        </section>

        <section
          className="social-follow"
          aria-label="Follow on social"
        >
          <div className="social-follow__inner">
            <div className="social-follow__title-col">
              <h2 className={`social-follow__title ${playfairFont.className}`}>{followLabel}</h2>
              {followHandle ? (
                <a
                  className={`social-follow__handle ${playfairFont.className}`}
                  href={`https://www.instagram.com/${followHandle.replace(/^@/, "")}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {followHandle}
                </a>
              ) : (
                <p className={`social-follow__handle ${playfairFont.className}`}>@siamo_design</p>
              )}
            </div>
            <div className="social-follow__list" role="list">
              {socialItems.map((item) => (
                <article className="social-card" role="listitem" key={item.image}>
                  <div className="social-card__media">
                    <Image
                      src={item.image}
                      alt="Siamo Design post"
                      fill
                      sizes="(max-width: 768px) 90vw, 240px"
                      priority={false}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer
          className="portfolio-footer"
          style={{
            ['--footer-lift' as any]: "0px",
            ['--footer-overlap' as any]: "0px",
            ['--footer-pad-top-mobile' as any]: "0px",
            ['--footer-pad-bottom-mobile' as any]: "18px",
            ['--footer-overlap-mobile' as any]: "0px",
            ['--footer-h' as any]: "200px",
            ['--footer-bottom-maxw' as any]: "1100px",
            ...(footerStyleVars || {}),
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
                <a href="/services">{footerServicesLabel}</a>
                <a href="/portfolio">{footerPortfolioLabel}</a>
                <a href="/get-to-know-us">{footerAboutLabel}</a>
                <a href="mailto:hello@siamodesign.com" aria-label="Email us">{footerEmailLabel}</a>
                <a href="https://wa.me/529842111989" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  {footerWhatsAppLabel}
                </a>
              </nav>
              <div className="social" aria-label="Social profiles">
                <a className="social__link" href="https://www.linkedin.com/company/siamo-design/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.5 9h2.9v9H6.5V9Zm1.4-4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM10.8 9h2.8v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6V18h-2.9v-4.2c0-1-.1-2.3-1.5-2.3-1.5 0-1.8 1.1-1.8 2.2V18h-2.9V9Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.youtube.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.7 8.2s-.2-1.5-.8-2.2c-.7-.8-1.5-.8-1.8-.9C16.2 5 12 5 12 5h0s-4.2 0-7.1.1c-.3 0-1.1 0-1.8.9-.6.7-.8 2.2-.8 2.2S2 9.9 2 11.6v.8c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.2c.7.8 1.7.8 2.2.9 1.6.2 6.8.2 6.8.2s4.2 0 7.1-.1c.3 0 1.1 0 1.8-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.4v-.8c0-1.7-.2-3.4-.2-3.4Z" />
                    <path d="m10 9.8 4.7 2.2L10 14.2V9.8Z" fill="#fff" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.tiktok.com/@siamodesign" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.5 4.2c.6.8 1.5 1.3 2.5 1.3h.4v2.5c-.9 0-1.8-.2-2.6-.6v5.5a5.08 5.08 0 1 1-5.1-5.1c.3 0 .6 0 .9.1v2.7a2.4 2.4 0 0 0-.9-.2 2.38 2.38 0 1 0 2.38 2.4V3h2.5v1.2Z" />
                  </svg>
                </a>
                <a className="social__link" href="https://www.instagram.com/siamo_design/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7.2 4.5h9.6A2.7 2.7 0 0 1 19.5 7v9.6a2.7 2.7 0 0 1-2.7 2.7H7.2A2.7 2.7 0 0 1 4.5 16.6V7a2.7 2.7 0 0 1 2.7-2.7Zm0-1.5A4.2 4.2 0 0 0 3 7v9.6A4.2 4.2 0 0 0 7.2 20.8h9.6A4.2 4.2 0 0 0 21 16.6V7a4.2 4.2 0 0 0-4.2-4.2H7.2Z" />
                    <path d="M12 8.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0-1.5A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9Z" />
                    <circle cx="17.4" cy="6.6" r="1" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-legal" aria-label="Legal information">
              {footerLegal ? (
                <>
                  <p className="legal-line">{footerLegal.line1}</p>
                  <p className="legal-line">{footerLegal.line2}</p>
                  {footerLegal.sig ? <p className="legal-sig">{footerLegal.sig}</p> : null}
                </>
              ) : (
                <>
                  <p className="legal-line">
                    <span className="legal-full">Siamo Design | Interior Design Studio</span>
                  </p>
                  <p className="legal-line">
                    <span className="legal-full">© 2025 Siamo Design. All rights reserved.</span>
                  </p>
                  <p className="legal-sig">
                    <a href="https://donebyelevator.com" target="_blank" rel="noopener noreferrer">
                      Designed & Built by Elevator
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
