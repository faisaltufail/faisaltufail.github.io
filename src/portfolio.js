/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "faisal Tufail",
  title: "Hi all, I'm FaisalTufail",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / devops ,and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pL1AlFVVE-Fy4eSV8PWnWYdfxLZxoJK9/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/faisaltufail",
  linkedin: "https://www.linkedin.com/in/faisaltufail/",
  gmail: "fasiirajpoot6007@gmail.com",
  gitlab: "https://gitlab.com/faisaltufail",
  facebook: "https://www.facebook.com/fasiirajpoot007",
  medium: "https://medium.com/@fasiirajpoot6007",
  stackoverflow: "https://stackoverflow.com/users/12461188/fasii-rajpoot",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Deploment Automation, Version control ,Configuration Management , Containers,Monitoring and analytics,Testing and Cloud Quality tool"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
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
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
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
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    ,
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
    ,
    {
      skillName: "CentOS",
      fontAwesomeClassname: "fab fa-centos"
    },
    {
      skillName: "Google Clouds",
      fontAwesomeClassname: "fab fa-google clouds"
    },
    {
      skillName: "Raspberry pi ",
      fontAwesomeClassname: "fab fa-raspberrypi "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Government College University Faisalabad",
      logo: require("./assets/images/gcuf.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2016 - April 2020",
     
    
    },
    {
      schoolName: "City College of Science & Commerce Multan",
      logo: require("./assets/images/college.png"),
      subHeader: "FSC",
      duration: "September 2014 - April 2016",
     
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
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "System Administraor  ",
      company: "Emintechs",
      companylogo: require("./assets/images/emintechs.png"),
      date: "Dec 2020 – Present",
      desc:
        "working on  System Administraor , Android development,Python tkinter and Windows IOT core.",
      descBullets: [
        "Devops",
        "Web"
      ]
    },
    {
      role: " Android Developer Intern",
      company: "Digicon-Velly",
      companylogo: require("./assets/images/digiconvelly.jpg"),
      date: "NOV 2019 – Mar 2020",
      desc:
        "introduction of Android application developement."
    },
   
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
      projectName: "NextCloud",
      projectDesc: "open source cloud base Managment system",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextcloud.lent.pk/"
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "E-Commerce Management",
      subtitle:
        "DigiSkill E-Commerce Management .",
      image: require("./assets/images/digiskill.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1oeWSoevTwU4_8X6FujLEOgxnlLTKSMFx/view?usp=sharing"
        } 
      ]
    },
    {
      title: "ARTIFICIAL INTELLIGENCE",
      subtitle:
        "ARTIFICIAL INTELLIGENCE ",
      image: require("./assets/images/ai.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1Bn7wxOPX2L8GVWxzV_mWcwfGDJ_89Lm4/view?usp=sharing"
        }
      ]
    },

    {
      title: "COMPUTER PROGRAMMING FOR EVERYONE",
      subtitle: "Completed Certifcation from UNIVERSITY OF LEEDS AND INSTITUTE OF CODING",
      image: require("./assets/images/code.webp"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Bxm534xkfhTRszbwm9hdKEieGBa5tlZQ/view?usp=sharing/"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://www.facebook.com/TEKOtechnique",
      title: "TEK O",
      description:
        "A one-stop channel for all the latest updates and information about tech. Anything and everything from the world of technology is right here at TEK O."
    },
    {
      url: "https://www.youtube.com/channel/UChDu_ZMKX7WFgCTVsAJLVJA/featured",
      title: "MY YOUTUBE Channal for Techs",
      description:
        "TEK o is famous tech channal nowdays cheak out"
    },

    {
      url: "https://www.instagram.com/islam_study_online/",
      title: "Islam Study Online ",
      description:
        "Learn Quran Anytime & Anywhere For Kids or Adults"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "TEK O",
      subtitle: "TEK O Page for Technologies",
      profile_url: "https://www.facebook.com/fasiirajpoot007/",
      event_url: "https://www.facebook.com/TEKOtechnique/"
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3451666007",
  email_address: "fasiirajpoot6007@gmail.com",
  
};

// Twitter Section

const twitterDetails = {
  userName: "heart_hecker007", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
