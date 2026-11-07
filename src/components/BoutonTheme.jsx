import { useTheme } from "../contexts/ThemeContext";

function BoutonTheme(){
    const { theme, basculerTheme } = useTheme();

    return(
        <button 
        type="button" 
        className="bouton-theme" 
        onClick={basculerTheme}
        aria-label="Changer le thème">
            <span className="theme-icone">
                {theme === "sombre" ? "☀️" : "🌙"}
            </span>
            <span>
                {theme === "sombre" ? "Clair" : "Sombre"}
            </span>
        </button>
    );
}

export default BoutonTheme;