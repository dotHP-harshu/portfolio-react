import type { SkillSectionInterface } from "../types/types";

interface SkillSectionProps {
  data: SkillSectionInterface;
}

function SkillSection({ data }: SkillSectionProps) {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4">
      <div>
        <h2 className="uppercase text-6xl font-grotesk font-bold max-xs:text-3xl ">
          {data.heading}
        </h2>
        <p className="text-xl max-w-lg font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-normal max-xs:text-lg">
          {data.para}
        </p>
      </div>

      {/* skill container  */}
      <div className="mt-10 space-y-6 p-6 max-sm:mt-4 max-sm:p-2">
        {data.skillCategories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col justify-end items-end"
          >
            <h4 className="text-3xl font-bold capitalize max-sm:text-lg">
              {category.name}
            </h4>
            {/* skill container  */}
            <div className="flex justify-end flex-wrap mt-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.skill}
                  className="border bg-light dark:bg-dark border-dark dark:border-light px-4 py-2 max-sm:px-2 max-sm:py-1 flex justify-center items-start flex-col cursor-crosshair"
                >
                  <span className="text-xl font-extrabold font-sans capitalize max-sm:text-base">
                    {skill.label}
                  </span>
                  <span className="text-lg font-ibm text-muted-light dark:text-muted-dark uppercase font-extralight max-sm:text-sm">
                    {skill.skill}
                  </span>
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
