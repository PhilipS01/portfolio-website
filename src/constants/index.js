import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  cpp,
  threejs,
  fusion360,
  python,
  threed_printing,
  electronics,
  rsschmalkalden,
  bbzsm,
  tuda,
  lrasm,
  langs,
  neuralnet,
  headset,
  biceps,
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
    git_link:
      "https://gitlab.com/PhilipS01/motion-actuated-turret-remote-system",
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
    git_link: "https://github.com/",
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
    git_link: "https://github.com/",
  },
];

const cv = [
  {
    title: "Akademische Laufbahn",
    items: [
      {
        date: "Seit Oktober 2023",
        item_title: "TU-Darmstadt",
        description: [
          "Studium im B.Sc. Mechatronik\nFachbereich Elektro- und Informationstechnik",
        ],
        icon: tuda,
        iconBg: "#fff",
      },
      {
        date: "Juni 2023",
        item_title: "Berufsbildungszentrum Schmalkalden",
        description: [
          "Allgemeine Hochschulreife mit ∅1,9",
          "Fachrichtung Technik\nSchwerpunkt Daten- und Informationstechnik",
        ],
        icon: bbzsm,
        iconBg: "#e7e8e2",
      },
      {
        date: "Juni 2019",
        item_title: "Staatliche Regelschule Schmalkalden",
        description: ["Mittlere Reife mit ∅1,1"],
        icon: rsschmalkalden,
        iconBg: "#e7e8e2",
      },
    ],
    bgColor: "#0ea5e9",
    bgColor2: "#2563eb",
  },
  {
    title: "Berufserfahrung",
    items: [
      {
        date: "Januar - Juli 2022",
        item_title: "Landratsamt Schmalkalden Meiningen",
        description: [
          "Kommunaler IT-Service\nAufgaben: Interne Knowledgebase Entwicklung,\nIT-Außendienst an Schulen des Landkreises",
        ],
        icon: lrasm,
        iconBg: "#fff",
      },
      {
        date: "2018 - 2019",
        item_title: "Diverse Berufspraktika der Realschule",
        description: ["IT-Systemkaufmann, Versicherungskaufmann"],
        icon: rsschmalkalden,
        iconBg: "#e7e8e2",
      },
    ],
    bgColor: "#34d399",
    bgColor2: "#16a34a",
  },
  {
    title: "Kenntnisse und Interessen",
    items: [
      {
        date: "Technik & IT",
        description: [
          "C++, C#, Python, JS, HTML, CSS",
          "Fusion360, Cura, PlatformIO, Figma, Blender,\nGIMP, Kdenlive",
          "Linux (Arch, Ubuntu, Debian), Git",
        ],
        icon: neuralnet,
        iconBg: "#fff",
      },
      {
        date: "Hobbies",
        description: [
          "3D-Druck, Mikroelektronik",
          "Gewichtheben, Joggen, Lesen",
        ],
        icon: biceps,
        iconBg: "#fff",
      },
      {
        date: "Fremdsprachen",
        description: [
          "Deutsch (Muttersprache)",
          "Englisch (fließend)",
          "Französisch (Grundkrenntnisse)",
        ],
        icon: langs,
        iconBg: "#e7e8e2",
      },
    ],
    bgColor: "#E95420",
    bgColor2: "#772953",
  },
];

export { projects, cv };
