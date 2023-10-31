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

export const navLinks = [
  {
    id: "work",
    title: "Projekte",
  },
  {
    id: "gallery",
    title: "Galerie",
  },
  {
    id: "cv",
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
    components_length: 2,
    components: [
      {
        name: "Miniatur-Geschütz",
        tags: [
          {
            name: "Gieren",
            prop: "durch 39,5 : 1 Spannungswellengetriebe",
          },
          {
            name: "Nicken",
            prop: "durch 3⅓ : 1 Zahnriemengetriebe",
          },
          {
            name: "Drahtlose Kommunikation",
            prop: "mittles Bluetooth Low Energy",
          },
        ],
      },
      {
        name: "Handschuh",
        tags: [
          {
            name: "Bewegungserkennung",
            prop: "durch Sensor-Fusion eines 6-Achsen-Gyroskops",
          },
          {
            name: "Virtueller Abzug",
            prop: "durch Flex-Sensor",
          },
          {
            name: "Portable",
            prop: "dank Batteriestrom",
          },
          {
            name: "Drahtlose Kommunikation",
            prop: "mittles Bluetooth Low Energy",
          },
        ],
      },
    ],
    link: "https://github.com/",
  },
  {
    title: "Getriebe Prüfstand",
    description:
      "Ein variabler Prüfstand zur Leistungserfassung von zylindrischen Getrieben",
    components: [
      {
        tags: [
          {
            name: "Getriebe-Greifer",
            prop: "angetrieben durch Linearaktoren",
          },
        ],
      },
    ],
    link: "https://github.com/",
  },
  {
    title: "Greeter",
    description:
      "Eine Infotafel für Erinnerungen, Wetter, Kameraüberwachung uvm.",
    components: [
      {
        tags: [
          {
            name: "Externe Informationen",
            prop: "durch Webscraping und APIs in Python",
          },
          {
            name: "Benutzeroberfläche",
            prop: "als Website durch flask-web-app hinter einem WSGI und einem Nginx reverse-proxy",
          },
        ],
      },
    ],
    link: "https://github.com/",
  },
];

export { services, technologies, projects };
