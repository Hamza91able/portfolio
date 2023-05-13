export interface IWork {
  backgroundImage: string;
  description: string;
  link: string;
}

export const works: IWork[] = [
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
];
