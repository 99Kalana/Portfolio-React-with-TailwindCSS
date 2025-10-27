// // src/components/ProjectCard.tsx (Converted to AOS)

// import React, { useState } from 'react';
// import { type Project } from '../data/projectsData';

// interface ProjectCardProps {
//     project: Project;
//     // Interface update to accept the index
//     index: number; 
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {

//     const [currentImage, setCurrentImage] = useState(project.images[0]);
//     const hasLiveLink = project.liveLink && project.liveLink.length > 0;

//     // Calculate AOS Staggered Delay (Base 100ms + 150ms per card)
//     const aosDelay = 100 + index * 150;

//     return (
//         // AOS: Fade-up and stagger the entire card using calculated delay
//         <div 
//             data-aos="fade-up" // Replaces animate-fade-up
//             data-aos-duration="800" // Custom duration for smoothness
//             data-aos-delay={aosDelay} // Staggered delay logic
//             className={`
//                 bg-white border border-gray-200 rounded-xl p-6 shadow-lg 
//                 transition duration-500 hover:shadow-xl hover:shadow-cyan-200/50 hover:border-cyan-500
//             `}
//         >
            
//             {/* === 1. FEATURED IMAGE DISPLAY === */}
//             <div className="relative mb-4 rounded-lg overflow-hidden h-64 border-2 border-gray-200">
//                 <img 
//                     src={currentImage} 
//                     alt={`${project.title} screenshot`} 
//                     className="w-full h-full object-cover transition-opacity duration-500" 
//                 />
//             </div>
            
//             {/* === 2. THUMBNAIL GALLERY === */}
//             {project.images.length > 1 && (
//                 <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 justify-center">
//                     {project.images.map((image, idx) => (
//                         <div 
//                             key={idx}
//                             onClick={() => setCurrentImage(image)} 
//                             className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition duration-300 ${
//                                 image === currentImage 
//                                     ? 'border-2 border-cyan-500 opacity-100 shadow-md' 
//                                     : 'border border-gray-300 opacity-80 hover:opacity-100' 
//                             }`}
//                         >
//                             <img 
//                                 src={image} 
//                                 alt={`Thumbnail ${idx + 1}`} 
//                                 className="w-full h-full object-cover" 
//                             />
//                         </div>
//                     ))}
//                 </div>
//             )}
//             {/* ================================= */}

//             <h3 className="text-3xl font-bold text-cyan-600 mb-3">{project.title}</h3>

//             <p className="text-gray-700 mb-4">{project.description}</p>

//             <div className="flex flex-wrap gap-2 mb-6">
//                 {project.technologies.map((tech, idx) => (
//                     <span 
//                         key={idx}
//                         className="px-3 py-1 text-sm font-medium bg-cyan-100 text-cyan-700 rounded-full"
//                     >
//                         {tech}
//                     </span>
//                 ))}
//             </div>

//             <div className="flex gap-4">
//                 {/* Live Link Button */}
//                 {hasLiveLink && (
//                     <a 
//                       href={project.liveLink} 
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-5 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300"
//                     >
//                       View Live Demo
//                     </a>
//                 )}
                
//                 {/* GitHub Link Button */}
//                 <a 
//                     href={project.githubLink} 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-5 py-2 border border-gray-400 text-gray-700 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-600 transition duration-300"
//                 >
//                     GitHub Repo
//                 </a>
                
//             </div>

//         </div>
//     )
// }

// export default ProjectCard;


// src/components/ProjectCard.tsx (Dark Mode Ready)

import React, { useState } from 'react';
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 
import { type Project } from '../data/projectsData';

interface ProjectCardProps {
    project: Project;
    index: number; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    // Access the current theme
    const { theme } = useTheme();

    const [currentImage, setCurrentImage] = useState(project.images[0]);
    const hasLiveLink = project.liveLink && project.liveLink.length > 0;

    // Calculate AOS Staggered Delay (Base 100ms + 150ms per card)
    const aosDelay = 100 + index * 150;

    return (
        // THEME CHANGE: Card background, border, and shadow hover effect
        <div 
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay={aosDelay} 
            className={`
                rounded-xl p-6 shadow-lg transition duration-500 hover:shadow-xl
                ${theme === 'light' 
                    ? 'bg-white border border-gray-200 hover:shadow-cyan-200/50 hover:border-cyan-500' 
                    : 'bg-gray-800 border border-gray-700 hover:shadow-cyan-800/50 hover:border-cyan-400'
                }
            `}
        >
            
            {/* === 1. FEATURED IMAGE DISPLAY === */}
            <div 
                // THEME CHANGE: Image container border
                className={`relative mb-4 rounded-lg overflow-hidden h-64 border-2 transition-colors duration-500
                    ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}
            >
                <img 
                    src={currentImage} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-full object-cover transition-opacity duration-500" 
                />
            </div>
            
            {/* === 2. THUMBNAIL GALLERY === */}
            {project.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 justify-center">
                    {project.images.map((image, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setCurrentImage(image)} 
                            className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 transition duration-300 ${
                                // Active thumbnail border
                                image === currentImage 
                                    ? `${theme === 'light' ? 'border-2 border-cyan-500' : 'border-2 border-cyan-400'} opacity-100 shadow-md` 
                                    // Inactive thumbnail border
                                    : `${theme === 'light' ? 'border border-gray-300' : 'border border-gray-600'} opacity-80 hover:opacity-100` 
                            }`}
                        >
                            <img 
                                src={image} 
                                alt={`Thumbnail ${idx + 1}`} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </div>
            )}
            {/* ================================= */}

            {/* THEME CHANGE: Title text color */}
            <h3 className={`text-3xl font-bold mb-3 ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>{project.title}</h3>

            {/* THEME CHANGE: Description text color */}
            <p className={`mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{project.description}</p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                    <span 
                        key={idx}
                        // THEME CHANGE: Tech tag background/text color
                        className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-500
                            ${theme === 'light' 
                                ? 'bg-cyan-100 text-cyan-700' 
                                : 'bg-cyan-900/50 text-cyan-300'}`
                        }
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {/* Live Link Button (No change to primary button style) */}
                {hasLiveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300"
                    >
                      View Live Demo
                    </a>
                )}
                
                {/* GitHub Link Button */}
                <a 
                    href={project.githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    // THEME CHANGE: Secondary button border and text color
                    className={`px-5 py-2 font-semibold rounded-lg transition duration-300 
                        ${theme === 'light' 
                            ? 'border border-gray-400 text-gray-700 hover:border-cyan-500 hover:text-cyan-600' 
                            : 'border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'}`
                    }
                >
                    GitHub Repo
                </a>
                
            </div>

        </div>
    )
}

export default ProjectCard;