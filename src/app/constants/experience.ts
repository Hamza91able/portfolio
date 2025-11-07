export interface IExperience {
  name: string;
  designation: string;
  timePeriod: string;
  points?: string[];
}

export const companies: IExperience[] = [
  {
    name: "Bazaar Technologies",
    designation: "Senior Software Engineer II, Karachi, Pakistan",
    timePeriod: `Mar 2023 - Present · ${(new Date().getFullYear() - 2023) * 12 + new Date().getMonth() - 1
      } mos`,
    points: [
      `Contributed to the company’s transition from the B2B to the B2C business model, expanding customer reach and market presence`,
      `Collaborated with the core team to revamp the catalog system, resolving business blockers by implementing multi-image support, enhanced visibility controls, and user-friendly UI dashboards`,
      "Introduced voucher functionality to address a top customer request identified in surveys",
      `Implemented cost optimization measures by rightsizing resource allocation, reducing monthly vertical costs from $360 to $210 ( 42% reduction)`,
      `Maintained 100% test coverage through comprehensive unit and integration testing in an Extreme Programming environment`,
    ],
  },
  {
    name: "Bykea",
    designation: "Software Engineer - Fullstack, Karachi, Pakistan",
    timePeriod: "Apr 2022 - Mar 2023 · 1 yr",
    points: [
      "Enhanced the Delivery vertical by adding parcel insurance that provided customers with peace of mind",
      "Served on the core team that led development of a bidding system for the Ride-hailing vertical, enabling drivers and customers to find optimal offers",
      "Participated in initiatives to improve system stability by introducing unit testing",
      "Developed high-traffic backend services handling millions of requests daily",
    ],
  },
  {
    name: "Salsoft Technologies",
    designation: "Full Stack Software Engineer, Karachi, Pakistan",
    timePeriod: "Mar 2021 - Apr 2022 · 1 yr 2 mos",
    points: [
      "Developed multiple full-stack applications from design through deployment for diverse client projects",
      "Collaborated with cross-functional teams including project managers, clients, and mobile developers in a fast-paced agency environment",
      "Built backend services and APIs to support mobile applications across iOS and Android platforms",
    ],
  },
  {
    name: "Switcheroo.ie Mortgages",
    designation: "Full Stack Software Engineer, Dublin, Ireland (Remote)",
    timePeriod: "July 2020 - April 2021",
    points: [
      "Drove full-stack development at an early-stage startup, building core application modules from scratch",
      "Developed customer-requested mortgage calculation and comparison features for the Irish market",
      "Implemented end-to-end data encryption across frontend and backend services to ensure secure data transmission",
      "Redesigned the user interface using Material UI, creating responsive and intuitive components that improved user experience"
    ],
  },
];
