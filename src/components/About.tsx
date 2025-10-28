// // src/components/About.tsx (Converted to AOS and Styled)
// import React from 'react';

// const About: React.FC = () => {
//     return (
//         <section id="about" className="py-20 bg-gray-50 text-gray-900">
//             <div className="container mx-auto px-4 max-w-4xl">
                
//                 {/* Section Heading */}
//                 <h2 
//                     data-aos="fade" // Simple fade for the title
//                     className="text-4xl md:text-5xl font-extrabold text-center mb-12"
//                 >
//                     About <span className="text-cyan-600">Me</span>
//                 </h2>
                
//                 {/* Content Box */}
//                 <div 
//                     data-aos="fade-up" // Main box slides up
//                     data-aos-delay="100" // Slight delay after title
//                     className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-200"
//                 >
                    
//                     {/* Paragraph 1 - Enhanced text style (font-medium) */}
//                     <p 
//                         data-aos="fade-up" 
//                         data-aos-delay="300" // Staggered reveal
//                         className="text-lg mb-6 leading-relaxed text-gray-700 font-medium" // Added font-medium
//                     >
//                         👋 I am Kalana Sachinthana, a passionate and committed full-stack developer with a strong foundation in software engineering. My hands-on experience spans across both dynamic web and mobile application development, focusing particularly on the MERN stack (MongoDB, Express.js, React, and Node.js) for building scalable web applications. I'm also proficient in backend technologies like Java, Spring Boot, Python, and MySQL, which I've utilized for developing complex platforms, such as a full-featured multi-vendor e-commerce marketplace. I possess a strong grasp of Object-Oriented Programming (OOP) fundamentals and a drive to contribute my project-based skills to a demanding software development environment.
//                     </p>
                    
//                     {/* Paragraph 2 - Enhanced text style (font-medium) */}
//                     <p 
//                         data-aos="fade-up" 
//                         data-aos-delay="500" // Further staggered reveal
//                         className="text-lg mb-6 leading-relaxed text-gray-700 font-medium" // Added font-medium
//                     >
//                         My development experience is practical and project-driven. I've successfully engineered a full-stack Book Club Library Management system using the **MERN stack with React/TypeScript and Tailwind CSS, demonstrating my ability to implement secure user authentication and comprehensive CRUD operations. Furthermore, I've developed the **GreenScape Mobile Application using React Native and Firebase, integrating key features like a third-party plant identification API and crucial watering reminders. This range of work—from full-stack web platforms to cross-platform mobile apps—showcases my versatility and my commitment to leveraging modern technologies to deliver end-to-end solutions.
//                     </p>

//                     {/* Final CTA/Goal Paragraph - Enhanced text style (font-bold) */}
//                     <p 
//                         data-aos="fade" 
//                         data-aos-delay="700" // Fades in after main text
//                         className="text-xl leading-relaxed font-bold text-cyan-600 border-l-4 border-cyan-600 pl-4 py-1" // Added font-bold and a left border
//                     >
//                         I am currently seeking a Full-Stack Developer Internship to apply my theoretical knowledge in a professional setting. I am eager to contribute to real-world projects, learn from experienced mentors, and grow my skills in a collaborative team environment.
//                     </p>
                    
//                     {/* Resume CTA */}
//                     <div 
//                         data-aos="zoom-in" 
//                         data-aos-delay="900" // Final element pops in
//                         data-aos-duration="600" // Slightly faster zoom
//                         className="mt-8 text-center"
//                     >
//                         <a 
//                             href="src\assets\Resume\Kalana Sachinthana - RESUME.pdf" 
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-block px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-xl hover:bg-cyan-700 transition duration-300 transform hover:scale-105"
//                         >
//                             Download Resume (PDF)
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;




// src/components/About.tsx (Dark Mode Ready)
import React from 'react';
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 

const About: React.FC = () => {
    // Access the current theme
    const { theme } = useTheme();
    
    return (
        // THEME CHANGE: Section background color
        <section 
            id="about" 
            className={`py-20 transition-colors duration-500 
                ${theme === 'light' 
                    ? 'bg-gray-50 text-gray-900' // Light: Off-white background
                    : 'bg-gray-950 text-gray-100' // Dark: Inherit deep dark background from Layout
                }`}
        >
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Section Heading */}
                <h2 
                    data-aos="fade" 
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12"
                >
                    About 
                    {/* THEME CHANGE: Accent color adjustment */}
                    <span className={`${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>
                        Me
                    </span>
                </h2>
                
                {/* Content Box */}
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="100" 
                    // THEME CHANGE: Inner content box background, border, and shadow
                    className={`p-8 md:p-10 rounded-xl shadow-xl border transition-colors duration-500 
                        ${theme === 'light' 
                            ? 'bg-white border-gray-200' 
                            : 'bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50'
                        }`}
                >
                    
                    {/* Paragraph 1 */}
                    <p 
                        data-aos="fade-up" 
                        data-aos-delay="300" 
                        // THEME CHANGE: Paragraph text color
                        className={`text-lg mb-6 leading-relaxed font-medium transition-colors duration-500
                            ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} 
                    >
                        👋 I am Kalana Sachinthana, a passionate and committed full-stack developer with a strong foundation in software engineering. My hands-on experience spans across both dynamic web and mobile application development, focusing particularly on the MERN stack (MongoDB, Express.js, React, and Node.js) for building scalable web applications. I'm also proficient in backend technologies like Java, Spring Boot, Python, and MySQL, which I've utilized for developing complex platforms, such as a full-featured multi-vendor e-commerce marketplace. I possess a strong grasp of Object-Oriented Programming (OOP) fundamentals and a drive to contribute my project-based skills to a demanding software development environment.
                    </p>
                    
                    {/* Paragraph 2 */}
                    <p 
                        data-aos="fade-up" 
                        data-aos-delay="500" 
                        // THEME CHANGE: Paragraph text color
                        className={`text-lg mb-6 leading-relaxed font-medium transition-colors duration-500
                            ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`} 
                    >
                        My development experience is practical and project-driven. I've successfully engineered a full-stack Book Club Library Management system using the **MERN stack with React/TypeScript and Tailwind CSS, demonstrating my ability to implement secure user authentication and comprehensive CRUD operations. Furthermore, I've developed the **GreenScape Mobile Application using React Native and Firebase, integrating key features like a third-party plant identification API and crucial watering reminders. This range of work—from full-stack web platforms to cross-platform mobile apps—showcases my versatility and my commitment to leveraging modern technologies to deliver end-to-end solutions.
                    </p>

                    {/* Final CTA/Goal Paragraph */}
                    <p 
                        data-aos="fade" 
                        data-aos-delay="700" 
                        // THEME CHANGE: Accent color and left border color
                        className={`text-xl leading-relaxed font-bold border-l-4 pl-4 py-1 transition-colors duration-500
                            ${theme === 'light' 
                                ? 'text-cyan-600 border-cyan-600' 
                                : 'text-cyan-400 border-cyan-400'}`}
                    >
                        I am currently seeking a Full-Stack Developer Internship to apply my theoretical knowledge in a professional setting. I am eager to contribute to real-world projects, learn from experienced mentors, and grow my skills in a collaborative team environment.
                    </p>
                    
                    {/* Resume CTA */}
                    <div 
                        data-aos="zoom-in" 
                        data-aos-delay="900" 
                        data-aos-duration="600" 
                        className="mt-8 text-center"
                    >
                        <a 
                            href="/Resume/Kalana Sachinthana - RESUME.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            // THEME CHANGE: Button background and hover color
                            className={`inline-block px-8 py-3 text-white font-bold rounded-lg shadow-xl transition duration-300 transform hover:scale-105
                                ${theme === 'light' 
                                    ? 'bg-cyan-600 hover:bg-cyan-700' 
                                    : 'bg-cyan-500 hover:bg-cyan-600'}`}
                        >
                            Download Resume (PDF)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;