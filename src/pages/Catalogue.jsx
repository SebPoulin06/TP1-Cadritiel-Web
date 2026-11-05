import useFetch from "../hooks/useFetch";
import CarteFilm from "../components/CarteFilm";
import Recherche from "../components/Recherche";
import { useState } from "react";

function Catalogue(){
    const [recherche, setRecherche] = useState({recherche:""});
    const [page, setPage] = useState(1);
    const [rechercheActive, setRechercheActive] = useState("");

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const url = rechercheActive
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-CA&query=${encodeURIComponent(rechercheActive)}&page=${page}`
    : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-CA&sort_by=popularity.desc&page=${page}`;
    
    const { donnees, isLoading, error } = useFetch(url);
    const changerRecherche = (valeur) => {
        setRecherche(valeur);
        setPage(1);
    }
    const totalPages = Math.min(donnees?.total_pages ?? 1, 500);

    function lancerRecherche(){
        setRechercheActive(recherche.recherche.trim());
        setPage(1);
    }

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

            <Recherche recherche={recherche} setRecherche={changerRecherche} lancerRecherche={lancerRecherche}/>

            <div className="films-grid">
                {donnees?.results?.length === 0 && (<p>Aucun film trouvé.</p>)}

                {donnees?.results?.map((film) => (
                    <CarteFilm key={film.id} film={film} />
                ))}
            </div>

            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Précédent</button>
                <span>Page {page} sur {totalPages}</span>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Suivant</button>
            </div>
        </div>
    )

}

export default Catalogue;