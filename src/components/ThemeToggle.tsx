// src/components/ThemeToggle.tsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa6'; // Assuming you have react-icons/fa6 installed

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`
        p-2 rounded-full transition duration-300 transform 
        shadow-lg border 
        ${theme === 'light'
          ? 'bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-600'
          : 'bg-gray-700 text-yellow-300 hover:bg-gray-600 border-gray-600'
        }
      `}
    >
      {/* Display Sun icon for light mode, Moon icon for dark mode */}
      {theme === 'light' ? (
        <FaSun className="w-5 h-5 animate-spin-slow" /> // Simple icon spin on click
      ) : (
        <FaMoon className="w-5 h-5 animate-pulse" /> // Simple icon pulse
      )}
    </button>
  );
};

export default ThemeToggle;