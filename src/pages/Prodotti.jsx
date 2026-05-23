import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppSidebar from "../components/AppSidebar"
import { BouncyArc } from 'ldrs/react';

import { useBudget } from "../contexts/BudgetContext";


export default function Prodotti() {

    const { budgetMode } = useBudget();

    const storeApi = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    const [activeCategories, setActiveCategories] = useState("All")

    useEffect(() => {

        setProducts([]);
        setTimeout(() => {
        fetch(storeApi)
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
        }, 1000)
    }, [])

        if (products.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container-loader">
                    <div className="cube"></div>
                </div>
            </div>
        );
    }

    const budgetProducts = budgetMode ? products.filter(product => product.price <= budgetMode) : products;

    const filteredProducts = activeCategories === "All" ? budgetProducts : budgetProducts.filter((product) => product.category === activeCategories);

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