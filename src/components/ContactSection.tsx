import { ArrowRight } from "lucide-react";
import type { ContactSectionInterface } from "../types/types";


interface ContactSectionProps {
  data: ContactSectionInterface;
}
function ContactSection({ data }: ContactSectionProps) {
  return (
    <section className="border border-border-light dark:border-border-dark py-10 px-4 max-sm:px-2">
      {/* about container  */}
      <div className="w-full px-4 grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-2">
        {/* left  */}
        <div className=" flex justify-start items-start flex-col max-sm:gap-4">
          {/* ----- heading -----  */}
          <div className="">
            {data.heading.map((h) => (
              <div key={h} className="w-fit h-fit overflow-hidden">
                <h3 className="text-8xl uppercase font-extrabold leading-none font-grotesk max-sm:text-5xl break-all">
                  {h}
                </h3>
              </div>
            ))}
          </div>
          {/* ----- heading -----  */}
          {/* ----- para -----  */}
          <div className="w-full max-w-lg ">
            <p className="text-xl font-extralight font-helvetica text-muted-light dark:text-muted-dark leading-none">
            {
              data.para
            }
            </p>
          </div>
          {/* ----- para -----  */}
        </div>
        {/* left  */}
        {/* right  */}
        <div className="h-full bg-light dark:bg-dark  flex justify-center items-center max-sm:mt-6">
          <div className="w-full border-4 border-border-light dark:border-border-dark p-4">
            <form className="space-y-6">
              <div className="border border-border-light dark:border-border-dark">
                <label
                  htmlFor="name"
                  className="tracking-wider block font-ibm uppercase  text-sm"
                >
                  Field_01 // Identity
                </label>
                <input
                  id="name"
                  type="text"
                  className="bg-transparent outline-none placeholder:uppercase text-lg my-2 w-full"
                  placeholder="your name"
                />
              </div>
              <div className="border border-border-light dark:border-border-dark">
                <label
                  htmlFor="email"
                  className="tracking-wider block font-ibm uppercase  text-sm"
                >
                  Field_02 // Return_Address
                </label>
                <input
                  id="email"
                  type="text"
                  className="bg-transparent outline-none placeholder:uppercase text-lg my-2 w-full"
                  placeholder="your email"
                />
              </div>
              <div className="border border-border-light dark:border-border-dark">
                <label
                  htmlFor="email"
                  className="tracking-wider block font-ibm uppercase  text-sm"
                >
                  Field_03 // Project_Scope
                </label>
                <textarea
                  id="email"
                  className="bg-transparent outline-none placeholder:uppercase text-lg my-2 w-full resize-none"
                  placeholder="message"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button className="text-sm w-full uppercase tracking-[4px] font-semibold px-6 py-4 bg-dark dark:bg-light text-white dark:text-black outline-none select-none cursor-pointer flex justify-between items-center">
                  <span>transmit enquiry</span>
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* right  */}
      </div>
      {/* about container  */}
    </section>
  );
}

export default ContactSection;
