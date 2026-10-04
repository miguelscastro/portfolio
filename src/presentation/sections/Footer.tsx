import type { Social } from "@/domain/profile";
import type { Dictionary } from "../i18n";

export function Footer({
  socials,
  dict,
}: {
  socials: readonly Social[];
  dict: Dictionary["footer"];
}) {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-3">
        {socials.map((social) => (
          <a href={social.href} key={social.name} aria-label={social.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>{dict.rights}</p>
    </section>
  );
}
