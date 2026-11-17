import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const solid = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

/* ----------------------------- Brand ----------------------------- */

export const LogoMarkIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden {...props}>
    <rect width="40" height="40" rx="11" fill="currentColor" />
    <path
      d="M14 29V11h7.2c3.9 0 6.4 2.3 6.4 5.8s-2.5 5.8-6.4 5.8H18.6V29H14Zm4.6-10.2h2.3c1.4 0 2.2-.8 2.2-2s-.8-2-2.2-2h-2.3v4Z"
      fill="#fff"
    />
  </svg>
);

/* ------------------------------ UI ------------------------------- */

export const CubeIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M12 1.8 21 6.7v10.6l-9 4.9-9-4.9V6.7l9-4.9Zm0 2.3L5.6 7.6 12 11.1l6.4-3.5L12 4.1Zm-7 5.2v6.8l6 3.3v-6.8l-6-3.3Z" />
  </svg>
);

export const ArrowUpRightIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);

export const ChevronRightIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const PlusIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M5 12h14" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const CheckCircleIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm4.3 6.3a1 1 0 0 0-1.4 0L10.6 12.6 9.1 11a1 1 0 1 0-1.4 1.4l2.2 2.2a1 1 0 0 0 1.4 0l5-5a1 1 0 0 0 0-1.3Z" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const SendIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M21.4 2.6a1 1 0 0 0-1.1-.2L3 9.6a1 1 0 0 0 0 1.9l7 2.5 2.5 7a1 1 0 0 0 1.9 0l7.2-17.3a1 1 0 0 0-.2-1.1ZM11.2 12.8 7.1 11.3 17.5 7l-6.3 5.8Z" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="m12 2.5 2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
  </svg>
);

export const QuoteIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M4 11.5C4 7.4 6.3 4.8 10 4l.6 1.8C8.4 6.6 7.4 8.1 7.3 10H10v8H4v-6.5Zm10 0c0-4.1 2.3-6.7 6-7.5l.6 1.8c-2.2.8-3.2 2.3-3.3 4.2H20v8h-6v-6.5Z" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M8 5.1v13.8a1 1 0 0 0 1.5.9l11-6.9a1 1 0 0 0 0-1.8l-11-6.9A1 1 0 0 0 8 5.1Z" />
  </svg>
);

/* --------------------------- Amenities --------------------------- */

export const WifiIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.9a5 5 0 0 1 6.8 0" />
    <circle cx="12" cy="19" r="1.1" fill="currentColor" />
  </svg>
);

export const BoltIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M13.5 2 4.6 13.2a.8.8 0 0 0 .6 1.3H11l-1 7.5 8.9-11.2a.8.8 0 0 0-.6-1.3H12.5l1-7.5Z" />
  </svg>
);

export const UserIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <circle cx="12" cy="7.5" r="4.5" />
    <path d="M3.5 20.5c0-4.1 3.8-7 8.5-7s8.5 2.9 8.5 7c0 .6-.4 1-1 1h-15c-.6 0-1-.4-1-1Z" />
  </svg>
);

export const UsersIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <circle cx="9" cy="8" r="3.8" />
    <circle cx="17" cy="9" r="3" />
    <path d="M1.8 19.5c0-3.5 3.2-6 7.2-6s7.2 2.5 7.2 6c0 .5-.4 1-1 1H2.8c-.6 0-1-.5-1-1ZM17.5 20.5h3.7c.5 0 1-.4 1-1 0-2.8-2.3-4.8-5.2-5.1 1 1.1 1.6 2.6 1.6 4.2 0 .7-.4 1.4-1.1 1.9Z" />
  </svg>
);

export const MonitorIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
    <path d="M8 20.5h8M12 16.5v4" />
  </svg>
);

export const ChairIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M7 3h10a2 2 0 0 1 2 2v6h-2V5H7v6H5V5a2 2 0 0 1 2-2Zm-3 9h16a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-1v3.5a1 1 0 1 1-2 0V17H8v3.5a1 1 0 1 1-2 0V17H5a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1Z" />
  </svg>
);

export const MeetingIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M12 2a10 10 0 1 0 10 10h-10V2Z" />
    <path d="M14 2.2V10h7.8A10 10 0 0 0 14 2.2Z" opacity=".55" />
  </svg>
);

export const BookIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
    <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
  </svg>
);

export const WalletIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M19 7V5.5A1.5 1.5 0 0 0 17.5 4h-12A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h14a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 19.5 7H5.5" />
    <circle cx="16.5" cy="13.5" r="1.2" fill="currentColor" />
  </svg>
);

export const UnlockIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" />
    <path d="M8 10.5V7a4 4 0 0 1 7.7-1.5" />
    <circle cx="12" cy="15.7" r="1.2" fill="currentColor" />
  </svg>
);

export const GraduationIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M12 3 1.5 8.5 12 14l8.5-4.5V16h2V8.5L12 3Z" />
    <path d="M5.5 12.6V16c0 2 2.9 3.8 6.5 3.8s6.5-1.8 6.5-3.8v-3.4L12 16l-6.5-3.4Z" />
  </svg>
);

export const BriefcaseIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
  </svg>
);

export const RocketIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M14.5 4.5c2.6-1.4 5-1.5 5-1.5s-.1 2.4-1.5 5l-6.5 6.5-3.5-3.5 6.5-6.5Z" />
    <path d="M8 11 5 10.5 3 12.5l4 1M13 16l.5 3 2-2-.5-4M6.5 17.5 4 20" />
    <circle cx="15" cy="9" r="1.3" />
  </svg>
);

export const EyeIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TargetIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

/* ---------------------------- Contact ---------------------------- */

export const MapPinIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M12 21.5s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6V17a2 2 0 0 1-2.2 2A15.6 15.6 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/* ----------------------------- Social ---------------------------- */

export const InstagramIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedinIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18H5.7V9.7h2.6V18ZM7 8.6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18.3 18h-2.6v-4c0-1 0-2.2-1.3-2.2-1.4 0-1.6 1-1.6 2.1V18h-2.6V9.7h2.5v1.1c.4-.7 1.2-1.3 2.5-1.3 2.6 0 3.1 1.7 3.1 4V18Z" />
  </svg>
);

export const XIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
  </svg>
);

export const FacebookIcon = (props: IconProps) => (
  <svg {...solid} {...props}>
    <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
  </svg>
);

/* --------------------------- Company ---------------------------- */

export const LightbulbIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M9 18h6M10 21.5h4" />
    <path d="M12 2.5a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.6V16h6v-.1c0-.6.3-1.2.8-1.6A6.5 6.5 0 0 0 12 2.5Z" />
  </svg>
);

export const ChartIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <path d="M3.5 3.5v17h17" />
    <path d="M8 16v-4M12.5 16V8M17 16v-6" />
  </svg>
);

export const CopyIcon = (props: IconProps) => (
  <svg {...stroke} {...props}>
    <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
    <path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" />
  </svg>
);
