import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.scss"
import TrumpImg from "../../src/assets/tramp.jpg"

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function productData() {
            const res = await axios.get("https://dummyjson.com/posts");
            console.log(res.data.posts);
            setProducts(res.data.posts);
        }
        productData();
    }, []);

    return (
        <>
            <div className="card">
                <h1>Products: </h1>
                <div className="card__cards">
                    {products.map((item) => (
                        <div key={item.id} className="card__data">
                            <div className="card__img">
                                <img src={TrumpImg} alt="" />
                            </div>
                            <p className="card__title">{item.title}</p>
                            <p className="card__tags">{item.tags}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
