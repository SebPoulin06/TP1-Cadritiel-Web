import { useState } from "react";


function Recherche({recherche, setRecherche}){

    function gererChangement(e) {
        const {name, value} = e.target;
        setRecherche((precedent) => ({...precedent, [name]: value}));
    }

    return(
        <div className="recherche">
            <label>Recherche</label>
            <input 
            type="text" 
            name="recherche" 
            id="recherche"
            value={recherche.recherche || ""}
            onChange={gererChangement} 
            />
        </div>
    )

}


export default Recherche;