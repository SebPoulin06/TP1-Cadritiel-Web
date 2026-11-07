import { Link, Outlet, NavLink } from "react-router-dom";
import BoutonTheme from "./BoutonTheme.jsx"


function Layout(){

    return(
        <div className="layout">
            <header className="site-header">
                <nav className="site-nav">

                <NavLink to="/" className="site-logo">
                    <span className="logo-icone">🎬</span>
                    <span>CineVault</span>
                </NavLink>

                <div className="nav-liens">
                    <NavLink to="/" end>
                    Accueil
                    </NavLink>

                    <NavLink to="/catalogue">
                    Catalogue
                    </NavLink>
                </div>

                <div className="nav-actions">
                    <BoutonTheme />
                </div>

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