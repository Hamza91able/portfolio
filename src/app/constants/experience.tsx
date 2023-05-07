export interface IExperience {
  name: string;
  designation: string;
  timePeriod: string;
  points?: string[];
}

export const companies: IExperience[] = [
  {
    name: "Bazaar Technologies",
    designation: "Senior Software Engineer I",
    timePeriod: `Mar 2023 - Present · ${
      (new Date().getFullYear() - 2023) * 12 + new Date().getMonth() - 1
    } mos`,
    points: [
      "Working in Commercials squad",
      "Responsible for building and maintaining internal tools which relates to Procurement process and Fulfillment process",
      "Working in a highly Test Driven Environment",
      "Working with multiple Microservices",
      "Following Extreme Programming Methodology with high focus on Pair Programming",
    ],
  },
  {
    name: "Bykea",
    designation: "Software Engineer - Fullstack",
    timePeriod: "Apr 2022 - Mar 2023 · 1 yr",
    points: [
      "Wokring in Delivery vertical",
      "Working with multiple Microservices",
      "Responsible for creating new and maintaining old features",
      "Work with a on focus of scale work as we have millions of customers",
    ],
  },
  {
    name: "Salsoft Technologies (Pvt) Ltd",
    designation: "Web Application Developer",
    timePeriod: "Mar 2021 - Apr 2022 · 1 yr 2 mos",
    points: [
      "Developing Complete Platforms From Start to Finish",
      "Managing Existing Projects",
      "Developing Complete Application Structure and Design",
      "Developing Production Ready Web Applications",
      "Developing REST APIs for Mobile Applications",
      "Working on Various Technologies like WebRTC, WebGL, RTMP etc.",
      "Highly Involved with Project Managers for Improving Application Flow",
      "Wokring on Multiple Web Applications Simultaneously",
      "Always Learning Something New",
    ],
  },
  {
    name: "Novasoft",
    designation: "MERN Stack Developer",
    timePeriod: "Jun 2019 - Mar 2021 · 1 yr 10 mos",
    points: [
      "Developing React Applications Using Material UI and Ant Designs",
      "Developing Frontend & Backend of E-Learning Platform",
    ],
  },
  {
    name: "Switcheroo.ie Mortgages",
    designation: "Full Stack Software Engineer (Contract)",
    timePeriod: "July 2020 - April 2021",
    points: [
      "Responsible for developing new and maintaining old features",
      "Worked closely with international clients to assess requirements and develop solutions",
      "Responsible for managing Mortgage platforms",
    ],
  },
];
