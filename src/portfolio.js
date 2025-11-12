// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amr Elsayyad",
  title: "Hi, I'm Amr Elsayyad",
  subTitle: emoji(
    "A passionate Software Engineer with experience in backend development, DevOps, and machine learning. Specialized in Java, Python, C/C++, and cloud technologies with a proven track record in telecommunications, industrial automation, and AI solutions."
  ),
  resumeLink:
    "https://drive.google.com/u/1/uc?id=1d3ZI-UgsQIrGdDxhEyf_JyzJPl2jZIeW&export=download", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaboration or have an exciting opportunity? Let's connect and discuss how we can work together!",
  number: "+20 106 460 4548",
  email_address: "amrelsayyad96@outlook.com"
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AmrElsayyad",
  linkedin: "https://www.linkedin.com/in/AmrElsayyad/",
  mail: contactInfo.email_address,
  gitlab: "https://gitlab.com/amrelsayyad",
  medium: "https://medium.com/@AmrElsayyad",
  stackoverflow: "https://stackoverflow.com/users/15553044/amr-elsayyad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE SOFTWARE ENGINEER WHO LOVES TO EXPLORE CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop robust backend systems and microservices using Java, Python, C/C++, and modern frameworks like Spring Boot and Django"
    ),
    emoji(
      "⚡ Build scalable cloud-native applications with Docker, Kubernetes, and CI/CD pipelines"
    ),
    emoji(
      "⚡ Design and implement machine learning solutions and data engineering pipelines"
    ),
    emoji(
      "⚡ Architect secure industrial automation systems and contribute to open-source projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "devicon-python-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "devicon-spring-plain"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "devicon-angularjs-plain"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "devicon-react-original"
    },
    {
      skillName: "MS SQL Server",
      fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "devicon-apachekafka-original"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-fan"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "devicon-docker-plain"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "devicon-kubernetes-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "devicon-linux-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Information Technology Institute (ITI)",
      logo: require("./assets/images/itiLogo.png"),
      subHeader: "Artificial Intelligence Diploma",
      duration: "November 2021 - August 2022",
      desc: "Intensive 9-month program focusing on cutting-edge AI technologies and practical applications.",
      descBullets: [
        "Applied Data Engineering concepts to real-world data using Apache Spark, and modern ETL pipelines",
        "Utilized Apache Spark & PySpark for Big Data processing and Machine Learning at scale",
        "Applied Linear Algebra, Statistics, and Numerical Optimization concepts for Data Science and Machine Learning",
        "Developed AI applications using C++, Java, and Python",
        "Implemented end-to-end machine learning projects from data collection to model deployment"
      ]
    },
    {
      schoolName: "October 6 University (O6U)",
      logo: require("./assets/images/o6uLogo.png"),
      subHeader: "Bachelor of Science in Mechatronics Engineering",
      duration: "September 2014 - August 2019",
      desc: "GPA: 3.59 / 4.0 (Equivalent to Excellent).",
      descBullets: [
        "Graduation Project: Thermosyphon Water Purification System - Designed and implemented an innovative water purification system",
        "Core Engineering Courses: Advanced Mathematics, Physics, Thermodynamics, Stress Analysis, Electromagnetic Fields",
        "Programming & Control Systems: Introduction to Computers, Logic Design, Microcontrollers, Robotics, Artificial Intelligence",
        "Design & Analysis: Computer Aided Design (CAD), Engineering Analysis Methods, Modeling and Simulation of Mechanical Systems",
        "Electronics & Power: Electronics Circuits, Power Electronics, Mechatronics Systems Design",
        "Leadership & Research: Principles of Scientific Thinking, Production Technology, Project Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & Cloud",
      progressPercentage: "80%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer – Machine Learning",
      company: "Giza Systems",
      companylogo: require("./assets/images/gizaSystemsLogo.png"),
      date: "December 2024 – Present",
      descBullets: [
        "Worked on big data processing and analytics using Apache Kafka for real-time data streaming",
        "Developed backend systems using Django framework for web applications",
        "Implemented DevOps practices using Azure DevOps for CI/CD pipeline management",
        "Worked with ArgoCD for GitOps and continuous deployment automation",
        "Utilized HashiCorp Vault for secrets management and security",
        "Integrated Keycloak for identity and access management solutions",
        "Designed and developed Apache Airflow DAGs to automate the backup, archiving, and report generation of ClickHouse and PostgreSQL databases to MinIO object storage."
      ]
    },
    {
      role: "Software Engineer",
      company: "Orange Innovation Egypt",
      companylogo: require("./assets/images/orangeLogo.png"),
      date: "March 2023 – December 2024",
      descBullets: [
        "Contributed to Open5GS, a C-language Open-Source implementation for 5G Core and EPC, implementing cutting edge solutions such as VoWiFi and Local Breakout (LBO) for roaming.",
        "Contributed to Magma, a C, C++, Python, and Go Open-Source mobile core network solution, improving the usability of the software platform.",
        "Contributed to SONiC, an Open-Source Network Operating System (NOS) based on Linux that runs on switches from multiple vendors and ASICs, improving security features.",
        "Contributed to a web UI for a Network Services Orchestrator (NSO) project using Vaadin, a Full-Stack Java Platform for Building Modern Web Apps.",
        "Designed and implemented an inventory management system for the company."
      ]
    },
    {
      role: "Industrial Automation Engineer",
      company: "Schneider Electric Systems Egypt",
      companylogo: require("./assets/images/schneiderLogo.png"),
      date: "March 2020 – November 2021",
      descBullets: [
        "Represented the cybersecurity department in Egypt and supervised the IEC-62443-2-4 certification for industrial automation security",
        "Designed the system architecture for a 5M$ project involving complex industrial control systems",
        "Designed and implemented industrial automation solutions using Foxboro DCS, and Triconex SIS for various clients and sectors",
        "Supervised the assembly, testing, delivery, and maintenance of projects ensuring high quality standards",
        "Implemented security protocols and best practices for industrial control systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "PROJECTS AND OPEN-SOURCE CONTRIBUTIONS",
  projects: [
    {
      image: require("./assets/images/open5gsLogo.png"),
      projectName: "Open5GS",
      projectDesc:
        "Implemented Voice over Wi-Fi (VoWiFi) functionality in Open5GS, enabling users to make and receive voice calls over Wi-Fi networks using SIM mobile numbers with seamless handover between Wi-Fi and LTE networks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://open5gs.org/"
        },
        {
          name: "GitHub",
          url: "https://github.com/open5gs/open5gs"
        }
      ]
    },
    {
      image: require("./assets/images/magmaLogo.png"),
      projectName: "Magma",
      projectDesc:
        "Enhanced Magma core network platform by adding support for selecting default APN (Access Point Name) per subscriber, improving network configuration flexibility and user experience.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://magma.github.io/magma/"
        },
        {
          name: "GitHub",
          url: "https://github.com/magma/magma"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications, achievements, and recognitions in software engineering and cybersecurity!",

  achievementsCards: [
    {
      title: "IEC-62443-2-4 Cybersecurity Certification",
      subtitle:
        "Led the supervision and implementation of IEC-62443-2-4 cybersecurity standards for industrial automation systems at Schneider Electric.",
      image: require("./assets/images/schneiderLogo.png"),
      imageAlt: "Schneider Electric Logo",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.se.com/ww/en/work/solutions/cybersecurity/industrial-cybersecurity.jsp"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@AmrElsayyad/mastering-data-visualization-the-ultimate-guide-to-choosing-the-right-plot-for-your-data-386ba91f5f38",
      title:
        "Mastering Data Visualization: The Ultimate Guide to Choosing the Right Plot for Your Data",
      description: "A plot tells a thousand words, they say."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "amrelsayyad96", //Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
