export type Language = 'en' | 'pt';

export const contact = {
  name: 'Valdemir R. Gonçalves Junior',
  shortName: 'Valdemir Junior',
  initials: 'VJ',
  role: 'Marketing Specialist + React App Developer',
  location: 'Available for remote projects',
  email: 'infojr.83@gmail.com',
  phoneDisplay: '(754) 366-9922',
  whatsappNumber: '17543669922',
  linkedin: 'https://linkedin.com/',
  instagram: 'https://instagram.com/',
};

export const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'Process', target: 'process' },
  { label: 'Contact', target: 'contact' },
] as const;

export const heroBadges = ['React + TypeScript', 'CRO Landing Pages', 'Marketing Systems'];

export const metrics = [
  ['Fast', 'mobile-first builds'],
  ['Clear', 'offer + copy strategy'],
  ['Smart', 'automation + reporting'],
] as const;

export const stack = [
  'React',
  'React Native',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Firebase',
] as const;

export const pillars = [
  {
    title: 'Conversion-focused strategy',
    description:
      'Landing pages are planned around one clear action, strong offers, clean UX, and copy that makes the next step obvious.',
  },
  {
    title: 'Full-stack execution',
    description:
      'I can build the front end, connect forms, wire up dashboards, and ship React apps that feel fast on mobile and desktop.',
  },
  {
    title: 'Marketing that keeps working',
    description:
      'Beyond the website, I help with follow-up flows, simple automation, weekly reporting, and the content ideas that keep leads warm.',
  },
] as const;

export const services = [
  {
    title: 'High-Converting Landing Pages',
    description:
      'Premium React landing pages for service businesses, consultants, coaches, and agencies. Built with CRO, sharp copy, fast load times, and a clear lead path.',
  },
  {
    title: 'React App Development',
    description:
      'Custom React and React Native apps using TypeScript, Tailwind CSS, Node.js, and Firebase. Great for portals, dashboards, booking tools, and MVPs.',
  },
  {
    title: 'Marketing Funnel + Copy',
    description:
      'Offer positioning, page structure, email follow-up ideas, social content angles, and persuasive copy that helps visitors understand why they should act now.',
  },
  {
    title: 'Automation + Reporting',
    description:
      'Lead capture, workflow automations, Firebase data, and simple dashboards that show what is happening daily, weekly, and monthly.',
  },
] as const;

export const buildTypes = [
  {
    tag: 'Lead generation',
    title: 'Landing page sprint for local businesses',
    description:
      'A focused page with a strong offer, trust sections, service proof, FAQs, WhatsApp click-to-chat, and Netlify-ready lead capture.',
  },
  {
    tag: 'SaaS / internal tools',
    title: 'React dashboard with Firebase',
    description:
      'A fast app shell with auth-ready structure, clean UI patterns, useful data views, and room to grow into a full product.',
  },
  {
    tag: 'Growth systems',
    title: 'Marketing audit + automation map',
    description:
      'A clear growth plan that reviews the offer, page copy, traffic path, follow-up workflow, and reporting gaps before money is spent on ads.',
  },
] as const;

export const packages = [
  {
    name: 'Marketing Audit + Growth Map',
    price: '$750',
    cadence: 'one-time',
    description:
      'A high-value review for businesses that need clarity before rebuilding a site, running ads, or launching a new offer.',
    features: [
      'Website and landing page audit',
      'Offer and copy recommendations',
      'Lead path and follow-up review',
      '30-day action plan with priorities',
    ],
    cta: 'Request an audit',
    featured: false,
  },
  {
    name: 'Conversion Landing Page Sprint',
    price: '$2,500–$4,500',
    cadence: 'per project',
    description:
      'A premium landing page built to turn traffic into booked calls, form leads, or WhatsApp conversations.',
    features: [
      'React + TypeScript landing page',
      'Conversion-focused copy structure',
      'Mobile-first UX and performance pass',
      'Netlify form or WhatsApp lead capture',
    ],
    cta: 'Build my landing page',
    featured: false,
  },
  {
    name: 'Full-Stack React App Build',
    price: '$6,500–$18,000+',
    cadence: 'per project',
    description:
      'For founders and businesses that need a real app, dashboard, MVP, or client portal instead of another basic website.',
    features: [
      'React, TypeScript, Tailwind CSS',
      'Node.js and Firebase architecture',
      'Reusable components and clean routes',
      'Launch support and documentation',
    ],
    cta: 'Scope an app build',
    featured: true,
  },
  {
    name: 'Premium Growth Retainer',
    price: '$3,500–$8,000',
    cadence: 'per month',
    description:
      'Ongoing marketing and development support for businesses that want steady testing, shipping, and optimization.',
    features: [
      'Monthly landing page or app improvements',
      'Campaign and copy support',
      'Automation and reporting updates',
      'Weekly strategy check-in',
    ],
    cta: 'Start a retainer',
    featured: false,
  },
] as const;

export const process = [
  {
    title: 'Diagnose',
    description:
      'We review the offer, audience, current website, lead path, and the one action that matters most.',
  },
  {
    title: 'Position',
    description:
      'I shape the message, page structure, service promise, and content angles before design starts.',
  },
  {
    title: 'Build',
    description:
      'I develop a clean React experience with responsive UI, fast sections, connected forms, and polished details.',
  },
  {
    title: 'Optimize',
    description:
      'After launch, we use feedback and data to improve copy, calls to action, reporting, and automation.',
  },
] as const;
