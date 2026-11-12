import type { ComponentType, SVGProps } from "react";

import {
  BoltIcon,
  ChairIcon,
  GraduationIcon,
  MeetingIcon,
  MonitorIcon,
  BookIcon,
  UnlockIcon,
  UsersIcon,
  WalletIcon,
  WifiIcon,
} from "@/components/icons/pack";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* Images: copy the photos from the live site (static/assets/prac*.jpeg)
   into /public/images with the same file names. */
export const images = {
  logo: "/images/logo.png",
  logoLight: "/images/logo-light.png",
  hero: "/images/mainroom.png",
  about: "/images/who.png",
  why: "/images/prac7.jpeg",
  review: "/images/prac5.jpeg",
  gallery: ["/images/innerroom.png", "/images/conference.png", "/images/prac8.jpeg"],
};


export const contact = {
  address:
    "C2, BIU Shopping Complex, Opposite University of Benin Main Gate, Ugbowo, Benin City, Edo State",
  shortAddress: "Ugbowo, Benin City",
  phones: ["+234 806 770 0016", "+234 812 345 6789"],
  emails: ["pracvarsity@gmail.com", "admin@pracvarsity.com"],
  mapQuery: "BIU Shopping Complex, Ugbowo, Benin City",
};

export const navLinks: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Spaces",
    href: "#spaces",
    children: [
      { label: "Workstations", href: "#spaces" },
      { label: "Meeting Areas", href: "#spaces" },
      { label: "Study Areas", href: "#spaces" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "MicroDegrees", href: "#programs" },
      { label: "Book A Workspace", href: "#book" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export const audiences = [
  "Students & Career Starters",
  "Remote Workers",
  "Freelancers",
  "Founders & Builders",
  "Researchers",
  "Young Innovators",
  "Lecturers & Educators",
  "Startup Teams",
];
export const partners = [
  { name: "University of Benin", logo: "/images/partners/alx.png" },
  { name: "Partner Two", logo: "/images/partners/drid.jpeg" },
  { name: "Partner Three", logo: "/images/partners/ypf.jpeg" },
];

export const spaces: {
  name: string;
  caption: string;
  image: string;
  tags: { icon: Icon; label: string }[];
}[] = [
  {
    name: "Comfortable Workstations",
    caption: "Designed for focus",
    image: "/images/innerroom.png",
    tags: [
      { icon: WifiIcon, label: "1K+ Mbps" },
      { icon: BoltIcon, label: "24/7 Power" },
      { icon: ChairIcon, label: "Ergonomic" },
    ],
  },
  {
    name: "Semi-private Space",
    caption: "Collaboration spaces",
    image: "/images/semiprivate.png",
    tags: [
      { icon: WifiIcon, label: "1K+ Mbps" },
      { icon: UsersIcon, label: "Teams" },
      { icon: BookIcon, label: "Available" },
    ],
  },
  {
    name: "Standard Workstation",
    caption: "Quiet zones for focus",
    image: "/images/standard.png",
    tags: [
      { icon: WifiIcon, label: "1K+ Mbps" },
      { icon: BoltIcon, label: "24/7 Power" },
      { icon: BookIcon, label: "Available" },
    ],
  },
  {
    name: "Conference Hall",
    caption: "Conference hall for meetings",
    image: "/images/conference.png",
    tags: [
      { icon: WifiIcon, label: "1K+ Mbps" },
      { icon: BoltIcon, label: "24/7 Power" },
      { icon: BookIcon, label: "Available" },
    ],
  },
];

export const features: { icon: Icon; title: string; text: string; image?: string }[] = [
  { icon: BoltIcon, title: "24/7 Electricity", text: "Guaranteed power so your work never stops.", image: "/images/power.png" },
  { icon: WifiIcon, title: "Fast Internet", text: "Reliable speeds for remote work and virtual meetings.", image: "/images/cowork.png" },
  { icon: ChairIcon, title: "Ergonomic Workstations", text: "Comfortable seating and ample desk space.", image: "/images/semiprivate.png" },
  { icon: MeetingIcon, title: "Meeting Areas", text: "Collaboration spaces for teams and study groups.", image: "/images/conference.png" },
  { icon: BookIcon, title: "Quiet Study Zones", text: "Calm corners built for deep focus.", image: "/images/innerroom.png" },
  { icon: UsersIcon, title: "Driven Community", text: "Students, professionals and builders in one space.", image: "/images/drivencommunity.png" },
  { icon: WalletIcon, title: "Flexible Plans", text: "Daily, weekly and monthly options that fit your budget.", image: "/images/flex.png" },
  { icon: UnlockIcon, title: "No Lock-ins", text: "Student and startup friendly. Use it when you need it.", image: "/images/standard.png" },
];

export const whyItems = [
  {
    title: "Students & Career Starters",
    text: "Gain real-world experience and work on hands-on projects that go beyond the classroom.",
    chips: ["Hands-on Projects", "Career Ready"],
  },
  {
    title: "Remote Workers & Freelancers",
    text: "A reliable workspace with no worries about power or internet, so you can deliver for clients every day.",
    chips: ["No Power Worries", "Fast Internet"],
  },
  {
    title: "Founders & Builders",
    text: "A place to collaborate, experiment and grow your ideas alongside people who are building too.",
    chips: ["Collaboration", "Community"],
  },
];

export const visionMission = {
  vision:
    "To build an innovation-driven ecosystem that empowers students and young professionals across Nigeria.",
  mission: [
    "Equip learners with practical, employable skills",
    "Provide affordable, reliable co-working spaces",
    "Run internship-style, project-based training",
    "Grow a community of problem-solvers",
  ],
};

export const plans = [
  {
    name: "Daily",
    price: "₦2,000",
    period: "/day",
    note: "No commitment",
    featured: false,
    perks: ["24/7 electricity", "High-speed internet", "Comfortable workstation", "Community access"],
  },
  {
    name: "Weekly",
    price: "₦10,000",
    period: "/week",
    note: "Best value",
    featured: true,
    perks: [
      "24/7 electricity",
      "High-speed internet",
      "Comfortable workstation",
      "Community access",
      "Priority booking",
    ],
  },
  {
    name: "Monthly",
    price: "₦36,000",
    period: "/month",
    note: "Maximum flexibility",
    featured: false,
    perks: [
      "24/7 electricity",
      "High-speed internet",
      "Comfortable workstation",
      "Community access",
      "Dedicated desk option",
    ],
  },
];

export const programs = [
  {
    tag: "Emerging Tech",
    title: "Computer Essentials & Emerging Technologies",
    text: "Digital foundations plus AI, cloud, cybersecurity and collaboration tools.",
    audience: "Beginners, students, professionals and educators",
    image: "/images/prac9.jpeg",
  },
  {
    tag: "Research",
    title: "Data Analysis for Academic Research",
    text: "AI-assisted literature review, statistics, visualisation and research methods.",
    audience: "Researchers, lecturers, postgraduate students and NGOs",
    image: "/images/prac7.jpeg",
  },
  {
    tag: "Finance",
    title: "Finance Data Analytics",
    text: "Excel, SQL, Power BI and Python for financial analysis and dashboards.",
    audience: "Graduates, accountants, analysts and career switchers",
    image: "/images/prac3.jpeg",
  },
  {
    tag: "Healthcare",
    title: "Healthcare Data Analytics",
    text: "Data-driven healthcare research, patient outcomes and operations.",
    audience: "Doctors, nurses, pharmacists and public health professionals",
    image: "/images/prac1.jpeg",
  },
  {
    tag: "Social Impact",
    title: "Monitoring, Evaluation & Data for Social Impact",
    text: "Programme performance, outcome evaluation and impact analysis.",
    audience: "NGOs, project managers and development practitioners",
    image: "/images/prac8.jpeg",
  },
  {
    tag: "Low-Code",
    title: "Low-Code & No-Code Development",
    text: "Build websites, automate workflows and launch apps without traditional programming.",
    audience: "Entrepreneurs, founders and non-technical creators",
    image: "/images/prac5.jpeg",
  },
];

/* Check these against the exact wording on the live site before launch. */
export const testimonials = [
  {
    quote:
      "The materials and videos were easy to understand, and every presentation was exceptional.",
    name: "Dr. Omonuwa Omojefe Augustine",
    role: "Lecturer, University of Benin",
  },
  {
    quote:
      "The facilitators simplified complex concepts in AI, cloud computing, and data, making learning practical and accessible.",
    name: "Dr. Mrs. Blessing Imalukho Oboh",
    role: "Lecturer, University of Benin",
  },
  {
    quote:
      "Developing my AI-powered administrative assistant changed how I approach technology in my professional work.",
    name: "Esther Adejayan",
    role: "Final-year Student",
  },
  {
    quote: "It was a phenomenal experience. I learned so much and would gladly enroll again.",
    name: "Joy Esohe Omoriyekomwan",
    role: "Lecturer, University of Benin",
  },
];

export const faqs = [
  {
    q: "How do I book a workspace at Pracvarsity?",
    a: "Fill the booking form on this page or walk into the hub. Pick a daily, weekly or monthly plan and our team will confirm your spot.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. There are no long-term lock-ins. Use the space daily, weekly or monthly, whatever fits your schedule and budget.",
  },
  {
    q: "What comes with every plan?",
    a: "Every plan includes 24/7 electricity, high-speed internet, a comfortable workstation and access to the Pracvarsity community.",
  },
  {
    q: "Where is the hub located?",
    a: "C2, BIU Shopping Complex, opposite the University of Benin main gate, Ugbowo, Benin City. More hubs are launching soon at other universities.",
  },
  {
    q: "How do I join a MicroDegree program?",
    a: "Choose a program in the Learn Skills That Matter section and register, or join the training waiting list to hear when the next cohort starts.",
  },
];

export const programIcon = GraduationIcon;
