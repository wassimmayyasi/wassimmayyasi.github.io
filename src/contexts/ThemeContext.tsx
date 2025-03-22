import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ThemeOptions } from "../types";

interface ThemeContextType {
    theme: ThemeOptions;
    mode: string;
    toggleTheme: (newTheme: ThemeOptions) => void;
    toggleMode: (newMode: string) => void;
}

const defaultContext: ThemeContextType = {
    theme: "coastal-sunset",
    mode: "system",
    toggleTheme: () => {},
    toggleMode: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

interface ThemeProviderProps {
    children: ReactNode;
}

function getSystemMode(): "dark" | "light" {
    if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
}

function getInitialMode(): string {
    if (typeof window !== "undefined") {
        const storedMode = localStorage.getItem("mode");
        if (storedMode) return storedMode;
    }
    return "system";
}

function getInitialTheme(): ThemeOptions {
    if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme as ThemeOptions;
    }
    return "coastal-sunset";
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeOptions>(getInitialTheme());
    const [mode, setMode] = useState<string>(getInitialMode());
    const [effectiveMode, setEffectiveMode] = useState<"dark" | "light">(
        mode === "system" ? getSystemMode() : (mode as "dark" | "light")
    );

    useEffect(() => {
        if (mode === "system") {
            setEffectiveMode(getSystemMode());
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = (e: MediaQueryListEvent) => {
                setEffectiveMode(e.matches ? "dark" : "light");
            };
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        } else {
            setEffectiveMode(mode as "dark" | "light");
        }
    }, [mode]);

    const toggleTheme = (newTheme: ThemeOptions) => {
        setTheme(newTheme);
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme);
        }
    };

    const toggleMode = (newMode: string) => {
        setMode(newMode);
        if (typeof window !== "undefined") {
            localStorage.setItem("mode", newMode);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme, toggleMode }}>
            <div id="theme-wrapper" className={`${theme}-${effectiveMode}-theme ${effectiveMode}-mode`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
