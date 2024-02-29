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
    brown,
    colgate,
    wardlaw,
    nwxl,
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
        "CSCI1230 Computer Graphics", 
        "DATA2060 Machine Learning: from Theory to Algorithms", 
        "CSCI2470 Deep Learning",
        "CSCI2340 Software Engineering",
      ],
    },
    {
      school_name: "Colgate University",
      degree: "B.A. in Computer Science and Economics with Calculus",
      icon: colgate,
      iconBg: "#E6DEDD",
      date: "September 2019 - May 2023",
      courses: [
        "COSC410 Machine Learning", 
        "COSC465 Computer Networks", 
        "COSC480 Data Visualization", 
        "COSC202 Data Structures and Algorithms", 
        "COSC290 Discrete Structures",
        "COSC208 Computer Systems",
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
      title: "Angular Developer",
      company_name: "iSolvRisk Inc",
      icon: isolvrisk,
      iconBg: "#383E56",
      date: "March 2023 - September 2023",
      points: [
        "Crafted new features and over 10 web pages utilizing the Angular framework for the company’s mobile/web \
        application, tailored to meet the diverse demands of 100+ customers.",
        "Engineered a responsive navigation system for a web application using TailwindCSS, enhancing the user \
        interface's accessibility, and contributing to a 25% increase in user engagement metrics.",
        "Developed a robust and secure user authentication system for a web application's login page using Auth0, \
        leading to a 30% reduction in login-related issues.",
        "Spearheaded the development of dynamic web pages by integrating React with music visualizer and 3D models, \
        resulting in a visually captivating user experience that significantly increased user engagement by 25%.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Amino Capital",
      icon: amino,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Implemented an advanced data extraction and analysis pipeline to capture and process over 30,000+ financial \
        articles from various news websites.",
        "Utilized cutting-edge Natural Language Processing techniques and machine learning models to identify emerging \
        investment trends, contributing significantly to a 5% increase in portfolio performance for targeted investments.",
        "Forged WordCloud figures to visually represent the top 20 highest-frequency keywords from websites, empowering \
        decision-makers with a succinct representation of promising investment opportunities.",
        "Conducted beta tests for developing-stage games and demonstrated profitability in the real market to management, \
        leading the company to achieve a revenue increase of over $16,000.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "HopeRun Software Co",
      icon: hoperun,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Furnished coding support to more than 10 group members on JDBC and SQL to maintain the functionality and \
        security of the company's website and data, resulting in a 30% increase in code efficiency.",
        "Managed communication channels between the department and 300+ clients, offering technical assistance on \
        website usage to enhance customer satisfaction.",
        "Reviewed financial records of the department and compiled reports on the annual budget allocation, \
        reallocating operation funds to the development departments that generate the highest return ratio.",
        "Collaborated with group members to develop a mobile app in WeChat that significantly enhanced the user \
        interface andsimplified access to online services, prompting an improved user experience for 1000+ customers.",
      ],
    },
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
      name: "Particle System",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/Erikwang317/CSCI1230_Final_Project",
    },
    {
      name: "News Analysis",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://github.com/Erikwang317/ARM_NewsAnalysis",
    },
    {
      name: "E-Commerce",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Erikwang317/e-commerce",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };