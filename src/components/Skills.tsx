// // src/components/Skills.tsx (Finalized with tailwindcss-animated)

// import React, { useState } from 'react';
// // NOTE: Ensure you have installed the plugin and configured it in tailwind.config.js
// // npm install tailwindcss-animated
// import { skillsData, type Skill } from '../data/skillsData';

// // Function to group skills by category (remains the same)
// const groupedSkills = skillsData.reduce((acc, skill) => {
//     const category = skill.category;
//     if (!acc[category]) {
//         acc[category] = [];
//     }
//     acc[category].push(skill);
//     return acc;
// }, {} as Record<Skill['category'], Skill[]>);

// // Extract category names for easy mapping
// const categories = Object.keys(groupedSkills) as Skill['category'][];

// const Skills: React.FC = () => {
//     const [activeCategory, setActiveCategory] = useState<Skill['category']>(categories[0]);

//     // Helper function to render skill badges for the active category
//     const renderSkills = () => {
//         const skills = groupedSkills[activeCategory] || [];
        
//         return (
//             // IMPORTANT: The key={activeCategory} forces this whole div to re-mount
//             // whenever the category changes, which re-triggers the CSS animation.
//             <div 
//                 key={activeCategory} 
//                 className="flex flex-wrap justify-center gap-4 mt-8"
//             >
//                 {skills.map((skill: Skill, index) => (
//                     <span
//                         key={skill.name}
//                         // Use Tailwind CSS Animated utilities:
//                         // 1. animate-fade-up: Fades in while sliding up
//                         // 2. animate-once: Only animates on initial mount
//                         // 3. animate-delay: Staggers the animation using milliseconds
//                         className={`
//                             flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold shadow-lg 
//                             transition duration-300 hover:scale-[1.02] hover:shadow-xl 
//                             ${skill.color} border border-gray-300
                            
//                             // ANIMATION CLASSES:
//                             animate-fade-up animate-once 
//                             animate-delay-${index * 100} // Stagger delay: 0ms, 100ms, 200ms, etc.
//                         `}
//                     >
//                         <skill.Icon className="text-xl" /> 
//                         <span className="text-sm">{skill.name}</span>
//                     </span>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <section id="skills" className="py-20 bg-white text-gray-900">
//             <div className="container mx-auto px-4">
                
//                 {/* Section Heading */}
//                 <h2 
//                     className="text-4xl md:text-5xl font-extrabold text-center mb-16"
//                     // Optional: Animate the header on page load
//                     // className="text-4xl... animate-fade-in animate-once"
//                 >
//                     My <span className="text-cyan-600">Skills</span>
//                 </h2>

//                 {/* --- INTERACTIVE CATEGORY BUTTONS --- */}
//                 <div className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-200 pb-4">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             className={`
//                                 px-6 py-2 text-lg font-semibold rounded-full transition duration-300 
//                                 shadow-md hover:shadow-lg transform hover:scale-[1.03]
//                                 ${category === activeCategory
//                                     ? 'bg-cyan-600 text-white shadow-cyan-300/50' 
//                                     : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//                                 }
//                             `}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 {/* --- CONDITIONAL SKILL DISPLAY --- */}
//                 <div className="text-center">
//                     <h3 className="text-3xl font-bold text-gray-900 mb-6 inline-block border-b-2 border-cyan-600 pb-2">
//                         {activeCategory}
//                     </h3>
//                     {renderSkills()}
//                 </div>
                
//             </div>
//         </section>
//     );
// };

// export default Skills;


// src/components/Skills.tsx (Dark Mode Ready)

import React, { useState } from 'react';
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 
import { skillsData, type Skill } from '../data/skillsData';

// Function to group skills by category (remains the same)
const groupedSkills = skillsData.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
}, {} as Record<Skill['category'], Skill[]>);

// Extract category names for easy mapping
const categories = Object.keys(groupedSkills) as Skill['category'][];

const Skills: React.FC = () => {
    // Use the theme context
    const { theme } = useTheme();

    const [activeCategory, setActiveCategory] = useState<Skill['category']>(categories[0]);

    // Helper function to render skill badges for the active category
    const renderSkills = () => {
        const skills = groupedSkills[activeCategory] || [];
        
        return (
            <div 
                key={activeCategory} 
                className="flex flex-wrap justify-center gap-4 mt-8"
            >
                {skills.map((skill: Skill, index) => (
                    <span
                        key={skill.name}
                        // NOTE: Skill color is derived from skillsData. We'll ensure the surrounding
                        // styling works well with those predefined light backgrounds/text colors.
                        className={`
                            flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold shadow-lg 
                            transition duration-300 hover:scale-[1.02] hover:shadow-xl 
                            ${skill.color} 
                            // THEME CHANGE: Badge border color
                            ${theme === 'light' ? 'border border-gray-300' : 'border border-gray-600'}
                            
                            // ANIMATION CLASSES:
                            animate-fade-up animate-once 
                            animate-delay-${index * 100} // Stagger delay: 0ms, 100ms, 200ms, etc.
                        `}
                    >
                        <skill.Icon className="text-xl" /> 
                        <span className="text-sm">{skill.name}</span>
                    </span>
                ))}
            </div>
        );
    };

    return (
        // THEME CHANGE: Section background and text color
        <section 
            id="skills" 
            className={`py-20 transition-colors duration-500 
                ${theme === 'light' 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-950 text-gray-100'
                }`}
        >
            <div className="container mx-auto px-4">
                
                {/* Section Heading */}
                <h2 
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16"
                >
                    My 
                    {/* THEME CHANGE: Accent color adjustment */}
                    <span className={`${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>
                        Skills
                    </span>
                </h2>

                {/* --- INTERACTIVE CATEGORY BUTTONS --- */}
                {/* THEME CHANGE: Border color under buttons */}
                <div className={`flex flex-wrap justify-center gap-4 mb-8 pb-4 transition-colors duration-500
                    ${theme === 'light' ? 'border-b border-gray-200' : 'border-b border-gray-800'}`}>
                    
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                px-6 py-2 text-lg font-semibold rounded-full transition duration-300 
                                shadow-md hover:shadow-lg transform hover:scale-[1.03]
                                
                                ${category === activeCategory
                                    // Active Button (Light/Dark consistent for color branding)
                                    ? 'bg-cyan-600 text-white shadow-cyan-300/50' 
                                    // Inactive Button (Theme specific)
                                    : theme === 'light'
                                        ? 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* --- CONDITIONAL SKILL DISPLAY --- */}
                <div className="text-center">
                    <h3 
                        // THEME CHANGE: Title text color and border color
                        className={`text-3xl font-bold mb-6 inline-block border-b-2 pb-2 transition-colors duration-500
                            ${theme === 'light' 
                                ? 'text-gray-900 border-cyan-600' 
                                : 'text-gray-100 border-cyan-400'}`
                        }
                    >
                        {activeCategory}
                    </h3>
                    {renderSkills()}
                </div>
                
            </div>
        </section>
    );
};

export default Skills;