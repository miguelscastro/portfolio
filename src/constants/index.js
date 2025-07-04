export const myProjects = [
  {
    id: 1,
    title: "Lista de Tarefas",
    description:
      "Uma lista de tarefas simples e eficiente para organizar compromissos e atividades.",
    subDescription: [
      "Aplicação desenvolvida com ReactJS, CSS Modules e Phosphor Icons, oferecendo uma interface direta e minimalista para melhorar a experiência do usuário.",
      "Usuários podem adicionar novas tarefas à lista e recebem feedback visual ao interagir com elas, seja marcando como concluída ou removendo.",
    ],
    url: "https://todo-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/to-do-list",
    logo: "",
    image: "/assets/projects/todo-list.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Git", path: "/assets/logos/git.svg" },
      { id: 3, name: "CSSModules", path: "/assets/logos/css3.svg" },
    ],
  },

  {
    id: 2,
    title: "Loja de Cafés",
    description:
      "Interface para uma loja virtual especializada em diferentes tipos de cafés.",
    subDescription: [
      "Desenvolvimento de uma SPA com React, TypeScript e Styled-components, focada em uma experiência fluida e organização de código.",
      "SEO otimizado e desempenho aprimorado utilizando Vite.js para builds rápidos.",
    ],
    url: "https://coffeedelivery-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/coffee-delivery",
    logo: "",
    image: "/assets/projects/coffee-delivery.png",
    tags: [
      { id: 1, name: "Typescript", path: "/assets/logos/typescript.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
      { id: 5, name: "Styled-components", path: "/assets/logos/css3.svg" },
    ],
  },

  {
    id: 3,
    title: "Feed Social",
    description:
      "Um feed de rede social, semelhante ao Instagram, que permite aos usuários comentarem em postagens.",
    subDescription: [
      "Aplicação SPA totalmente interativa construída com React e TypeScript.",
      "Usuários podem comentar nas postagens e visualizar o tempo desde a publicação.",
      "Novas postagens podem ser adicionadas ao código da aplicação.",
      "SEO otimizado e performance elevada com Vite.js.",
    ],
    url: "https://feed-miguelscastro.vercel.app/",
    repository:
      "https://github.com/miguelscastro/ignite/tree/main/react/01-fundamentos-reactjs-ts",
    logo: "",
    image: "/assets/projects/feed.png",
    tags: [
      { id: 1, name: "Typescript", path: "/assets/logos/typescript.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "CSSModules", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
      { id: 5, name: "Vite", path: "/assets/logos/vitejs.svg" },
    ],
  },

  {
    id: 4,
    title: "Timer Pomodoro",
    description:
      "Um timer pomodoro para cronometrar sessões de estudo.",
    subDescription: [
      "Interface intuitiva desenvolvida com React, TypeScript e Styled-components.",
      "Timer com ciclos de até 60 minutos, alertando o usuário ao término do tempo.",
      "Histórico salvo no localStorage com dados sobre ciclos concluídos, interrompidos ou em andamento.",
    ],
    url: "https://timer-miguelscastro.vercel.app/",
    repository:
      "https://github.com/miguelscastro/ignite/tree/main/react/02-ignite-timer",
    logo: "",
    image: "/assets/projects/timer.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Styled-components", path: "/assets/logos/css3.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Typescript", path: "/assets/logos/typescript.svg" },
    ],
  },

  {
    id: 5,
    title: "E-commerce de Confeitaria",
    description:
      "Um e-commerce escalável para confeitaria que permite aos usuários se registrarem, comprarem produtos e aos administradores gerenciarem o sistema.",
    subDescription: [
      "Integração com Auth0 para autenticação via OAuth e JWT.",
      "Implementação de controle de acesso baseado em papéis (RBAC).",
      "Frontend em React com TypeScript, Styled-components e gráficos com Recharts.",
      "Conexão segura com banco de dados PostgreSQL para armazenar dados de usuários e produtos.",
      "SEO otimizado e alta performance com Vite.js.",
    ],
    url: "https://cakedesigner.vercel.app/",
    repository: "https://github.com/miguelscastro/cakedesigner-api",
    logo: "",
    image: "/assets/projects/cakedesigner.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
      { id: 4, name: "Typescript", path: "/assets/logos/typescript.svg" },
      { id: 5, name: "Java", path: "/assets/logos/java.svg" },
      { id: 6, name: "Spring Boot", path: "/assets/logos/springboot.svg" },
    ],
  }

];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/5513981000655",
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
    title: "Desenvolvedor Fullstack",
    job: "E-commerce de Confeitaria",
    date: "2024",
    contents: [
      "Criei uma interface de e-commerce para uma confeitaria usando React, Vite, Java, SpringBoot e a API do ViaCEP, demonstrando conhecimento técnico ao implementar:",
      "✅ Auth0",
      "✅ JWT",
      "✅ Controle de Acesso baseado em Papéis (RBAC)",
      "✅ Criptografia de Dados Sensíveis",
    ],
  },
  {
    title: "Desenvolvedor Freelancer",
    job: "Autônomo",
    date: "Atualmente",
    contents: [
      "Desenvolvi uma interface para uma loja de café online com React e Vite, com o objetivo de simplificar os pedidos e expandir o negócio",
    ],
  }
];