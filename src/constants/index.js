import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    python,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    java,
    c_plus_plus,
    meta,
    starbucks,
    tesla,
    shopify,
    isolvrisk,
    amino,
    hoperun,
    thankupet,
    brown,
    colgate,
    wardlaw,
    nwxl,
    particle,
    architecture,
    perplexity,
    cornfield,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Team Leader",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: c_plus_plus,
    },
  ];

  const educations = [
    {
      school_name: "Brown University",
      degree: "M.S. in Computer Science",
      icon: brown,
      iconBg: "#383E56",
      date: "September 2023 - May 2025",
      courses: [
        "Machine Learning with Algorithms", 
        "Graphics", 
        "Deep Learning",
        "Software Engineering",
        "NLP",
        "Computer Vision"
      ],
    },
    {
      school_name: "Colgate University",
      degree: "B.A. Computer Science, B.A. Economics",
      icon: colgate,
      iconBg: "#E6DEDD",
      date: "September 2019 - May 2023",
      courses: [
        "Microeconomics", 
        "Macroeconomics", 
        "Applied Econometrics", 
        "Environmental Economics", 
        "Immigration Economics", 
        "Japanese Economy",
        "Computer Networks", 
        "Data Visualization", 
        "Data Structures and Algorithms", 
        "Discrete Structures",
        "Computer Systems"
      ],
    },
    {
      school_name: "Wardlaw+Hartridge School",
      degree: "High School",
      icon: wardlaw,
      iconBg: "#383E56",
      date: "September 2015 - May 2019",
      courses: [
      ],
    },
    {
      school_name: "Nanjing Foreign Language School Xianlin Campus ",
      degree: "Middle School",
      icon: nwxl,
      iconBg: "#E6DEDD",
      date: "September 2012 - May 2015",
      courses: [
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Founding Engineer",
      company_name: "Venream",
      icon: thankupet, // Substitute Later
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Engineered e-commerce platform using MedusaJS, customizing the frontend with React, achieving 95.6% customer satisfaction rate.",
        "Administered technical team of 12 interns to enhance platform functionality, contributing to 20% increase in operational efficiency.",
        "Remodeled landing page through code reviews and significantly boosted code reusability, efficiency, and collaboration by 30%.",
        "Coordinated meetings to convert business ideas into actionable features, steering company direction and advancing product value."
      ],
    },
    {
      title: "Full-Stack Engineer Intern",
      company_name: "ThankUPet",
      icon: thankupet, // Ensure 'thankyoupet' icon is correctly imported or defined
      iconBg: "#E6DEDD",
      date: "May 2024 - Present",
      points: [
        "Led engineering efforts that developed tailored full-stack architecture, optimizing backend and frontend integration effectively.",
        "Managed CI/CD processes with Vercel and GitHub Actions, achieving 99.9% uptime while reducing deployment errors by 50%.",
        "Utilized Flutter framework and Supabase for smooth development of mobile app, improving user experience for over 300 customers."
      ],
    },
    {
      title: "Angular Developer Intern",
      company_name: "iSolvRisk Inc",
      icon: isolvrisk, 
      iconBg: "#383E56",
      date: "March 2023 - September 2023",
      points: [
        "Engineered user-responsive Angular web application with Auth0 to notably improve UI accessibility and reduce login issues by 25%.",
        "Crafted and integrated new features for over 10 web pages using Angular, serving 100+ customers with diverse and varied needs.",
        "Spearheaded React-based web development project, incorporating music visualizer models to enhance user engagement by 15%."
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company_name: "Amino Capital",
      icon: amino, 
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Implemented LSTM neural networks for precise investment trend prediction, achieving 10% increase in portfolio performance targets.",
        "Utilized Latent Dirichlet Allocation for topic modeling, empowering decision-makers with representation of investment opportunities.",
        "Established data processing pipeline, handling over 30,000 articles with NLP-driven word embeddings for detailed sentiment analysis."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "HopeRun Software Co",
      icon: hoperun, 
      iconBg: "#383E56",
      date: "May 2021 - August 2021",
      points: [
        "Managed and optimized Maven and Spring Boot web application, significantly boosting user experience for over 1000 customers.",
        "Optimized MySQL database structures with schemas and stored procedures, achieving substantial 30% boost in code productivity.",
        "Leveraged Postman for validating endpoint integrity and optimizing code to strengthen application reliability and performance."
      ],
    }
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dynamic Environment Generation",
      description:
        "Pioneered inventive training solution for unconditioned data on conditional model with variational autoencoder and vector quantizer.",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
      ],
      image: architecture,
      source_code_link: "https://devpost.com/software/dynamic-environment-generation-in-classic-video-games",
    },
    {
      name: "Particle System",
      description:
        "Designed and implemented over 10 particle systems utilizing OpenGL and OpenCL to handle diverse textures and complex simulations.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
        {
          name: "OpenCL",
          color: "pink-text-gradient",
        },
      ],
      image: particle,
      source_code_link: "https://github.com/Erikwang317/CSCI1230_Final_Project",
    },
    {
      name: "Sentiment Analysis",
      description:
        "Established data processing pipeline, handling over 30,000 articles with NLP-driven word embeddings for detailed sentiment analysis.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Cloud",
          color: "pink-text-gradient",
        },
      ],
      image: perplexity,
      source_code_link: "https://github.com/Erikwang317/ARM_NewsAnalysis",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };