function NonTrouve({recherche, onRetour}){
    return(
        <div className="film-introuvable">
            <div className="introuvable-icone">🎬</div>

            <h2>Aucun film trouvé</h2>

            <p>
                Aucun résultat ne correspond à votre recherche
                {recherche && <strong> « {recherche} »</strong>}.
            </p>

            <p>Essayez un autre titre ou une autre orthographe.</p>

            <button onClick={onRetour}>
                Retour au catalogue
            </button>
        </div> 
    )
}

export default NonTrouve;