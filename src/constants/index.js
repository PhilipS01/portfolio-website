import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import Matrs_Model from "../components/canvas/Matrs_blacknwhite";

export const navLinks = [
  {
    id: "idProjects",
    link: "projects",
    title: "Projekte",
  },
  {
    id: "idGallery",
    link: "gallery",
    title: "Galerie",
  },
  {
    id: "idCV",
    link: "cv",
    title: "CV",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    title: "MATRS",
    description: "Ferngesteuertes Miniatur-Geschütz",
    model: Matrs_Model,
    link: "matrs",
    features: [
      {
        tags: [
          {
            name: "Fernsteuerung mittels Hanschuh",
            prop: "Bewegungserkennung durch Sensor-Fusion",
          },
          {
            name: "Präzises Gieren und Nicken",
            prop: "Durch Spannungswellen- und Zahnriemengetriebe",
          },
          {
            name: "Drahtlose Kommunikation",
            prop: "Mittles Bluetooth Low Energy",
          },
          {
            name: "Virtueller Abzug",
            prop: "Durch Flex-Sensor im Finger",
          },
        ],
      },
    ],
    github: "https://github.com/",
  },
  {
    title: "Greeter",
    description: "Infotafel für Alles",
    link: "greeter",
    features: [
      {
        tags: [
          {
            name: "Kalender Sync",
            prop: "Dank Python-APIs",
          },
          {
            name: "Web Anwendung",
            prop: "Mit Flask, WSGI und Nginx Reverse Proxy",
          },
        ],
      },
    ],
    github: "https://github.com/",
  },
  {
    title: "Getriebe Prüfstand",
    description: "Leistungserfassung zylindrischer Getrieben",
    link: "pruefstand",
    features: [
      {
        tags: [
          {
            name: "Getriebe Gripper",
            prop: "Angetrieben von Linearaktoren",
          },
          {
            name: "Kraftmessung",
            prop: "Über Wägezelle",
          },
        ],
      },
    ],
    github: "https://github.com/",
  },
];

export { services, technologies, projects };
