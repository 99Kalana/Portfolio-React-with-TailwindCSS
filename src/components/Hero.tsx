// // src/components/Hero.tsx (Finalized with JS Smooth Scroll)
// import React from 'react';

// import profileImage from '../assets/profile/Kalana-Profile.png'; 

// const Hero: React.FC = () => {

//   // New function to handle the smooth scroll
//   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
//     e.preventDefault(); // Stop the default quick jump
//     const targetElement = document.getElementById(targetId);
    
//     if (targetElement) {
//       targetElement.scrollIntoView({
//         behavior: 'smooth', // This is the key property for smooth scrolling
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <section 
//       id="hero" 
//       className="min-h-screen flex items-center justify-center bg-white text-gray-900"
//     >
//       <div className="text-center p-8 max-w-lg mx-auto">
        
//         {/* ... (Image Div) ... */}
//         <div 
//             data-aos="zoom-in"
//             data-aos-duration="600"
//             data-aos-delay="0"
//             className="mb-8 flex justify-center" 
//         >
//             <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500"> 
//                 <img 
//                     src={profileImage} 
//                     alt="Profile of Kalana Sachinthana" 
//                     className="w-full h-full object-cover" 
//                 />
//             </div>
//         </div>
        
        
//         {/* ... (Main Heading) ... */}
//         <h1 
//             data-aos="fade-up"
//             data-aos-delay="200" 
//             className="text-5xl md:text-7xl font-bold tracking-wide mb-4" 
//         >
//           Hi, I'm 
//           <span className="text-cyan-600">Kalana Sachinthana</span>
//         </h1>
        
//         {/* ... (Subtitle) ... */}
//         <h2 
//             data-aos="fade"
//             data-aos-delay="400" 
//             className="text-xl md:text-2xl font-light text-gray-700 mb-8" 
//         >
//           Aspiring Full-Stack Developer Seeking Internship
//         </h2>
        
//         {/* Primary CTA Button */}
//         <a 
//           // CRITICAL CHANGE: Removed href="#projects" (no longer needed for primary action)
//           // CRITICAL CHANGE: Added onClick handler
//           onClick={(e) => handleSmoothScroll(e, 'projects')}
//           data-aos="fade-up"
//           data-aos-delay="600" 
//           className="inline-block px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg shadow-xl hover:bg-cyan-700 transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer"
//         >
//           View My Projects
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero.tsx (Dark Mode Ready)
import React from 'react';
// NEW IMPORT: Import the useTheme hook
import { useTheme } from '../context/ThemeContext'; 

import profileImage from '../assets/profile/Kalana-Profile.png'; 

const Hero: React.FC = () => {
  // Use the theme context
  const { theme } = useTheme();

  // Function to handle the smooth scroll (remains the same)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault(); 
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
      });
    }
  };

  return (
    <section 
      id="hero" 
      // THEME CHANGE: Background and text colors based on theme
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 
        ${theme === 'light' 
          ? 'bg-white text-gray-900' 
          : 'bg-transparent text-gray-100' // Use transparent to allow Layout.tsx background/glow to show
        }`}
    >
      <div className="text-center p-8 max-w-lg mx-auto">
        
        {/* Profile Image Div */}
        <div 
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="0"
            className="mb-8 flex justify-center" 
        >
            {/* THEME CHANGE: Profile image border color */}
            <div className={`w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 transition-colors duration-500
              ${theme === 'light' ? 'border-cyan-500' : 'border-cyan-400'}`}> 
                <img 
                    src={profileImage} 
                    alt="Profile of Kalana Sachinthana" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
        
        {/* Main Heading */}
        <h1 
            data-aos="fade-up"
            data-aos-delay="200" 
            className="text-5xl md:text-7xl font-bold tracking-wide mb-4" 
        >
          Hi, I'm 
          {/* THEME CHANGE: Cyan color adjustment */}
          <span className={`${theme === 'light' ? 'text-cyan-600' : 'text-cyan-400'}`}>
            Kalana Sachinthana
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 
            data-aos="fade"
            data-aos-delay="400" 
            // THEME CHANGE: Subtitle text color
            className={`text-xl md:text-2xl font-light mb-8 transition-colors duration-500
              ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`} 
        >
          Aspiring Full-Stack Developer Seeking Internship
        </h2>
        
        {/* Primary CTA Button */}
        <a 
          onClick={(e) => handleSmoothScroll(e, 'projects')}
          data-aos="fade-up"
          data-aos-delay="600" 
          // THEME CHANGE: Button background and hover color
          className={`inline-block px-8 py-3 text-white font-semibold rounded-lg shadow-xl transition-all duration-500 ease-out transform hover:scale-105 cursor-pointer
            ${theme === 'light' 
              ? 'bg-cyan-600 hover:bg-cyan-700' 
              : 'bg-cyan-500 hover:bg-cyan-600'}`}
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;