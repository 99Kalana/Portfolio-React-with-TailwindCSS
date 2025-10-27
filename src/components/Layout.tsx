// // src/components/Layout.tsx (Modified)

// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from './Header'; 
// import Footer from './Footer'; 

// const Layout: React.FC = () => {
//   return (
//     <div className='min-h-screen flex flex-col bg-white text-gray-900'>
        
//         <Header/>

//         {/* The main content remains centered with mx-auto */}
//         <main className='flex-grow container mx-auto p-4'>
//             <Outlet/>
//         </main>

//         <Footer/>

//     </div>
//   )
// }

// export default Layout;


// src/components/Layout.tsx (Dark Mode Ready - Clean Background)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
// NEW IMPORT: Import the custom theme hook
import { useTheme } from '../context/ThemeContext'; 

const Layout: React.FC = () => {
    // Access the current theme
    const { theme } = useTheme();
    
    return (
        // THEME CHANGE: Use conditional classes for the main background and text colors
        <div 
            className={`min-h-screen flex flex-col transition-colors duration-500 
                ${theme === 'light' 
                    ? 'bg-white text-gray-900' 
                    : 'bg-gray-950 text-gray-100' // Use a very dark gray (950 or 900) for the base dark theme
                }`}
        >
            
            <Header/>

            {/* The main content remains centered with mx-auto */}
            <main className='flex-grow container mx-auto p-4'>
                <Outlet/>
            </main>

            <Footer/>

        </div>
    )
}

export default Layout;