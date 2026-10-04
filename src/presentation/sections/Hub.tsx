import { ArrowUpRight } from "lucide-react";
import { hubAppHref, isExternal, type HubApp } from "@/domain/hub-app";
import type { Dictionary } from "../i18n";

export function Hub({
  apps,
  dict,
}: {
  apps: readonly HubApp[];
  dict: Dictionary["hub"];
}) {
  return (
    <section className="c-space mt-20 md:mt-30" id="hub">
      <h2 className="text-heading">{dict.title}</h2>
      <p className="mt-3 subtext max-w-xl">
        {dict.subtitle}
      </p>
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => {
          const external = isExternal(app);
          return (
            <a
              key={app.id}
              href={hubAppHref(app)}
              // Mounted apps are separate deployments behind a rewrite, so use a
              // real navigation instead of client-side routing.
              {...(external && { target: "_blank", rel: "noreferrer" })}
              className="group flex flex-col justify-between gap-8 p-6 border rounded-2xl border-white/10 bg-gradient-to-b from-indigo to-storm hover-animation"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl">{app.name}</p>
                  <ArrowUpRight className="w-6 h-6 transition-transform text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 subtext">{app.description}</p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sand text-sm">
                {app.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
