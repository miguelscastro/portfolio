import type { HubAppDefinition } from "@/domain/hub-app";
import { localized } from "@/domain/locale";

/**
 * The hub registry — the single place to register a site.
 * Each app is its own deployment; the hub only links to it.
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
    url: "https://finance.miguelcastro.vercel.app",
  },
];
