import { localized } from "@/domain/locale";
import type { ExperienceDefinition } from "./types";

export const experiences: readonly ExperienceDefinition[] = [
  {
    id: "wpp-commerce",
    title: localized("DevSecOps Engineer", "Engenheiro DevSecOps"),
    company: localized(
      "WPP Commerce (allocated to Whirlpool Corporation Brazil)",
      "WPP Commerce (alocado na Whirlpool Corporation Brasil)",
    ),
    period: localized("Mar 2026 – Present", "mar de 2026 – o momento"),
    highlights: localized(
      [
        "Allocated to Whirlpool Corporation Brazil's IT Engineering squad, driving Platform Engineering, GCP self-service resource development, and backend automation across cloud environments for large-scale enterprise operations. Remote, Brazil.",
        "IDP & Self-Service Resources: One of the core engineers on the GCP resource provisioning initiative within the company's first Internal Developer Platform, delivering Apigee as the first automatically provisioned resource for GCP and owning backend implementation.",
        "GitOps & Platform Engineering: Developed the GitOps approach for Platform Engineering, defining how the application interacts with repositories and enforcing idempotency across provisioning flows.",
        "Business Impact: For one use case, this automation cut a 30-90 day provisioning process down to under 2 hours across 5-6 global teams, estimated by the Global Engineering Sr Manager at ~$31k in ROI per request.",
        "FinOps & Cost Optimization: Spearheaded cloud cost management initiatives, engineering automated scans that identified ~21,000 idle resources for deprovisioning, securing a projected 6–8% cost reduction.",
        "Backend & Automation: Engineered cloud service automations using Go (Golang) and developed provisioning UIs with React, drastically reducing manual boilerplate time.",
        "Global Collaboration: Work directly with engineering teams across Asia and North America as part of day-to-day delivery.",
        "Agile & Delivery: Managed complex version control workflows and sprint deliveries via Jira, ensuring CI/CD integrity and fast-paced feature resolution.",
      ],
      [
        "Alocado no squad de Engenharia de TI da Whirlpool Corporation Brasil, conduzindo Platform Engineering, o desenvolvimento de recursos self-service no GCP e a automação de backend em ambientes cloud para operações corporativas de grande escala. Remoto, Brasil.",
        "IDP e Recursos Self-Service: Um dos engenheiros principais da iniciativa de provisionamento de recursos GCP dentro da primeira Internal Developer Platform da empresa, entregando o Apigee como o primeiro recurso provisionado automaticamente para o GCP e responsável pela implementação do backend.",
        "GitOps e Platform Engineering: Desenvolvi a abordagem GitOps para Platform Engineering, definindo como a aplicação interage com os repositórios e garantindo idempotência nos fluxos de provisionamento.",
        "Impacto no Negócio: Em um dos casos de uso, essa automação reduziu um processo de provisionamento de 30-90 dias para menos de 2 horas em 5-6 times globais, com ROI estimado pelo Global Engineering Sr Manager em ~US$31 mil por solicitação.",
        "FinOps e Otimização de Custos: Liderei iniciativas de gestão de custos em cloud, desenvolvendo varreduras automatizadas que identificaram ~21.000 recursos ociosos para desprovisionamento, garantindo uma redução de custos projetada de 6–8%.",
        "Backend e Automação: Desenvolvi automações de serviços cloud em Go (Golang) e interfaces de provisionamento em React, reduzindo drasticamente o tempo gasto em boilerplate manual.",
        "Colaboração Global: Trabalho diretamente com times de engenharia da Ásia e da América do Norte no dia a dia das entregas.",
        "Agile e Entregas: Gerenciei fluxos complexos de controle de versão e entregas de sprint via Jira, garantindo a integridade do CI/CD e a rápida resolução de funcionalidades.",
      ],
    ),
  },
  {
    id: "freelance-ecommerce",
    title: localized("Software Engineer", "Engenheiro de Software"),
    company: localized("Freelancer", "Freelancer"),
    period: localized("May 2025 – Feb 2026", "mai de 2025 – fev de 2026"),
    highlights: localized(
      [
        "Architected and built a full-stack e-commerce platform for a small food business (custom cake ordering), used in real production. Remote, Brazil.",
        "Backend Architecture: Designed the system using DDD and Clean Architecture principles (Java 21, Spring Boot), with clear domain/application/infrastructure separation.",
        "Payments: Integrated Stripe for end-to-end secure payment processing, including webhook handling.",
        "Cloud & IaC: Provisioned the entire infrastructure using Terraform on AWS — VPC, ECS, ECR, CloudFront, S3, Secrets Manager, and RDS.",
        "Security: Implemented authentication and access control using Spring Security with JWT.",
        "Frontend: Built the client interface with React.",
      ],
      [
        "Projetei e construí uma plataforma de e-commerce full-stack para um pequeno negócio de alimentos (encomenda de bolos personalizados), usada em produção real. Remoto, Brasil.",
        "Arquitetura de Backend: Projetei o sistema com princípios de DDD e Clean Architecture (Java 21, Spring Boot), com separação clara entre domínio, aplicação e infraestrutura.",
        "Pagamentos: Integrei o Stripe para processamento seguro de pagamentos de ponta a ponta, incluindo tratamento de webhooks.",
        "Cloud e IaC: Provisionei toda a infraestrutura com Terraform na AWS — VPC, ECS, ECR, CloudFront, S3, Secrets Manager e RDS.",
        "Segurança: Implementei autenticação e controle de acesso com Spring Security e JWT.",
        "Frontend: Construí a interface do cliente com React.",
      ],
    ),
  },
];
