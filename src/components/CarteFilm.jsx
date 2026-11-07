import { Link } from "react-router-dom";


function CarteFilm({film}) {
    return(
        <Link to={`/film/${film.id}`} className="carte-film">
            {film.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w342${film.poster_path}`} alt={film.title}/>
            )}

            <h2>{film.title}</h2>
            <p>Sortie : {film.release_date}</p>
            <p>Note : {film.vote_average.toFixed(1)} / 10</p>
        </Link>
    )
}


export default CarteFilm;