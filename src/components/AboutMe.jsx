import ali from "../assets/Ali-min.jpg";

import Button from "./General/Button";
import Socials from "./General/Socials";

export default function AboutMe() {
  const socialStyles = "text-6xl text-navy-blue/75 hover:text-navy-blue transition-all duration-300";
  const secTextStyles = "text-navy-blue/75 text-sm";

  return (
    <section className="min-h-[50vh] bg-light-blue">
      <div className="flex lg:flex-row flex-col lg:w-3/4 w-full justify-evenly mx-auto">
        <div className="hidden lg:block w-1/2 p-24">
          <img src={ali} className="rounded-3xl" />
        </div>
        <div className=" flex flex-col lg:w-1/2 w-full p-16 gap-4 justify-center">
          <h2 className="text-4xl font-bold text-navy-blue">About Me</h2>
          <p>A recent graduate with a bachelor&apos;s in Computer Science and 3 years of full-stack software development experience. This includes internships, co-op placements and building my own startup while still completing my bachelors.</p>
          <p>Having a strong understanding of the fundamentals of computer science such as data structures and algorithms as well as production experience working with widely used technologies in the industry today, such as React and Python.</p>
          <p>I am always eager to learn new skills, continue to grow, and make more connections in the tech world.</p>
          <div className="flex flex-col w-full my-4 items-center">
            <Button>Download Resume</Button>
            <p className={secTextStyles}> |</p>
            <p className={secTextStyles}>OR</p>
            <p className={secTextStyles}> |</p>
            <div className="flex w-full my-4 justify-center gap-4">
              <Socials styles={socialStyles} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}