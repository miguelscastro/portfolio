/** A verifiable digital badge attached to a certification. */
export interface Badge {
  /** Public path to the badge image. */
  image: string;
  /** Public page where the credential can be verified. */
  verifyUrl: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  /** Issue month, `YYYY-MM`. Formatting is a presentation concern. */
  issuedAt: string;
  badge?: Badge;
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  /** `YYYY-MM` */
  from: string;
  /** `YYYY-MM` */
  to: string;
}
