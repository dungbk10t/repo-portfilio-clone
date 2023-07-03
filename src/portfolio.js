/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dung Pham's Portfolio",
  description:
    "I'm a software developer with expertise in OOP, DS, algos, and app dev across web, mobile, and desktop. Skilled in coding, testing, debugging, and motivated to learn.",
  og: {
    title: "Dung Pham Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Dung Pham",
  logo_name: "Dung Pham",
  nickname: "dungbk10t",
  subTitle:
  "I'm a software developer with expertise in OOP, DS, algos, and app dev across web, mobile, and desktop. Skilled in coding, testing, debugging, and motivated to learn.",
  resumeLink:
    "https://husteduvn-my.sharepoint.com/:b:/g/personal/dung_pt176728_sis_hust_edu_vn/EROi-8irWwBPhkKBdEIFX3oBXAFAfNItgYigUxNw10z2Ag?e=6cdX4i",
  portfolio_repository: "https://github.com/dungbk10t.github.io",
  githubProfile: "https://github.com/dungbk10t",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dungbk10t",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/phtuandung20176728/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:phutuandung.work@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/phtuandung1802",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

// const skills = {
//   data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//         {
//           skillName: "Deeplearning",
//           imageSrc: "deeplearning_ai_logo.png",
//         },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//         {
//           skillName: "HTML5",
//           fontAwesomeClassname: "simple-icons:html5",
//           style: {
//             color: "#E34F26",
//           },
//         },
//         {
//           skillName: "CSS3",
//           fontAwesomeClassname: "fa-css3",
//           style: {
//             color: "#1572B6",
//           },
//         },
//         {
//           skillName: "Sass",
//           fontAwesomeClassname: "simple-icons:sass",
//           style: {
//             color: "#CC6699",
//           },
//         },
//         {
//           skillName: "JavaScript",
//           fontAwesomeClassname: "simple-icons:javascript",
//           style: {
//             backgroundColor: "#000000",
//             color: "#F7DF1E",
//           },
//         },
//         {
//           skillName: "ReactJS",
//           fontAwesomeClassname: "simple-icons:react",
//           style: {
//             color: "#61DAFB",
//           },
//         },
//         {
//           skillName: "NodeJS",
//           fontAwesomeClassname: "simple-icons:node-dot-js",
//           style: {
//             color: "#339933",
//           },
//         },
//         {
//           skillName: "NPM",
//           fontAwesomeClassname: "simple-icons:npm",
//           style: {
//             color: "#CB3837",
//           },
//         },
//         {
//           skillName: "Yarn",
//           fontAwesomeClassname: "simple-icons:yarn",
//           style: {
//             color: "#2C8EBB",
//           },
//         },
//         {
//           skillName: "Gatsby",
//           fontAwesomeClassname: "simple-icons:gatsby",
//           style: {
//             color: "#663399",
//           },
//         },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
//     {
//       title: "UI/UX Design",
//       fileName: "DesignImg",
//       skills: [
//         "⚡ Designing highly attractive user interface for mobile and web applications",
//         "⚡ Customizing logo designs and building logos from scratch",
//         "⚡ Creating the flow of application functionalities to optimize user experience",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Adobe XD",
//           fontAwesomeClassname: "simple-icons:adobexd",
//           style: {
//             color: "#FF2BC2",
//           },
//         },
//         {
//           skillName: "Figma",
//           fontAwesomeClassname: "simple-icons:figma",
//           style: {
//             color: "#F24E1E",
//           },
//         },
//         {
//           skillName: "Adobe Illustrator",
//           fontAwesomeClassname: "simple-icons:adobeillustrator",
//           style: {
//             color: "#FF7C00",
//           },
//         },
//         {
//           skillName: "Inkscape",
//           fontAwesomeClassname: "simple-icons:inkscape",
//           style: {
//             color: "#000000",
//           },
//         },
//       ],
//     },
//   ],
// };

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/dungpt176728/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dungbk10t?hr_r=1",
    },
    {
      siteName: "Stackoverflow",
      iconifyClassname: "simple-icons:stackoverflow",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://stackoverflow.com/users/15194732/dung-pham",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/dungbk10t",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hanoi University of Science and Technology, Vietnam",
      subtitle: "Information Specialist, HEDPSI ELITECH Program",
      logo_path: "logo_hust.png",
      alt_name: "HUST",
      duration: "Aug 2017 - Sep 2022",
      descriptions: [
        "⚡ I have studied Japanese and basic Software Engineering subjects like Data structures and algorithms, OOP, Operating System, Discrete Math, Network Programming, Computer System, Programming System, Distributed System, etc.",
        "⚡ Apart from this, I have done courses on Fullstack Web, System Design, DevOps, Machine Learning, Deep Learning etc.",
        "⚡ I am a lifelong learner and I am always looking for new challenges. Joining the Japanese Club at university was a great way for me to improve my Japanese language skills and to learn more about Japanese culture. I also enjoyed sharing my knowledge and passion for Japanese culture with others.",
      ],
      website_link: "https://soict.hust.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "2021 Summer Business Japanese Special Course",
      subtitle: "Tokyo University",
      logo_path: "logo_tokyo_university.png",
      certificate_link:
          "",
      alt_name: "Tokyo University",
      color_code: "#b1c9f0",
    },
    {
      title: "IBM Full Stack Software Developer Professional Certificate",
      subtitle: "Ramesh Sannareddy",
      logo_path: "ibm_logo.png",
      certificate_link:
          "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "IBM DevOps and Software Engineering Professional Certificate\n",
      subtitle: "John Rofrano",
      logo_path: "ibm_logo.png",
      certificate_link:
          "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Structures and Algorithms Specialization",
      subtitle: "Pavel Pevzner",
      logo_path: "coursera_logo.png",
      certificate_link:
          "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Meta Back-End Developer Professional Certificate",
      subtitle: "Meta Staff",
      logo_path: "logo_squre_meta.png",
      certificate_link:
          "",
      alt_name: "Meta",
      color_code: "#f5f5f5",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      subtitle: "Meta Staff",
      logo_path: "logo_squre_meta.png",
      certificate_link:
          "",
      alt_name: "Meta",
      color_code: "#f5f5f5",
    },
    {
      title: "Microsoft Certified: Power Platform Developer Associate",
      subtitle: "Microsoft",
      logo_path: "logo_microsoft_certified_associate_badge.png",
      certificate_link:
          "",
      alt_name: "Microsoft",
      color_code: "#0078D7",
    },
    {
      title: "Microsoft Certified: Power Platform App Maker Associate",
      subtitle: "Microsoft",
      logo_path: "logo_microsoft_certified_associate_badge.png",
      certificate_link:
          "",
      alt_name: "Microsoft",
      color_code: "#0078D7",
    },
    {
      title: "Microsoft 365 Certified: Teams Application Developer Associate",
      subtitle: "Microsoft",
      logo_path: "logo_microsoft_certified_associate_badge.png",
      certificate_link:
          "",
      alt_name: "Microsoft",
      color_code: "#0078D7",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "Kubernetes",
      logo_path: "logo_kubernetes_certificate.png",
      certificate_link:
          "",
      alt_name: "Kubernetes",
      color_code: "#F2F8FC",
    },
    {
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      subtitle: "Kubernetes",
      logo_path: "logo_kubernetes_certificate.png",
      certificate_link:
          "",
      alt_name: "Kubernetes",
      color_code: "#F2F8FC",
    },
    {
      title: "AWS Certified Solutions Architect – Associate Certification",
      subtitle: "AWS",
      logo_path: "aws_certification.png",
      certificate_link:
          "",
      alt_name: "AWS",
      color_code: "#42A5F5",
    },
    {
      title: "JLPT N2",
      subtitle: "JLPT",
      logo_path: "logo_JLPT_N2.png",
      certificate_link:
          "",
      alt_name: "JLPT",
      color_code: "#F4AAAB",
    },
    {
      title: "TOEIC",
      subtitle: "TOEIC",
      logo_path: "logo_toeic.png",
      certificate_link:
          "",
      alt_name: "TOEIC",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a software engineer, I have gained valuable experience in various roles, including developer, designer, and software architect, working with both evolving startups and established companies. Additionally, my passion for organizing events has led me to contribute as a representative in multiple open-source communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "One mount",
          company_url: "https://onemount.com/",
          logo_path: "logo_onemount.png",
          duration: "Jul 2022 - Jan 2023",
          location: "Hanoi, Vietnam",
          description:
              [
                "⚡ Developed and maintained high-quality Golang code for Vinshop e-grocery platform.",
                "⚡ Build APIs for Voucher, Promotion, Product, Newsfeed, an other features on Vinshop's platform.",
                "⚡ Contribute ideas and solutions to the team, coordinate with PO and QA for bug fixing, documentation, and feature deployment.",
                "⚡ Stay updated on emerging trends in software development.",
                "⚡ Supported senior implements ”Hack2Hire” hackathon contest by project installation checking, error checking, and appropriate time estimation.",
              ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "MISA JSC.",
          company_url: "https://www.misa.vn/cong-ty/",
          logo_path: "logo_misa.png",
          duration: "Jun 2021 - Sep 2021",
          location: "Hanoi, Vietnam",
          description: [
                "⚡ Developed a human resource management website using ASP.NET MVC and Clean Architecture principles.",
                "⚡ Developed a human resource management website using ASP.NET MVC and Clean Architecture principles.",
                "⚡ Participated in code reviews and collaborated with team to ensure code quality and project completion.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Hack2Hire",
          company: "One mount",
          company_url: "https://onemount.com/",
          logo_path: "logo_hack2hire.png",
          duration: "Sep 2022",
          location: "Hanoi, Vietnam",
          description:
            "Supported senior implements ”Hack2Hire” hackathon contest by project installation checking, error checking, and appropriate time estimation.",
          color: "#4285F4",
        },
        {
          title: "Shopee Engineering Talk: Software Performance Engineering",
          company: "Shopee",
          company_url: "https://shopee.vn/",
          logo_path: "logo_shopee.png",
          duration: "April 2023",
          location: "Online, Zoom",
          description:
          [
              "⚡ Basics of Software Performance and its importance to a system serving millions of users.",
              "⚡ Factors affecting Software Performance.",
              "⚡ Solutions to evaluate and improve performance at Shopee VN.",
              "⚡ Difficulties in performance improvement and how Shopee has overcome.",
          ],
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects were primarily in the dynamic field of software development, where I gained valuable experience in designing and implementing innovative solutions.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar_PTD.png",
    description:
      "I am available on various social media platforms. Feel free to message me, and I will respond within 24 hours. As a Software Engineer, I specialize in areas such as software development, coding, and system architecture."
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Hoang Mai, Ha Noi, Viet Nam",
    locality: "Ha Noi",
    country: "VN",
    region: "SEA",
    postalCode: "385520",
    streetAddress: "Hoang Mai",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VycmpgJZhNQxwbbH9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  // skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
