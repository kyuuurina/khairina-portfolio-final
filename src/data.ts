export const profile = {
  name: "Khairina Atiqah",
  fullName: "Khairina Atiqah Binti Khairil Hizar",
  role: "Software Engineer",
  location: "Based in Cyberjaya, Malaysia",
  tagline: "Curious? Have a look",
  email: "khairinahizar@gmail.com",
  phone: "+60 13-489 1450",
  linkedin: "https://www.linkedin.com/in/khairina-atiqah-khairil-hizar-17a7811a5/",
  bio: "I'm a jack of all trades in digital. Put me in a product role and I'll find the strategy; put me in a tech-heavy role and I'll ship the code. When a project calls for a stack I don't know yet, I teach myself and adapt fast — I picked up 3D and WebGL frameworks on my own for a medical visualization tool. What I care about most is finding the human need underneath a request, so the tech I build solves the right problem.",
};

export const stats = [
  { value: "3.83", label: "CGPA, graduated with distinction" },
  { value: "2+", label: "years professional experience" },
  { value: "9", label: "shipped products & platforms" },
  { value: "2,000+", label: "partners & users served" },
];

export const showcaseCategories = [
  {
    label: "FULL-STACK ENGINEERING",
    image: "strapseeker",
    caption: "Strapseeker — real-time inventory & RFID system",
  },
  {
    label: "CREATIVE TECHNOLOGY",
    image: "craniomax",
    caption: "CranioMax — self-taught 3D visualization engine",
  },
  {
    label: "PRODUCT & PLATFORMS",
    image: "scholarspace",
    caption: "ScholarSpace — research collaboration platform",
  },
];

export const skills = [
  "JavaScript", "TypeScript", "Java", "Python",
  "React", "Angular", "Next.js", "Three.js",
  "Express.js", "Node.js", "Spring Boot", "Django",
  "AWS", "Docker", "Kubernetes", "Ansible",
  "SQL", "NoSQL", "Redis", "PostgreSQL", "DynamoDB",
  "Agile", "Project Management",
];

export type Project = {
  year: string;
  title: string;
  tags: string[];
  description: string;
  link?: string;
  linkLabel?: string;
  image?: "strapseeker" | "craniomax" | "scholarspace";
  fallbackLabel?: string;
};

export const projects: Project[] = [
  {
    year: "2024–2026",
    title: "Simpulan Jiwa E-Commerce & Internal System",
    tags: ["Full-stack", "Product design"],
    description:
      "Architected a full-stack e-commerce platform plus an internal business management system — inventory, finance, and analytics dashboards — processing ~200 orders a month.",
    link: "https://simpulanjiwa.com",
    linkLabel: "Visit live",
    fallbackLabel: "SJ",
  },
  {
    year: "2024",
    title: "Strapseeker Inventory System",
    tags: ["Full-stack", "Systems"],
    description:
      "Real-time inventory tracking with RFID integration and an automated workflow engine built to handle high-volume e-commerce order processing.",
    link: "https://www.strapseeker.com/",
    linkLabel: "Visit live",
    image: "strapseeker",
  },
  {
    year: "2024",
    title: "Cranial Growth Calculator — CranioMax",
    tags: ["3D / WebGL", "Visualization"],
    description:
      "Self-taught Three.js to build a dynamic skull visualization engine with advanced 3D mathematical modeling and real-time parameter adjustment.",
    link: "https://www.craniomax.com/",
    linkLabel: "Visit live",
    image: "craniomax",
  },
  {
    year: "2024",
    title: "Kira-Kira AI — Financial Advisor",
    tags: ["Mobile", "GenAI / RAG"],
    description:
      "Cross-platform AI financial advisor supporting Malay, Mandarin, and Tamil. Led the RAG architecture on AWS Bedrock — built in 48 hours, placing 7th of 100+ teams at PayHack 2024.",
    linkLabel: "Case study on request",
    fallbackLabel: "KK",
  },
  {
    year: "2024",
    title: "ScholarSpace — Research Platform",
    tags: ["Full-stack", "Product"],
    description:
      "Led development of a full-stack research collaboration platform enabling academic discovery and partnership formation, built from scratch with Next.js and tRPC.",
    link: "https://scholarspace-kyuuurina.vercel.app/",
    linkLabel: "Visit live",
    image: "scholarspace",
  },
  {
    year: "2024",
    title: "Degree Mate — Career Intelligence",
    tags: ["Product", "GenAI"],
    description:
      "Built a job pathway recommendation engine with GenAI integration to analyze Malaysian job market trends and map academic pathways at Universiti Malaya.",
    linkLabel: "Case study on request",
    fallbackLabel: "DM",
  },
  {
    year: "2024",
    title: "PDISK — Interactive Coding Game",
    tags: ["3D / WebGL", "EdTech"],
    description:
      "Interactive web game built with Three.js to teach coding concepts to primary school students, developed under Malaysia's Ministry of Education.",
    linkLabel: "Case study on request",
    fallbackLabel: "PD",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Feb 2026 — Present",
    role: "Software Engineer 2",
    org: "Dell Technologies Inc.",
    location: "Cyberjaya, Malaysia",
    bullets: [
      "Deliver enterprise digital solutions for a global logistics platform used by ~2,000 external partners across the US and Asia-Pacific, processing ~300 daily transactions.",
      "Built B2B transaction capabilities standardizing data exchange between logistics partners and internal systems.",
      "Built data transformation pipelines with Kafka and Spring Boot, cutting manual reconciliation effort.",
    ],
  },
  {
    period: "Mar 2024 — Feb 2026",
    role: "Software Engineer 1",
    org: "Dell Technologies Inc.",
    location: "Cyberjaya, Malaysia",
    bullets: [
      "Built VCXAid, a monitoring dashboard (Next.js, PostgreSQL, PCF) that consolidated incident data and auto-tagged alerts.",
      "Automated manual Voice Contact Centre Support operations using Ansible, Oracle Linux Automation Manager, and Automation Anywhere.",
      "Reduced team workload by 20%, targeting 80+ tickets monthly, and cut backlog significantly.",
    ],
  },
  {
    period: "Mar 2024 — Feb 2026",
    role: "Freelance Full-Stack Developer",
    org: "FTM Technologies",
    location: "Kuala Lumpur, Malaysia",
    bullets: [
      "Delivered end-to-end web and AI-enhanced applications across multiple projects, owning both frontend and backend.",
      "Implemented complex, responsive frontend interfaces with React, Next.js, and Three.js.",
      "Built backend systems with Spring Boot and APIs, integrating external services and AI tools.",
    ],
  },
  {
    period: "Mar 2024 — Jul 2024",
    role: "Freelance Full-Stack Developer",
    org: "Eddelux Pte. Ltd.",
    location: "Singapore",
    bullets: [
      "Designed and built a full-stack inventory management system (React, Django, Redis, Docker) for Strapseeker's e-commerce operations (~2,000 orders/month).",
      "Built RESTful APIs with Django, Redis, and Celery for asynchronous order processing.",
      "Collaborated directly with stakeholders on product requirements and UX.",
    ],
  },
];

/** Turn a title into a URL-safe slug, e.g. "7th Place, PayHack 2024" → "7th-place-payhack-2024". */
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type Article = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  /** URL slug for the article's page. Defaults to slugify(title) if omitted. */
  slug?: string;
  /** Full article body, one string per paragraph. Falls back to [excerpt]. */
  body?: string[];
  /**
   * Image URLs, e.g. "/images/payhack-1.jpeg" for files in public/images.
   * The first is used as the card thumbnail and the article's hero; any others
   * appear further down the article. When empty, a lettered placeholder shows.
   */
  images?: string[];
  fallbackLabel?: string;
};

export const articles: Article[] = [
  {
    slug: "top-performer-award",
    date: "Axiata Digital Leaders Programme",
    category: "Award",
    title: "ADLP Top Performer Award: Here's What It Took",
    excerpt:
      "Six back-to-back ADLP bootcamps solving real problems for Bank Islam, Sun Life and others — and the twelve-hour turnaround that earned the programme's Top Performer Award.",
    body: [
      "The Axiata Digital Leaders Programme for Youth (ADLP) is Axiata Foundation's leadership and digital-skills programme for young Malaysian professionals. It runs across six bootcamps, each built around a real business problem set by one of Axiata's partner companies — PwC, Bank Islam, Sun Life Malaysia, Skribble, Elsa Talent — rather than a hypothetical case study. Teams work through the problem and present a solution to the partner company by the end of each bootcamp. I went through all six while working full-time, studying part-time, and keeping up with sports on the side.",
      "Bootcamp 3 was set by Bank Islam. The problem: micro-entrepreneurs were stuck with slow, manual loan documentation and approval processes, with no reliable way to catch fraud early. My team, Fearless, built a lookalike approval system — it matches new loan applicants against the profiles of past successful borrowers, and fast-tracks the close matches instead of putting every application through manual review. I was Digital Lead on that team, working alongside seven teammates covering strategy, research, design, pitch, impact, and presentation.",
      "Bootcamp 4 was set by Sun Life Malaysia. Our team, Togepi, was asked how Sun Life could strengthen engagement with what they call the “sandwich generation” — customers raising children while also caring for ageing parents — across the full customer journey, from awareness to retention. We proposed a Milestone Journey Engine built into Sun Life's SunAccess app: it detects real life milestones, like a child starting school or a home upgrade, and automatically surfaces the right policy recommendation and a reward at that exact moment, instead of leaving customers to go looking for coverage on their own.",
      "Twelve hours before Bootcamp 4's presentation deadline, my team still didn't have a solution. I stepped into the leadership role we needed right then, and we pulled it together in time. That's what earned me the programme's Top Performer Award.",
      "What stayed with me was the people. Across six bootcamps, I met professionals from completely different industries and backgrounds who were just as serious about building themselves as I was.",
    ],
    images: ["/images/axiata-1.jpeg", "/images/axiata-2.jpeg", "/images/axiata-3.jpeg"],
    fallbackLabel: "★",
  },
  {
    slug: "payhack-2024",
    date: "PayNet Open Finance Hackathon",
    category: "Award",
    title: "7th Place, PayHack 2024",
    excerpt:
      "Named a Top 10 Finalist at the JomHack × PayNet Open Finance Hackathon for Kira Kira, a Malaysian AI personal financial advisor built with my team over a 24-hour weekend.",
    body: [
      "The Open Finance Hackathon, organised by JomHack and PayNet (Payments Network Malaysia) and hosted at the Asia School of Business, was my first 24-hour in-person hackathon. Over a single intensive weekend, our team set out to build a working product from the ground up.",
      "Competing as Kira Kira Kampung, we were named one of the Top 10 Finalists for Kira Kira — a Malaysian AI personal financial advisor designed to help users navigate the local financial landscape and match each customer with the products best suited to their needs.",
      "To make the assistant genuinely accessible to Malaysian users, we built a voice interface using Mesolitica's APIs for local-language speech-to-text, allowing people to interact with the advisor in the languages they actually speak.",
      "On the engineering side, I developed the personalised advisory feature using a retrieval-augmented generation (RAG) pipeline on AWS Bedrock. It was my first time working with AWS's generative AI stack, and delivering a working RAG system within the hackathon's tight timeline proved to be a demanding but rewarding technical challenge.",
    ],
    images: ["/images/payhack-1.jpeg", "/images/payhack-2.jpeg"],
    fallbackLabel: "★",
  },
];

/** Look up an article by its slug (or its slugified title). */
export const findArticle = (slug: string) =>
  articles.find((a) => (a.slug ?? slugify(a.title)) === slug);

export type Award = {
  title: string;
  org: string;
  description: string;
};

export const awards: Award[] = [
  {
    title: "Top Performer Award",
    org: "Axiata Digital Leadership Programme",
    description: "Description coming soon.",
  },
  {
    title: "7th Place, PayHack 2024",
    org: "PayNet Open Finance Hackathon",
    description:
      "Built Kira-Kira AI, a Malaysian personal financial advisor, end-to-end in 48 hours — placing 7th out of 100+ teams nationwide.",
  },
];
