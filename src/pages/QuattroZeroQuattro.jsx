import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function QuattroZeroQuattro() {
    let { "*": splat } = useParams();

    return (
        <div className="d-flex justify-content-center align-items-center vh-80">
            <div className="glass-card p-5 text-center">
                <div className="mb-4">
                    <img
                        src="src\assets\404.jpg"
                        alt="Oops... wrong place. Go back to start."
                        className="img-fluid rounded"
                        style={{ maxWidth: "500px" }}
                    / >
                </div>
                <h1 className="text-primary-purple fw-bold mb-3">404</h1>
                <p className="text-body-custom mb-4">La pagina {splat} non esiste.</p>
                <Link to="/" className="btn btn-primary bg-primary-purple border-0">
                    Torna alla Home
                </Link>
            </div>
        </div>
    )
}