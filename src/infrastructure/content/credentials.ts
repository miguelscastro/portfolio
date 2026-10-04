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
        "Foundational-level AWS certification covering artificial intelligence, machine learning and generative AI concepts, and the AWS services used to build with them.",
        "Certificação fundamental da AWS que cobre conceitos de inteligência artificial, machine learning e IA generativa, e os serviços da AWS usados para construir com eles.",
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
        "Verified Cisco Networking Academy credential in endpoint security: protecting the devices that connect to a network.",
        "Credencial verificada da Cisco Networking Academy em segurança de endpoints: a proteção dos dispositivos que se conectam a uma rede.",
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
