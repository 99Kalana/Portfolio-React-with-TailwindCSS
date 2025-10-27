
// import React from 'react';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'; 
// // NOTE: Ensure react-icons/fa6 is installed

// const Footer: React.FC = () => {
//     const socialLinks = [
//         { 
//             name: 'GitHub', 
//             href: 'https://github.com/99Kalana?tab=repositories',
//             Icon: FaGithub
//         },
//         { 
//             name: 'LinkedIn', 
//             href: 'https://www.linkedin.com/in/kalana-sachinthana-69a94231b/',
//             Icon: FaLinkedinIn
//         },
//     ];

//     const currentYear = new Date().getFullYear();

//     return (
//         // AOS Conversion: Replaces animate-fade-up with data-aos="fade-up"
//         <footer 
//             data-aos="fade-up" // Smooth final reveal upon scrolling into view
//             data-aos-duration="700"
//             className="bg-gray-100 border-t border-gray-300 py-8"
//         >
//             <div className="container mx-auto px-4 text-center">
                
//                 {/* Social Links */}
//                 <div className="flex justify-center space-x-8 mb-6">
//                     {socialLinks.map((link) => (
//                         <a 
//                             key={link.name}
//                             href={link.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-600 hover:text-cyan-600 text-3xl transition duration-300" 
//                             title={link.name}
//                         >
//                             <link.Icon /> 
//                         </a>
//                     ))}
//                 </div>
                
//                 {/* Copyright Information */}
//                 <p className="text-gray-600 text-sm">
//                     &copy; {currentYear} Kalana's Portfolio. Built with React and Tailwind CSS.
//                 </p>

//             </div>
//         </footer>
//     );
// };

// export default Footer;

// src/components/Footer.tsx (Dark Mode Ready with useTheme)

import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'; 
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 

const Footer: React.FC = () => {
    // Access the current theme
    const { theme } = useTheme();

    const socialLinks = [
        { 
            name: 'GitHub', 
            href: 'https://github.com/99Kalana?tab=repositories',
            Icon: FaGithub
        },
        { 
            name: 'LinkedIn', 
            href: 'https://www.linkedin.com/in/kalana-sachinthana-69a94231b/',
            Icon: FaLinkedinIn
        },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer 
            data-aos="fade-up" 
            data-aos-duration="700"
            // THEME CHANGE: Use conditional classes for background and border
            className={`py-8 transition-colors duration-500 
                ${theme === 'light' 
                    ? 'bg-gray-100 border-t border-gray-300' 
                    : 'bg-gray-900 border-t border-gray-800'
                }`}
        >
            <div className="container mx-auto px-4 text-center">
                
                {/* Social Links */}
                <div className="flex justify-center space-x-8 mb-6">
                    {socialLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            // THEME CHANGE: Use conditional classes for icon color and hover color
                            className={`text-3xl transition duration-300 
                                ${theme === 'light' 
                                    ? 'text-gray-600 hover:text-cyan-600' 
                                    : 'text-gray-400 hover:text-cyan-500'}`
                            } 
                            title={link.name}
                        >
                            <link.Icon /> 
                        </a>
                    ))}
                </div>
                
                {/* Copyright Information */}
                <p 
                    // THEME CHANGE: Use conditional classes for text color
                    className={`text-sm transition-colors duration-500 
                        ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`
                    }
                >
                    &copy; {currentYear} Kalana's Portfolio. Built with React and Tailwind CSS.
                </p>

            </div>
        </footer>
    );
};

export default Footer;