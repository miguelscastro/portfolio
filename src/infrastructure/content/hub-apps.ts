// Relative imports: this file is also loaded by next.config.ts.
import type { HubAppDefinition } from "../../domain/hub-app";
import { localized } from "../../domain/locale";

/**
 * The hub registry — the single place to register a site.
 * Mounted apps are served at <this site>/<path> through a rewrite generated
 * from this list; external apps are plain links.
 */
export const hubApps: readonly HubAppDefinition[] = [
  {
    id: "finance",
    name: localized("Personal Finances", "Finanças Pessoais"),
    description: localized(
      "Personal finance manager: income, expenses, investments, credit cards, subscriptions, budgets and goals.",
      "Gerenciador de finanças: receitas, despesas, investimentos, cartões, assinaturas, orçamentos e metas.",
    ),
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    target: {
      kind: "mounted",
      path: "/finance",
      upstream: { envVar: "FINANCE_URL", devOrigin: "http://localhost:3001" },
    },
  },
];
