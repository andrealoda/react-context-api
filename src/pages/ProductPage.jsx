import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { BouncyArc } from 'ldrs/react';

export default function ProductPage() {
    const { id } = useParams();
    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({})
    let navigate = useNavigate();

    useEffect(() => {
        setProduct({});
        setTimeout(() => {
            fetch(api_url)
                .then(res => res.json())
                .then(data => setProduct(data))
                .catch(err => console.error(err))
        }, 1500); // 1.5 secondi di ritardo
    }, [id])

    if (!product.image) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container-loader">
                    <div className="cube"></div>
                </div>
            </div>
        );
    }


    return (
        <>

            <div className="card glass-card mx-auto my-5" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 p-3">
                        <img src={product?.image} className="img-fluid rounded-start shadow-lg" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title team-text">{product?.title}</h5>
                            <p className=" text-body-custom">{product?.category}</p>
                            <p className=" text-body-custom">{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn bg-text-dark text-light-custom" onClick={() => { navigate("/prodotti/" + (Number(id) - 1)) }} type="button">PREV</button>
                <button className="btn bg-text-dark text-light-custom" onClick={() => { navigate("/prodotti/" + (Number(id) + 1)) }} type="button">NEXT</button>
            </div>
            <div className="d-flex justify-content-center gap-3 mt-2">
                <button className="btn bg-text-dark text-light-custom" onClick={() => { navigate("/prodotti") }} type="button">BACK TO PRODUCTS</button>
            </div>
        </>

    )

}



