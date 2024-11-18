import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import "./ItemDetail.css"

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        const productSelected = products.find((el) => el.id === +id);
        setProduct(productSelected);
    }, [id]);

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} className="product-img" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
        </div>
    );
};

export default ItemDetail;