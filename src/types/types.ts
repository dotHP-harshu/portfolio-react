export interface HeaderInterface {
  name: string;
}
interface SkillInterface {
  skill: string;
  label: string;
}

export interface SkillCategoryInterface {
  name: string;
  skills: SkillInterface[];
}

export type ThemeType = "dark" | "light";

export interface ThemeContextInterface {
  theme: ThemeType;
  toggleTheme: () => void;
}

export interface MainProjectInterface {
  title: string;
  para: string;
  tags: string[];
  image: string;
  liveLink: string;
  codeLink: string;
}

export interface HeroSectionInterface {
  heading: string[];
  para: string;
  ctaText: string;
  heroImgSrc: string;
}
export interface ProjectSectionInterface {
  heading: string;
  para: string;
  mainProjects: MainProjectInterface[];
}
export interface SkillSectionInterface {
  heading: string;
  para: string;
  skillCategories: SkillCategoryInterface[];
}

export interface AboutSectionInterface {
  heading: string;
  paras: string[];
  aboutImgSrc: string;
}
export interface ContactSectionInterface {
  heading: string[];
  para: string;
}

export interface PortfolioDataInterface {
  header: HeaderInterface;
  hero_section: HeroSectionInterface;
  project_section: ProjectSectionInterface;
  skill_section: SkillSectionInterface;
  about_section: AboutSectionInterface;
  contact_section: ContactSectionInterface;
}
