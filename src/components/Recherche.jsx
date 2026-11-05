import { useState } from "react";
import { preconnect } from "react-dom";


function Recherche({recherche, setRecherche, lancerRecherche}){

    function gererChangement(e) {
        const {name, value} = e.target;
        setRecherche((precedent) => ({...precedent, [name]: value}));
    }
    function gererSoumission(e) {
        e.preventDefault();
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
            />

            <button type="submit">Rechercher</button>
        </form>
    )

}


export default Recherche;