import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BsCodeSlash, BsDatabase, BsLayers, BsRainbow } from "react-icons/bs";

export const links = [
  { name: "Home", hash: "/" },
  { name: "Portfolio", hash: "/portfolio" },
  { name: "Blogs", hash: "/blogs" },
  { name: "Contact", hash: "/contact" },
] as const;

export const experiencesData = [
  {
      title: "Laravel + Vue Developer",
      company: "Botsify",
      period: "Nov 2024 – Present",
      location: "Karachi, Pakistan",
      current: true,
      responsibilities: [
        "Developed and maintained core features for chatbot and conversational AI systems using Laravel and Vue.js",
        "Implemented a Message Control Pipeline (MCP) to connect the chatbot with fine-tuned datasets for contextual responses",
        "Containerized services using Docker, improving deployment consistency and platform scalability",
        "Integrated Firebase queues to enable real-time message processing and faster customer response times",
      ],
      technologies: ["Laravel", "Vue.js", "Docker", "Firebase", "AI/ML", "MCP"],
    },
    {
      title: "Frontend Engineer (Contract)",
      company: "Finyou",
      period: "Aug 2024 – Oct 2024",
      location: "Remote",
      current: false,
      responsibilities: [
        "Built the MVP of a fintech product using Next.js and Tailwind CSS, with seamless SSR support for optimal SEO",
        "Integrated dynamic form rendering and personalized dashboards powered by OpenAI for guided financial workflows",
      ],
      technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "SSR", "SEO"],
    },
    {
      title: "Software Engineer",
      company: "Koderlabs",
      period: "Sep 2022 – Aug 2024",
      location: "Remote",
      current: false,
      responsibilities: [
        "Led full-stack development using NestJS and Vue, improving app load times by 35% via optimized API calls and caching",
        "Developed reusable component libraries and enforced code quality via ESLint, unit tests, and TypeScript refactoring",
      ],
      technologies: ["NestJS", "Vue.js", "TypeScript", "ESLint", "Performance Optimization"],
    },
    {
      title: "Fullstack Developer",
      company: "Darson",
      period: "Mar 2022 – Aug 2022",
      location: "Remote",
      current: false,
      responsibilities: [
        "Built a CRM with Kanban-style UI for task management and multilevel role access using Laravel",
        "Integrated real-time sales dashboards with charting libraries and MySQL stored procedures for performance",
      ],
      technologies: ["Laravel", "MySQL", "CRM", "Dashboard", "Real-time"],
    },
    {
      title: "WordPress Developer",
      company: "Peace Technology",
      period: "Mar 2020 – Feb 2022",
      location: "Karachi, Pakistan",
      current: false,
      responsibilities: [
        "Created custom Elementor widgets, reusable plugins, and API integrations to meet diverse client needs",
        "Migrated legacy PHP websites to more modern CMS stacks with improved performance",
      ],
      technologies: ["WordPress", "PHP", "Elementor", "API Integration", "CMS"],
    },
] as const;


export const projectsData = [
    {
      slug: "pharma",
      title: "Pharma – Sales & Inventory System",
      category: "Healthcare",
      subtitle: "Full-stack pharmaceutical operations platform",
      description:
        "End-to-end pharma operations platform unifying inventory, sales, manufacturing, quality (QC/QA), warehouse, and distribution. NestJS API gateway with JWT auth, microservices for identity, master data, procurement, manufacturing, quality, and a Next.js dashboard with KPIs, stock alerts, role-based access, and audit trails.",
      image: "/portfolio/pharma/dashboard.png",
      images: ["/portfolio/pharma/dashboard.png"],
      technologies: ["NestJS", "Next.js 15", "TypeScript", "PostgreSQL", "TypeORM", "Tailwind", "JWT", "pnpm"],
      features: [
        "API Gateway & Microservices",
        "Identity, Master Data, Procurement",
        "Manufacturing (BOMs, EBR, Work Orders)",
        "QC/QA, Warehouse, Distribution, Sales/CRM",
        "Dashboard with KPIs & Stock Alerts",
        "Role-based & Site-scoped Access",
      ],
      github: "https://github.com/FarjadAkbar/pharma-inventory-sales",
      demo: "https://v0-angular-crm-project.vercel.app",
      highlight: true,
    },
    {
      slug: "botsify-agentic",
      title: "Botsify Agentic",
      category: "Technology",
      subtitle: "AI Agent platform — frontend, realtime, MCPs, white-label",
      description:
        "I handled the complete frontend and backend modules: realtime conversation, analytics, building agents, MCPs, and third-party integrations (WhatsApp, Facebook, Meta). Key challenge: agent prompts — we built thinking, building, and suggestion steps plus a final prompt that runs on the chatbot. We rewamped from a workflow-based system to a conversation-based one; I focused on the agents page, implemented OpenAI response API, MCPs, and web/file search. The hard part was system_prompt design so the agent could replicate what customers do with drag-and-drop. Fixed a critical bug where connecting the same MCP twice (e.g. two Google Sheets) broke the bot — MCP wasn’t creating unique sessions; fixed after hours of debugging. For white-label we use a Cloudflare Worker so whitelabel.com/api routes to our API without exposing our backend URL.",
      image: "/portfolio/botsify/dashboard.png",
      images: ["/portfolio/botsify/dashboard.png", "/portfolio/botsify/real-time-conversation.png", "/portfolio/botsify/mcp.png", "/portfolio/botsify/analytics.png", "/portfolio/botsify/thirdparty-service.png", "/portfolio/botsify/partner-portal.png"],
      technologies: ["Laravel", "Vue.js", "MySQL", "Node.js", "Docker", "OpenAI API", "MCP", "Cloudflare Workers"],
      features: [
        "Real-time Chat & Streaming",
        "MCP, Web & File Search",
        "Agent Builder & System Prompts",
        "White-label + Proxy (Cloudflare)",
        "WhatsApp, Facebook, Meta",
        "Analytics & Unique MCP Sessions",
      ],
      github: "",
      demo: "https://agentic.botsify.com",
      highlight: true,
    },
    {
      slug: "realmex",
      title: "Realmex",
      category: "Technology",
      subtitle: "Property search system for agents — auto-notify customers",
      description:
        "Most effective feature I built: agents can create queries and add emails; when the API returns a property that matches the query, the system sends an email to the agent and to the addresses on the query. That helps agents auto-notify their customers about properties they’re interested in. Also implemented real-time conversation.",
      image: "/portfolio/realmex/custom-query.png",
      images: ["/portfolio/realmex/custom-query.png", "/portfolio/realmex/properties-list.png", "/portfolio/realmex/preview-property.png"],
      technologies: ["Laravel", "Vue.js", "MySQL", "Docker", "AWS"],
      features: ["Query + Email Notifications", "Auto-notify Customers", "Real-time Conversation", "Property Listings"],
      github: "",
      demo: "https://www.realmex.io/",
      highlight: true,
    },
    {
      slug: "cabbie",
      title: "Cabbie",
      category: "Technology",
      subtitle: "Taxi platform — backend API, dashboard, real-time location",
      description:
        "Platform built for a client from scratch. Implemented the API on the backend and a dashboard to view all data. Used RabbitMQ/MQTT for real-time driver location and to notify the customer.",
      image: "/portfolio/cabbie/dashboard.png",
      images: ["/portfolio/cabbie/dashboard.png", "/portfolio/cabbie/drivers.png", "/portfolio/cabbie/locations.png"],
      technologies: ["Laravel", "MQTT", "MySQL", "Queue", "S3", "Serverless"],
      features: ["Ride Booking", "Real-time Driver Location", "Dashboard", "Customer Notifications"],
      github: "",
      demo: "https://www.cabbie.today/",
      highlight: false,
    },
    {
      slug: "gigsfinder",
      title: "GigsFinder",
      category: "Technology",
      subtitle: "Venues, musicians, concerts — booking and tickets",
      description:
        "Helps venue owners register, musicians to book venues, and customers to see which musician is playing where. Built with Next.js and Laravel. Uses user location to suggest nearest venues and concerts. Musicians request venue owners for booking; on acceptance they can create a concert for that date. On the customer side, once a ticket is sold the customer cannot double-book. Challenge: prevent musicians from requesting the same venue/time when already booked. Used Firebase to notify musicians when a venue is booked and to restrict over-booking. Solution: when booking starts, reserve the slot for 5–10 minutes then release.",
      image: "/portfolio/gigsfinder/concert-view.png",
      images: ["/portfolio/gigsfinder/concert-view.png", "/portfolio/gigsfinder/concerts.png", "/portfolio/gigsfinder/venues.png", "/portfolio/gigsfinder/onboarding.png"],
      technologies: ["Next.js", "Laravel", "Firebase", "Location-based", "Booking & Reservations"],
      features: ["Venue Registration", "Musician Booking", "Concert Listings", "Time-slot Reserve & Release"],
      github: "",
      demo: "https://gigsfinder.com",
      highlight: false,
    },
  ] as const;

export type Project = (typeof projectsData)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}


export const skillsData = [
  {
      icon: <BsCodeSlash className="w-8 h-8 text-green-600" />,
      title: "Languages & Frameworks",
      description: "Modern programming languages and frameworks",
      skills: ["JavaScript (ES6+)", "PHP", "Go", "Laravel", "NestJS", "Vue.js", "Next.js", "React", "Tailwind CSS"],
    },
    {
      icon: <BsDatabase className="w-8 h-8 text-purple-600" />,
      title: "Databases & Storage",
      description: "Scalable data storage solutions",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS S3"],
    },
    {
      icon: <BsLayers className="w-8 h-8 text-orange-600" />,
      title: "DevOps & Cloud",
      description: "Infrastructure and deployment tools",
      skills: ["AWS (EC2, S3)", "Docker", "CI/CD (GitHub Actions)", "Nginx", "Git"],
    },
    {
      icon: <BsRainbow className="w-8 h-8 text-red-600" />,
      title: "AI/ML & Tools",
      description: "AI integration and development tools",
      skills: [
        "OpenAI API",
        "GPT Fine-tuning",
        "Prompt Engineering",
        "RAG",
        "Postman",
        "Stripe API",
        "Figma",
        "Vite",
        "ESLint",
      ],
    }
] as const;

export const pricingData = {
  websiteDevelopment: {
    title: "Website Development",
    description: "Complete website with AI features, dashboards, and premium design delivered in 7-10 days.",
    features: [
      "AI-powered features integration",
      "Custom dashboard & user portal",
      "Mobile-first responsive design",
      "Professional content & copywriting",
      "Advanced SEO & performance optimization",
      "Authentication & user management",
      "Payment integration ready",
      "Analytics & conversion tracking",
      "Free hosting for 3 months included",
    ],
    price: "$1,499",
    priceNote: "one time",
    subtitle: "Custom quote based on your project scope",
    ctaButton: "Get Custom Quote",
    whatsappLink: "#",
  },
} as const;

export const websiteProblemsData = [
  {
    number: "1",
    title: "Poor User Experience",
    problem: "Slow loading, confusing navigation, and outdated design frustrate visitors.",
    solution: "Lightning-fast performance, intuitive UX, and modern design that delights users.",
  },
  {
    number: "2",
    title: "No AI Integration",
    problem: "Missing out on AI capabilities that competitors are already using.",
    solution: "Smart chatbots, AI search, automation, and intelligent features built-in.",
  },
  {
    number: "3",
    title: "Months of Waiting",
    problem: "Traditional agencies take 3-6 months while you lose opportunities.",
    solution: "Live in 7 days. Full website in 2-4 weeks. Start growing immediately.",
  },
  {
    number: "4",
    title: "Unprofessional Brand",
    problem: "Your website doesn't reflect your company's true value and expertise.",
    solution: "Premium design that establishes authority and builds instant trust.",
  },
  {
    number: "5",
    title: "Hidden Costs",
    problem: "$10K quote becomes $30K with add-ons for SEO, content, and revisions.",
    solution: "One transparent price. Everything included. No surprise charges.",
  },
  {
    number: "6",
    title: "Low Conversions",
    problem: "Traffic doesn't convert. Visitors browse but don't take action.",
    solution: "Strategic CTAs, optimized forms, and conversion-focused design.",
  },
] as const;

export const blogPostsData = [
  {
    id: 1,
    title: "Understanding OpenAI json_schema, MCP, and the 30-Second Streaming Pause",
    excerpt: "Why missing tool_choice when using OpenAI structured outputs with MCP causes a long streaming pause, and how to fix it.",
    date: "2025-02-28",
    slug: "openai-json-schema-mcp-streaming-pause",
  },
] as const;

export type BlogPost = (typeof blogPostsData)[number];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((p) => p.slug === slug);
}

export const testimonialsData = [
  {
    id: 1,
    clientName: "Uday Yatnalli",
    clientRole: "Founder",
    company: "GoAusbildung",
    testimonial: "Created a professional platform that helps us connect students with free Ausbildung opportunities in Germany. The intuitive design and clear navigation made it easy for students to find and apply for programs!",
    images: [
      "https://picsum.photos/id/101/800/600",
      "https://picsum.photos/id/102/800/600",
    ],
  },
  {
    id: 2,
    clientName: "Ahmed Al-Mansoori",
    clientRole: "General Manager",
    company: "Al-Raba Technologies",
    testimonial: "Delivered a stunning website that perfectly showcases our power solutions portfolio. The modern design and seamless product catalog helped us generate 45% more qualified leads in the first quarter!",
    images: [
      "https://picsum.photos/id/103/800/600",
      "https://picsum.photos/id/104/800/600",
    ],
  },
  {
    id: 3,
    clientName: "Leo Joseph",
    clientRole: "Business Development",
    company: "MSinGermany",
    testimonial: "Built an exceptional website that connects Indian students with Master's programs in Germany. The clean design and smart features helped us increase applications by 60% in just 3 months!",
    images: [
      "https://picsum.photos/id/105/800/600",
      "https://picsum.photos/id/106/800/600",
    ],
  },
] as const;
