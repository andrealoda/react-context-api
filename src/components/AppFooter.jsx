import { Link } from "react-router-dom"

export default function AppFooter() {

    return (
        <>
<footer className="text-center py-4 mt-5">
    <div className="glass-card d-inline-block px-4 py-3">
        <Link to="/" className="text-primary-purple mx-3">Home</Link>
        <Link to="/chi-siamo" className="text-primary-purple mx-3">Chi Siamo</Link>
        <Link to="/prodotti" className="text-primary-purple mx-3">Prodotti</Link>
    </div>
</footer>
        </>
    )
}