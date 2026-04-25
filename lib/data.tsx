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
      period: "Nov 2024 - Present",
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
      period: "Aug 2024 - Oct 2024",
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
      period: "Sep 2022 - Aug 2024",
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
      period: "Mar 2022 - Aug 2022",
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
      period: "Mar 2020 - Feb 2022",
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
      title: "Pharma - Sales & Inventory System",
      category: "Healthcare",
      subtitle: "Full-stack pharmaceutical operations platform",
      description:
        "End-to-end pharma operations platform unifying inventory, sales, manufacturing, quality (QC/QA), warehouse, and distribution. NestJS API gateway with JWT auth, microservices for identity, master data, procurement, manufacturing, quality, and a Next.js dashboard with KPIs, stock alerts, role-based access, and audit trails.",
      image: "/portfolio/pharma-banner.png",
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
      subtitle: "AI Agent platform - frontend, realtime, MCPs, white-label",
      description:
        "I handled the complete frontend and backend modules: realtime conversation, analytics, building agents, MCPs, and third-party integrations (WhatsApp, Facebook, Meta). Key challenge: agent prompts - we built thinking, building, and suggestion steps plus a final prompt that runs on the chatbot. We rewamped from a workflow-based system to a conversation-based one; I focused on the agents page, implemented OpenAI response API, MCPs, and web/file search. The hard part was system_prompt design so the agent could replicate what customers do with drag-and-drop. Fixed a critical bug where connecting the same MCP twice (e.g. two Google Sheets) broke the bot - MCP was not creating unique sessions; fixed after hours of debugging. For white-label we use a Cloudflare Worker so whitelabel.com/api routes to our API without exposing our backend URL.",
      image: "/portfolio/botsify-banner.png",
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
      subtitle: "Property search system for agents - auto-notify customers",
      description:
        "Most effective feature I built: agents can create queries and add emails; when the API returns a property that matches the query, the system sends an email to the agent and to the addresses on the query. That helps agents auto-notify their customers about properties they’re interested in. Also implemented real-time conversation.",
      image: "/portfolio/realmex-banner.png",
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
      subtitle: "Taxi platform - backend API, dashboard, real-time location",
      description:
        "Platform built for a client from scratch. Implemented the API on the backend and a dashboard to view all data. Used RabbitMQ/MQTT for real-time driver location and to notify the customer.",
      image: "/portfolio/cabbie-banner.png",
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
      subtitle: "Venues, musicians, concerts - booking and tickets",
      description:
        "Helps venue owners register, musicians to book venues, and customers to see which musician is playing where. Built with Next.js and Laravel. Uses user location to suggest nearest venues and concerts. Musicians request venue owners for booking; on acceptance they can create a concert for that date. On the customer side, once a ticket is sold the customer cannot double-book. Challenge: prevent musicians from requesting the same venue/time when already booked. Used Firebase to notify musicians when a venue is booked and to restrict over-booking. Solution: when booking starts, reserve the slot for 5-10 minutes then release.",
      image: "/portfolio/gigs-banner.png",
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
    contentHtml: `
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Recently, while implementing OpenAI structured outputs using
          <code class="px-1.5 py-0.5 bg-gray-100 rounded text-sm">json_schema</code> with MCP
          (Model Context Protocol), I ran into a serious performance issue.
        </p>

        <p>The model would:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Start streaming normally</li>
          <li>Then call <code class="px-1.5 py-0.5 bg-gray-100 rounded text-sm">mcp.list</code></li>
          <li>And suddenly pause for <strong>30 seconds</strong></li>
          <li>After that, the next chunk appeared</li>
        </ul>

        <p>
          After investigation, the root cause turned out to be
          <strong>not specifying <code class="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code></strong>.
          When I added <code class="px-1.5 py-0.5 bg-gray-100 rounded text-sm">tool_choice</code>, the pause dropped to 8-10 seconds.
        </p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">What is json_schema in OpenAI?</h2>
        <p>OpenAI now allows enforcing structured outputs using:</p>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>response_format: {
  type: "json_schema",
  json_schema: { ... }
}</code></pre>
        <p>This guarantees strict JSON and production-ready parsing.</p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">What is MCP?</h2>
        <p>MCP allows models to list tools, call tools, fetch schemas, and interact with external systems.</p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">The Real Problem: 30-Second Pause</h2>
        <p>Without explicit tool choice, the model evaluates too many tool paths while also honoring schema constraints.</p>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>tool_choice: "auto"</code></pre>
        <p>Setting this reduced the pause significantly by removing decision overhead.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Are LLMs a Single Point of Failure for Your Business?",
    excerpt:
      "Why cost-aware, hybrid AI architecture beats wrapper apps, plus practical fallback, routing, and caching infrastructure patterns.",
    date: "2026-04-25",
    slug: "are-llms-a-single-point-of-failure-for-your-business",
    contentHtml: `
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>Over the past year, it feels like everything in AI revolves around LLMs.</p>
        <p>From chatbots to content generation to coding assistants, many products today are thin layers on top of APIs from OpenAI and Anthropic.</p>
        <p><strong>What if all LLMs suddenly become unreliable or unaffordable?</strong></p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">The Hidden Risk: Subsidized Intelligence</h2>
        <ul class="list-disc pl-6 space-y-1">
          <li>Heavy infrastructure costs are absorbed by big companies</li>
          <li>Pricing does not fully reflect true compute usage</li>
          <li>Startups are building aggressively on top of this assumption</li>
        </ul>
        <p>If token prices rise and free tiers disappear, many AI products become expensive to run or hard to scale.</p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">Scenario: When LLMs Break or Become Expensive</h2>
        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">1. Return of traditional systems</h3>
        <p>Rule engines, classical ML, and deterministic workflows come back because they are predictable, cheaper, and reliable.</p>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">2. Rise of hybrid AI</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>Rules -> ML -> Retrieval -> LLM (last step only)</code></pre>
        <p>In this model, the LLM is a premium reasoning and language layer, not the foundation.</p>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">3. Intentional LLM usage</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li>Simple tasks: rules/templates</li>
          <li>Data queries: retrieval systems</li>
          <li>Predictions: ML models</li>
          <li>Complex reasoning: LLMs</li>
        </ul>
        <p>This shift alone can cut cost by <strong>70-90%</strong>.</p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">A New Hiring Signal: Cost-Aware Engineers</h2>
        <p>Companies will evaluate who can reduce token usage, design fallbacks, and avoid unnecessary LLM calls.</p>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">What Does a Resilient AI System Look Like?</h2>
        <p>A production-grade request path:</p>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>User Request
   |
   v
Cache Layer (check first)
   |
   v
Rule Engine (cheap, deterministic)
   |
   v
Retrieval System (facts/data)
   |
   v
LLM (only if necessary)</code></pre>

        <p>With multi-model fallback, caching, and model routing, you keep quality while controlling cost.</p>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">Infrastructure diagram</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>                +---------------------+
                |  API Gateway / BFF  |
                +----------+----------+
                           |
                     +-----v------+
                     | Rate Limit |
                     +-----+------+
                           |
      +--------------------+--------------------+
      |                                         |
+-----v------+                           +------v------+
| Redis Cache|                           | Rule Engine |
+-----+------+                           +------+------+
      |                                         |
      |                              +----------v----------+
      |                              | Retrieval (PG + VDB)|
      |                              +----------+----------+
      |                                         |
      +-------------------+---------------------+
                          |
                    +-----v------+
                    | LLM Router |
                    +--+-----+---+
                       |     |
           +-----------+     +-------------+
           |                               |
   +-------v--------+              +-------v--------+
   | Primary Model  |              | Secondary Model|
   +-------+--------+              +-------+--------+
           |                               |
           +---------------+---------------+
                           |
                     +-----v------+
                     | Observability|
                     +------------+</code></pre>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">Real code: model routing + fallback + retrieval + cache</h2>
        <p>This example follows the diagram: cheap layers first, LLM last, with retries and observability.</p>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>import crypto from "node:crypto";

type Tier = "simple" | "medium" | "complex";
type AiResult = { answer: string; source: string; model?: string; cached?: boolean };

const providers = {
  simple: ["local-mini", "openai-gpt-4o-mini"],
  medium: ["openai-gpt-5-mini", "anthropic-haiku"],
  complex: ["openai-gpt-5", "anthropic-sonnet"],
} as const;

function sha(text: string) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function chooseTier(input: string): Tier {
  if (input.length &lt; 160) return "simple";
  if (input.length &lt; 900) return "medium";
  return "complex";
}

function buildCacheKey(userId: string, prompt: string, tier: Tier) {
  return \`ai:v2:\${userId}:\${tier}:\${sha(prompt)}\`;
}

function tryRuleEngine(prompt: string): AiResult | null {
  if (/^hi|hello|thanks$/i.test(prompt.trim())) {
    return { answer: "Hi. How can I help?", source: "rule-engine" };
  }
  if (/^pricing$/i.test(prompt.trim())) {
    return { answer: "Pricing starts at $49 per month.", source: "rule-engine" };
  }
  return null;
}

async function retrieveFacts(prompt: string): Promise&lt;string[]&gt; {
  // Example only: could query Postgres + vector DB
  return vectorStore.search(prompt, { topK: 4 });
}

export async function generateAnswer(userId: string, prompt: string): Promise&lt;AiResult&gt; {
  const started = Date.now();
  const tier = chooseTier(prompt);
  const cacheKey = buildCacheKey(userId, prompt, tier);

  const cached = await redis.get(cacheKey);
  if (cached) {
    metrics.increment("ai.cache_hit", 1, { tier });
    return { ...JSON.parse(cached), cached: true };
  }
  metrics.increment("ai.cache_miss", 1, { tier });

  const ruleResult = tryRuleEngine(prompt);
  if (ruleResult) {
    await redis.set(cacheKey, JSON.stringify(ruleResult), "EX", 1800);
    return ruleResult;
  }

  const context = await retrieveFacts(prompt);
  const chain = providers[tier];

  for (const model of chain) {
    try {
      const response = await callProvider(model, {
        prompt,
        context,
        timeoutMs: 9000,
        maxOutputTokens: tier === "complex" ? 1200 : 500,
      });

      const result: AiResult = {
        answer: response.text,
        source: "llm",
        model,
      };

      await redis.set(cacheKey, JSON.stringify(result), "EX", 3600);
      metrics.timing("ai.success_latency_ms", Date.now() - started, { model, tier });
      return result;
    } catch (error) {
      logger.warn({ model, tier, error }, "provider_failed_trying_next");
      metrics.increment("ai.provider_failover", 1, { model, tier });
    }
  }

  metrics.increment("ai.template_fallback", 1, { tier });
  return {
    answer: "Service is busy right now. Please retry in a moment.",
    source: "template-fallback",
  };
}</code></pre>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">How to build cost-optimized AI infrastructure</h2>
        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">1) Use LLMs selectively</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>// Use deterministic flows first; call LLM only for language-heavy cases
if (intent === "track_order" &amp;&amp; orderId) {
  const order = await ordersApi.get(orderId);
  return {
    source: "workflow",
    message: \`Order \${order.id} is \${order.status} and will arrive on \${order.eta}.\`,
  };
}

if (intent === "refund_policy") {
  return {
    source: "kb-retrieval",
    message: await faqStore.get("refund_policy_v3"),
  };
}

// Only here use LLM for nuanced or ambiguous requests
return await llmAnswer(userQuery);</code></pre>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">2) Add prompt/output caching</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>const key = \`ai:v2:\${tenantId}:\${sha(normalizedPrompt)}\`;
const cached = await redis.get(key);
if (cached) return JSON.parse(cached);
await redis.set(key, JSON.stringify(result), "EX", 3600);</code></pre>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">3) Route models by complexity</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>const route = {
  faq: "local-mini",
  support: "gpt-5-mini",
  strategy: "gpt-5",
}[taskType];</code></pre>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">4) Design multi-provider fallback</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>const fallbackChain = ["openai-gpt-4.1", "anthropic-sonnet", "local-mistral"];
for (const model of fallbackChain) {
  try { return await callProvider(model, payload); }
  catch { continue; }
}</code></pre>

        <h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">5) Use hybrid pipelines: rules + ML + retrieval + LLM</h3>
        <pre class="p-4 bg-gray-900 text-white rounded-lg overflow-x-auto text-sm"><code>const result =
  runRules(input) ??
  runClassifier(input) ??
  answerFromRetrieval(input) ??
  await answerFromLLM(input);</code></pre>

        <h2 class="text-xl font-bold text-gray-900 mt-10 mb-3">Final thought</h2>
        <p>LLMs are powerful, but they are a tool, not the system.</p>
        <p>If LLM costs go 10x tomorrow, your architecture should still survive.</p>
      </div>
    `,
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
