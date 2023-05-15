export interface IAbout {
  image: string;
  heading: string;
  description: string;
  block: {
    primary: {
      heading: string;
      description: string;
    };
    secondary: {
      heading: string;
      description: string;
    };
  };
}

export const aboutData: IAbout[] = [
  {
    image: "/backend.png",
    heading: "Backend Developer",
    description:
      "I specialize in building efficient and scalable server-side systems for web applications. My focus is on writing clean and maintainable code to ensure seamless functionality and optimal performance.",
    block: {
      primary: {
        heading: "Languages I speak:",
        description: "Javascript, Typescript, NodeJS, Java, Kotlin",
      },
      secondary: {
        heading: "Databases, Frameworks & Dev Tools",
        description:
          "Fastify\nExpressJS\nNestJS\nSpring\nMySQL\nPostgresSQL\nElasticsearch\nRedis\nRabbitMQ\nKafka\nJest\nMockito\nDocker\nKubernetes",
      },
    },
  },
  {
    image: "/ux.png",
    heading: "Frontend Developer",
    description:
      "I like to create visually appealing and user-friendly interfaces that bring design concepts to life. My focus is on crafting efficient and engaging web pages that delight users.",
    block: {
      primary: {
        heading: "Languages I speak:",
        description: "HTML, CSS, ReactJS, NextJS",
      },
      secondary: {
        heading: "Frameworks & Dev Tools",
        description:
          "ThreeJS\nMatterJS\nSolidJS\nMaterialUI\nAntDesign\nTailwind CSS\nSpringJS",
      },
    },
  },
];
