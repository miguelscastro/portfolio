import {
  Activity,
  Cloud,
  Database,
  FlaskConical,
  Languages,
  Monitor,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { SkillGroup } from "@/domain/skill";
import type { Dictionary } from "../i18n";

interface GroupStyle {
  icon: LucideIcon;
  /** Grid columns on large screens (out of 6). */
  span: string;
  /** Tailwind needs complete class names, so each accent is spelled out. */
  text: string;
  iconBg: string;
  glow: string;
  line: string;
  chip: string;
}

const accent = {
  lavender: {
    text: "text-lavender",
    iconBg: "bg-lavender/15",
    glow: "bg-lavender/20",
    line: "via-lavender",
    chip: "hover:border-lavender/60 hover:bg-lavender/10",
  },
  aqua: {
    text: "text-aqua",
    iconBg: "bg-aqua/15",
    glow: "bg-aqua/20",
    line: "via-aqua",
    chip: "hover:border-aqua/60 hover:bg-aqua/10",
  },
  mint: {
    text: "text-mint",
    iconBg: "bg-mint/15",
    glow: "bg-mint/20",
    line: "via-mint",
    chip: "hover:border-mint/60 hover:bg-mint/10",
  },
  coral: {
    text: "text-coral",
    iconBg: "bg-coral/15",
    glow: "bg-coral/20",
    line: "via-coral",
    chip: "hover:border-coral/60 hover:bg-coral/10",
  },
  sand: {
    text: "text-sand",
    iconBg: "bg-sand/15",
    glow: "bg-sand/20",
    line: "via-sand",
    chip: "hover:border-sand/60 hover:bg-sand/10",
  },
  fuchsia: {
    text: "text-fuchsia",
    iconBg: "bg-fuchsia/15",
    glow: "bg-fuchsia/20",
    line: "via-fuchsia",
    chip: "hover:border-fuchsia/60 hover:bg-fuchsia/10",
  },
  royal: {
    text: "text-royal",
    iconBg: "bg-royal/25",
    glow: "bg-royal/30",
    line: "via-royal",
    chip: "hover:border-royal/70 hover:bg-royal/15",
  },
} as const;

/** Presentation-only styling per group id; unknown groups fall back to a neutral card. */
const styles: Record<string, GroupStyle> = {
  "backend-infra": { icon: Server, span: "sm:col-span-2 lg:col-span-4", ...accent.lavender },
  cloud: { icon: Cloud, span: "lg:col-span-2", ...accent.aqua },
  databases: { icon: Database, span: "lg:col-span-2", ...accent.mint },
  frontend: { icon: Monitor, span: "lg:col-span-2", ...accent.coral },
  testing: { icon: FlaskConical, span: "lg:col-span-2", ...accent.sand },
  observability: { icon: Activity, span: "sm:col-span-2 lg:col-span-2", ...accent.fuchsia },
  languages: { icon: Languages, span: "sm:col-span-2 lg:col-span-4", ...accent.royal },
};

const fallback: GroupStyle = {
  icon: Server,
  span: "lg:col-span-2",
  ...accent.lavender,
};

export function Skills({
  groups,
  dict,
}: {
  groups: readonly SkillGroup[];
  dict: Dictionary["skills"];
}) {
  return (
    <section className="c-space section-spacing" id="skills">
      <h2 className="text-heading">{dict.title}</h2>
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-6">
        {groups.map((group) => {
          const style = styles[group.id] ?? fallback;
          const Icon = style.icon;
          return (
            <div
              key={group.id}
              className={`relative overflow-hidden p-6 border rounded-2xl border-white/10 bg-gradient-to-b from-indigo to-midnight hover:border-white/20 hover-animation ${style.span}`}
            >
              <div
                aria-hidden
                className={`absolute -top-16 -right-16 rounded-full size-44 blur-3xl ${style.glow}`}
              />
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${style.line}`}
              />
              <div className="relative flex items-center gap-3">
                <span
                  className={`flex items-center justify-center rounded-xl size-10 ${style.iconBg} ${style.text}`}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="text-xl">{group.label}</h3>
              </div>
              <ul className="relative flex flex-wrap gap-2 mt-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`px-3 py-1.5 text-sm border rounded-full text-neutral-300 border-white/10 bg-white/5 transition-colors ${style.chip}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
