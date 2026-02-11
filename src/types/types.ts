interface SkillInterface {
  skill: string;
  label: string;
}

export interface SkillCategoryInterface {
  name: string;
  skills: SkillInterface[];
}

export type ThemeType = "dark" | "light"

export interface ThemeContextInterface{
    theme: ThemeType
    toggleTheme: ()=>void
}