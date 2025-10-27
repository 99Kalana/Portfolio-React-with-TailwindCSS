// src/context/ThemeContext.tsx

import React, { 
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    type ReactNode 
} from 'react';

// Define the shape of the context state
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// 1. Create the Context with a default (non-functional) value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Custom hook for easy access to the context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// 3. Theme Provider Component
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    
    // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? 'dark' : 'light';
    });

    // Effect to apply the theme class to the document root and save to localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        
        // Remove existing theme class
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        
        // Add current theme class
        root.classList.add(theme);
        
        // Save preference
        localStorage.setItem('theme', theme);
    }, [theme]); // Reruns whenever theme state changes

    // Function to toggle between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};