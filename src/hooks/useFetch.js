import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [donnees, setDonnees] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const controleur = new AbortController();

        async function charger() {
            setIsLoading(true);
            setError(null);
            try{
                const reponse = await fetch(url, { signal : controleur.signal });
                if(!reponse.ok) throw new Error("Réponse invalide du serveur");
                setDonnees(await reponse.json());
            } catch(e) {
                if(e.name !== "AbortError") setError(e.message);
            } finally {
                setIsLoading(false)
            }
        }
        charger();
        return() => controleur.abort();
    }, [url]);
    return { donnees, isLoading, error };
}