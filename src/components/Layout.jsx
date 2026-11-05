import { Link, Outlet, NavLink } from "react-router-dom";



function Layout(){

    return(
        <div className="layout">
            <header className="site-header">
                <nav className="site-nav">
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/catalogue">Catalogue</NavLink>
                    
                </nav>
                
            </header>

            <main className="site-footer">
                <Outlet />
            </main>

            <footer className="site-footer">
                <p> Application Éducative - CineVault - Sebastien Poulin</p>
            </footer>
        </div>
    )
}

export default Layout;