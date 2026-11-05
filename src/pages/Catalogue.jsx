import useFetch from "../hooks/useFetch";
import CarteFilm from "../components/CarteFilm";
import Recherche from "../components/Recherche";
import { useState } from "react";

function Catalogue(){
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-CA`;
    const { donnees, isLoading, error } = useFetch(url);
    
    const [recherche, setRecherche] = useState("");

    if(isLoading){
        return (
            <p>Chargement du catalogue...</p>
        );
    }

    if(error) {
        return(
            <p>Erreur : {error}</p>
        );
    }

    return(
        <div>
            <h1>Catalogue de films</h1>

            <Recherche recherche={recherche} setRecherche={setRecherche}/>

            <div className="films-grid">
                {donnees?.results?.map((film) => (
                    <CarteFilm key={film.id} film={film} />
                ))}
            </div>
        </div>
    )

}

export default Catalogue;