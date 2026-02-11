const MAIN_PROJECTS = [
  {
    title: "DotSQL",
    para: "Performance-first database visualizer with real-time reactive data binding and schema mapping.",
    tags: ["html", "css", "javascript"],
    image: "/images/project.png",
    liveLink: "this is live link",
    codeLink: "this is code link",
  },
  {
    title: "DotSQL",
    para: "Performance-first database visualizer with real-time reactive data binding and schema mapping.",
    tags: ["html", "css", "javascript"],
    image: "/images/project.png",
    liveLink: "this is live link",
    codeLink: "this is code link",
  },
  {
    title: "DotSQL",
    para: "Performance-first database visualizer with real-time reactive data binding and schema mapping.",
    tags: ["html", "css", "javascript"],
    image: "/images/project.png",
    liveLink: "this is live link",
    codeLink: "this is code link",
  },
];

function ProjectSection() {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4">
      <div>
        <h2 className="uppercase text-6xl font-extrabold ml-auto w-fit">Project</h2>
      </div>
      {/* ------ project container -----  */}
      <div className="mt-10">
        {MAIN_PROJECTS.map((project) => (
          <div key={project.title} className="grid grid-cols-2 border border-border-light dark:border-border-dark bg-light dark:bg-dark">
            <div className="flex justify-center items-center border-r border-r-border-light dark:border-r-border-dark">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="object-center w-full aspect-video object-cover" />
              </div>
            </div>

            <div className="p-6 space-y-6">
              <h2 className="text-2xl uppercase font-bold leading-none">{project.title}</h2>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="uppercase font-ibm text-border-light dark:text-border-dark text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg leading-none font-extralight text-muted-light">{project.para}</p>
              <div className="flex justify-start items-center gap-4 mt-4">
                <a href={project.liveLink} className="px-8 py-3 border border-border-light dark:border-border-dark uppercase font-bold text-sm cursor-pointer select-none bg-dark text-white dark:bg-light dark:text-black">Live</a>
                <a href={project.codeLink} className="px-8 py-3 border border-border-light dark:border-border-dark uppercase font-bold text-sm cursor-pointer select-none ">code</a>
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
