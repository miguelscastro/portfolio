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
    title: "Desenvolvedor Fullstack",
    job: "E-commerce de Confeitaria",
    date: "2024",
    contents: [
      "Desenvolvi uma aplicação de e-commerce, utilizando um stack moderno com React e Vite no frontend, e Java com Spring Boot no backend.",
      "Implementei um sistema de autenticação e autorização robusto para proteger as rotas e os dados dos usuários, com funcionalidades essenciais de segurança:",
      "✅ Autenticação com JWT (JSON Web Tokens): Garanti que as sessões dos usuários fossem seguras e eficientes, permitindo a comunicação stateless entre o cliente e o servidor.",
      "✅ Controle de Acesso Baseado em Perfis (RBAC): Estruturei um sistema de permissões que diferenciava clientes e administradores, protegendo áreas críticas da aplicação.",
      "✅ Criptografia de Dados Sensíveis: Utilizei algoritmos de hash (como bcrypt) para armazenar senhas de forma segura, prevenindo acesso não autorizado.",
      "Integrei a API externa do ViaCEP para validação e preenchimento automático de endereços, melhorando a experiência do usuário (UX) no processo de checkout."
    ],
  },
  {
    title: "Desenvolvedor Freelancer",
    job: "Autônomo",
    date: "Atualmente",
    contents: [
      "projetei e implementei uma variedade de Single Page Applications (SPAs) de alta performance, utilizando um stack moderno focado em React e TypeScript para entregar interfaces ricas e interativas.",
      "Demonstrei proficiência em diversas áreas-chave do desenvolvimento de software:",
      "✅ Arquitetura e Escalabilidade com TypeScript: Estruturei aplicações com componentização modular e um sistema de tipos robusto, garantindo a manutenibilidade do código e a detecção de erros em tempo de compilação, o que é crucial para projetos de longo prazo.",
      "✅ Integração com APIs Externas (REST): Desenvolvi funcionalidades complexas baseadas no consumo de serviços de terceiros, como na aplicação que integra a API do GitHub para buscar e exibir dados dinamicamente, gerenciando o estado assíncrono de forma eficiente.",
      "✅ Foco em Performance e Experiência do Usuário (UX): Utilizei ferramentas como Vite.js para otimizar o tempo de build e a velocidade de carregamento das páginas. Implementei interfaces fluidas e responsivas com feedback visual imediato para maximizar o engajamento do usuário.",
      "✅ Versatilidade em Estilização: Apliquei diferentes metodologias de estilização, incluindo CSS-in-JS (Styled Components) e CSS Modules, adaptando a abordagem conforme a necessidade de cada projeto para garantir escopo e reutilização."

    ],
  }
];