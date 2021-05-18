/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Brandon Hexsel",
  title: "Hi, I'm Brandon",
  subTitle: emoji(
    "Full Stack Software Developer 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/15vhtL7V_olH-Bt-SpO3Ixh2QNTBYZxUX/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/b-hexsoul",
  linkedin: "https://www.linkedin.com/in/bhexsel/",
  gmail: "brandon.hexsel@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXCITED TO LEARN EVERYDAY",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces"
    ),
    emoji("⚡ Backend experience with Node/Express, MongoDB, and SQL"),
    emoji(
      "⚡ Integration of third party services such as Firebase & AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington Fullstack Bootcamp",
      logo: require("./assets/images/uw-logo.png"),
      subHeader: "Certification",
      duration: "August 2020 - February 2021",
      desc: "Over 500 hours of study with 3 group projects",
    },
    {
      schoolName: "Seattle University",
      logo: require("./assets/images/su-logo.png"),
      subHeader: "Bachelor of Arts in Business Administration - Finance",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
      role: "Software Engineer Intern",
      company: "Hudello",
      companylogo: require("./assets/images/hudello-logo.png"),
      date: "April 2021 – Present",
      descBullets: [
        "Utilize react hooks and react context for the user onboarding process with IndexedDB (dexie) to maintain state",
        "Next.js framework with firebase user authentication. Query collections and documents in the firestore database.",
        "Research and implement service-worker prototype with firecloud messaging for push notifications"
      ]
    },
    {
      role: "Registered Nurse",
      company: "University of Washington",
      companylogo: require("./assets/images/uw-logo.png"),
      date: "Feb 2018 – Present",
      desc:
        "Communicate to establish trust and solve problems with colleagues, medical team, and parents. Establish trust with parents through empathetic communication and teaching appropriate techniques to care for their critically ill infant. Utilize critical thinking to manage patient care and respond to emergent situations with appropriate interventions."
    },
    {
      role: "Finance Analyst",
      company: "Expedia Group",
      companylogo: require("./assets/images/expedia-logo.png"),
      date: "Jun 2014 – Aug 2017",
      descBullets: [
        "Collaborated with the business to analyze existing programs and assist in identifying opportunities for improvement in process, customer experience, and profitability growth.",
        "Communicated effectively with business partners to develop financial forecasts and annual budgets; identified and communicated plans’ risks and opportunities; and supported headcount planning process."
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
  title: "Group Projects",
  subtitle: "BOOTCAMP GROUP PROJECTS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      image: require("./assets/images/aws-logo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.credly.com/badges/46bcf596-ed87-4b06-a559-2e503e66c595/public_url"
        },
      ]
    },
    {
      title: "MITx Intro to Computer Science & Programming",
      image: require("./assets/images/mitx.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://courses.edx.org/certificates/6e58fd9d13d84ad6b014e208d445f780"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Click links below",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
};
