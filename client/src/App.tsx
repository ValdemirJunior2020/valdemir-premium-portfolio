import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PanelsTopLeft,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Logo } from './components/Logo';
import { LogoMarquee } from './components/LogoMarquee';
import {
  buildTypes,
  contact,
  heroBadges,
  growthOutcomes,
  metrics,
  navItems,
  packages,
  pillars,
  process,
  services,
  stack,
} from './data/siteContent';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const serviceIcons = [
  Search,
  Bot,
  PanelsTopLeft,
  Globe2,
  Building2,
  Smartphone,
];

const pillarIcons = [Target, Layers3, Zap];
const metricIcons = [Search, TrendingUp, MapPin];
const processIcons = [Search, Target, Code2, Rocket];

const growthIcons = [
  Search,
  Bot,
  Target,
  Building2,
  ShieldCheck,
  Smartphone,
];

const image = '/images/valdemir-profile.webp';
const smallImage = '/images/valdemir-profile-small.webp';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = useMemo(
    () =>
      'Hi Valdemir, I saw your portfolio and would like to talk about SEO, GEO, a website, landing page, real estate website, or iOS app project.',
    []
  );

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="appShell">
      <div className="mesh meshOne" />
      <div className="mesh meshTwo" />
      <div className="mesh meshThree" />

      <header className="siteHeader" id="home">
        <Logo />

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <a
            className="headerCta"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Free site review
          </a>

          <button
            className="menuButton"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={closeMobileMenu}>
          <motion.nav
            className="mobileMenuPanel"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobileMenuTop">
              <Logo compact />

              <button
                type="button"
                className="mobileCloseButton"
                aria-label="Close menu"
                onClick={closeMobileMenu}
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobileMenuLinks">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>

            <a
              className="mobileMenuCta"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Request a free review
            </a>
          </motion.nav>
        </div>
      )}

      <main>
        <section className="heroSection sectionContainer">
          <motion.div
            className="heroCopy"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">
              SEO + GEO + Web & iOS Development
            </span>

            <h1>
              Get found on Google and AI search. Turn that attention into real
              leads.
            </h1>

            <p>
              I build search-ready websites, high-converting landing pages,
              real estate websites, and iOS apps for Florida businesses. The
              strategy connects SEO, GEO, design, content, and development
              around one goal: more qualified calls and customers.
            </p>

            <div className="heroActions">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="primaryButton"
              >
                Get a free site review <ArrowRight size={18} />
              </a>

              <a href="#growth" className="secondaryButton">
                See how I help <TrendingUp size={17} />
              </a>
            </div>

            <div className="heroBadges" aria-label="Core specialties">
              {heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="heroVisual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="heroCard">
              <div className="portraitFrame">
                <img
                  src={image}
                  alt="Valdemir R. Gonçalves Junior"
                  loading="eager"
                />
              </div>

              <div className="liveBadge">
                <span />
                South Florida · Available now
              </div>

              <div className="heroMiniCard topMiniCard searchMiniCard">
                <Search size={18} />
                <div>
                  <strong>Google</strong>
                  <p>Local visibility</p>
                </div>
              </div>

              <div className="heroMiniCard bottomMiniCard searchMiniCard">
                <Bot size={18} />
                <div>
                  <strong>AI Search</strong>
                  <p>GEO-ready content</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <LogoMarquee />

        <section
          className="metricsStrip sectionContainer"
          aria-label="Portfolio strengths"
        >
          {metrics.map(([value, label], index) => {
            const Icon = metricIcons[index] ?? TrendingUp;

            return (
              <div className="metricItem" key={label}>
                <Icon size={22} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            );
          })}
        </section>

        <section className="aboutSection sectionContainer" id="about">
          <motion.div
            className="aboutImageCard"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img
              src={smallImage}
              alt="Valdemir smiling in a suit"
              loading="lazy"
            />

            <div>
              <strong>{contact.name}</strong>
              <span>{contact.role}</span>
            </div>
          </motion.div>

          <motion.div
            className="aboutCopy"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="eyebrow">About Valdemir</span>

            <h2>
              Search strategy, conversion design, and development in one place.
            </h2>

            <p>
              A website shouldn’t only look professional. It should clearly
              explain what you do, help search engines and AI systems understand
              the business, build trust, and make the next step easy. I bring
              SEO, GEO, landing-page strategy, web development, and mobile
              product skills together so each part supports the same growth
              goal.
            </p>

            <div className="stackWrap" aria-label="Skills and technical stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>

          <div className="pillarList">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Target;

              return (
                <motion.article
                  className="pillarItem"
                  key={pillar.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <span className="smallIcon">
                    <Icon size={18} />
                  </span>

                  <div>
                    <strong>{pillar.title}</strong>
                    <p>{pillar.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="servicesSection sectionContainer" id="services">
          <SectionHeading
            eyebrow="Services"
            title="A complete search-to-lead growth system"
            subtitle="Choose one focused project or combine SEO, GEO, landing pages, websites, real estate websites, and mobile development into a larger growth plan."
          />

          <div className="cardGrid servicesGrid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Globe2;

              return (
                <motion.article
                  className="serviceCard glassCard"
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <span className={`serviceIcon tone${index + 1}`}>
                    <Icon size={24} />
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a
                    href="#contact"
                    aria-label={`Ask about ${service.title}`}
                  >
                    Ask about this service <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="growthSection sectionContainer" id="growth">
          <SectionHeading
            eyebrow="How I help businesses grow"
            title="From getting discovered to winning the customer"
            subtitle="I connect search visibility, clear messaging, strong design, and reliable development so your digital presence does more than look good."
          />

          <div className="growthGrid">
            {growthOutcomes.map((outcome, index) => {
              const Icon = growthIcons[index] ?? TrendingUp;

              return (
                <motion.article
                  className="growthCard"
                  key={outcome.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.05,
                  }}
                >
                  <span className="growthIcon">
                    <Icon size={22} />
                  </span>

                  <h3>{outcome.title}</h3>
                  <p>{outcome.description}</p>

                  <div className="growthImpact">
                    <strong>Business impact</strong>
                    <span>{outcome.impact}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="growthCta">
            <div>
              <Sparkles size={24} />
              <div>
                <strong>Not sure which service makes sense?</strong>
                <p>
                  I’ll review where you are now and help you choose the right
                  next step.
                </p>
              </div>
            </div>

            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Talk about your goals <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="buildTypesSection sectionContainer" id="work">
          <SectionHeading
            eyebrow="What I build"
            title="Digital assets made to get found, earn trust, and drive action"
          />

          <div className="projectGrid projectGridFour">
            {buildTypes.map((project, index) => (
              <motion.article
                className={`projectCard project${index + 1}`}
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span>{project.tag}</span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href="#contact">
                  Talk about this <ArrowRight size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pricingSection sectionContainer" id="pricing">
          <SectionHeading
            eyebrow="Services & pricing"
            title="Clear starting points for serious growth work"
            subtitle="Final quotes depend on scope, number of pages, content needs, integrations, timeline, and the condition of your current website."
          />

          <div className="packageGrid">
            {packages.map((pack, index) => (
              <motion.article
                className={`packageCard ${
                  pack.featured ? 'featuredPackage' : ''
                }`}
                key={pack.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                {pack.featured && (
                  <span className="popularBadge">
                    Best for a full rebuild
                  </span>
                )}

                <h3>{pack.name}</h3>

                <p className="packageDescription">{pack.description}</p>

                <div className="priceLine">
                  <strong>{pack.price}</strong>
                  <span>{pack.cadence}</span>
                </div>

                <ul>
                  {pack.features.map((feature) => (
                    <li key={feature}>
                      <Check size={17} /> {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${
                    contact.whatsappNumber
                  }?text=${encodeURIComponent(
                    `${pack.name}: ${whatsappMessage}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pack.cta} <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="processSection sectionContainer" id="process">
          <SectionHeading
            eyebrow="Process"
            title="From search opportunity to launched growth asset"
          />

          <div className="processGrid">
            {process.map((step, index) => {
              const Icon = processIcons[index] ?? Rocket;

              return (
                <motion.article
                  className="processCard"
                  key={step.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <span className="processNumber">0{index + 1}</span>
                  <Icon size={24} />

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section
          className="ctaBand sectionContainer"
          aria-label="Call to action"
        >
          <div>
            <span className="eyebrow">Free website review</span>
            <h2>
              Find out what’s blocking your Google visibility, AI-search
              presence, and lead conversion.
            </h2>
          </div>

          <a
            className="primaryButton"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Request my free review <ShieldCheck size={18} />
          </a>
        </section>
      </main>

      <footer className="siteFooter sectionContainer" id="contact">
        <div className="footerBrand">
          <Logo />

          <h2>Tell me what you want to grow or build.</h2>

          <p>
            Send your current website, target service or location, and the
            result you want. I’ll help you choose the right next step across
            SEO, GEO, landing pages, websites, real estate websites, or iOS.
          </p>

          <div className="footerSocials">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={20} />
            </a>

            <a href={`mailto:${contact.email}`} aria-label="Email Valdemir">
              <Mail size={20} />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Valdemir"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="footerDetails">
          <img
            src={smallImage}
            alt="Valdemir R. Gonçalves Junior"
            loading="lazy"
          />

          <h3>{contact.name}</h3>

          <p>{contact.role}</p>

          <p>
            <MapPin size={16} /> {contact.location}
          </p>

          <p>
            <Mail size={16} /> {contact.email}
          </p>

          <p>
            <MessageCircle size={16} /> {contact.phoneDisplay}
          </p>
        </div>

        <div className="contactFormBox">
          <h3>Request a free website review</h3>

          <p>
            Share a few details and I’ll review the best starting point for
            your business.
          </p>

          <form
            name="project-inquiry"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="project-inquiry"
            />

            <p className="hiddenField">
              <label>
                Don’t fill this out if you’re human:{' '}
                <input name="bot-field" />
              </label>
            </p>

            <input
              aria-label="Name"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              aria-label="Email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />

            <input
              aria-label="Current website"
              name="website"
              type="url"
              placeholder="Current website (optional)"
            />

            <select
              aria-label="Service needed"
              name="service"
              defaultValue=""
            >
              <option value="" disabled>
                What do you need?
              </option>
              <option>SEO + Local SEO</option>
              <option>GEO / AI Search</option>
              <option>Landing Page</option>
              <option>Business Website</option>
              <option>Real Estate Website</option>
              <option>iOS App</option>
              <option>Not sure yet</option>
            </select>

            <textarea
              aria-label="Project details"
              name="message"
              placeholder="What service, location, or business goal should I review?"
              rows={4}
              required
            />

            <button type="submit">
              Send review request <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </footer>

      <FloatingWhatsApp
        number={contact.whatsappNumber}
        label="Message Valdemir"
        message={whatsappMessage}
      />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="sectionHeading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}