/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: Tells Tailwind which files to scan for classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Pick a professional, sans-serif font
        sans: ['Inter', 'sans-serif'], // Add 'Inter' as the default sans-serif font
      }
    },
  },

  // CRITICAL: Re-adds the animation plugin
  plugins: [
    require('tailwindcss-animated'),
  ],


};