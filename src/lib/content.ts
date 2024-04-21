export const projectTypes = [
  {
    label: "Web Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "/web-design",
    backgroundUrl: "/assets/home/desktop/image-web-design-small.jpg",
    className: "row-span-full",
    introBgUrl: "/assets/web-design/desktop/bg-pattern-intro-web.svg",
    projects: [
      {
        label: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        imageUrl: "/assets/web-design/desktop/image-express.jpg",
      },
      {
        label: "Transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
        imageUrl: "/assets/web-design/desktop/image-transfer.jpg",
      },
      {
        label: "PHOTON",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        imageUrl: "/assets/web-design/desktop/image-photon.jpg",
      },
      {
        label: "BUILDER",
        description:
          "Connects users with local contractors based on their location",
        imageUrl: "/assets/web-design/desktop/image-builder.jpg",
      },
      {
        label: "BLOGR",
        description:
          "Blogr is a platform for creating an online blog or publication",
        imageUrl: "/assets/web-design/desktop/image-blogr.jpg",
      },
      {
        label: "CAMP",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        imageUrl: "/assets/web-design/desktop/image-camp.jpg",
      },
    ],
  },
  {
    label: "App Design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    href: "/app-design",
    backgroundUrl: "/assets/home/desktop/image-app-design.jpg",
    introBgUrl: "/assets/app-design/desktop/bg-pattern-intro-app.svg",
    projects: [
      {
        label: "AIRFILTER",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        imageUrl: "/assets/app-design/desktop/image-airfilter.jpg",
      },
      {
        label: "EYECAM",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
        imageUrl: "/assets/app-design/desktop/image-eyecam.jpg",
      },
      {
        label: "FACEIT",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
        imageUrl: "/assets/app-design/desktop/image-faceit.jpg",
      },
      {
        label: "TODO",
        description:
          "A todo app that features cloud sync with light and dark mode",
        imageUrl: "/assets/app-design/desktop/image-todo.jpg",
      },
      {
        label: "LOOPSTUDIOS",
        description: "A VR experience app made for Loopstudios",
        imageUrl: "/assets/app-design/desktop/image-loopstudios.jpg",
      },
    ],
  },
  {
    label: "Graphic Design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    href: "/graphic-design",
    backgroundUrl: "/assets/home/desktop/image-graphic-design.jpg",
    introBgUrl: "/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg",
    projects: [
      {
        label: "TIM BROWN",
        description:
          "A book cover designed for Tim Brown's new release, 'Change'",
        imageUrl: "/assets/graphic-design/desktop/image-change.jpg",
      },
      {
        label: "BOXED WATER",
        description: "A simple packaging concept made for Boxed Water",
        imageUrl: "/assets/graphic-design/desktop/image-boxed-water.jpg",
      },
      {
        label: "SCIENCE!",
        description:
          "A poster made in collaboration with the Federal Art Project",
        imageUrl: "/assets/graphic-design/desktop/image-science.jpg",
      },
    ],
  },
];

export type ProjectType = (typeof projectTypes)[0];
export type Project = (typeof projectTypes)[0]["projects"][0];

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
