import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { IoMdCloudy } from "react-icons/io";
import Pronav from "./assets/Pronav.jsx";

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

export const WORK_EXP = [
  {
    id: 1,
    title: "Vehicle Operator",
    company: "Tesla",
    logo: SiTesla,
    color: "#e41836",
    time: "Nov 2023 - Present",
    details: [
      "Provided crucial support to engineering efforts by conducting daily analysis of vehicle software, producing detailed reports that informed decision-making and facilitated continuous improvement.",
      "Performed real-world testing adhering to specified test protocols, offering ad-hoc support for critical tasks, and meeting team needs to ensure project milestones were met."
    ]
  },{
    id: 2,
    title: "Software Developer & Co-founder",
    company: "Cloud OTA",
    logo: IoMdCloudy,
    color: "#8bca84",
    time: "Jan 2023 - June 2023",
    details: [
      "Built the front-end interface, utilizing React's component-based architecture to create a seamless user experience with a focus on performance.",
      "Developed the back-end API using Laravel, MySQL & Redis which was deployed on AWS to create a reliable, scaleable and a highly performant system.",
      "Designed the back-end to combine Laravel's native MVC architecture with the Ports & Adapters architecture to facilitate integration of numerous third party API's."
    ]
  },{
    id: 3,
    title: "Software Developer",
    company: "ProNavigator",
    logo: Pronav,
    color: "#3f95b4",
    time: "Jan 2022 - Aug 2022",
    details: [
      "Created endpoints conforming to REST API principles, using Python, YAML & AWS to support new features.",
      "Built ReactJS components from scratch, based on Figma frames, to overhaul the UI of the company's flagship software.",
      "Refactored the ReactJS front-end for internal tools to decrease coupling which reduced the steps required to add new tools from 10+ to 3 steps."
    ]
  },{
    id: 4,
    title: "Software Developer",
    company: "ProNavigator",
    logo: Pronav,
    color: "#3f95b4",
    time: "Jan 2021 - Aug 2021",
    details: [
      "Developed a modular suite of internal tools from scratch using NodeJS and JavaScript which reduced manual tasks by over 50%.",
      "Created a tool to test the accuracy of a Natural Language Processing system and reduced testing time by over 95%"
    ]
  }

]