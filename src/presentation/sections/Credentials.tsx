import type { Certification, Education } from "@/domain/credential";
import type { Locale } from "@/domain/locale";
import type { Dictionary } from "../i18n";
import { formatMonth } from "../i18n/format";

interface CredentialsProps {
  education: readonly Education[];
  certifications: readonly Certification[];
  locale: Locale;
  dict: Dictionary["credentials"];
}

export function Credentials({
  education,
  certifications,
  locale,
  dict,
}: CredentialsProps) {
  return (
    <section className="c-space section-spacing" id="credentials">
      <h2 className="text-heading">{dict.title}</h2>

      <h3 className="mt-12 text-xl text-neutral-300">{dict.education}</h3>
      <ul className="mt-4 divide-y divide-white/10">
        {education.map((item) => (
          <li key={item.id} className="py-4">
            <p className="text-lg">{item.title}</p>
            <p className="subtext">
              {item.institution} · {formatMonth(item.from, locale)} –{" "}
              {formatMonth(item.to, locale)}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-xl text-neutral-300">{dict.certifications}</h3>
      <ul className="mt-4 divide-y divide-white/10">
        {certifications.map((cert) => (
          <li key={cert.id} className="py-4">
            <p className="text-lg">{cert.name}</p>
            <p className="subtext">
              {cert.issuer} · {formatMonth(cert.issuedAt, locale)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
