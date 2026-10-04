import { localized } from "@/domain/locale";
import type { ProjectDefinition } from "./types";

const logo = (name: string) => `/assets/logos/${name}.svg`;

export const projects: readonly ProjectDefinition[] = [
  {
    id: "cakedesigner",
    title: localized("Bakery E-commerce", "E-commerce de Confeitaria"),
    description: localized(
      "A full-stack e-commerce platform for a small food business (custom cake ordering), used in real production.",
      "Uma plataforma de e-commerce full-stack para um pequeno negócio de alimentos (encomenda de bolos personalizados), usada em produção real.",
    ),
    details: localized(
      [
        "Backend designed with DDD and Clean Architecture (Java 21, Spring Boot), with clear domain/application/infrastructure separation.",
        "Stripe integration for end-to-end secure payments, including webhook handling.",
        "Authentication and access control with Spring Security and JWT.",
        "Entire AWS infrastructure provisioned with Terraform: VPC, ECS, ECR, CloudFront, S3, Secrets Manager and RDS.",
        "React client interface.",
      ],
      [
        "Backend projetado com DDD e Clean Architecture (Java 21, Spring Boot), com separação clara entre domínio, aplicação e infraestrutura.",
        "Integração com o Stripe para pagamentos seguros de ponta a ponta, incluindo tratamento de webhooks.",
        "Autenticação e controle de acesso com Spring Security e JWT.",
        "Toda a infraestrutura na AWS provisionada com Terraform: VPC, ECS, ECR, CloudFront, S3, Secrets Manager e RDS.",
        "Interface do cliente em React.",
      ],
    ),
    url: "https://cakedesigner.vercel.app/",
    repository: "https://github.com/miguelscastro/cakedesigner-api",
    image: "/assets/projects/cakedesigner.png",
    tags: [
      { name: "React", logo: logo("react") },
      { name: "Vite.js", logo: logo("vitejs") },
      { name: "Typescript", logo: logo("typescript") },
      { name: "Java", logo: logo("java") },
      { name: "Spring Boot", logo: logo("springboot") },
    ],
  },
  {
    id: "portfolio",
    title: localized("Portfolio", "Portfólio"),
    description: localized(
      "This site: my portfolio and the hub that gives access to my other projects on the same domain.",
      "Este site: meu portfólio e o hub que dá acesso aos meus outros projetos no mesmo domínio.",
    ),
    details: localized(
      [
        "Built with Next.js and TypeScript, organized in layers (domain, application, infrastructure and presentation) following DDD and SOLID principles.",
        "A single app registry feeds both the Hub section and the rewrites that serve other sites under subpaths, such as /finance.",
        "Animations with Motion, an interactive globe with Cobe and styling with Tailwind CSS.",
      ],
      [
        "Construído com Next.js e TypeScript, organizado em camadas (domínio, aplicação, infraestrutura e apresentação) seguindo princípios de DDD e SOLID.",
        "Um registro único de aplicações alimenta tanto a seção Hub quanto os rewrites que servem outros sites em subcaminhos, como /finance.",
        "Animações com Motion, globo interativo com Cobe e estilização com Tailwind CSS.",
      ],
    ),
    url: "https://miguelcastro.vercel.app/",
    repository: "https://github.com/miguelscastro/portfolio",
    image: "/assets/projects/portfolio.png",
    tags: [
      { name: "Next.js", logo: logo("nextjs") },
      { name: "TypeScript", logo: logo("typescript") },
      { name: "React", logo: logo("react") },
      { name: "Tailwind CSS", logo: logo("tailwindcss") },
    ],
  },
];
