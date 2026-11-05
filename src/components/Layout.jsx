import { Link, Outlet, NavLink } from "react-router-dom";



function Layout(){

    return(
        <>
            <header>
                <nav>
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/catalogue">Catalogue</NavLink>
                    
                </nav>
                
                <hr />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <hr />
                <p> Application Éducative - CineVault - Sebastien Poulin</p>
            </footer>
        </>
    )
}

export default Layout;