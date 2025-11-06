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
    title: "E-commerce de Confeitaria",
    description:
      "Um e-commerce escalável para confeitaria que permite aos usuários se registrarem, comprarem produtos e aos administradores gerenciarem o sistema.",
    subDescription: [
      "Integração com JWT para autenticação.",
      "Implementação de controle de acesso baseado em credênciais (RBAC).",
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
  },
  {
    id: 5,
    title: "GitHub Blog",
    description:
      "Uma aplicação React que transforma issues do GitHub em posts de blog dinâmicos.",
    subDescription: [
      "Busca dados de perfil, issues e resultados usando a GitHub REST API.",
      "Renderiza conteúdo em Markdown com estilização semelhante ao GitHub.",
      "Sistema de busca em tempo real com debounce e destaque de palavras-chave.",
      "Layout responsivo com gerenciamento de estado via React Context API.",
    ],
    url: "https://githubblog-miguelscastro.vercel.app/",
    repository: "https://github.com/miguelscastro/github-blog",
    logo: "",
    image: "/assets/projects/github-blog.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Styled-components", path: "/assets/logos/css3.svg" },
      { id: 4, name: "GitHub API", path: "/assets/logos/git.svg" },
      { id: 5, name: "Zod", path: "/assets/logos/zod.png" },
    ],
  },
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
    title: "Desenvolvedor Front-end",
    job: "Freelance",
    date: "ago de 2024 - out de 2024",
    contents: [
      "Desenvolvi a interface de uma Single Page Application (SPA) para uma loja virtual de cafés, focado em criar uma experiência de usuário fluida.",
      "A aplicação foi construída com React e TypeScript, utilizando Styled-Components para a estilização.",
      "📈 O foco principal foi a otimização de performance e a estrutura do código, utilizando Vite.js para builds rápidos.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    job: "Freelance",
    date: "nov de 2024 - mar de 2025",
    contents: [
      "Participei do desenvolvimento de uma aplicação de e-commerce full-stack, utilizando Java/Spring Boot no back-end e React/Vite no front-end.",
      "Fui responsável pela implementação do sistema de autenticação e autorização, com foco em segurança:",
      "✅ Autenticação com Spring Security e JWT.",
      "✅ Controle de Acesso Baseado em Perfis (RBAC).",
      "✅ Criptografia de dados sensíveis (bcrypt).",
      "💡 UX: Integrei a API externa do ViaCEP para preenchimento automático de endereços no checkout.",
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    job: "Freelance",
    date: "abr de 2025",
    contents: [
      "Criei uma aplicação React que transforma *issues* de um repositório GitHub em um blog dinâmico.",
      "Fui responsável por integrar a API REST do GitHub para buscar dados de perfil e *issues* de forma assíncrona.",
      "✅ Tecnologias: Utilizei Axios para requisições, Zod para validação de dados e React Context para estado global.",
      "✅ Features: Implementei uma funcionalidade de busca com *debounce* e estilização com Styled-Components.",
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    job: "Freelance",
    date: "mar de 2025 - jul de 2025",
    contents: [
      "Atuei no desenvolvimento de uma SPA de gerenciamento de restaurante, com foco estratégico em garantir a máxima qualidade de código.",
      "Minha principal responsabilidade foi a implementação de uma suíte de testes completa:",
      "✅ Testes Unitários com Vitest e Testes de Integração com React Testing Library.",
      "✅ Testes End-to-End (E2E) com Playwright para simular o fluxo do usuário.",
      "Participei também da construção da interface responsiva com React, TypeScript e TailwindCSS.",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    job: "Freelance",
    date: "agosto de 2025 - o momento",
    contents: [
      "🚀 Atuo como o principal desenvolvedor e arquiteto de uma aplicação de e-commerce full-stack.",
      "Minhas responsabilidades abrangem o ciclo de vida completo do sistema, com foco em arquitetura modular (Use-Case-driven).",
      "🔧 Stack de Back-end: API robusta com Java 21 e Spring Boot 3.",
      "🎨 Stack de Front-end: SPA moderna com React, Vite, TailwindCSS e React Query.",
      "🔒 Segurança: Implementação de sistema de segurança completo (Spring Security 6, JWT, RBAC).",
      "💳 Pagamentos: Integração de gateways de pagamento (Stripe).",
      "☁️ Infraestrutura: Gerenciamento da infraestrutura da aplicação com serviços AWS.",
    ],
  },
];