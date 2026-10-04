import type { Certification } from "@/domain/credential";
import type { Dictionary } from "../i18n";
import { BadgeGallery } from "../components/BadgeGallery";

export function Badges({
  certifications,
  dict,
}: {
  certifications: readonly Certification[];
  dict: Dictionary["badges"];
}) {
  const badged = certifications.filter((c) => c.badge);

  return (
    <section className="c-space section-spacing" id="badges">
      <h2 className="text-heading">{dict.title}</h2>
      <p className="mt-3 subtext max-w-xl">{dict.subtitle}</p>
      <BadgeGallery certifications={badged} />
    </section>
  );
}
