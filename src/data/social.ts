export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

/** Profils publics identifies — Facebook / Instagram a confirmer si besoin. */
export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lightdigiconsulting"
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/lightdigitalconsulting"
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/lightdigital_consulting"
  }
];
