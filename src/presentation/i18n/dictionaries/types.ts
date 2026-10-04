/** Every UI string. Each locale must provide all of them. */
export interface Dictionary {
  meta: { title: string; description: string; htmlLang: string };
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    badges: string;
    menu: string;
    switchLanguage: string;
  };
  hero: {
    greeting: string;
    greetingMobile: string;
    taglineTop: string;
    taglineBottom: string;
    words: readonly string[];
    suffix: string;
    mobileLead: string;
    mobileSuffix: string;
  };
  about: {
    title: string;
    greeting: string;
    intro: string;
    countryTitle: string;
    countryText: string;
    contactTitle: string;
    copyEmail: string;
    emailCopied: string;
    stackTitle: string;
    stackText: string;
  };
  projects: {
    title: string;
    learnMore: string;
    viewProject: string;
    viewRepository: string;
    close: string;
  };
  experience: { title: string };
  skills: { title: string };
  credentials: { title: string; education: string; certifications: string };
  badges: {
    title: string;
    subtitle: string;
    clickHint: string;
    issuedBy: string;
    issuedOn: string;
    verify: string;
    close: string;
  };
  resume: { thanks: string; download: string; downloaded: string };
  footer: { rights: string };
  backToTop: string;
}
