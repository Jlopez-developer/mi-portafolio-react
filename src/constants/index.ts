import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TMExperienceCard,
  TTestimonial,
  TProject,
  TProjectnew
} from "../types";

import francel from "../assets/francel.jpeg";

import monica from "../assets/monica.png";

import manuel from "../assets/manuel.png";

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

import { 
    alcampo,
    Background,
    barcelona,
    bitacoras,
    enalas,
    floriano,
    IMG_0400,
    iohp,
    lista,
    reporte,
    forlexx,
    sorftware,
    letynet,
    perfil,
    USMS,
} from "../assets/projects";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "PHP Developer",
    icon: web,
  },
  {
    title: "React developer",
    icon: mobile,
  },
  {
    title: "shopify developer",
    icon: backend,
  },
  {
    title: "Full stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const ExperienceSCard: TMExperienceCard[] =  [
  {
    title: "Freelancer",
  companyName: [
    { name: "PHP", color: "#777BB4" },
 { name: "Next.js", color: "#508a2fff" },
     { name: "Three.js", color: "#049EF4" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Shopify", color: "#95BF47" },
  ],  
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Still Going",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Mixart",
 companyName: [
    { name: "PHP", color: "#777BB4" },
    { name: "Next.js", color: "#508a2fff" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "MySQL", color: "#4479A1" },
    { name: "Shopify", color: "#95BF47" },
  ],     icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - febr 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Enalas",
 companyName: [
    { name: "PHP", color: "#777BB4" },
    { name: "javaScript", color: "#cfc018ff" },
    { name: "CSS", color: "#3dcbcbff" },
    { name: "HTML", color: "#d35f0dff" },
    { name: "SQL", color: "#4479A1" },

  ],     icon: meta,
    
    iconBg: "#383E56",
    date: "Jan 2023 - Still Working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Telynet",
 companyName: [
    { name: "PHP", color: "#777BB4" },
    { name: "SQL", color: "#4479A1" },
     { name: "javaScript", color: "#cfc018ff" },
 
  ],     icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Still Working",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "It was great working with him; he was very dedicated and attentive, and he helped me a lot with some personal projects. phone number +1 809 519 8559",
    name: "Fraancel zanches",
    designation: "Project manager",
    company: "Claro",
    image: francel,
  },
  {
    testimonial:
      "He's a great coworker, cheerful, and finishes his projects on time. phone number +1 829 696 9667",
    name: "Luis perez",
    designation: "Developer",
    company: "Telynet",
    image: manuel,
  },
  {
    testimonial:
      "He was a very good coworker, very dedicated to his projects, and he helped me a lot as a project partner!. phone number +1 809 803 6094",
    name: "Monica",
    designation: "developer",
    company: "Mixart",
    image: monica,
  },
];

const projects: TProject[] = [
  {
    name: "Telynet- Web system",
    description:
      "Maintaining web systems for large clients in the Dominican Republic such as Brugal, Corripio, ISM, Industrias Induban, La Famosa, and GND.",
    tags: [
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: letynet,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Enalas- School management system",
    description:
      "It is a web system where data on classes, personal data of students and teachers, charges, balances and payments are managed",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lista,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Enalas - consents App",
    description:
      "It is a web system where student consent forms are managed before flying and piloting aircraft; student data and legal data are handled",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "javascript",
        color: "yellow-text-gradient",
      },
        {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: reporte,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Cooperativa Barcelona - Ecomerce",
    description:
      "I developed an e-commerce website for Cooperativa Barcelona using Shopify, focused on selling local and sustainable products. The design was customized to reflect the identity of the cooperative, improving the shopping experience with intuitive navigation and an optimized checkout process. I implemented a responsive interface that ensures perfect performance on mobile and desktop devices. Additionally, it integrates inventory management and analytics tools to optimize business operations",
    tags: [
      {
        name: "shopify",
        color: "green-text-gradient",
      },
    ],
    image: barcelona,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Alcampo Store - Ecomerce",
    description:
      "I developed an online store for AlcampoStore using Shopify, creating a seamless and visually appealing shopping experience. I was responsible for designing the user interface, optimizing navigation and ensuring efficient integration with payment and inventory management systems. In addition, I implemented a responsive design to ensure a consistent shopping experience across all devices.",
    tags: [
      {
        name: "shopify",
        color: "green-text-gradient",
      },
    ],
    image: alcampo,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "migration solutions",
    description:
      "I designed and developed an e-commerce website for Migration Solutions using WordPress and Elementor. The project included creating a custom, easy-to-navigate layout, optimizing the user experience and ensuring a smooth transition of content during the migration. Additionally, I implemented advanced e-commerce functionalities, ensuring effective integration with the payment system and improving search engine visibility..",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
       {
        name: "Elementor",
        color: "PINK-text-gradient",
      },
       {
        name: "PHP",
        color: "blue-text-gradient",
      },
    ],
    image: USMS,
    sourceCodeLink: "https://github.com/",
  },
];

const TProjectn: TProjectnew[] = [
  {
    name: "floriano - Ecomerce",
    description:
      "I developed an online store for Floriano using Laravel and Vue.js, providing an interactive and fast user experience. The project included the design of a custom platform, optimizing product, order and payment management. I implemented a flexible architecture that allows for scalability and future integrations. Additionally, the user interface was carefully designed to be intuitive and fully responsive, improving the shopping experience on mobile and desktop devices",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
       {
        name: "vue.js",
        color: "green-text-gradient",
      },
       {
        name: "sql",
        color: "blue-text-gradient",
      },
          {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: floriano,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "IOHP - Ecomerce",
    description:
      "IOHP is a WordPress-based web platform that specializes in medical services. Its goal is to facilitate access to information about healthcare, specialties, and healthcare professionals. Through this website, users can find and contact specialists, learn more about different treatments, and improve their healthcare experience.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
       {
        name: "vue.js",
        color: "green-text-gradient",
      },
       {
        name: "sql",
        color: "blue-text-gradient",
      },
          {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: iohp,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Enalas- Web System",
    description:
      "It is a web system where student personal data is handled, along with flight information, payments, collections, company information, money, and a lot of other data ",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "javascript",
        color: "yellow-text-gradient",
      },
        {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: sorftware,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Enalas- Web System",
    description:
      "It is a web system where room data and student balance debits are entered.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
       {
        name: "javascript",
        color: "yellow-text-gradient",
      },
        {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: bitacoras,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Enalas - web",
    description:
      "ENALAS – Aeronautical Training Center Aeronautical Training of the Americas (ENALAS) is a flight school in the Dominican Republic specializing in pilot and crew training. They offer courses such as private pilot, commercial pilot, instrument rating, and cabin crew training..",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
        {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: enalas,
    sourceCodeLink: "https://github.com/",
  },
   {
    name: "Barcelona - Ecomerce",
    description:
      "I developed an e-commerce website for Cooperativa Barcelona using Shopify, focused on selling local and sustainable products. The design was customized to reflect the identity of the cooperative, improving the shopping experience with intuitive navigation and an optimized checkout process. I implemented a responsive interface that ensures perfect performance on mobile and desktop devices. Additionally, it integrates inventory management and analytics tools to optimize business operations",
    tags: [
      {
        name: "shopify",
        color: "green-text-gradient",
      },
    ],
    image: IMG_0400,
    sourceCodeLink: "https://github.com/",
  },
];



export { services, technologies, experiences,ExperienceSCard, testimonials, projects,TProjectn };
