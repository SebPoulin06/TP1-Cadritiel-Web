import { Link } from "react-router-dom";


function Acceuil(){
    return(
        <>
            <div className="acceuil">

                <section className="acceuil-hero">
                    <span className="acceuil-marque">CINEVAULT</span>

                    <h1>Le cinéma à portée de clic.</h1>

                    <p>
                        Explorez des milliers de films, découvrez de
                        nouvelles histoires et trouvez votre prochain
                        coup de cœur.
                    </p>

                    <Link to="/catalogue" className="accueil-bouton">
                        Explorer le catalogue →
                    </Link>
                </section>
                
                <section className="accueil-collections">
                    <h2>Découvrez nos collections</h2>

                    <div className="collections-grid">
                    
                        <Link to="/catalogue?tri=notes" className="collection-carte">
                        <span className="collection-icone">⭐</span>
                        <h3>Les mieux notés</h3>
                        <p>Explorez les films préférés des spectateurs.</p>
                        <span className="collection-lien">Explorer →</span>
                        </Link>

                        <Link to="/catalogue?tri=populaire" className="collection-carte">
                        <span className="collection-icone">🔥</span>
                        <h3>Films populaires</h3>
                        <p>Découvrez les films les plus populaires du moment.</p>
                        <span className="collection-lien">Explorer →</span>
                        </Link>

                        <Link to="/catalogue?tri=nouveautes" className="collection-carte">
                        <span className="collection-icone">🎬</span>
                        <h3>Nouveautés</h3>
                        <p>Découvrez les films récemment sortis.</p>
                        <span className="collection-lien">Explorer →</span>
                        </Link>

                        <Link to="/catalogue?tri=decouvrir" className="collection-carte">
                        <span className="collection-icone">🎞️</span>
                        <h3>À découvrir</h3>
                        <p>Partez à la découverte de nouveaux films.</p>
                        <span className="collection-lien">Explorer →</span>
                        </Link>
                    
                    </div>
                </section>
            </div>
        </>
    )
}

export default Acceuil;