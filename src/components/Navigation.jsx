import { useState, useEffect, useRef } from "react";

import { MdMenu } from "react-icons/md";

import { SECTIONS, SOCIALS } from "../data";
import logo from "../assets/mag-logo.png";

export default function Navigation() {
  // Adjust for scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight * 0.2)) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu
  const mobileMenu = useRef();

  function handleMenuOpen() {
    mobileMenu.current.showModal();
  }

  const pageLinksClasses = "flex-1 font-bold text-nowrap hover:text-navy-blue transition-all duration-100 [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]";
  const socialClasses = "text-6xl text-white/75 hover:text-white transition-all duration-300";
  const socialScrollClasses = "text-5xl text-navy-blue/75 hover:text-navy-blue transition-all duration-300"

  return (
    <header className={`flex fixed top-0 w-full z-10 items-center transition-all duration-300
                      ${scrolled ? 'bg-white h-20 border-b border-b-navy-blue/50' : 'bg-transparent h-24'}`
    }>
      <div className="lg:flex hidden w-2/3 justify-between items-center">
        <img src={logo} className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}/>
        <nav className="flex gap-8 mx-8 items-center justify-between">
          {SECTIONS.map(section => {
            return (
              <a key={section.id} href={'#' + section.id} className={pageLinksClasses}>
                {section.name}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="lg:flex hidden w-1/3 px-8 items-center justify-end gap-8">
        {SOCIALS.map(social => {
          return (
            <a
              key={social.id}
              href={social.link}
              className={scrolled ? socialScrollClasses : socialClasses}
            >
              <social.icon />
            </a>
          );
        })}
      </div>
      <div className="lg:hidden flex w-full items-center justify-between">
        <img src={logo} className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}/>
        <MdMenu className="text-navy-blue text-4xl mx-4" onClick={handleMenuOpen} />
        <dialog ref={mobileMenu} className="w-full h-full text-right backdrop:bg-stone-500/60 p-4 rounded-md shadow-md">
          <form method="dialog">
            <button className="m-4 text-bold text-xl">X</button>
          </form>
          <nav className="flex flex-col text-center gap-8 my-12 items-center justify-between">
          {SECTIONS.map(section => {
            return (
              <a key={section.id} href={'#' + section.id} className={pageLinksClasses}>
                {section.name}
              </a>
            );
          })}
          </nav>
        </dialog>
      </div>
    </header>
  );
}