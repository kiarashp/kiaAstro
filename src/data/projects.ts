const projects = [
  {
    id: 1,
    title: "Meditrack: AI Medicine Tracker",
    description:
      "I built Meditrack, a web app that helps users recognize and track their medicines. Users can log in with Google, take or upload a photo of a medicine, and the system uses AI to detect and identify it. Identified medicines can be saved to a personal profile for easy tracking. I developed the full stack using SvelteKit for the frontend, Supabase for authentication and database management, and the OpenAI GPT API for intelligent image-to-text detection. This project demonstrates my ability to integrate authentication, AI APIs, and cloud databases into a seamless, user-friendly product.",
    short:
      "SvelteKit web app utilizing OpenAI GPT for AI-driven medicine identification from user photos, with Google/Supabase authentication and personal profiles for tracking.",
    image: "/projects/meditrack.jpg",
    tags: [
      "Svelte",
      "Supabase",
      "OpenAI API",
      "Full-Stack Development",
      "TypeScript",
    ],
    github: "https://github.com/kiarashp/svelte-mediscan",
    demo: "https://meditrack.kiapmd.dev",
    featured: true,
  },
  {
    id: 2,
    title: "Aura: E-commerce Website",
    description:
      "I built Aura, a luxury e-commerce furniture website using SvelteKit, Tailwind, and Stripe. The goal was to create a modern, responsive platform with smooth UX, product filtering by price/category, and a user dashboard. I handled both front-end and back-end, using Prisma and Neon for database management. The result is a fast, clean, and elegant shopping experience with light/dark mode and secure payments.",
    short:
      "A full-stack luxury e-commerce furniture site built with SvelteKit/Tailwind, using Prisma/Neon DB and Stripe for secure payments. Features: smooth UX, product filtering, light/dark mode.",
    image: "/projects/aura.jpg",
    tags: [
      "Svelte",
      "Ecommerce",
      "Tailwind CSS",
      "Stripe",
      "Responsive Design",
    ],
    github: "https://github.com/kiarashp/svelte-Aura",
    demo: "https://svelte-ecommerce.kiapmd.dev/",
    featured: true,
  },
  {
    id: 3,
    title: "ABC Company Website",
    description:
      "Built a fully responsive fictional company website using Svelte and SvelteKit, styled with Tailwind CSS. Implemented a contact form integrated with SendGrid API for email delivery and managed content with Sanity CMS. Deployed the site on Vercel to ensure fast and reliable performance. This project helped me strengthen my frontend skills and gain hands-on experience with modern web development tools and workflows.",
    short:
      "Built a responsive company website with Svelte/SvelteKit and Tailwind. Features a SendGrid contact form and Sanity CMS for content management. Deployed on Vercel. Great frontend skill builder.",
    image: "/projects/abcCompany.jpg",
    tags: ["Svelte", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/kiarashp/svelte-company",
    demo: "https://svelte-abc.kiapmd.dev",
    featured: true,
  },
  {
    id: 4,
    title: "Solar Power Website (Next.js & Strapi, EN/FA)",
    description:
      "A bilingual (Persian & English) website for selling solar power services, built with Next.js and Strapi. Features include multi-language support using i18n for seamless language switching and a modern, responsive design.",
    short:
      "A bilingual (Persian/English) solar power services website built with Next.js and Strapi. Features i18n for multi-language support and a modern, responsive design.",
    image: "/projects/solar.jpg",
    tags: ["Next.js", "Strapi", "i18n", "Bilingual Website", "TypeScript"],
    github: null,
    demo: "https://sabzenergynovin.ir/en",
    featured: false,
  },
  {
    id: 5,
    title: "Coopl – E-commerce Wordpress Website",
    description:
      "Coopl is a professional e-commerce website built with WordPress and WooCommerce, specializing in thermocouples, industrial heating elements, and related products. Fully optimized for SEO to boost online visibility and drive sales.",
    short:
      "Coopl: A professional e-commerce site built with WordPress/WooCommerce, specializing in thermocouples, industrial heating elements, and related products. Fully SEO-optimized for visibility.",
    image: "/projects/coopl.jpg",
    tags: ["Wordpress", "Woocommerce", "PHP"],
    github: null,
    demo: "https://coopl.ir/",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
