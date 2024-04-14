export const projects = [
  {
    label: "Web Design",
    href: "/web-design",
    backgroundUrl: "/assets/home/desktop/image-web-design-small.jpg",
    className: "row-span-full"
  },
  {
    label: "App Design",
    href: "/app-design",
    backgroundUrl: "/assets/home/desktop/image-app-design.jpg",
  },
  {
    label: "Graphic Design",
    href: "/graphic-design",
    backgroundUrl: "/assets/home/desktop/image-graphic-design.jpg",
  },
];

export type ProjectType = (typeof projects)[0];

export const qualities = [
  {
    header: "PASSIONATE",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imageUrl: "/assets/home/desktop/illustration-passionate.svg",
  },
  {
    header: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imageUrl: "/assets/home/desktop/illustration-resourceful.svg",
    className: "-rotate-90",
  },
  {
    header: "FRIENDLY",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imageUrl: "/assets/home/desktop/illustration-friendly.svg",
    className: "rotate-90",
  },
];

export const links = [
  { label: "Our Company", href: "/our-company" },
  { label: "Locations", href: "/locations" },
  { label: "contact", href: "/contact" },
];

export const socials = [
  {
    label: "facebook",
    href: "https://www.facebook.com",
    imageUrl: "/assets/shared/desktop/icon-facebook.svg",
  },
  {
    label: "youtube",
    href: "https://www.youtube.com",
    imageUrl: "/assets/shared/desktop/icon-youtube.svg",
  },
  {
    label: "twitter",
    href: "https://www.twitter.com",
    imageUrl: "/assets/shared/desktop/icon-twitter.svg",
  },
  {
    label: "pinterest",
    href: "https://www.pinterest.com",
    imageUrl: "/assets/shared/desktop/icon-pinterest.svg",
  },
  {
    label: "instagram",
    href: "https://www.instagram.com",
    imageUrl: "/assets/shared/desktop/icon-instagram.svg",
  },
];
