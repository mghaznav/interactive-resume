import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

import logo from "../assets/mag-logo.png";

export default function Navigation() {
  const pageLinksClasses = "font-bold hover:text-navy-blue transition-all duration-100 [text-shadow:_-2px_5px_10px_rgb(0_0_0_/_20%)]";
  const socialLinksClasses = "text-6xl text-white/75 hover:text-white";

  return (
    <header className="flex fixed top-0 h-24 w-full z-10 items-center">
      <div className="w-2/3 px-8 flex justify-between items-center">
        <img src={logo} className="h-16"/>
        <nav className="flex gap-8 w-2/3 justify-center content-justify">
          <a href="#" className={pageLinksClasses}>About Me</a>
          <a href="#" className={pageLinksClasses}>Work Experiences</a>
          <a href="#" className={pageLinksClasses}>Projects</a>
          <a href="#" className={pageLinksClasses}>Blog</a>
          <a href="#" className={pageLinksClasses}>Contact</a>
        </nav>
      </div>
      <div className="w-1/3 px-8 flex items-center justify-end gap-8">
        <a href="#" className={socialLinksClasses}><FaSquareGithub /></a>
        <a href="#" className={socialLinksClasses}><FaLinkedin /></a>
        <a href="#" className={socialLinksClasses}><FaMedium /></a>
      </div>
    </header>
  );
}