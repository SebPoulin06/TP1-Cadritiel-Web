import useFetch from "../hooks/useFetch";

function Catalogue(){
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-CA`;
    const { donnees, isLoading, error } = useFetch(url);

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

            <div>
                {donnees?.results?.map((film) => (
                    <div key={film.id}>
                        <h2>{film.title}</h2>

                        {film.poster_path && (
                            <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title}/>
                            )}

                            <p>Note : {film.vote_average}/10</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Catalogue;