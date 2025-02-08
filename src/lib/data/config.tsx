import {
  Box,
  BrainCircuit,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
} from "lucide-react";
import LinguaLink from '@/lib/data/logos/LinguaLink.png'
import GridForge from "@/lib/data/logos/GridForge.png"

export const UserData = {
  name: "Mohammad",
  lastname: "Yehya",
  profession: 'Software Developer | Machine Learning Engineer',
  about:
    "I'm a developer who lives in Pakistan. I love learning and using different technologies. Currently, I'm working on a project with Toyota which involves context-aware anomaly detection, computer vision, and sequence verification.",
  github: "https://github.com/MohammadYehya",
  linkedin: "https://www.linkedin.com/in/mohammad-yehya/",
}
export const MySkills = {
  name: "Skills",
  icon: <BrainCircuit className="scale-[60%]" />,
  href: "/Skills",
  content: [
    {
      group: "Programming Languages",
      content: [
        { name: "C", imgpath: "", proficiency: 1 },
        { name: "C++", imgpath: "", proficiency: 1 },
        { name: "C#", imgpath: "", proficiency: 1 },
        { name: "Python", imgpath: "", proficiency: 1 },
        { name: "Rust", imgpath: "", proficiency: 1 },
        { name: "Javascript", imgpath: "", proficiency: 1 },
        { name: "Typescript", imgpath: "", proficiency: 1 },
        { name: "Assembly Script", imgpath: "", proficiency: 1 },
        { name: "Shell Script", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "Scripting & Markup",
      content: [
        { name: "LaTeX", imgpath: "", proficiency: 1 },
        {name: "Markdown", imgpath:'', proficiency:1},
        {name: "Yaml", imgpath:'', proficiency:1},
      ],
    },
    {
      group: "Frontend Development",
      content: [
        { name: "HTML5", imgpath: "", proficiency: 1 },
        { name: "CSS3", imgpath: "", proficiency: 1 },
        { name: "Bootstrap", imgpath: "", proficiency: 1 },
        { name: "Blazor", imgpath: "", proficiency: 1 },
        { name: "React", imgpath: "", proficiency: 1 },
        { name: "NextJS", imgpath: "", proficiency: 1 },
        { name: "TailwindCSS", imgpath: "", proficiency: 1 },
        { name: "ShadCN/UI", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "Backend Development",
      content: [
        { name: "FastAPI", imgpath: "", proficiency: 1 },
        { name: "NodeJS", imgpath: "", proficiency: 1 },
        { name: "ExpressJS", imgpath: "", proficiency: 1 },
        { name: ".NET", imgpath: "", proficiency: 1 },
        { name: "Socket.IO", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "DevOps & Cloud",
      content: [
        { name: "Azure", imgpath: "", proficiency: 1 },
        { name: "Google Cloud", imgpath: "", proficiency: 1 },
        { name: "Github Pages", imgpath: "", proficiency: 1 },
        { name: "Github Actions", imgpath: "", proficiency: 1 },
        { name: "Firebase", imgpath: "", proficiency: 1 },
        { name: "Docker", imgpath: "", proficiency: 1 },
        { name: "Vercel", imgpath: "", proficiency: 1 },
        { name: "Nginx", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "Databases",
      content: [
        { name: "MongoDB", imgpath: "", proficiency: 1 },
        { name: "PostgreSQL", imgpath: "", proficiency: 1 },
        { name: "Neo4J", imgpath: "", proficiency: 1 },
        { name: "SQLIte", imgpath: "", proficiency: 1 },
        { name: "MySQL", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "Data Sceince & Machine Learning",
      content: [
        { name: "Keras", imgpath: "", proficiency: 1 },
        { name: "Tensorflow", imgpath: "", proficiency: 1 },
        { name: "Langchain", imgpath: "", proficiency: 1 },
        { name: "Scikit-Learn", imgpath: "", proficiency: 1 },
        { name: "Matplotlib", imgpath: "", proficiency: 1 },
        { name: "Numpy", imgpath: "", proficiency: 1 },
        { name: "Pandas", imgpath: "", proficiency: 1 },
        { name: "Scipy", imgpath: "", proficiency: 1 },
        { name: "OpenCV", imgpath: "", proficiency: 1 },
      ],
    },
    {
      group: "Others",
      content: [
        { name: "CMake", imgpath: "", proficiency: 1 },
        { name: "Poetry", imgpath: "", proficiency: 1 },
        { name: "NPM", imgpath: "", proficiency: 1 },
        { name: "JWT", imgpath: "", proficiency: 1 },
        { name: "Postman", imgpath: "", proficiency: 1 },
        { name: "Swagger", imgpath: "", proficiency: 1 },
        { name: "Nodemon", imgpath: "", proficiency: 1 },
        { name: "Cuda", imgpath: "", proficiency: 1 },
        { name: "OpenGL", imgpath: "", proficiency: 1 },
        { name: "Qiskit", imgpath: "", proficiency: 1 },
        { name: "Selenium", imgpath: "", proficiency: 1 },
        { name: "ESLint", imgpath: "", proficiency: 1 },
        { name: "QT", imgpath: "", proficiency: 1 },
        { name: "Canva", imgpath: "", proficiency: 1 },
        { name: "Figma", imgpath: "", proficiency: 1 },
        { name: "Redis", imgpath: "", proficiency: 1 },
        { name: "Apache Kafka", imgpath: "", proficiency: 1 },
      ],
    },
  ],
}
export const MyProjects = {
  name: "Projects",
  icon: <Box className="scale-[60%]" />,
  href: "/Projects",
  content: [
    { title: "LinguaLink", Logo: LinguaLink, type: "Website", description: "An AI powered website which introduces a translation feature to remove restrictions of language.", startDate:'Apr 2024', endDate:'Jun 2024', link:'https://github.com/MohammadYehya/LinguaLink', tech:["NextJS", "ExpressJS", "FastAPI", "Keras", "Tensorflow"] },
    { title: "GridForge", Logo: GridForge, type: "Framework", description: "A game engine created using SDL2 & OpenGL to enhance development of isometric games.", startDate:'Dec 2024', endDate:'Present', link:'https://github.com/MohammadYehya/GridForge', tech:["C++", "CMake", "OpenGL"] },
    { title: "Stock Price Predictor App", Logo: null, type: "Test", description: "Test", startDate:'', endDate:'', link:'', tech:[] },
    { title: "Realtime Face Recognition System", Logo: null, type: "Test", description: "Test", startDate:'', endDate:'', link:'', tech:[] },
    { title: "Quantum Edge Detection", Logo: null, type: "Test", description: "Test", startDate:'', endDate:'', link:'', tech:[] },
    { title: "Test", Logo: null, type: "Test", description: "Test", startDate:'', endDate:'', link:'', tech:[] },
  ],
}
export const MyExperiences = {
  name: "Experience",
  icon: <BriefcaseBusiness className="scale-[60%]" />,
  href: "/Experience",
  content: [{ title: "test" }],
}
export const MyEducations = {
  name: "Education",
  icon: <GraduationCap className="scale-[60%]" />,
  href: "/Education",
  content: [{ title: "test" }],
}
export const Resume = {
  name: "Resume",
  icon: <FileText className="scale-[60%]" />,
  href: "/Resume",
  content: [{ title: "test" }],
}
export const NavItems = {
  MySkills, MyProjects, MyExperiences, MyEducations, Resume
}