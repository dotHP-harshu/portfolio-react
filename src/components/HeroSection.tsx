import type { HeroSectionInterface } from "../types/types";


interface HeroSectionProps{
  data: HeroSectionInterface
}
function HeroSection({data} : HeroSectionProps) {
  return (
    <div className="min-h-dvh border border-border-light dark:border-border-dark w-full p-4 grid grid-cols-2 max-md:grid-cols-1 pt-10  max-xs:p-2">
      {/* left  */}
      <div className="self-center h-fit">
        {/* ----- heading -----  */}
        <div className="-space-y-20 max-md:-space-y-10">
          {data.heading.map((h) => (
            <div key={h} className="w-fit h-fit overflow-hidden">
              <h2 className="text-9xl font-extrabold leading-normal font-grotesk max-md:text-7xl max-xs:text-6xl">
                {h}
              </h2>
            </div>
          ))}
        </div>
        {/* ----- heading -----  */}
        {/* ----- para -----  */}
        <div className="w-full max-w-lg ">
          <p className="text-xl font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-normal max-xs:text-lg">
           {data.para}
          </p>
        </div>
        {/* ----- para -----  */}
        {/* ----- CTA -----  */}
        <div className="mt-6">
          <button className="px-8 border border-dark dark:border-light py-4 bg-dark text-white dark:bg-light dark:text-black uppercase tracking-widest text-sm cursor-pointer select-none transition-colors hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light">
            {data.ctaText}
          </button>
        </div>
        {/* ----- CTA -----  */}
      </div>
      {/* left  */}
      {/* right  */}
      <div className="h-full bg-light dark:bg-dark  flex justify-center items-center max-md:order-first">
        <div className="border border-muted-light dark:border-muted-dark w-3/4 p-1">
          <img
            src={data.heroImgSrc}
            alt="hero-img"
            className="w-full h-auto object-center object-cover grayscale-100"
          />
        </div>
      </div>
      {/* right  */}
    </div>
  );
}

export default HeroSection;
