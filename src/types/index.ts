export interface SiteConfig extends NavbarProps {
  brand: string;
  siteUrl: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  language: string;
  author: string;
  email: string;
  socialLinks: { text: string; href: string }[];
  footer: FooterProps;
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
  projects: ProjectsSectionProps;
  community: CommunitySectionProps;
  contact: ContactProps;
}

export interface HeroProps {
  id: string;
  name: string;
  specialty: string;
  summary: string;
  actions: LinkProps[];
  technologies: string[];
}

export interface ProjectProps {
  name: string;
  badge?: string;
  status: string;
  summary: string;
  cardSummary?: string;
  problem: string | null;
  technologies: string[];
  action: LinkProps | null;
  github: string | null;
  demo: string | null;
}

export interface AboutProps {
  id: string;
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  secondaryLink: LinkProps;
}

export interface ProjectsSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: ProjectProps[];
}

export interface CommunitySectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: CommunityItemProps[];
}

export interface CommunityItemProps {
  name: string;
  status?: string;
  summary: string;
  cardSummary?: string;
  purpose: string | null;
  role: string | null;
  impact: string | null;
  shortImpact?: string;
  action: LinkProps | null;
}

export interface ContactProps {
  id: string;
  title: string;
  text: string;
  form: {
    name: string;
    email: string;
    subject: string;
    message: string;
    button: string;
  };
  channels: ContactChannelProps[];
}

export interface ContactChannelProps {
  text: string;
  value: string;
  href: string | null;
}

export interface FooterProps {
  tagline: string;
  navLinks: LinkProps[];
  contactLinks: NullableLinkProps[];
  legalLinks: LinkProps[];
}

export interface NavbarProps {
  brand: string;
  navLinks: LinkProps[];
}

export interface LinkProps {
  text: string;
  href: string;
}

export interface NullableLinkProps {
  text: string;
  href: string | null;
}
