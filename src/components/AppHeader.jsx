import { NavLink, useLocation } from "react-router-dom"

import { useBudget } from "../contexts/BudgetContext";



export default function AppHeader() {

    const { budgetMode, setBudgetMode } = useBudget();

    const location = useLocation();
    const showBudgetToggle = location.pathname === "/prodotti";

    return (
        <>
            <header className="fixed-top my-3 mx-3">
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

                        {showBudgetToggle && (
                            <div className="d-flex gap-3">
                                <label className="btn btn-outline-dark" htmlFor="btn-check-outlined">Set Your Budget</label>
                                <input type="number" className="form-control" id="btn-check-outlined" value={budgetMode} onChange={(e) => setBudgetMode(parseFloat(e.target.value))} placeholder="Enter budget" />
                            </div>)}
                    </div>
                </nav>
            </header>

        </>
    )
}