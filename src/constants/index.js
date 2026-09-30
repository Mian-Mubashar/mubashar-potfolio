import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  figma,
  freelance,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "AI & RAG Solutions",
    icon: backend,
  },
  {
    title: "OpenAI Integration",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: docker },
  { name: "Prisma", icon: figma },
  { name: "RAG AI", icon: creator },
  { name: "Git", icon: git },
  { name: "JavaScript", icon: javascript },
  { name: "Next.js", icon: threejs },
];

const experiences = [
  {
    title: "Freelance Full Stack & AI Developer",
    company_name: "Self-employed",
    icon: freelance,
    iconBg: "#0188E3",
    date: "Jan 2023 - Present",
    points: [
      "Built MERN stack and Next.js web applications with scalable REST APIs and Prisma ORM.",
      "Developed AI-powered platforms using OpenAI, RAG pipelines, Pinecone, and vector databases.",
      "Integrated intelligent features such as document Q&A, embeddings, and semantic search.",
      "Delivered production-ready apps with clean UI, authentication, and smooth user experience.",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company_name: "Sheryians Coding School",
    icon: sheryians,
    iconBg: "#ffff",
    date: "Aug 2023 - Mar 2025",
    points: [
      "Completed intensive MERN stack training with React, Node.js, Express, and MongoDB.",
      "Built full-stack projects including CRUD apps, authentication, and API integrations.",
      "Learned Next.js, TypeScript, and modern tools for high-performance web applications.",
      "Gained hands-on experience in deployment, Git workflows, and maintainable code practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MacBookPro-redesign",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "Falverra Redesign",
    description:
      "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/gitswastik08/falverra-redesign",
    live_website_link: "https://falverra-recode.netlify.app/",
  },
  {
    name: "AI Web Platform",
    description:
      "An AI-powered full stack web platform built with Next.js and MERN, featuring OpenAI integration, RAG architecture, Pinecone vector database, and Prisma ORM for smart document search and chat.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mian-Mubashar",
    live_website_link: "https://www.linkedin.com/in/mubashar-hanif-71b473212/",
  },
];

export { services, technologies, experiences, testimonials, projects };
