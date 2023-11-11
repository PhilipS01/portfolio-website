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
  cpp,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fusion360,
  python,
  threed_printing,
  electronics,
} from "../assets";
//import Matrs_Model from "../components/canvas/Matrs_blacknwhite";
import Matrs_Model from "../components/canvas/Turret_new";
import ATR_Model from "../components/canvas/Atr";

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
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "fusion360",
    icon: fusion360,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "3D printing",
    icon: threed_printing,
  },
  {
    name: "electronics",
    icon: electronics,
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
            name: "Fernsteuerung mittels Handschuh",
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
    tools: [
      {
        name: "cpp",
        icon: cpp,
      },
      {
        name: "fusion360",
        icon: fusion360,
      },
      {
        name: "electronics",
        icon: electronics,
      },
      {
        name: "3D printing",
        icon: threed_printing,
      },
    ],
    github: "https://github.com/",
  },
  {
    title: "Getriebe Prüfstand",
    description: "Leistungserfassung zylindrischer Getrieben",
    model: ATR_Model,
    link: "pruefstand",
    features: [
      {
        tags: [
          {
            name: "Schwebende Befestigung",
            prop: "Durch Gripper und Lineare Schienen",
          },
          {
            name: "Getriebe Gripper",
            prop: "Angetrieben von Linearaktoren",
          },
          {
            name: "Kraftmessung",
            prop: "Über Wägezelle am Endeffektor",
          },
        ],
      },
    ],
    tools: [
      {
        name: "fusion360",
        icon: fusion360,
      },
      {
        name: "python",
        icon: python,
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
            name: "Stundenplan Sync",
            prop: "Durch Webscraping von TUCaN",
          },
          {
            name: "Wetterdienst Info",
            prop: "Ebenfalls durch Webscraping",
          },
          {
            name: "Web Anwendung",
            prop: "Mit Flask, WSGI und Nginx Reverse Proxy",
          },
        ],
      },
    ],
    tools: [
      {
        name: "python",
        icon: python,
      },
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
    ],
    github: "https://github.com/",
  },
];

const cv = [
  {
    title: "AKADEMISCHE LAUFBAHN",
    items: [
      {
        date: "Seit Oktober 2023",
        item_title: "TU-Darmstadt",
        description:
          "Studium im B.Sc. Mechatronik\nFachbereich Elektro- und Informationstechnik",
      },
      {
        date: "Juni 2023",
        item_title: "Berufsbildungszentrum Schmalkalden",
        description:
          "Allgemeine Hochschulreife mit ∅ 1,9\nFachrichtung Technik\nSchwerpunkt Daten- und Informationstechnik",
      },
      {
        date: "Juni 2019",
        item_title: "Staatliche Regelschule Schmalkalden",
        description: "Mittlere Reife mit ∅ 1,1",
      },
    ],
  },
  {
    title: "BERUFSERFAHRUNG",
    items: [
      {
        date: "Januar - Juli 2022",
        item_title: "Landratsamt Schmalkalden Meiningen",
        description:
          "Kommunaler IT-Service\nAufgaben: Interne Knowledgebase Entwicklung,\nIT-Außendienst an Schulen des Landkreises",
      },
      {
        date: "2018 - 2019",
        item_title: "Diverse Berufspraktika der Realschule",
        description: "IT-Systemkaufmann, Versicherungskaufmann",
      },
    ],
  },
  {
    title: "KENNTNISSE UND INTERESSEN",
    items: [
      {
        category: "Technik & IT",
        subitems: [
          {
            item_title: "Programmiersprachen",
            description: "C++, C#, Python, JS, HTML, CSS",
          },
          {
            item_title: "Design & Prototyping",
            description:
              "Fusion360, Cura, PlatformIO, Figma, Blender,\nGIMP, Kdenlive",
          },
          {
            item_title: "Betriebssysteme & Open Source Mindset",
            description: "Linux (Arch, Ubuntu, Debian), Git",
          },
        ],
      },
      {
        category: "Hobbies",
        subitems: [
          { description: "3D-Druck, Mikroelektronik" },
          { description: "Gewichtheben, Joggen, Lesen" },
        ],
      },
      {
        category: "Fremdsprachen",
        subitems: [
          { description: "Deutsch (Muttersprache)" },
          { description: "Englisch (fließend)" },
          { description: "Französisch (Grundkrenntnisse)" },
        ],
      },
    ],
  },
];

export { services, technologies, projects, cv };
