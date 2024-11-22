import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context state
interface ThemeContextType {
    theme: string;
    mode: string;
    toggleTheme: (newTheme: string) => void;
    toggleMode: (newMode: string) => void;
}

// Define default values for the context
const defaultContext: ThemeContextType = {
    theme: "theme1",
    mode: "light",
    toggleTheme: () => {},
    toggleMode: () => {},
};

// Create the context
const ThemeContext = createContext<ThemeContextType>(defaultContext);

// Define props for the ThemeProvider component
interface ThemeProviderProps {
    children: ReactNode;
}

// Create the ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("theme1");
    const [mode, setMode] = useState<string>("light");

    const toggleTheme = (newTheme: string) => setTheme(newTheme);
    const toggleMode = (newMode: string) => setMode(newMode);

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme, toggleMode }}>
            <div className={`${theme}-theme ${mode}-mode`}>{children}</div>
        </ThemeContext.Provider>
    );
};

// Custom hook for consuming the ThemeContext
export const useTheme = () => useContext(ThemeContext);
