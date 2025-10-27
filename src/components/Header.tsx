// // src/components/Header.tsx (Updated with larger image logo and text formatting)

// import React, { useState } from 'react';

// const navLinks = [
//   { name: 'About', href: '#about' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToId = (id: string) => {
//     const element = document.getElementById(id.substring(1));
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     e.preventDefault();
//     scrollToId(href);
//     if (isOpen) {
//       toggleMenu();
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200 animate-fade-down animate-once animate-duration-700">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
//         {/* LOGO: Combined image with custom text formatting */}
//         <a 
//           href="#hero" 
//           onClick={(e) => handleLinkClick(e, '#hero')}
//           className="flex items-center text-3xl font-bold text-gray-900 transition duration-300 animate-slide-in-left animate-once animate-duration-700"
//         >
//           {/* Start Tag */}
//           <span className="text-gray-900 hover:text-cyan-600 transition duration-300 transform hover:scale-105">
//             {'<'}
//           </span>
          
//           {/* Image Logo - INCREASED SIZE FROM h-10 TO h-12 */}
//           <img 
//             src="src\assets\logo\kalana-logo.jpg" // Adjust this path to where your image is
//             alt="Kalana's Logo" 
//             className="h-12 w-auto mx-0.5 transition duration-300 transform hover:scale-105" // Larger size and small margin for spacing
//           />
          
//           {/* End Tag */}
//           <span className="text-gray-900 hover:text-cyan-600 transition duration-300 transform hover:scale-105">
//             {'/>'}
//           </span>

//         </a>

//         {/* Mobile Menu Button (Hamburger Icon) */}
//         <button 
//           onClick={toggleMenu} 
//           className="md:hidden text-gray-700 hover:text-cyan-600 transition duration-300 focus:outline-none z-50 order-3"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//           ) : (
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//           )}
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-8 animate-fade-in animate-once animate-delay-300 animate-duration-700">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleLinkClick(e, link.href)}
//               className="relative text-lg font-medium text-gray-600 transition duration-400 ease-in-out group overflow-hidden"
//             >
//               <span className="block transition duration-400 transform group-hover:-translate-y-full group-hover:opacity-0">
//                 {link.name}
//               </span>
//               <span className="absolute top-full left-0 block transition duration-400 transform group-hover:-translate-y-full text-cyan-600">
//                 {link.name}
//               </span>
//             </a>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <a 
//           href="#contact" 
//           onClick={(e) => handleLinkClick(e, '#contact')}
//           className="hidden md:flex px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition duration-300 animate-slide-in-right animate-once animate-delay-500 animate-duration-700"
//         >
//           Get In Touch
//         </a>
        
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`
//           md:hidden 
//           absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl
//           transition-all duration-300 ease-in-out transform origin-top
//           ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} 
//         `}>
//         <nav className="flex flex-col space-y-4 p-4">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleLinkClick(e, link.href)}
//               className="block text-2xl font-semibold text-gray-900 hover:text-cyan-600 py-2 border-b border-gray-300/50 transition duration-200 ease-in-out last:border-b-0"
//             >
//               {link.name}
//             </a>
//           ))}
//           {/* Mobile CTA Button inside the menu */}
//           <a 
//             href="#contact" 
//             onClick={(e) => handleLinkClick(e, '#contact')}
//             className="mt-6 px-4 py-3 text-center bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition duration-300"
//           >
//             Get In Touch
//           </a>
//         </nav>
//       </div>

//     </header>
//   );
// };

// export default Header;


// src/components/Header.tsx (Logo Image Rounded)

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', 'href': '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToId(href);
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 shadow-lg border-b animate-fade-down animate-once animate-duration-700 
        ${theme === 'light' 
          ? 'bg-white shadow-lg border-gray-200' 
          : 'bg-gray-900 shadow-2xl border-gray-700'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO: Combined image with custom text formatting */}
        <a 
          href="#hero" 
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center text-3xl font-bold transition duration-300 animate-slide-in-left animate-once animate-duration-700"
        >
          <span 
            className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-200'} hover:text-cyan-500 transition duration-300 transform hover:scale-105`}
          >
            {'<'}
          </span>
          
          {/* Image Logo - ADDED rounded-full CLASS */}
          <img 
            src="src\assets\logo\kalana-logo.jpg" 
            alt="Kalana's Logo" 
            className="h-12 w-auto mx-0.5 transition duration-300 transform hover:scale-105 rounded-full" // <--- ADDED rounded-full HERE
          />
          
          <span 
            className={`${theme === 'light' ? 'text-gray-900' : 'text-gray-200'} hover:text-cyan-500 transition duration-300 transform hover:scale-105`}
          >
            {'/>'}
          </span>

        </a>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden transition duration-300 focus:outline-none z-50 order-3 w-8 h-8 
            ${theme === 'light' ? 'text-gray-700 hover:text-cyan-600' : 'text-gray-300 hover:text-cyan-500'}`}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>

        {/* Desktop Navigation - Integrated ThemeToggle */}
        <div className="hidden md:flex items-center space-x-8 animate-fade-in animate-once animate-delay-300 animate-duration-700">
            <nav className="flex space-x-8">
                {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="relative text-lg font-medium transition duration-400 ease-in-out group overflow-hidden"
                    >
                      <span className={`block transition duration-400 transform group-hover:-translate-y-full group-hover:opacity-0 
                        ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                      >
                        {link.name}
                      </span>
                      <span className="absolute top-full left-0 block transition duration-400 transform group-hover:-translate-y-full text-cyan-500">
                        {link.name}
                      </span>
                    </a>
                ))}
            </nav>
            <ThemeToggle /> 
        </div>

        {/* CTA Button */}
        <a 
          href="#contact" 
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="hidden md:flex px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition duration-300 animate-slide-in-right animate-once animate-delay-500 animate-duration-700"
        >
          Get In Touch
        </a>
        
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
          md:hidden 
          absolute top-full left-0 w-full shadow-xl
          transition-all duration-300 ease-in-out transform origin-top
          ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} 
          ${theme === 'light' 
            ? 'bg-white border-b border-gray-200' 
            : 'bg-gray-800 border-b border-gray-700 shadow-2xl'
          }
        `}>
        <nav className="flex flex-col space-y-4 p-4">
            
            <div className="flex justify-center border-b border-gray-300/50 py-2">
                <ThemeToggle />
            </div>

            {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block text-2xl font-semibold hover:text-cyan-600 py-2 border-b border-gray-300/50 transition duration-200 ease-in-out last:border-b-0 
                    ${theme === 'light' ? 'text-gray-900' : 'text-gray-200'}`}
                >
                  {link.name}
                </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="mt-6 px-4 py-3 text-center bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 transition duration-300"
            >
              Get In Touch
            </a>
        </nav>
      </div>

    </header>
  );
};

export default Header;