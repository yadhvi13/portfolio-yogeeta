// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import gsoc from './assets/company_logo/gsoc_logo.jpg';
import dean from './assets/company_logo/Dean_list.jpg';
import codec from './assets/company_logo/codec.jpg';

// Education Section Logo's
import college from './assets/education_logo/college.png';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import studyway from './assets/work_logo/studyway.png';
import spotify from './assets/work_logo/spotify.png';
import caretooth from './assets/work_logo/CareTooth.png';
import task from './assets/work_logo/task.png';
import codehelp from './assets/work_logo/codehelp.png';
import portfolio from './assets/work_logo/portfolio.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gsoc,
      role: "Tech Contributor",
      company: "GirlScript Summer of Code",
      date: "August 2025 - Octorber 2025",
      desc: "Contributed to dynamic and scalable web applications using the React stack, handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: dean,
      role: "Dean's List Achiever",
      company: "Manav Rachna University",
      date: "August 2024 - December 2024",
      desc: "Demonstrated strong academic excellence through high performance in third semester, achieving an outstanding CGPA of 9.26. Earned recognition on the Dean’s List as a result of disciplined study habits, strong conceptual understanding, and a commitment to academic rigor.",
      skills: [
        "DBMS",
        "OOPS",
        "DE",
        "SE",
      ],
    },
    {
      id: 2,
      img: codec,
      role: "MERN Stack Intern",
      company: "Codec Technologies",
      date: "June 2025 - August 2025",
      desc: "Worked as a MERN Stack Developer at Codec Technologies, contributing to the development of scalable web applications using MongoDB, Express.js, React.js, and Node.js. Built responsive user interfaces with React, integrated RESTful APIs, and collaborated with cross-functional teams in an agile development environment to optimize performance and deliver reliable solutions.",
      skills: [
        "React JS",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "Node JS",
        "Express JS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: college,
      school: "Manav Rachna University, Faridabad",
      date: "Aug 2023 - July 2027",
      grade: "8.83 CGPA (Till 6th Sem)",
      desc: "I am completing my Bachelor's degree in Computer Science (B.Tech) from Manav Rachna University, Faridabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Manav Rachna University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - (Computer Science)",
    },
    {
      id: 2,
      img: school,
      school: "Sarvodaya Kanya Vidyalaya, Delhi",
      date: "Apr 2022 - March 2023",
      desc: "I completed my class 12 education from Sarvodaya Kanya Vidyalaya, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: school,
      school: "Sarvodaya Kanya Vidyalaya, Delhi",
      date: "Apr 2020 - March 2021",
      desc: "I completed my class 10 education from Sarvodaya Kanya Vidyalaya, Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Study Way - UI/UX Design",
      description:
        "Designed and developed a modern, user-friendly educational website focused on seamless learning experiences using HTML, CSS, and Vanilla JavaScript. Built an intuitive and responsive UI with clear visual hierarchy, smooth navigation, and engaging layouts to enhance usability for learners of all ages. Emphasized simplicity, accessibility, and performance by avoiding heavy frameworks while delivering a polished, professional interface aligned with modern UI/UX principles.",
      image: studyway,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yadhvi13/StudyWay",
      webapp: "https://study-way.vercel.app/",
    },
    {
      id: 1,
      title: "Spotify - UI Clone ",
      description:
        "Developed a Spotify-inspired music streaming application with a strong emphasis on modern UI/UX and user experience using React.js.Implemented secure authentication and user management with Clerk, and integrated MongoDB for scalable data storage of users, songs, and albums. Designed user-friendly interface using shadcn/ui and Lucide React icons for consistent visuals and accessibility. Enabled real-time user interaction by allowing listeners to chat with other active users, enhancing community engagement.",
      image: spotify,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "tailwind CSS", "TypeScript"],
      github: "https://github.com/yadhvi13/Spotify-UI-Clone",
      webapp: "https://spotify-ui-clone-ngs9.onrender.com/",
    },
    {
      id: 2,
      title: "CareTooth UI- An AI powered ",
      description:
        "Designed an AI-powered platform with a strong focus on modern UI/UX and frontend experience. Developed using Next.js, ensuring fast performance, smooth navigation, and a scalable architecture,A clean design using Tailwind CSS and shadcn/ui, allowing the interface to feel minimal and user-friendly. Authentication and user management are handled securely through Clerk, providing seamless sign-in and protected user flows.",
      image: caretooth,
      tags: ["Next JS", "TailwindCSS", "Clerk", "Luicide React", "Shadcn"],
      github: "https://github.com/yadhvi13/caretooth",
      webapp: "",
    },
    {
      id: 3,
      title: "CodeHelp UI - Website Clone",
      description:
        "UI Clone of CodeHelp platform by Love Babbar using pure HTML, CSS, and JavaScript, focusing strongly on UI/UX precision and smooth animations. Recreated the dark-themed interface, navigation flow, hero section, and course showcase to closely resemble the original platform.Ensured responsive design, clean layouts, and fast performance without using any frameworks, demonstrating strong fundamentals in frontend development and motion-driven UI design.",
      image: codehelp,
      tags: ["HTML", "CSS", "Vanilla JS"],
      github: "https://github.com/yadhvi13/CodeHelp-2.0",
      webapp: "https://code-help-2-0.vercel.app/",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "Developed a responsive and interactive portfolio using React.js, Tailwind CSS, and GSAP, implementing smooth animations and modern glassmorphism design to enhance user experience and visual appeal.The project highlights my passion for creating high-quality web interfaces and dynamic user experiences using modern front-end technologies.",
      image: portfolio ,
      tags: ["React JS", "GSAP", "TailwindCSS", "Animation"],
      github: "https://github.com/yadhvi13/portfolio-yogeeta",
      webapp: "https://portfolio-yogeeta.vercel.app/",
    },
    {
      id: 5,
      title: "Task Manager",
      description:
        "Simple yet premium task manager built using React. It allows users to easily create, add, and delete tasks through a smooth and intuitive interface. Designed UI with both dark and light themes, giving users the flexibility to switch based on their preference. Clean layouts, subtle animations to an enjoyable task management experience without unnecessary complexity.",
      image: task,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/yadhvi13/Task-Manager",
      webapp: "https://task-manager-git-main-yogeetas-projects.vercel.app/",
    },
  ];  