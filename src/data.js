import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";

export const SECTIONS = [
  {
    id: 'aboutme',
    name: 'About Me',
  },
  {
    id: 'workexp',
    name: 'Work Experiences',
  },
  {
    id: 'projects',
    name: 'Projects',
  },
  {
    id: 'blog',
    name: 'Blog',
  },
  {
    id: 'contact',
    name: 'Contact',
  },
];

export const SOCIALS = [
  {
    id: 1,
    name: 'GitHub',
    icon: FaSquareGithub,
    link: '#'
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: '#'
  },
  {
    id: 3,
    name: 'Medium',
    icon: FaMedium,
    link: '#'
  }
];