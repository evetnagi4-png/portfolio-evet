// Single source of truth for personal info. Everything comes from the CV.
import profilePhoto from '../assets/evet-nagi-profile-cutout.webp'
import ecommerceImg from '../assets/projects/ecommerce.webp'
import weatherImg from '../assets/projects/weather.webp'
import mealifyImg from '../assets/projects/mealify.webp'
import gridImg from '../assets/projects/grid.webp'

export const profile = {
  name: 'Evet Nagi',
  role: 'Front-End Developer',
  photo: profilePhoto,
  photoAlt: 'Evet Nagi',
  intro:
    'Front-End Developer working with React, Next.js and Tailwind CSS, building fast, accessible and user-friendly websites.',
  email: 'evetnagi4@gmail.com',
  github: 'https://github.com/evetnagi4-png',
  linkedin: 'https://linkedin.com/in/evetnagi',
  cv: `${import.meta.env.BASE_URL}Evet-Nagi-CV.pdf`,
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

// ---------- About ----------
export const about = {
  paragraphs: [
    'I’m a Front-End Developer based in Cairo who builds responsive, user-friendly web applications with React, Next.js, JavaScript and TypeScript.',
    'I trained through the Digilians Front-End Development Scholarship (MCIT) and a Front-End Diploma at Route Academy, and I hold a Meta Front-End Developer certification. Before moving into development I worked in client-facing insurance and banking roles, which is where my communication and teamwork come from.',
  ],
  qualities: [
    { icon: 'Heart', label: 'Passionate Learner' },
    { icon: 'Target', label: 'Goal-Oriented' },
    { icon: 'Users', label: 'Team Player' },
    { icon: 'TrendingUp', label: 'Always Improving' },
  ],
}

// ---------- Skills (only what the CV lists) ----------
export const skillGroups = [
  {
    title: 'Front-End Development',
    skills: [
      { name: 'React.js', icon: 'Component' },
      { name: 'Next.js', icon: 'Layers' },
      { name: 'State Management', icon: 'Boxes' },
      { name: 'REST API Integration', icon: 'Plug' },
      { name: 'Reusable Components', icon: 'Sparkles' },
      { name: 'Accessibility', icon: 'Accessibility' },
      { name: 'Performance Optimization', icon: 'Gauge' },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS', icon: 'Palette' },
      { name: 'Bootstrap', icon: 'Layers' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Responsive Web Design', icon: 'Smartphone' },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'JavaScript (ES6+)', icon: 'Braces' },
      { name: 'TypeScript', icon: 'FileCode' },
      { name: 'HTML5', icon: 'Code2' },
      { name: 'DOM Manipulation', icon: 'Globe' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'GitBranch' },
      { name: 'Vercel', icon: 'Cloud' },
      { name: 'Debugging', icon: 'Bug' },
    ],
  },
]

// ---------- Experience (details from the CV) ----------
export const experience = [
  {
    id: 'eyouth',
    role: 'Backup Instructor',
    company: 'eYouth',
    location: 'Kafr El-Sheikh, Egypt',
    period: 'Jul 2026 – Present',
    current: true,
    summary: 'Teaching HTML, CSS, JavaScript, React.js, Cybersecurity and AI.',
    details: [
      'Delivered hands-on training sessions to 25–30 students across HTML, CSS, JavaScript, React.js, Cybersecurity and AI tracks.',
      'Explained technical concepts through practical examples, demonstrations and interactive coding activities.',
      'Adapted training to different learner levels and supported participants with technical questions and coding challenges.',
      'Helped maintain an engaging learning environment and improve student comprehension.',
    ],
  },
  {
    id: 'digilians',
    role: 'Front-End Developer Trainee',
    company: 'Digilians Front-End Development Scholarship (MCIT)',
    location: 'Cairo, Egypt',
    period: 'Feb 2026 – Jun 2026',
    summary: 'Advanced Front-End training in React.js, REST APIs and Git/GitHub.',
    details: [
      'Completed advanced training in HTML5, CSS3, JavaScript (ES6+), React.js, REST APIs and Git/GitHub.',
      'Built and deployed responsive React web applications using reusable components and modern UI practices.',
      'Applied best practices in performance optimization, accessibility, responsive design and collaborative workflows.',
    ],
  },
  {
    id: 'metlife',
    role: 'Bancassurance Officer',
    company: 'MetLife – Banque Du Caire',
    location: 'Mahalla El-Koubra, Egypt',
    period: 'Oct 2023 – Jul 2025',
    summary: 'Client-facing financial and insurance sales inside bank branches.',
    details: [
      'Managed financial and insurance sales with a monthly target of 500,000 EGP, consistently reaching 90%–170% of quota.',
      'Identified client financial needs and worked with branch staff to improve cross-selling.',
    ],
  },
  {
    id: 'chubb',
    role: 'Sales Agent',
    company: 'Chubb Life',
    location: 'Cairo, Egypt',
    period: 'Jan 2021 – Oct 2023',
    summary: 'Direct insurance sales to individual clients.',
    details: [
      'Generated leads and drove policy sales as a direct sales insurance representative.',
      'Built rapport and kept client retention high through networking, cold calling and referrals.',
    ],
  },
]

// ---------- Education & certifications ----------
export const education = [
  {
    icon: 'GraduationCap',
    title: 'Bachelor’s Degree in Commerce',
    org: 'Tanta University – English Section',
    period: 'Jun 2017 – Jul 2021',
  },
  {
    icon: 'Award',
    title: 'Front-End Development Diploma',
    org: 'Route Academy',
    period: 'Oct 2025',
  },
  {
    icon: 'BadgeCheck',
    title: 'Front-End Development Scholarship',
    org: 'Digilians (MCIT)',
    period: 'Feb 2026 – Jun 2026',
  },
  {
    icon: 'BadgeCheck',
    title: 'Meta Front-End Developer',
    org: 'Meta',
    period: 'Jun 2026',
  },
]

// ---------- Projects ----------
// liveUrl values are the "Live Demo" hyperlinks embedded in the CV.
// githubUrl is null because the CV has no per-project repository links; null opens the details modal.
export const projects = [
  {
    id: 'fresh-cart',
    name: 'E-Commerce (Fresh Cart)',
    short: 'Online grocery store with filtering and a persistent cart.',
    image: ecommerceImg,
    imageAlt: 'Fresh Cart online grocery store home page with a promotional banner and product categories',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://fresh-cart-ecommerce-amber.vercel.app',
    githubUrl: null,
    highlights: [
      'Built a high-performance e-commerce web app with 10+ dynamic product modules and a type-safe architecture using Next.js and TypeScript.',
      'Implemented product filtering and shopping cart management, with cart state persisting across user sessions.',
      'Deployed on Vercel and managed source control with Git/GitHub.',
    ],
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    short: 'Live forecast dashboard with worldwide city search.',
    image: weatherImg,
    imageAlt: 'Weather app showing a three-day forecast for Cairo, Egypt over a city skyline background',
    tech: ['React.js', 'Weather API'],
    liveUrl: 'https://weather-puce-eight.vercel.app',
    githubUrl: null,
    highlights: [
      'Developed a real-time weather app in React that integrates third-party REST APIs to track live conditions across 50+ global locations.',
      'Implemented dynamic weather icons and a fully responsive layout for a smooth multi-device experience.',
      'Deployed on Vercel for public access and continuous integration.',
    ],
  },
  {
    id: 'mealify',
    name: 'Mealify',
    short: 'Responsive restaurant landing page with a clean layout.',
    image: mealifyImg,
    imageAlt: 'Mealify restaurant landing page with a large hero dish and the headline Enjoy Your Healthy Delicious Food',
    tech: ['HTML5', 'CSS3'],
    liveUrl: 'https://mealify-restaurant-landing-page.vercel.app',
    githubUrl: null,
    highlights: [
      'Built a modern, fully responsive restaurant landing page with HTML5 and CSS3, with smooth interactive hover effects.',
      'Structured clean, semantic layouts and deployed the production-ready site on Vercel.',
    ],
  },
  {
    id: 'grid',
    name: 'Grid',
    short: 'Multi-section responsive layout built with CSS Grid.',
    image: gridImg,
    imageAlt: 'Grid layout project with colorful tiles of different sizes arranged across several sections',
    tech: ['HTML5', 'CSS3'],
    liveUrl: 'https://grid-946p.vercel.app',
    githubUrl: null,
    highlights: [
      'Designed a multi-section responsive interface using advanced CSS Grid techniques for precise layout control across screen sizes.',
      'Optimized styling rules for clean performance and deployed the project on Vercel.',
    ],
  },
]
