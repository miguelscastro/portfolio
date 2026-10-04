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
];
