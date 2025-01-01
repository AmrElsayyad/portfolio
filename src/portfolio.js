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
    "A skilled software engineer with a diverse technical background, including proficiency in various languages and a strong foundation in backend development. He has experience in building software solutions, interactive applications, and integrating third-party services."
  ),
  resumeLink:
    "https://drive.google.com/u/1/uc?id=1d3ZI-UgsQIrGdDxhEyf_JyzJPl2jZIeW&export=download", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
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
    "CRAZY SOFTWARE ENGINEER WHO LOVES TO EXPLORE DIFFERENT TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop software solutions with a focus on backend development using Java, Python, C / C++20 and JavaScript"
    ),
    emoji(
      "⚡ Build interactive front-end applications with JavaScript frameworks like ReactJS and Angular"
    ),
    emoji(
      "⚡ Implement and integrate third-party services and solutions for efficient software development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      subHeader: "AI Diploma",
      duration: "November 2021 - August 2022",
      descBullets: [
        "Applied Data Engineering concepts to real-world data.",
        "Utilized Spark & PySpark for Big Data and Machine Learning.",
        "Applied Linear Algebra, Statistics, and Numerical Optimization concepts for DS and ML.",
        "Developed AI applications using C++, Java, and Python."
      ]
    },
    {
      schoolName: "October 6 University (O6U)",
      logo: require("./assets/images/o6uLogo.png"),
      subHeader: "B.Sc. in Mechatronics Engineering",
      duration: "September 2014 - August 2019",
      desc: "GPA: 3.59 / 4.0 (Equivalent to Excellent).",
      descBullets: [
        "Graduation Project: Thermosyphon Water Purification System.",
        "Key Courses: Mathematics, Physics, Introduction to Computers, Production Technology, Mechanics, Thermodynamics, Stress Analysis, Electro-Magnetic Field, Logic Design, Engineering Analysis Methods, Electronics Circuit, Computer Aided Design, Power Electronics, Micro-Controller, Mechatronics Systems Design, Robotics, Principles of Scientific Thinking, Modeling and Simulation of Mechanical Systems, Artificial Intelligence."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
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
      date: "December 2024 – Present"
    },
    {
      role: "Software Engineer",
      company: "Orange Innovation Egypt",
      companylogo: require("./assets/images/orangeLogo.png"),
      date: "March 2023 – December 2024",
      descBullets: [
        "Contributed to Open5GS, a C-language Open-Source implementation for 5G Core and EPC, implementing cutting edge solutions such as VoWiFi and LBO.",
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
        "Represented the cybersecurity department in Egypt and supervised the IEC-62443-2-4 certification for industrial automation security.",
        "Designed the system architecture for a 5M$ project.",
        "Designed and implemented industrial automation solutions using Foxboro DCS, and Triconex SIS for various clients and sectors.",
        "Supervised the assembly, testing, delivery, and maintenance of projects."
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
  title: "Big Projects",
  subtitle: "SOME BIG PROJECTS I CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/open5gsLogo.png"), // Add your project image
      projectName: "Open5GS",
      projectDesc:
        "Enabled users to make and receive voice calls over Wi-Fi networks using SIM mobile numbers, ensuring smooth handover between Wi-Fi and LTE.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://open5gs.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/magmaLogo.png"), // Add your project image
      projectName: "Magma",
      projectDesc:
        "Added support for selecting the default APN per subscriber in Magma.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://magma.github.io/magma/"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
