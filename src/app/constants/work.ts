export interface IWork {
  backgroundImage: string;
  description: string;
  link?: string;
}

export const works: IWork[] = [
  {
    backgroundImage: "/switcheroo.png",
    description:
      "Our team has decades of experience in mortgages, banking, accounting, and consulting. We love mortgages but love helping our customers even more.",
    link: "https://switcheroo.ie/",
  },
  {
    backgroundImage: "/lamda-coin.png",
    description:
      "A multi-vendor marketplace to buy and sell items of many categories, with full admin and vendor panels.",
    link: "https://lamdacoin.com/",
  },
  {
    backgroundImage: "/luxxitt.png",
    description:
      "Professional drivers on every trip.\nDesgined the backend services for this ride sharing application.",
    link: "https://play.google.com/store/apps/details?id=com.userluxxitt",
  },
  {
    backgroundImage: "/edrella.png",
    description:
      "Our goal is to bring Learning To People Instead of people to learning. Desgined the backend services for this E-Learning Platform (WIP)",
    link: "https://edrella-b5659.web.app/",
  },
  {
    backgroundImage: "/sweets-at-work.png",
    description:
      "In the pursuit of excellence Sweets At Work combine its own distinctive branding with products that make you feel extra special.",
    link: "http://54.83.183.172/",
  },
  {
    backgroundImage: "/dumitru.png",
    description:
      "Your go-to source for high-quality activewear & fitness gear. Find stylish, functional apparel for men & women.",
    link: undefined,
  },
];
