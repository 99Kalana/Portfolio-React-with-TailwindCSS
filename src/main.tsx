// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './router'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//     {/* <App /> */}
//   </StrictMode>,
// )


// src/main.tsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
// NEW IMPORT: Import the ThemeProvider
import { ThemeProvider } from './context/ThemeContext' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* WRAPPER: All components, including the router, now have access to theme context */}
    <ThemeProvider> 
      <RouterProvider router={router} />
    </ThemeProvider>
    {/* <App /> */}
  </StrictMode>,
)