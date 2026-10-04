import { localized } from "@/domain/locale";
import type { CertificationDefinition, EducationDefinition } from "./types";

const AWS = "Amazon Web Services (AWS)";
const ROCKETSEAT = "Rocketseat";

export const certifications: readonly CertificationDefinition[] = [
  {
    id: "aws-ai-practitioner",
    name: "AWS Certified AI Practitioner",
    issuer: AWS,
    issuedAt: "2026-09",
    badge: {
      image: "/assets/badges/aws-ai-practitioner.png",
      verifyUrl:
        "https://www.credly.com/badges/140caedb-6984-4e61-ac86-25a4f5ecd95a/public_url",
      description: localized(
        "Earners of this badge understand AI, ML, and generative AI concepts, methods, and strategies in general and on AWS. They can determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly. They are familiar with the AWS Global Infrastructure, core AWS services and use cases, AWS service pricing models, and the AWS shared responsibility model for security and compliance in the AWS Cloud.",
        "Quem conquista este badge entende os conceitos, métodos e estratégias de IA, ML e IA generativa, em geral e na AWS. Sabe determinar os tipos corretos de tecnologias de IA/ML a aplicar em casos de uso específicos e como usar tecnologias de IA, ML e IA generativa de forma responsável. Conhece a infraestrutura global da AWS, os principais serviços e casos de uso da AWS, os modelos de preços dos serviços da AWS e o modelo de responsabilidade compartilhada da AWS para segurança e conformidade na nuvem AWS.",
      ),
    },
  },
  {
    id: "endpoint-security",
    name: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    issuedAt: "2024-09",
    badge: {
      image: "/assets/badges/cisco-endpoint-security.png",
      verifyUrl:
        "https://www.credly.com/badges/a47da02d-c0ad-43cf-a200-d3c162bd209c/public_url",
      description: localized(
        "Cisco verifies the earner of this badge successfully completed the Endpoint Security course. The holder of this student-level credential has a broad understanding of basic concepts of network security, as well as operating systems and endpoint security.",
        "A Cisco verifica que quem conquistou este badge concluiu com sucesso o curso Endpoint Security. O titular desta credencial de nível estudante tem uma compreensão ampla dos conceitos básicos de segurança de redes, bem como de sistemas operacionais e segurança de endpoints.",
      ),
    },
  },
  { id: "aws-cloud-practitioner-essentials", name: "AWS Cloud Practitioner Essentials", issuer: AWS, issuedAt: "2025-09" },
  { id: "b2-first", name: "B2 First – Score 164", issuer: "Cambridge English", issuedAt: "2021-09" },
  { id: "go-distributed", name: "Go: Distributed Systems, Web Security & Advanced Concurrency", issuer: ROCKETSEAT, issuedAt: "2026-04" },
  { id: "java-cloud", name: "Software Engineering: Java, Spring Boot Ecosystem & Cloud Architecture", issuer: ROCKETSEAT, issuedAt: "2026-01" },
  { id: "nextjs-fullstack", name: "Next.js Full Stack: Stripe Integration, SSR & SEO Strategies", issuer: ROCKETSEAT, issuedAt: "2026-02" },
  { id: "react-architecture", name: "React Architecture: Design Patterns, State Management & E2E Testing", issuer: ROCKETSEAT, issuedAt: "2025-10" },
];

export const education: readonly EducationDefinition[] = [
  {
    id: "fatec",
    title: localized("Technologist, Internet Systems", "Tecnólogo em Sistemas para Internet"),
    institution: "Fatec Baixada Santista Rubens Lara",
    from: "2023-02",
    to: "2026-06",
  },
];
