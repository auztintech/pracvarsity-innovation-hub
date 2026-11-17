import type { ComponentType, SVGProps } from "react";

import {
  BriefcaseIcon,
  GraduationIcon,
  MonitorIcon,
  RocketIcon,
  UsersIcon,
} from "@/components/icons/pack";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* Current registration form (from the live site). Swap per course if each gets its own form. */
export const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSchM_Ej-7KjCf980e5CrefmoVJGLGUwC1-YlesGL7THMjQDYg/viewform";

export const academyImages = {
  hero: "/images/conferenceroom.png",
  side: "/images/mainroom.png",
};

export type Course = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  topics: string[];
  audience: string[];
  image: string;
  registerUrl: string;
};

export const courses: Course[] = [
  {
    slug: "computer-essentials-emerging-technologies",
    tag: "Emerging Tech",
    title: "Computer Essentials & Emerging Technologies",
    summary:
      "Build strong digital foundations, then get hands-on with the technologies shaping work today.",
    topics: [
      "Digital foundations",
      "Artificial intelligence",
      "Cloud computing",
      "Cybersecurity",
      "Digital productivity",
      "Collaboration tools",
      "Emerging technologies",
    ],
    audience: ["Beginners", "Students", "Professionals", "Educators"],
    image: "/images/mainroom.png",
    registerUrl: REGISTER_URL,
  },
  {
    slug: "data-analysis-academic-research",
    tag: "Research",
    title: "Data Analysis for Academic Research",
    summary: "Use modern tools and AI to plan, analyse and present research that stands up to scrutiny.",
    topics: [
      "AI-assisted literature review",
      "Statistical analysis",
      "Data visualisation",
      "Modern research methods",
    ],
    audience: ["Researchers", "Lecturers", "Postgraduate students", "NGOs", "Development professionals"],
    image: "/images/conferenceroom.png",
    registerUrl: REGISTER_URL,
  },
  {
    slug: "finance-data-analytics",
    tag: "Finance",
    title: "Finance Data Analytics",
    summary: "Analyse financial data, build dashboards and turn numbers into business insight.",
    topics: ["Excel", "SQL", "Power BI", "Python", "Financial dashboards", "Business insights"],
    audience: ["Students", "Graduates", "Finance professionals", "Accountants", "Analysts", "Career switchers"],
    image: "/images/innerroom.png",
    registerUrl: REGISTER_URL,
  },
  {
    slug: "healthcare-data-analytics",
    tag: "Healthcare",
    title: "Healthcare Data Analytics",
    summary: "Apply data-driven approaches to healthcare research, patient outcomes and operations.",
    topics: [
      "Healthcare research data",
      "Patient outcomes",
      "Operational efficiency",
      "Evidence-based decisions",
    ],
    audience: ["Doctors", "Nurses", "Pharmacists", "Laboratory scientists", "Public health professionals"],
    image: "/images/mainroom2.png",
    registerUrl: REGISTER_URL,
  },
  {
    slug: "monitoring-evaluation-social-impact",
    tag: "Social Impact",
    title: "Monitoring, Evaluation & Data for Social Impact",
    summary: "Measure what matters: track programme performance, evaluate outcomes and prove impact.",
    topics: [
      "Programme performance",
      "Outcome evaluation",
      "Impact data analysis",
      "Evidence-based decisions",
    ],
    audience: ["NGOs", "Project managers", "Development practitioners", "Grant managers", "Impact professionals"],
    image: "/images/mainroom.png",
    registerUrl: REGISTER_URL,
  },
  {
    slug: "low-code-no-code-development",
    tag: "Low-Code",
    title: "Low-Code & No-Code Development",
    summary: "Launch websites, apps and automations without traditional programming.",
    topics: ["Websites", "Workflow automation", "Business applications", "Launching digital solutions"],
    audience: ["Entrepreneurs", "Professionals", "Founders", "Non-technical creators"],
    image: "/images/innerroom.png",
    registerUrl: REGISTER_URL,
  },
];

export const approach: { icon: Icon; title: string; text: string }[] = [
  { icon: MonitorIcon, title: "Instructor-Led", text: "Learn live from practitioners who do this work every day." },
  { icon: RocketIcon, title: "Hands-On Projects", text: "Build real projects you can show, not just pass a test." },
  { icon: UsersIcon, title: "Mentorship", text: "Get guidance and feedback while you learn and after." },
  { icon: BriefcaseIcon, title: "Real-World Application", text: "Skills mapped to the work employers and clients need." },
];

export const steps = [
  { title: "Choose A Programme", text: "Pick the MicroDegree that matches your goals." },
  { title: "Register", text: "Fill the short registration form. We'll reach out with cohort details." },
  { title: "Learn By Doing", text: "Join instructor-led sessions and work on hands-on projects." },
  { title: "Apply Your Skills", text: "Finish with a portfolio project and keep growing with our community." },
];

export const academyFaqs = [
  {
    q: "Who can join a MicroDegree?",
    a: "Anyone who wants practical skills. Each programme lists who it's best for, from complete beginners to working professionals.",
  },
  {
    q: "Do I need any experience?",
    a: "Not for most programmes. Computer Essentials and Low-Code start from the basics; the analytics programmes help if you're comfortable with a computer.",
  },
  {
    q: "How do I register?",
    a: "Tap Register on any programme and fill the form. Our team will contact you with the next cohort's dates and fees.",
  },
  {
    q: "Can my organisation train a team?",
    a: "Yes. We run custom training for universities, companies and NGOs through Pracvarsity Consultancy. Get in touch to plan one.",
  },
];

export const academyIcon = GraduationIcon;
