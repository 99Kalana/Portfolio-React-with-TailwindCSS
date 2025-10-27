// // src/components/Projects.tsx (Converted to AOS)

// import React from 'react'
// import { projectsData } from '../data/projectsData';
// import ProjectCard from './ProjectCard';

// const Projects: React.FC = () => {
//     return (
//         <section id="projects" className="py-20 bg-gray-100">
//             <div className="container mx-auto px-4">
                
//                 {/* AOS 1: Fade-in the section heading */}
//                 <h2 
//                     data-aos="fade" // Replaces animate-fade-in
//                     className="text-5xl font-extrabold text-center text-gray-900 mb-16"
//                 >
//                     My <span className="text-cyan-600">Projects</span>
//                 </h2>
                
//                 {/* PROJECT GRID: Passes index for staggered AOS animation */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    
//                     {/* MODIFICATION: Pass index to ProjectCard for staggering */}
//                     {projectsData.map((project, index) => (
//                         <ProjectCard key={project.id} project={project} index={index} /> 
//                     ))}
                    
//                 </div>

                
//                 <div className="text-center mt-12">
//                     <p className="text-gray-700 text-lg">
//                         View all my contributions and repositories on my GitHub profile.
//                     </p>
//                     <a 
//                         href="https://github.com/99Kalana?tab=repositories" 
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         // AOS 2: Zoom-in the final CTA
//                         data-aos="zoom-in" // Replaces animate-zoom-in
//                         data-aos-delay="300" 
//                         data-aos-duration="500" 
//                         className="inline-block mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
//                     >
//                         Go to GitHub
//                     </a>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Projects;


// src/components/Projects.tsx (Dark Mode Ready)

import React from 'react'
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    // Access the current theme
    const { theme } = useTheme();

    return (
        // THEME CHANGE: Section background color
        <section 
            id="projects" 
            className={`py-20 transition-colors duration-500 
                ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-950'}`}
        >
            <div className="container mx-auto px-4">
                
                {/* Section Heading */}
                <h2 
                    data-aos="fade" 
                    // THEME CHANGE: Heading text color
                    className={`text-5xl font-extrabold text-center mb-16 transition-colors duration-500
                        ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}
                >
                    My 
                    {/* THEME CHANGE: Accent color adjustment */}
                    <span className={`${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>
                        Projects
                    </span>
                </h2>
                
                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* ProjectCard handles its own theme styling */}
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} /> 
                    ))}
                </div>

                
                {/* Final CTA to GitHub */}
                <div className="text-center mt-12">
                    {/* THEME CHANGE: Paragraph text color */}
                    <p className={`text-lg transition-colors duration-500
                        ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                        View all my contributions and repositories on my GitHub profile.
                    </p>
                    <a 
                        href="https://github.com/99Kalana?tab=repositories" 
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="zoom-in" 
                        data-aos-delay="300" 
                        data-aos-duration="500" 
                        // THEME CHANGE: GitHub button styles
                        className={`inline-block mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105
                            ${theme === 'light' 
                                ? 'bg-gray-900 hover:bg-gray-700' 
                                : 'bg-gray-700 hover:bg-gray-600'}`
                        }
                    >
                        Go to GitHub
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;