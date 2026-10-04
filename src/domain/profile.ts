export interface Social {
  name: string;
  href: string;
  /** Public path to the icon. */
  icon: string;
}

export interface Profile {
  name: string;
  email: string;
  resumePath: string;
  socials: readonly Social[];
}
