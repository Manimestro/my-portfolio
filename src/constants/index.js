import {
  Rugua,
  Ascensio,
    backend,
    creator,
    web,
    javascript,
    PrintingPage,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    Cpp,
    BootStrap,
    git, 
    superhero,
    miniLinked,
    threejs,
    Python,
    github,
  } from "../assets";

  import Firebase from '../assets/tech/firebase.svg'
  import Django from '../assets/tech/django.svg'

  import Phone from '../assets/phone.png'
  import LinkedIn from '../assets/linked.png'
  import Mail from '../assets/mail.png'
import { Link } from "react-router-dom";
  export const navLinks = [
  
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



  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Programmer",
      icon: creator,
    },
  ];

  const FooterIcons = [
    {
      link:"https://github.com/Manimestro",
      icon:github
    },
    {
      link:"mailto:manikantatez@gmail.com?subject=Hello",
      icon:Mail
    },
    {
      link:"https://www.linkedin.com/in/manikanta-prasad-lopinti-068b0623b/",
      icon:LinkedIn
    },
    {
      link:'tel:+916304764188',
      icon:Phone
    }
  ]
  
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
      name: "Three JS",
      icon: BootStrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Django",
      icon: Django,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Cpp",
      icon: Cpp,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ascensio - Intern",
      icon: Ascensio,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Creating a dynamic web application for an E-commerce company specializing in 3D printing",
        "Implementing responsive design upto 4 Devices, enabling users to upload 3D models and personalize them according to their preferences",
        "After customization user can enter their contact details  and these details along with the customized model were sent to Backend ",
      ],
    },
    {
      title: "Django Developer",
      company_name: "Rugua -Intern",
      icon: Rugua,
      iconBg: "#E6DEDD",
      date: "June 2021 - Ongoing",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  
  
  const projects = [
    {
      name: "Mini LinkedIn",
      description:
        "Developed a dynamic interface resembling LinkedIn, enabling users to create posts and also view others.Implemented user reg- istration and login using email and password.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image:miniLinked,
      source_code_link: "https://github.com/Manimestro/Mini-LinkedIn",
      project_link:"https://linkedin-22b5e.web.app"
    },
    {
      name: "3D Printing service page",
      description:
        "I developed a responsive 3D printing service web application reminiscent of the Nike website. users could upload 3d models , customize models by selecting colors, materials, and printer qual- ity etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: PrintingPage,
      source_code_link: false,
      project_link:false
    },
    {
      name: "Get your superhero",
      description:
        "Developed a dynamic web application capable of generating ran- dom superhero power statistics or retrieving specific power stats by manually entering a person’s name.the data comes from an API source",
      tags: [
        {
          name: "Java Script",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:superhero,
      source_code_link: "https://github.com/Manimestro/SuperHerosApi",
      project_link:"https://getyoursuperheros--meikntyarasad.repl.co"

    },
  ];
  
  export { services, technologies, experiences, projects ,FooterIcons};