import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [ theme, setTheme ] = useLocalStorage("theme", "clair");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    function basculerTheme() {
        setTheme((precedent) => (precedent === "clair" ? "sombre" : "clair"));
    }

    return(
        <ThemeContext.Provider value={{ theme, basculerTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const contexte = useContext(ThemeContext);

    if (contexte === null) {
        throw new Error("useTheme doit être utilisé dans un ThemeProvider");
    }
    
    return contexte;
}
