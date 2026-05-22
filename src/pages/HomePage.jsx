import { NavLink } from "react-router-dom";


export default function HomePage() {

    return (

        <>


                <div className="p-1 mb-3 main-wrapper rounded-5 bg-white">
                    <div className="container-fluid text-center py-5">
                        <div className="title">
                        <img src="../src/assets/gigghy-logo-completo.svg" alt="gigghy logo" className="px-5 mb-5"/>
                        </div>
                        <div className="hero">
                        <img src="../src/assets/hero-img.png" alt="hero-img" className="img-fluid"/>
                        </div>
                        <h1 className="display-5 fw-bold py-4">Join the Gigghy Side of shopping!</h1>
                        <p className="fs-4 px-5 text-dark-custom">
                            Doggo ipsum i am bekom fat blep very jealous pupper long woofer borkf borking doggo, very hand that feed shibe porgo very taste wow puggorino.
                            Snoot tungg wrinkler floofs very hand that feed shibe floofs, I am bekom fat smol borking doggo with a long snoot for pats most angery pupper
                            I have ever seen. Snoot borking doggo most angery pupper I have ever seen what a nice floof, the neighborhood pupper very taste wow.
                            The neighborhood pupper clouds super chub doge borkdrive, mlem wow very biscit. Puggorino super chub long woofer clouds h*ck, much ruin
                            diet long doggo sub woofer wow such tempt long bois, heckin wow very biscit smol.
                        </p>
                        <button className="btn bg-text-dark text-white btn-lg mt-4" type="button">
                            <NavLink className="nav-link" to="/Prodotti">Scrolla i nostri prodotti</NavLink>
                        </button>
                    </div>
                </div>

        </>

    )
}0