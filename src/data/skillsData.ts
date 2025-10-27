// src/data/skillsData.ts

// 1. Import icons from popular collections
// Di: Devicons (great for tech logos), Fa: Font Awesome, Si: Simple Icons (vast library)
import { type IconType } from 'react-icons';
import { 
    DiJavascript1, DiJava, DiPython, DiReact, DiNodejs, DiMongodb, DiGit,
    DiVisualstudio, DiCss3, DiHtml5
} from 'react-icons/di';
import { 
    SiTypescript, SiMysql, SiExpress, SiSpringboot, SiTailwindcss, SiBootstrap,
    SiFirebase, SiNpm, SiApachemaven
} from 'react-icons/si';

// The Skill interface is updated to include the Icon component type
export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend & Mobile' | 'Backend & Database' | 'Tools & Concepts';
  color: string; // Tailwind color class for visual distinction
  Icon: IconType; // NEW: Holds the imported icon component
}

export const skillsData: Skill[] = [
  // =======================================================
  // 1. LANGUAGES (Foundational knowledge)
  // =======================================================
  { name: "JavaScript", category: "Languages", color: "bg-yellow-500 text-black", Icon: DiJavascript1 }, 
  { name: "TypeScript", category: "Languages", color: "bg-blue-600 text-white", Icon: SiTypescript }, 
  { name: "Java", category: "Languages", color: "bg-red-700 text-white", Icon: DiJava }, 
  { name: "Python", category: "Languages", color: "bg-blue-800 text-white", Icon: DiPython }, 
  { name: "HTML", category: "Languages", color: "bg-orange-600 text-white", Icon: DiHtml5 }, 
  { name: "CSS", category: "Languages", color: "bg-blue-400 text-white", Icon: DiCss3 }, 

  // =======================================================
  // 2. FRONTEND & MOBILE
  // =======================================================
  { name: "React", category: "Frontend & Mobile", color: "bg-cyan-500 text-black", Icon: DiReact }, 
  { name: "React-Native", category: "Frontend & Mobile", color: "bg-emerald-600 text-white", Icon: DiReact }, // Using DiReact as a good stand-in
  { name: "Tailwind CSS", category: "Frontend & Mobile", color: "bg-teal-500 text-white", Icon: SiTailwindcss }, 
  { name: "Bootstrap", category: "Frontend & Mobile", color: "bg-purple-600 text-white", Icon: SiBootstrap }, 
  { name: "Ajax", category: "Frontend & Mobile", color: "bg-indigo-500 text-white", Icon: DiHtml5 }, // Using HTML as Ajax is not a single icon

  // =======================================================
  // 3. BACKEND & DATABASE (Your Full-Stack strength)
  // =======================================================
  { name: "Node.js", category: "Backend & Database", color: "bg-green-600 text-white", Icon: DiNodejs }, 
  { name: "Express.js", category: "Backend & Database", color: "bg-gray-600 text-white", Icon: SiExpress }, 
  { name: "Spring Boot", category: "Backend & Database", color: "bg-green-800 text-white", Icon: SiSpringboot }, 
  { name: "MongoDB", category: "Backend & Database", color: "bg-lime-700 text-white", Icon: DiMongodb }, 
  { name: "MySQL", category: "Backend & Database", color: "bg-blue-900 text-white", Icon: SiMysql }, 
  { name: "Micro Services", category: "Backend & Database", color: "bg-gray-700 text-white", Icon: DiJava }, // Using Java as a conceptual icon
  { name: "JWT", category: "Backend & Database", color: "bg-red-900 text-white", Icon: DiJava }, // Using Java as a conceptual icon

  // =======================================================
  // 4. TOOLS & CONCEPTS
  // =======================================================
  { name: "Firebase", category: "Tools & Concepts", color: "bg-orange-700 text-white", Icon: SiFirebase }, 
  { name: "NPM", category: "Tools & Concepts", color: "bg-red-600 text-white", Icon: SiNpm }, 
  { name: "Maven", category: "Tools & Concepts", color: "bg-red-400 text-white", Icon: SiApachemaven }, 
  { name: "Project Management", category: "Tools & Concepts", color: "bg-zinc-600 text-white", Icon: DiVisualstudio }, // Using VS Code as a general tool icon
  { name: "Machine Learning", category: "Tools & Concepts", color: "bg-fuchsia-600 text-white", Icon: DiPython }, // Using Python icon
  { name: "Computer Networking", category: "Tools & Concepts", color: "bg-sky-600 text-white", Icon: DiVisualstudio }, // Using VS Code as a general tool icon
  { name: "Git & GitHub", category: "Tools & Concepts", color: "bg-black text-white", Icon: DiGit }, 

];