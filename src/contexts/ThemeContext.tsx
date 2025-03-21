import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeOptions } from "../types";

// Define the type for the context state
interface ThemeContextType {
    theme: ThemeOptions;
    mode: string;
    toggleTheme: (newTheme: ThemeOptions) => void;
    toggleMode: (newMode: string) => void;
}

// Define default values for the context
const defaultContext: ThemeContextType = {
    theme: "coastal-sunset",
    mode: "dark",
    toggleTheme: () => {},
    toggleMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeOptions>("coastal-sunset");
    const [mode, setMode] = useState<string>("dark");

    const toggleTheme = (newTheme: ThemeOptions) => setTheme(newTheme);
    const toggleMode = (newMode: string) => setMode(newMode);

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme, toggleMode }}>
            <div className={`${theme}-${mode}-theme ${mode}-mode`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
