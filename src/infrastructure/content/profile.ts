import type { Profile } from "@/domain/profile";

export const profile: Profile = {
  name: "Miguel Castro da Silva",
  email: "ms.miguelcastro@gmail.com",
  resumePath: "/assets/files/miguelcastro_cv.pdf",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/miguelscastro",
      icon: "/assets/socials/github.svg",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5513981000655",
      icon: "/assets/socials/whatsApp.svg",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/miguelscastro/",
      icon: "/assets/socials/linkedIn.svg",
    },
  ],
};
