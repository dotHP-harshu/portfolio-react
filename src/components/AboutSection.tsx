import type { AboutSectionInterface } from "../types/types";

interface AboutSectionProps {
  data: AboutSectionInterface;
}
function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4 max-sm:px-0 max-sm:py-6">
      {/* about container  */}
      <div className="min-h-dvh w-full px-4 grid grid-cols-2 max-sm:grid-cols-1 ">
        {/* left  */}

        <div className="h-full bg-light dark:bg-dark  flex justify-center items-center">
          <div className="border border-muted-light dark:border-muted-dark w-3/4 p-1">
            <img
              src={data.aboutImgSrc}
              alt="hero-img"
              className="w-full h-auto object-center object-cover grayscale-100"
            />
          </div>
        </div>
        {/* left  */}
        {/* right  */}
        <div className=" flex justify-evenly items-start flex-col max-sm:justify-center gap-4">
          <div>
            <h2 className="uppercase text-6xl font-grotesk font-bold max-xs:text-3xl">
              {data.heading}
            </h2>
          </div>
          {/* ----- para -----  */}
          <div className="w-full max-w-lg space-y-4 max-sm:space-y-2">
            {data.paras.map((para, index) => (
              <p
                key={`para-${index}`}
                className="text-3xl font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-none max-sm:text-xl"
              >
                {para}
              </p>
            ))}
          </div>
          {/* ----- para -----  */}
          {/* ----- CTA -----  */}
          {/* <div className="mt-6">
            <button className="px-8 border border-dark dark:border-light py-4 bg-dark text-white dark:bg-light dark:text-black uppercase tracking-widest text-sm cursor-pointer select-none transition-colors hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
              donwload resume
            </button>
          </div> */}
          {/* ----- CTA -----  */}
        </div>
        {/* right  */}
      </div>
      {/* about container  */}
    </section>
  );
}

export default AboutSection;
