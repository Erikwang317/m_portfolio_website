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
    isolvrisk,
    amino,
    hoperun,
    brown,
    colgate,
    wardlaw,
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

  const educations = [
    {
      school_name: "Brown University",
      degree: "M.S. in Computer Science",
      icon: brown,
      iconBg: "#383E56",
      date: "September 2023 - May 2025",
      courses: [
        "CSCI1230 Computer Graphics", "DATA2060 Machine Learning: from Theory to Algorithms"
      ],
    },
    {
      school_name: "Colgate University",
      degree: "B.A. in Computer Science and Economics with Calculus",
      icon: colgate,
      iconBg: "#E6DEDD",
      date: "September 2019 - May 2023",
      courses: [
        "COSC410 Machine Learning", "COSC465 Computer Networks", "COSC480 Data Visualization", "COSC202 Data Structures and Algorithms", "COSC290 Discrete Structures",
      ],
    },
    {
      school_name: "Wardlaw+Hartridge School",
      degree: "High School",
      icon: wardlaw,
      iconBg: "#383E56",
      date: "September 2015 - May 2019",
      courses: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Updated and addressed errors related to logistic programming, guaranteeing delivery of high-quality \
        products that were responsive to different platforms.",
        "Partnered with backend developers, and formulated innovative solutions that eliminated more than 5 \
        redundant web pages and related routers.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Amino Capital",
      icon: amino,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Engineered a machine learning algorithm that extracted over 35,000 financial articles and leveraged \
        the LDA model to predict emerging investment trends, resulting in a 5% increase in the company's board investment return.",
        "Forged WordCloud figures to visually represent the top 20 highest-frequency keywords from websites, \
        empowering decision-makers with a succinct representation of promising investment opportunities.",
        "Conducted beta tests for developing-stage games and demonstrated profitability in the real market to \
        management, leading the company to achieve a revenue increase of over $16,000.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "HopeRun Software Co",
      icon: hoperun,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, educations, experiences, testimonials, projects };