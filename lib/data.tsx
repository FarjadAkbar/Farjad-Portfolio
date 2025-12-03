import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { BsCodeSlash, BsDatabase, BsLayers, BsRainbow } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Portfolio",
    hash: "/portfolio",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
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
      title: "Botsify Agentic",
      category: "Technology",
      subtitle: "AI Agent Management Platform",
      description:
        "Complete platform for creating and managing AI agents with real-time chat functionality, streaming API, and custom MCP integration. Features version control, brand customization, and workflow generation.",
      image: "https://picsum.photos/id/1/800/600",
      technologies: ["Laravel", "Vue.js", "MySQL", "OpenAI API", "WebSockets", "MCP"],
      features: [
        "AI Agent Management",
        "Real-time Chat",
        "Streaming API",
        "Custom MCP",
        "Version Control",
        "Brand Customization",
      ],
      github: "https://github.com",
      demo: "https://botsify.com",
      highlight: true,
    },
    {
      title: "Finyou",
      category: "Technology",
      subtitle: "Startup Funding Platform",
      description:
        "Fintech platform designed for startups and small businesses with user-friendly interfaces, dynamic form rendering, and personalized dashboards powered by OpenAI for guided financial workflows.",
      image: "https://picsum.photos/id/2/800/600",
      technologies: ["Next.js", "React Query", "Zustand", "ShadeCn", "Docker", "CI/CD"],
      features: ["Startup Funding", "Business Dashboard", "User Experience", "Responsive Design"],
      github: "https://github.com",
      demo: "https://finyou.com",
      highlight: false,
    },
    {
      title: "Realmex",
      category: "Technology",
      subtitle: "Real Estate Platform",
      description:
        "Full-stack real estate platform for buying and selling properties in the Netherlands with real-time updates, advanced search and filter capabilities, and comprehensive user management system.",
      image: "https://picsum.photos/id/3/800/600",
      technologies: ["Laravel", "Vue.js", "Pusher", "Python", "Redis", "MySQL", "S3"],
      features: ["Property Listings", "Real-time Updates", "Search & Filter", "User Management"],
      github: "https://github.com",
      demo: "https://realmex.com",
      highlight: false,
    },
    {
      title: "Cabbie",
      category: "Technology",
      subtitle: "Taxi Management Platform",
      description:
        "Comprehensive taxi management platform similar to Uber with ride booking, real-time tracking, payment integration, and driver management. Built with Laravel and MQTT for real-time communication.",
      image: "https://picsum.photos/id/4/800/600",
      technologies: ["Laravel", "MQTT", "MySQL", "Queue", "S3", "Serverless Functions"],
      features: ["Ride Booking", "Real-time Tracking", "Payment Integration", "Driver Management"],
      github: "https://github.com",
      demo: "https://cabbie.com",
      highlight: false,
    },
    {
      title: "OnAnIsland",
      category: "Technology",
      subtitle: "Community Chat Application",
      description:
        "Real-time chat application tailored for an island community in the USA with messaging features, community tools, file sharing, and user profiles. Built with NestJS and Socket.io.",
      image: "https://picsum.photos/id/5/800/600",
      technologies: ["NestJS", "PostgreSQL", "Socket.io", "Prisma", "Redis", "Docker", "S3"],
      features: ["Real-time Messaging", "Community Features", "File Sharing", "User Profiles"],
      github: "https://github.com",
      demo: "https://onanisland.com",
      highlight: false,
    },
    {
      title: "Brainwash",
      category: "Technology",
      subtitle: "Laundry Management App",
      description:
        "Student-focused laundry app for hostel students with booking system, payment processing, and request management. Features Stripe integration and real-time notifications.",
      image: "https://picsum.photos/id/6/800/600",
      technologies: ["NestJS", "PostgreSQL", "Stripe", "Webhooks", "TypeORM"],
      features: ["Laundry Booking", "Payment Processing", "Student Dashboard", "Request Management"],
      github: "https://github.com",
      demo: "https://brainwash.com",
      highlight: false,
    },
  ] as const;


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
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and React Server Components.",
    date: "2024-01-15",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 2,
    title: "AI Integration in Web Development",
    excerpt: "Discover how to integrate AI features into your web applications for better user experiences.",
    date: "2024-01-10",
    slug: "ai-integration-in-web-development",
  },
  {
    id: 3,
    title: "Best Practices for Responsive Design",
    excerpt: "Essential tips and techniques for creating mobile-first responsive websites.",
    date: "2024-01-05",
    slug: "best-practices-for-responsive-design",
  },
] as const;

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
