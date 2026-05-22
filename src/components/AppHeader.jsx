import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <>
            <header className="sticky-top my-3 mx-3">
                <nav className="navbar navbar-expand-lg mb-2 glass-card">
                    <div className="container-fluid">
                        <a className="btn navbar-brand" href="/">
                            <img src={"../src/assets/gigghy-logo.svg"} alt="Gigghy Shop" width="30" height="24"></img>
                        </a>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/chi-siamo">Chi Siamo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/prodotti">Prodotti</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}