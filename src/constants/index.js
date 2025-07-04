export const myProjects = [
  {
    id: 1,
    title: "To Do List",
    description:
      "A simples yet efficiente to-do list to organize tasks and appointments.",
    subDescription: [
      "Built a application with ReactJS, CSSModules, and Phosphor Icons that enhances user experience through a straightforward and minimalistic interface.",
      "Users may add new tasks to the list and have visual feedback when interacting with them, being it by deleting it or assigning it as completed",
      ,
    ],
    url: "https://todo-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/to-do-list",
    logo: "",
    image: "/assets/projects/todo-list.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 3,
        name: "CSSModules",
        path: "/assets/logos/css3.svg",
      },


    ],
  },
  {
    id: 2,
    title: "Coffees Web Store",
    description:
      "A interface for a web store that sells different kinds of coffees",
    subDescription: [
      "Developed a React-based Single Page Application (SPA) frontend with Typescript and Styled-components for a sleek user experience and code organization.",
      "Optimized SEO and page speed using Vite.js for fast builds."
    ],
    url: "https://coffeedelivery-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/coffee-delivery",
    logo: "",
    image: "/assets/projects/coffee-delivery.png",
    tags: [
      {
        id: 1,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 5,
        name: "Styled-components",
        path: "/assets/logos/css3.svg",
      },


    ],
  },
  {
    id: 3,
    title: "Feed",
    description:
      "A social media feed, similiar to instagram that allows users to comment on other posts",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using React and Typescript",
      "Users can comment inside posts and see when they were made",
      "New posts can be coded into the application",
      "Optimized SEO and page speed using Vite.js for fast builds."
    ],
    url: "https://feed-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/ignite/tree/main/react/01-fundamentos-reactjs-ts",
    logo: "",
    image: "/assets/projects/feed.png",
    tags: [
      {
        id: 1,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "CSSModules",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },

    ],
  },
  {
    id: 4,
    title: "Timer",
    description:
      "A pomodoro timer to cronometrate study time.",
    subDescription: [
      "Built a straightforward interface with React, Typescript and Styled-components",
      "Developed a timer with cycles up to 60 minutes that show a warning to the user when expired",
      "Included a history saved on localStorage that contains past cycles data and if they were completed, interrupted or are in progress. ",
    ],
    url: "https://timer-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/ignite/tree/main/react/02-ignite-timer",
    logo: "",
    image: "/assets/projects/timer.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Styled-components",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Confectuary E-commerce",
    description:
      "A scalable e-commerce for a confectuary that allow users: to register and buy products, and admins: to see the dashboard with data from the past month, manage products and product types, and create new admins",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Typescript, Styled-components and Recharts CSS for a smooth user experience.",
      "Connected to a secure PostgreSQL database for user and products data storage.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
    ],
    url: "https://cakedesigner.vercel.app/",
    repository: "https://github.com/miguelscastro/cakedesigner-api",
    logo: "",
    image: "/assets/projects/cakedesigner.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },

      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Styled-components",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 5,
        name: "Typescript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 6,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 7,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/miguelscastro/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Fullstack Developer",
    job: "Confectuary E-commerce",
    date: "2024",
    contents: [
      "Created a e-commerce interface for a confectuary using React, Vite, Java, SpringBoot and ViaCEP API to showcase technical expertise in which i implemented: ",
      "✅ Auth0",
      "✅ JWT",
      "✅ Role Based Access Control (RBAC)",
      "✅ Sensitive Data Encrypting",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "Present",
    contents: [
      "Developed a interface for a coffee web store with React and Vite to simplify the orders and expand the business",
    ],
  },
];