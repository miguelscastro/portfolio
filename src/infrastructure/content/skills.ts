import { localized } from "@/domain/locale";
import type { SkillGroupDefinition } from "./types";

const same = <T>(value: T) => localized(value, value);

export const skills: readonly SkillGroupDefinition[] = [
  {
    id: "backend-infra",
    label: localized("Backend & Infrastructure", "Backend e Infraestrutura"),
    items: same([
      "Go (Golang)",
      "Java",
      "Spring Boot",
      "Spring Security (JWT/RBAC)",
      "Terraform (IaC)",
      "Docker",
      "CI/CD",
      "GitOps",
    ]),
  },
  {
    id: "cloud",
    label: localized("Cloud", "Cloud"),
    items: localized(
      ["AWS", "Google Cloud Platform (GCP)", "Apigee", "Multi-cloud environments"],
      ["AWS", "Google Cloud Platform (GCP)", "Apigee", "Ambientes multi-cloud"],
    ),
  },
  {
    id: "databases",
    label: localized("Databases", "Bancos de dados"),
    items: localized(
      ["PostgreSQL", "MySQL", "DynamoDB (NoSQL)", "Relational Modeling (ERD)"],
      ["PostgreSQL", "MySQL", "DynamoDB (NoSQL)", "Modelagem relacional (DER)"],
    ),
  },
  {
    id: "frontend",
    label: localized("Frontend", "Frontend"),
    items: same(["React", "Next.js", "TypeScript", "TailwindCSS"]),
  },
  {
    id: "testing",
    label: localized("Testing & Quality", "Testes e Qualidade"),
    items: same(["JUnit", "Mockito", "AssertJ", "Playwright", "SonarQube"]),
  },
  {
    id: "observability",
    label: localized("Observability", "Observabilidade"),
    items: same(["Prometheus", "Grafana"]),
  },
  {
    id: "languages",
    label: localized("Languages", "Idiomas"),
    items: localized(
      ["English — Fluent (Cambridge B2 First)", "Portuguese — Native"],
      ["Inglês — Fluente (Cambridge B2 First)", "Português — Nativo"],
    ),
  },
];
