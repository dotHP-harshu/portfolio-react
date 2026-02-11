const ABOUT_PARAS = [
  "   hello! I’m Harsh Prajapati.",
  "I’m a self-motivated web developer based in Uttar Pradesh, India. I loves transforming designs into clean, functional, and engaging web experiences. I am passionate about building responsive, and user-friendly websites.",
];

function AboutSection() {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4">
      {/* about container  */}
      <div className="min-h-dvh w-full px-4 grid grid-cols-2 max-sm:grid-cols-1 ">
        {/* left  */}

        <div className="h-full bg-light dark:bg-dark  flex justify-center items-center">
          <div className="border border-muted-light dark:border-muted-dark w-3/4 p-1">
            <img
              src="/images/about-img.png"
              alt="hero-img"
              className="w-full h-auto object-center object-cover grayscale-100"
            />
          </div>
        </div>
        {/* left  */}
        {/* right  */}
        <div className=" flex justify-evenly items-start flex-col ">
          <div>
            <h2 className="uppercase text-6xl font-extrabold ml-auto w-fit">
              about_me
            </h2>
          </div>
          {/* ----- para -----  */}
          <div className="w-full max-w-lg space-y-4">
            {ABOUT_PARAS.map((para, index) => (
              <p
                key={`para-${index}`}
                className="text-3xl font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-none"
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
