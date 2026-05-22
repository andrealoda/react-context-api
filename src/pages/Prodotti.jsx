import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppSidebar from "../components/AppSidebar"


export default function Prodotti() {


    const storeApi = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    const [activeCategories, setActiveCategories] = useState("All")

    useEffect(() => {

        // console.log('component mounted');

        fetch(storeApi)
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])

    const filteredProducts = activeCategories === "All" ? products : products.filter((product) => product.category === activeCategories);

    return (

        <>

            <AppSidebar products={products}
            activeCategories={activeCategories}
            setActiveCategories={setActiveCategories}/>

            <div className="main-wrapper mx-auto ">
                <div className="row d-flex justify-content-center gap-3 left">

                    {filteredProducts.map(product => (
                        <div className="card rounded-5 bg-light-custom" style={{ width: "350px" }} key={product.id}>
                            <img src={product.image} className="card-img-top p-3" alt="Product image" />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Categoria: {product.category}</p>
                                <p className="fw-bold mb-3">${product.price}</p>

                                <Link to={`/prodotti/${product.id}`} className="btn bg-brand-gradient text-white w-100 mt-auto">Dettagli</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}