import { useState } from "react";
import { preconnect } from "react-dom";


function Recherche({recherche, setRecherche, lancerRecherche}){

    const [erreur, setErreur] = useState("");

    function gererChangement(e) {
        const {name, value} = e.target;
        setRecherche((precedent) => ({...precedent, [name]: value}));

        setErreur("");
    }

    function gererSoumission(e) {
        e.preventDefault();

        const texte = recherche.recherche.trim();

        if (texte === "") {
        setErreur("Veuillez entrer un titre de film.");
        return;
        }

        if (texte.length > 100) {
        setErreur("La recherche ne peut pas dépasser 100 caractères.");
        return;
        }

        setErreur("");
        lancerRecherche();
    }


    return(
        <form className="recherche" onSubmit={gererSoumission}>
            
            <input 
            type="text" 
            name="recherche" 
            id="recherche"
            value={recherche.recherche || ""}
            onChange={gererChangement} 
            aria-invalid={Boolean(erreur)}
            aria-describedby={erreur ? "erreur-recherche" : undefined}
            />

            <button type="submit">Rechercher</button>
            {erreur && (
                <p id="erreur-recherche" className="recherche-erreur" role="alert">
                    {erreur}
                </p>
            )}
        </form>
    )

}


export default Recherche;