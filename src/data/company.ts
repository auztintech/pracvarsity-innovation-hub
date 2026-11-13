import type { ComponentType, SVGProps } from "react";

import {
  BoltIcon,
  BriefcaseIcon,
  ChairIcon,
  ChartIcon,
  GraduationIcon,
  LightbulbIcon,
  MeetingIcon,
  MonitorIcon,
  RocketIcon,
  TargetIcon,
  UsersIcon,
  WifiIcon,
} from "@/components/icons/pack";

import { routes } from "./navigation";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* Main company homepage (Pracvarsity Technology Limited).
   Swap the image paths for your own files in /public/images. */
export const companyImages = {
  hero: "/images/drivencommunity.png",
  about: "/images/semiprivate.png",
  hub: ["/images/standard.png", "/images/innerroom.png", "/images/conference.png"],
  academy: "/images/cowork.png",
  consultancy: "/images/drivencommunity.png",
};

/* Leave empty to hide the play button. e.g. "/videos/hub-promo.mp4" */
export const hubVideo = "";

export const pillars: {
  key: string;
  name: string;
  tagline: string;
  text: string;
  href: string;
  cta: string;
  icon: Icon;
}[] = [
  {
    key: "hub",
    name: "Innovation Hub",
    tagline: "Spaces for productivity and innovation",
    text: "Coworking and private workspaces with reliable power and internet, built for focus and collaboration.",
    href: routes.hub,
    cta: "Explore the Hub",
    icon: BriefcaseIcon,
  },
  {
    key: "academy",
    name: "Academy",
    tagline: "Education and skills development",
    text: "Practical learning, MicroDegrees and professional training in digital skills and emerging technologies.",
    href: routes.academy,
    cta: "Explore the Academy",
    icon: GraduationIcon,
  },
  {
    key: "consultancy",
    name: "Consultancy",
    tagline: "Expertise for organisations",
    text: "Technology, data and capacity-building support for institutions, businesses and development partners.",
    href: routes.consultancy,
    cta: "Work With Us",
    icon: LightbulbIcon,
  },
];

export const vision =
  "A future where young Africans turn ideas into skills, and skills into innovation that solves real problems.";

export const mission =
  "To make that future possible through spaces that enable productive work, learning that leads to opportunity, and expertise that helps organisations grow.";

export const story =
  "Pracvarsity exists to close the gap between what people learn and what the world needs them to do. We bring together a place to work, a place to learn and the expertise to apply both.";

export const hubHighlights: { icon: Icon; title: string; text: string }[] = [
  { icon: ChairIcon, title: "Coworking & Private Spaces", text: "Open desks, quiet zones and private rooms." },
  { icon: BoltIcon, title: "Reliable Power & Internet", text: "24/7 electricity and fast, stable internet." },
  { icon: MeetingIcon, title: "Training & Conference Rooms", text: "Fully equipped rooms for sessions and events." },
  { icon: UsersIcon, title: "A Driven Community", text: "Students, professionals and innovators in one place." },
];

export const academyHighlights = [
  "Digital skills & emerging technologies",
  "MicroDegrees with hands-on projects",
  "Professional development for working adults",
  "Training for institutions and teams",
];

/* Draft service list. Confirm with the team before launch. */
export const consultancyServices: { icon: Icon; title: string; text: string }[] = [
  { icon: RocketIcon, title: "Digital Transformation", text: "Plan and adopt the right technology for how your organisation works." },
  { icon: ChartIcon, title: "Data & Research Support", text: "Analysis, dashboards and research methods that turn data into decisions." },
  { icon: TargetIcon, title: "Monitoring & Evaluation", text: "Frameworks and tools to measure programme performance and impact." },
  { icon: GraduationIcon, title: "Capacity Building", text: "Custom training programmes for staff, faculty and partner teams." },
  { icon: MonitorIcon, title: "Software & Web Solutions", text: "Websites, platforms and internal tools built around your needs." },
  { icon: WifiIcon, title: "Innovation Programmes", text: "Hackathons, bootcamps and incubation run with partner institutions." },
];

export const impactStats: { value?: number; suffix?: string; label: string; text: string }[] = [
  { value: 957, suffix: "+", label: "People Trained", text: "Through our digital education initiative" },
  { value: 1500, suffix: "+", label: "Hub Visits", text: "Paid visits to the Innovation Hub" },
  { value: 57, label: "Workspace Capacity", text: "Seats across our workspaces" },
  { label: "Growing", text: "Network of learners, professionals and collaborators" },
];

export const ctaActions = [
  { title: "Explore Our Programmes", text: "Find a course or MicroDegree that fits your goals.", href: routes.academy },
  { title: "Visit Our Innovation Hub", text: "Book a desk, a room or a training space.", href: routes.book },
  { title: "Partner With Us", text: "Universities, companies, NGOs and development organisations.", href: "mailto:admin@pracvarsity.com" },
];
