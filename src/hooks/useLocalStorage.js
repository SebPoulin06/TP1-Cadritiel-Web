import { useState, useEffect } from "react";

export default function useLocalStorage(cle, valeurInitiale){
    const [valeur, setValeur] = useState(() => {
        const sauvegarde = localStorage.getItem(cle);
        return sauvegarde !== null ? JSON.parse(sauvegarde) : valeurInitiale
    });

    useEffect(() => {
        localStorage.setItem(cle, JSON.stringify(valeur));
    }, [cle, valeur]);

    return [valeur, setValeur];
}