import type { Locale } from "@/domain/locale";
import { useCases } from "@/infrastructure/container";
import { getDictionary } from "@/presentation/i18n";
import { I18nProvider } from "@/presentation/i18n/I18nProvider";
import { About } from "@/presentation/sections/About";
import { Badges } from "@/presentation/sections/Badges";
import { Credentials } from "@/presentation/sections/Credentials";
import { Skills } from "@/presentation/sections/Skills";
import { Experiences } from "@/presentation/sections/Experiences";
import { Footer } from "@/presentation/sections/Footer";
import { Hero } from "@/presentation/sections/Hero";
import { Hub } from "@/presentation/sections/Hub";
import { Navbar } from "@/presentation/sections/Navbar";
import { Projects } from "@/presentation/sections/Projects";
import { Resume } from "@/presentation/sections/Resume";

/** The page for one locale. Shared by every locale's route. */
export async function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [
    projects,
    experiences,
    hubApps,
    profile,
    skills,
    certifications,
    education,
  ] = await Promise.all([
    useCases.listProjects(locale),
    useCases.listExperiences(locale),
    useCases.listHubApps(locale),
    useCases.getProfile(),
    useCases.listSkills(locale),
    useCases.listCertifications(locale),
    useCases.listEducation(locale),
  ]);

  return (
    <I18nProvider locale={locale} dict={dict}>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About email={profile.email} dict={dict.about} />
        <Skills groups={skills} dict={dict.skills} />
        <Badges certifications={certifications} dict={dict.badges} />
        <Experiences experiences={experiences} />
        <Projects projects={projects}>
          <Hub apps={hubApps} />
        </Projects>
        <Credentials
          education={education}
          certifications={certifications}
          locale={locale}
          dict={dict.credentials}
        />
        <Resume resumePath={profile.resumePath} dict={dict.resume} />
        <Footer socials={profile.socials} dict={dict.footer} />
      </div>
    </I18nProvider>
  );
}
