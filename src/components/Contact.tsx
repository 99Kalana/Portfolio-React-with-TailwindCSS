// // src/components/Contact.tsx (Converted to AOS)

// import React from 'react';

// const Contact: React.FC = () => {
//     return (
//         <section id="contact" className="py-20 bg-white text-gray-900">
//             <div className="container mx-auto px-4 max-w-2xl">
                
//                 {/* Section Heading */}
//                 <h2 
//                     // AOS 1: Fade-in the heading (animate-fade-in)
//                     data-aos="fade"
//                     data-aos-duration="700"
//                     className="text-4xl md:text-5xl font-extrabold text-center mb-12"
//                 >
//                     Contact <span className="text-cyan-600">Me</span>
//                 </h2>
                
//                 {/* Content Box */}
//                 <div 
//                     // AOS 2: Content box slides up after heading (animate-fade-up, animate-delay-200)
//                     data-aos="fade-up"
//                     data-aos-delay="200"
//                     data-aos-duration="700"
//                     className="bg-gray-50 p-8 rounded-xl shadow-xl border border-gray-200"
//                 >
                    
//                     {/* Main Paragraph */}
//                     <p 
//                         // AOS 3: Paragraph fades in (animate-fade-in, animate-delay-400)
//                         data-aos="fade"
//                         data-aos-delay="400"
//                         data-aos-duration="700"
//                         className="text-lg text-gray-700 mb-6 text-center"
//                     >
//                         I'm currently searching for a Full-Stack/ Frontend/ Backend: Developer or UI/UX designer or Software Engineer Internship opportunity. If you're looking for a highly motivated, fast learner for your team, please reach out!
//                     </p>

                    
//                     <div className="text-center mb-8">
//                         {/* Email Subtitle */}
//                         <p 
//                             // AOS 4: Subtitle fades in (animate-fade-in, animate-delay-600)
//                             data-aos="fade"
//                             data-aos-delay="600"
//                             data-aos-duration="500"
//                             className="text-xl font-semibold mb-2 text-cyan-600"
//                         >
//                             Send me an Email:
//                         </p>
//                         {/* Email Button */}
//                         <a 
//                             href="mailto:kalanasachinthana8@gmail.com?subject=Internship%20Inquiry%20from%20Portfolio" 
//                             // AOS 5: Button zooms in for emphasis (animate-zoom-in, animate-delay-800)
//                             data-aos="zoom-in"
//                             data-aos-delay="800"
//                             data-aos-duration="500"
//                             className="inline-block px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition duration-300 text-lg hover:underline shadow-md transform hover:scale-[1.02]" 
//                         >
//                             kalanasachinthana8@gmail.com
//                         </a>
//                     </div>

//                     {/* Final Text */}
//                     <p 
//                         // AOS 6: Final line fades in (animate-fade-in, animate-delay-1000)
//                         data-aos="fade"
//                         data-aos-delay="1000"
//                         data-aos-duration="500"
//                         className="text-center text-gray-700"
//                     >
//                         You can also connect with me on LinkedIn or view my code on GitHub (links below).
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

// src/components/Contact.tsx (Dark Mode Ready)

import React from 'react';
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 

const Contact: React.FC = () => {
    // Access the current theme
    const { theme } = useTheme();

    return (
        // THEME CHANGE: Section background and default text color
        <section 
            id="contact" 
            className={`py-20 transition-colors duration-500 
                ${theme === 'light' 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-950 text-gray-100'}`}
        >
            <div className="container mx-auto px-4 max-w-2xl">
                
                {/* Section Heading */}
                <h2 
                    data-aos="fade"
                    data-aos-duration="700"
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12"
                >
                    Contact 
                    {/* THEME CHANGE: Accent color adjustment */}
                    <span className={`${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>
                        Me
                    </span>
                </h2>
                
                {/* Content Box */}
                <div 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="700"
                    // THEME CHANGE: Inner box background, border, and shadow
                    className={`p-8 rounded-xl shadow-xl border transition-colors duration-500
                        ${theme === 'light' 
                            ? 'bg-gray-50 border-gray-200' 
                            : 'bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50'
                        }`}
                >
                    
                    {/* Main Paragraph */}
                    <p 
                        data-aos="fade"
                        data-aos-delay="400"
                        data-aos-duration="700"
                        // THEME CHANGE: Paragraph text color
                        className={`text-lg mb-6 text-center transition-colors duration-500
                            ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                    >
                        I'm currently searching for a Full-Stack/ Frontend/ Backend: Developer or UI/UX designer or Software Engineer Internship opportunity. If you're looking for a highly motivated, fast learner for your team, please reach out!
                    </p>

                    
                    <div className="text-center mb-8">
                        {/* Email Subtitle */}
                        <p 
                            data-aos="fade"
                            data-aos-delay="600"
                            data-aos-duration="500"
                            // THEME CHANGE: Subtitle text color
                            className={`text-xl font-semibold mb-2 transition-colors duration-500
                                ${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}
                        >
                            Send me an Email:
                        </p>
                        {/* Email Button */}
                        <a 
                            href="mailto:kalanasachinthana8@gmail.com?subject=Internship%20Inquiry%20from%20Portfolio" 
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            data-aos-duration="500"
                            // THEME CHANGE: Button styles (same as other primary CTAs, adjusting hover for dark mode)
                            className={`inline-block px-6 py-3 text-white font-bold rounded-lg transition duration-300 text-lg hover:underline shadow-md transform hover:scale-[1.02]
                                ${theme === 'light' 
                                    ? 'bg-cyan-600 hover:bg-cyan-700' 
                                    : 'bg-cyan-500 hover:bg-cyan-600'}`} 
                        >
                            kalanasachinthana8@gmail.com
                        </a>
                    </div>

                    {/* Final Text */}
                    <p 
                        data-aos="fade"
                        data-aos-delay="1000"
                        data-aos-duration="500"
                        // THEME CHANGE: Final text color
                        className={`text-center transition-colors duration-500
                            ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                    >
                        You can also connect with me on LinkedIn or view my code on GitHub (links below).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;