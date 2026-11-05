import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



function Film(){
    const { id } = useParams();
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-CA`;
    const { donnees, isLoading, error } = useFetch(url);

    if (isLoading) {
        return <p>Chargement du film...</p>;
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    if (!donnees) {
        return <p>Film introuvable.</p>;
    }

    return(
        <div className="detail-film">
            <Link to="/catalogue" className="retour">
                ← Retour au catalogue
            </Link>

            <div className="detail-contenu">
                <div className="detail-affiche">
                    {donnees.poster_path && (
                        <img src={`https://image.tmdb.org/t/p/w500${donnees.poster_path}`} alt={donnees.title} />
                    )}
                </div>
                <div className="detail-infos">
                    <h1>{donnees.title}</h1>

                    {donnees.tagline && (
                        <p className="tagline">{donnees.tagline}</p>
                    )}

                    <p>Date de sortie : {donnees.release_date}</p>
                    <p>Durée : {donnees.runtime} minutes</p>
                    <p>Note : {donnees.vote_average?.toFixed(1)} / 10</p>
                    <p>Genres : {" "}{donnees.genres?.map((genre) => genre.name).join(", ")}</p>

                    <h2>Synopsis</h2>
                    <p>{donnees.overview || "Aucun synopsis disponible."}</p>
                </div>
            </div>

        </div>
    )
}

export default Film;