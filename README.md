# Portfolio

Personal portfolio of Miguel Castro, built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

Besides being a portfolio, the site is a **hub**: a single domain from which my other applications are reachable.

```
miguelcastro.vercel.app            → this portfolio
miguelcastro.vercel.app/finance    → personal-finances app (separate deployment)
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

Copy `.env.example` to `.env.local` if you want to change where `/finance` is proxied to (see [The hub](#the-hub)).

## Architecture

The code is organised in four layers inspired by Domain-Driven Design / hexagonal architecture. Dependencies point **inwards only**:

```
app (routes) ──► presentation ──► domain ◄── application
                                     ▲            ▲
                                     └─ infrastructure ─┘
```

```
src/
├── domain/           Entities and ports. Pure TypeScript, imports nothing.
│   ├── locale.ts         Locale, Localized<T>, default locale (English)
│   ├── hub-app.ts        HubApp entity, mounted vs external targets
│   ├── project.ts, experience.ts, profile.ts
│   └── repositories.ts   Ports (interfaces) the domain needs
├── application/      Use cases (listProjects, listHubApps, ...). Depend on ports only.
├── infrastructure/   Adapters and wiring.
│   ├── content/          The actual data (projects, experiences, hub apps, profile)
│   ├── routing/          hub-rewrites.ts: registry → Next.js rewrites
│   ├── static-repositories.ts  Port implementations backed by the content files
│   └── container.ts      Composition root, the only place adapters meet use cases
├── presentation/     React components. Receive plain domain objects as props.
│   ├── i18n/             Typed dictionaries (en, pt), provider, locale routes
│   ├── sections/         Page sections (Hero, About, Hub, Projects, ...)
│   ├── components/       Reusable UI (Globe, Particles, Timeline, ...)
│   └── hooks/
└── app/              Next.js routes: (en)/ at "/", pt/ at "/pt", shared home-page.tsx
```

### Decisions

**Layers instead of a flat `components/` folder.** The old Vite version mixed content, markup and behaviour (`constants/index.js` fed components directly). Now content is data in `infrastructure/content`, shape is defined in `domain`, and components only render.

**Ports and adapters (Dependency Inversion).** `application` and `domain` know about `ProjectRepository`, not about static arrays. Moving content to a CMS or database means writing one adapter and changing one line in `container.ts`; no component or use case changes.

**Use cases as small functions.** Each takes the one port it needs (Interface Segregation) and returns a function. No classes or DI framework: a plain composition root is enough at this size.

**`app/page.tsx` is a server component.** It calls the use cases and passes the results down as props. Only components that need browser APIs or animation state (`motion`, canvas, WebGL, scroll listeners) are marked `"use client"`; the data layer never ships to the browser.

**Open/Closed hub.** Adding a site to the hub is one entry in `infrastructure/content/hub-apps.ts`. Both the Hub section and the proxy rewrites are derived from that list, so there is no second place to update.

**Domain types over loose objects.** `HubApp.target` is a discriminated union (`mounted` | `external`), so the compiler forces every consumer to handle both cases. Entities are `readonly` and have stable `id`s instead of array indexes.

**Relative imports in two files.** `hub-apps.ts` and `hub-rewrites.ts` are imported by `next.config.ts`, which is loaded before the `@/` alias exists, so they use relative imports. Everything else uses `@/`.

## Internationalization

English is the default and lives at `/`; Portuguese lives at `/pt`. The navbar has a switcher that links to the other locale.

- **Routes, no middleware.** `app/(en)/` and `app/pt/` are two route groups, each with its own root layout (so `<html lang>` is correct) and a page that renders the shared `app/home-page.tsx` with a locale. There is deliberately no locale-detecting middleware: it would also intercept `/finance`, and "English by default for everyone" is the requirement. Pages are statically generated.
- **Content** (projects, experiences, hub apps) is authored once with a value per locale (`localized(en, pt)` from the domain). Repositories take a `Locale` and return the already-resolved entities, so components never see translation objects. A missing translation is a compile error.
- **UI strings** live in `presentation/i18n/dictionaries/{en,pt}.ts`, both typed by the `Dictionary` interface. Server sections receive their slice of the dictionary as a prop; client components read it through `useI18n()`.
- **Adding a language:** add it to `locales` in `domain/locale.ts`, then fix the compile errors (a dictionary, the `localized()` content, and a route folder such as `app/es/`). The switcher currently assumes two locales and would need to become a menu with three.
- The résumé PDF is a single file shared by both languages.

## The hub

A hub app is a `HubApp` in `src/infrastructure/content/hub-apps.ts`:

```ts
{
  id: "finance",
  name: "Finanças Pessoais",
  description: "...",
  tags: ["React", "TypeScript"],
  target: {
    kind: "mounted",
    path: "/finance",
    upstream: { envVar: "FINANCE_URL", devOrigin: "http://localhost:3001" },
  },
}
```

- **`mounted`**: served under this domain. `next.config.ts` calls `buildHubRewrites()`, which generates `/finance` and `/finance/:path*` rewrites to the upstream deployment. The browser URL stays on the portfolio domain.
- **`external`**: `{ kind: "external", url }`. Just a link, no proxying.

### What belongs in the hub

Only apps that can be fully hosted on Vercel (full Node/Next.js projects). Apps that need AWS/GCP infrastructure, such as CakeDesigner (Java/Spring Boot backend), are listed under **Projects** only and are not in the hub.

### Wiring a new app under a path (checklist)

1. Deploy the app on its own (e.g. `personal-finances.vercel.app`).
2. Build it with a matching **base path**. For a Next.js app: `basePath: "/finance"` in its `next.config`. Without it, its assets (`/_next/...`) and links resolve against the portfolio root and break. `router`/`<Link>` add the prefix automatically, but hard-coded `window.location` redirects and absolute URLs do not (personal-finances exposes it as `NEXT_PUBLIC_BASE_PATH`).
3. Set the upstream origin as an env var on the **portfolio's** Vercel project (`FINANCE_URL=https://personal-finances.vercel.app`). It is read at build time.
4. Add the entry to `hub-apps.ts`.

If the app talks to its own API with absolute URLs or cookies, check CORS and cookie domain/path once it is served from the portfolio's domain.

## Hero

The full-screen hero keeps the parallax village background (`Background.tsx`), and animated headline (`HeroText` + `FlipWords`).

## Adding content

| What | Where |
|---|---|
| Project | `infrastructure/content/projects.ts` (+ image in `public/assets/projects`) |
| Experience | `infrastructure/content/experiences.ts` |
| Social links, email, résumé | `infrastructure/content/profile.ts` |
| Hub app | `infrastructure/content/hub-apps.ts` |

## Stack

Next.js 16, React 19, TypeScript (strict, `noUncheckedIndexedAccess`), Tailwind CSS 4, Motion, Cobe, Lucide.
