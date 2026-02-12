import type { SkillCategoryInterface } from "../types/types";

const SKILL_CATEGORIES: SkillCategoryInterface[] = [
  {
    name: "language",
    skills: [
      {
        skill: "javascript",
        label: "js",
      },
      {
        skill: "TypeScript",
        label: "ts",
      },
    ],
  },
  {
    name: "frontend",
    skills: [
      {
        skill: "React",
        label: "re",
      },
      {
        skill: "tailWindcss",
        label: "tw",
      },
    ],
  },
];

function SkillSection() {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4">
      <div>
        <h2 className="uppercase text-6xl font-grotesk font-bold max-xs:text-3xl ">skill_matrix</h2>
      </div>

      {/* skill container  */}
      <div className="mt-10 space-y-4 p-6 max-sm:mt-4 max-sm:p-2">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name}>
            <h4 className="text-3xl font-bold capitalize max-sm:text-lg">{category.name}</h4>
            {/* skill container  */}
            <div className="flex flex-wrap mt-2">
              {category.skills.map((skill) => (
                // make a separate component and then make mouseenter to show the skill name 
                <div key={skill.skill} className="border border-dark dark:border-light w-16 max-sm:w-10 aspect-square flex justify-center items-center cursor-crosshair ">
                  <span className="hidden">{skill.skill}</span>
                  <span className="text-xl font-bold capitalize max-sm:text-base">{skill.label}</span>
                </div>
              ))}
            </div>
            {/* skill container  */}
          </div>
        ))}
      </div>
      {/* skill container  */}
    </section>
  );
}

export default SkillSection;
