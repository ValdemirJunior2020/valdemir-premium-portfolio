import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Code2,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  PenLine,
  Rocket,
  ShieldCheck,
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

const serviceIcons = [MousePointer2, Code2, PenLine, BarChart3];
const pillarIcons = [Target, Layers3, Zap];
const metricIcons = [Gauge, ShieldCheck, TrendingUp];
const processIcons = [Target, Sparkles, Code2, Rocket];

const image = '/images/valdemir-profile.webp';
const smallImage = '/images/valdemir-profile-small.webp';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = useMemo(
    () =>
      'Hi Valdemir, I saw your portfolio and would like to talk about a marketing or React app project.',
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
          <a className="headerCta" href={whatsappHref} target="_blank" rel="noreferrer">
            Book a call
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
                <a key={item.target} href={`#${item.target}`} onClick={closeMobileMenu}>
                  {item.label}
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>

            <a className="mobileMenuCta" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Talk on WhatsApp
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
            <span className="eyebrow">Marketing + React Development</span>

            <h1>Premium websites and React apps built to turn clicks into real leads.</h1>

            <p>
              I help businesses launch fast websites, high-converting landing pages, dashboards,
              and full-stack React apps with a clear marketing strategy behind every screen.
            </p>

            <div className="heroActions">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="primaryButton">
                Start a project <ArrowRight size={18} />
              </a>

              <a href="#pricing" className="secondaryButton">
                See pricing <Sparkles size={17} />
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
                <img src={image} alt="Valdemir R. Gonçalves Junior" loading="eager" />
              </div>

              <div className="liveBadge">
                <span />
                Available for select projects
              </div>

              <div className="heroMiniCard topMiniCard">
                <strong>React</strong>
                <p>Fast app UI</p>
              </div>

              <div className="heroMiniCard bottomMiniCard">
                <strong>CRO</strong>
                <p>Clear lead path</p>
              </div>
            </div>
          </motion.div>
        </section>

        <LogoMarquee />

        <section className="metricsStrip sectionContainer" aria-label="Portfolio strengths">
          {metrics.map(([value, label], index) => {
            const Icon = metricIcons[index];

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
            <img src={smallImage} alt="Valdemir smiling in a suit" loading="lazy" />

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

            <h2>Developer thinking meets marketing thinking.</h2>

            <p>
              Most sites look fine but don’t explain the offer, build trust, or make it easy to
              take action. My work brings the marketing and the code together, so your page, app,
              copy, forms, and follow-up all support the same goal: more qualified conversations.
            </p>

            <div className="stackWrap" aria-label="Technical stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>

          <div className="pillarList">
            {pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

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
            title="What I can build and improve for your business"
            subtitle="The offer is built around high-income freelance services: landing pages, copy, automation, data reporting, and custom React development."
          />

          <div className="cardGrid fourGrid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];

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

                  <a href="#pricing" aria-label={`${service.title} pricing`}>
                    View pricing <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="buildTypesSection sectionContainer" id="work">
          <SectionHeading
            eyebrow="Project Types"
            title="Built for buyers who care about speed, clarity, and leads"
          />

          <div className="projectGrid">
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
            eyebrow="Services & Pricing"
            title="Value-based packages for serious growth work"
            subtitle="Pricing is set to support profitable work, clear scope, and better outcomes. Final quotes depend on complexity, timeline, integrations, and content needs."
          />

          <div className="packageGrid">
            {packages.map((pack, index) => (
              <motion.article
                className={`packageCard ${pack.featured ? 'featuredPackage' : ''}`}
                key={pack.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                {pack.featured && <span className="popularBadge">Best for app builds</span>}

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
                  href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
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
          <SectionHeading eyebrow="Process" title="A simple path from idea to launched asset" />

          <div className="processGrid">
            {process.map((step, index) => {
              const Icon = processIcons[index];

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

        <section className="ctaBand sectionContainer" aria-label="Call to action">
          <div>
            <span className="eyebrow">Ready to build?</span>
            <h2>Let’s turn your offer into a page, app, or system people can actually act on.</h2>
          </div>

          <a className="primaryButton" href={whatsappHref} target="_blank" rel="noreferrer">
            Message me on WhatsApp <MessageCircle size={18} />
          </a>
        </section>
      </main>

      <footer className="siteFooter sectionContainer" id="contact">
        <div className="footerBrand">
          <Logo />

          <h2>Tell me what you’re trying to build.</h2>

          <p>
            Send the goal, the current website or app if you have one, and what you want visitors
            or users to do. I’ll help you choose the right next step.
          </p>

          <div className="footerSocials">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <BriefcaseBusiness size={20} />
            </a>

            <a href={`mailto:${contact.email}`} aria-label="Email Valdemir">
              <Mail size={20} />
            </a>

            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp Valdemir">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="footerDetails">
          <img src={smallImage} alt="Valdemir R. Gonçalves Junior" loading="lazy" />

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
          <h3>Project inquiry</h3>

          <p>This form is ready for Netlify Forms after deployment.</p>

          <form
            name="project-inquiry"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="project-inquiry" />

            <p className="hiddenField">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <input aria-label="Name" name="name" placeholder="Your name" required />

            <input aria-label="Email" name="email" type="email" placeholder="Your email" required />

            <textarea
              aria-label="Project details"
              name="message"
              placeholder="What do you need built or improved?"
              rows={4}
              required
            />

            <button type="submit">
              Send inquiry <ArrowRight size={18} />
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