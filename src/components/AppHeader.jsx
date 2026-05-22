import { NavLink, useLocation } from "react-router-dom"


import { useContext } from "react";
import { BudgetContext} from "../contexts/BudgetContext";



export default function AppHeader() {

const { budgetMode, setBudgetMode } = useContext(BudgetContext);

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
                            <input type="checkbox" className="btn-check" id="btn-check-outlined" checked={budgetMode} onChange={(e) => setBudgetMode(e.target.checked)} />
                                <label className="btn btn-outline-light" htmlFor="btn-check-outlined">{budgetMode ? "Disattiva" : "Attiva"} Modalità Budget</label>
                        </div>)}
                    </div>
                </nav>
            </header>

        </>
    )
}