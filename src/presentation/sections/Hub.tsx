import { ArrowUpRight } from "lucide-react";
import type { HubApp } from "@/domain/hub-app";

/** My other deployed sites. Rendered as part of the Projects section. */
export function Hub({ apps }: { apps: readonly HubApp[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <a
          key={app.id}
          href={app.url}
          target="_blank"
          rel="noreferrer"
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
      ))}
    </div>
  );
}
