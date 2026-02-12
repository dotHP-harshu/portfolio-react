import type { ProjectSectionInterface } from "../types/types";

interface ProjectSectionProps {
  data: ProjectSectionInterface;
}

function ProjectSection({ data }: ProjectSectionProps) {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4">
      <div className="space-y-2"> 
        <h2 className="uppercase text-6xl font-grotesk font-bold ml-auto w-fit max-xs:text-4xl">
          {data.heading}
        </h2>
        <p className="text-xl ml-auto text-right max-w-lg font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-none max-xs:text-lg">
          {data.para}
        </p>
      </div>
      {/* ------ project container -----  */}
      <div className="mt-10">
        {data.mainProjects.map((project) => (
          <div
            key={project.title}
            className="grid grid-cols-2 border border-border-light dark:border-border-dark bg-light dark:bg-dark max-sm:grid-cols-1"
          >
            <div className="flex justify-center items-center border-r border-r-border-light dark:border-r-border-dark">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-center w-full aspect-video object-cover"
                />
              </div>
            </div>

            <div className="p-6 space-y-6 max-sm:p-2">
              <h2 className="text-2xl uppercase font-bold leading-none">
                {project.title}
              </h2>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="uppercase font-ibm text-border-light dark:text-border-dark text-sm max-sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg leading-none font-extralight text-muted-light max-sm:text-base">
                {project.para}
              </p>
              <div className="flex justify-start items-center gap-4 mt-4">
                <a
                  href={project.liveLink}
                  className="px-8 py-3 max-sm:px-4 max-xs:py-1.5 border border-border-light dark:border-border-dark uppercase font-bold text-sm cursor-pointer select-none bg-dark text-white dark:bg-light dark:text-black"
                >
                  Live
                </a>
                <a
                  href={project.codeLink}
                  className="px-8 py-3 max-sm:px-4 max-xs:py-1.5 border border-border-light dark:border-border-dark uppercase font-bold text-sm cursor-pointer select-none "
                >
                  code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ------ project container -----  */}
    </section>
  );
}

export default ProjectSection;
