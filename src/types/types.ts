interface SkillInterface {
  skill: string;
  label: string;
}

export interface SkillCategoryInterface {
  name: string;
  skills: SkillInterface[];
}
