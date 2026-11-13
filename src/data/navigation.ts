export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/* Academy and Consultancy point to their homepage sections for now.
   Switch them to "/academy" and "/consultancy" once those pages exist. */
export const routes = {
  home: "/",
  about: "/#about",
  hub: "/hub",
  academy: "/#academy",
  consultancy: "/#consultancy",
  contact: "/#contact",
  book: "/hub#book",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  {
    label: "Innovation Hub",
    href: routes.hub,
    children: [
      { label: "Overview", href: routes.hub },
      { label: "Workspaces", href: "/hub#spaces" },
      { label: "Pricing", href: "/hub#pricing" },
      { label: "Book A Space", href: routes.book },
    ],
  },
  { label: "Academy", href: routes.academy },
  { label: "Consultancy", href: routes.consultancy },
  { label: "Contact", href: routes.contact },
];

export const footerColumns = [
  {
    title: "Pracvarsity",
    links: [
      { label: "About Us", href: routes.about },
      { label: "Innovation Hub", href: routes.hub },
      { label: "Academy", href: routes.academy },
      { label: "Consultancy", href: routes.consultancy },
    ],
  },
  {
    title: "Innovation Hub",
    links: [
      { label: "Workspaces", href: "/hub#spaces" },
      { label: "Pricing", href: "/hub#pricing" },
      { label: "Book A Space", href: routes.book },
      { label: "FAQs", href: "/hub#faq" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Partner With Us", href: routes.contact },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms Of Service", href: "#" },
    ],
  },
];
