export type Language = 'en' | 'pt';

export const contact = {
  name: 'Valdemir R. Gonçalves Junior',
  shortName: 'Valdemir Junior',
  initials: 'VJ',
  role: 'SEO + GEO Strategist, Web & iOS Developer',
  location: 'South Florida · Available across Florida and remotely',
  email: 'infojr.83@gmail.com',
  phoneDisplay: '(754) 366-9922',
  whatsappNumber: '17543669922',
  linkedin: 'https://linkedin.com/',
  instagram: 'https://instagram.com/',
};

export const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Growth', target: 'growth' },
  { label: 'Work', target: 'work' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'Contact', target: 'contact' },
] as const;

export const heroBadges = [
  'SEO + Local SEO',
  'GEO / AI Search',
  'Landing Pages',
  'Websites',
  'iOS Apps',
] as const;

export const metrics = [
  ['Visible', 'on Google and AI search'],
  ['Built', 'to turn traffic into leads'],
  ['Focused', 'on Florida service businesses'],
] as const;

export const stack = [
  'SEO',
  'Local SEO',
  'GEO',
  'React',
  'TypeScript',
  'SwiftUI',
  'React Native',
  'Node.js',
  'Firebase',
] as const;

export const pillars = [
  {
    title: 'Search-first strategy',
    description:
      'Every page starts with the searches, locations, services, and buyer questions your business needs to own.',
  },
  {
    title: 'Built for Google and AI',
    description:
      'Clear site structure, useful content, strong entities, and technical signals help search engines and AI systems understand your business.',
  },
  {
    title: 'Designed to create leads',
    description:
      'Fast pages, strong proof, simple forms, click-to-call actions, and focused offers turn visibility into real conversations.',
  },
] as const;

export const services = [
  {
    title: 'SEO + Local SEO',
    description:
      'Technical SEO, service pages, city pages, local keyword strategy, content planning, and on-page improvements built around qualified search demand.',
  },
  {
    title: 'GEO / AI Search Optimization',
    description:
      'Content and website structure designed to help ChatGPT, Gemini, Google AI experiences, and other answer engines understand and surface your business.',
  },
  {
    title: 'High-Converting Landing Pages',
    description:
      'Fast, focused landing pages for Google Ads, Meta campaigns, promotions, lead generation, bookings, calls, and WhatsApp conversations.',
  },
  {
    title: 'Business Website Development',
    description:
      'Modern, mobile-first websites with strong service architecture, location targeting, clear calls to action, and a foundation that can grow with your business.',
  },
  {
    title: 'iOS App Development',
    description:
      'Custom iPhone apps, mobile portals, booking tools, dashboards, and MVPs built with SwiftUI or React Native for businesses that need more than a website.',
  },
] as const;

export const growthOutcomes = [
  {
    title: 'Get found by local customers',
    description:
      'SEO and local search improvements help the right people find your business when they are ready to call, book, or request a quote.',
    impact: 'More qualified traffic from Google and local search',
  },
  {
    title: 'Show up in AI-powered search',
    description:
      'Clear content, strong business signals, and GEO-ready site structure help AI tools understand what you offer and who you serve.',
    impact: 'Better visibility across AI answers and search experiences',
  },
  {
    title: 'Turn clicks into real leads',
    description:
      'Focused landing pages guide visitors toward one clear action with strong offers, trust signals, fast forms, calls, and WhatsApp.',
    impact: 'More calls, bookings, quote requests, and conversations',
  },
  {
    title: 'Build trust with a better website',
    description:
      'A fast, polished website explains your value clearly, works smoothly on every screen, and gives customers confidence to contact you.',
    impact: 'A stronger brand and a smoother path to becoming a customer',
  },
  {
    title: 'Bring your service to mobile',
    description:
      'Custom iOS apps and mobile tools can support bookings, customer accounts, notifications, internal workflows, and new digital products.',
    impact: 'A useful mobile experience built around your business goals',
  },
] as const;

export const buildTypes = [
  {
    tag: 'Local growth',
    title: 'SEO + GEO growth system',
    description:
      'A focused plan covering technical SEO, local pages, AI-search readiness, content priorities, and the conversion gaps holding the site back.',
  },
  {
    tag: 'Lead generation',
    title: 'Landing page for calls and bookings',
    description:
      'A fast page with a clear offer, trust sections, service proof, FAQs, call tracking, forms, and WhatsApp lead capture.',
  },
  {
    tag: 'Website build',
    title: 'Florida service-business website',
    description:
      'A modern website organized around services, locations, proof, local search, mobile speed, and a simple path to contact the business.',
  },
  {
    tag: 'Mobile product',
    title: 'iOS app or business portal',
    description:
      'A polished mobile experience for bookings, customer accounts, notifications, internal workflows, dashboards, or an MVP launch.',
  },
] as const;

export const packages = [
  {
    name: 'SEO + GEO Visibility Audit',
    price: '$750',
    cadence: 'one-time',
    description:
      'A practical review of your website, local search presence, AI-search readiness, content gaps, and lead path.',
    features: [
      'Technical and on-page SEO review',
      'Local visibility and competitor gaps',
      'GEO / AI-search content review',
      'Prioritized 30-day action plan',
    ],
    cta: 'Request an audit',
    featured: false,
  },
  {
    name: 'Landing Page Sprint',
    price: '$2,500–$4,500',
    cadence: 'per project',
    description:
      'A conversion-focused page for a service, campaign, offer, or location that needs more calls, forms, or bookings.',
    features: [
      'Strategy, wireframe, copy structure',
      'React + TypeScript development',
      'Mobile speed and conversion pass',
      'Form, call, or WhatsApp lead path',
    ],
    cta: 'Build my landing page',
    featured: false,
  },
  {
    name: 'SEO-Ready Business Website',
    price: '$5,500–$12,000+',
    cadence: 'per project',
    description:
      'A full website built around your services, target cities, proof, search visibility, and lead-generation goals.',
    features: [
      'Service and location architecture',
      'SEO + GEO-ready page structure',
      'Responsive React development',
      'Analytics, forms, and launch support',
    ],
    cta: 'Plan my website',
    featured: true,
  },
  {
    name: 'iOS App or Mobile MVP',
    price: 'Custom quote',
    cadence: 'based on scope',
    description:
      'For businesses that need a mobile product, client portal, booking tool, dashboard, or internal workflow.',
    features: [
      'Product scope and user-flow planning',
      'SwiftUI or React Native build',
      'Firebase or API integration',
      'Testing, launch, and documentation',
    ],
    cta: 'Scope an app build',
    featured: false,
  },
] as const;

export const process = [
  {
    title: 'Research',
    description:
      'I review the market, searches, competitors, locations, customer questions, current website, and business goals.',
  },
  {
    title: 'Plan',
    description:
      'We define the page structure, target keywords, content, user path, design direction, and the action visitors should take.',
  },
  {
    title: 'Build',
    description:
      'I create the website, landing page, or app with responsive design, clean code, strong content structure, and connected lead paths.',
  },
  {
    title: 'Improve',
    description:
      'After launch, we use search data, user behavior, and business feedback to improve visibility and conversion over time.',
  },
] as const;
