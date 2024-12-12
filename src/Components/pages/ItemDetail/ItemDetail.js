import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  Counter  from "../../common/Counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

import "./ItemDetail.css"

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        let productCollection = collection(db, "products");
        let refDoc = doc(productCollection, id);
        const getDocById = getDoc(refDoc);
        getDocById.then((res) => setProduct({...res.data(), id : res.id}))
    }, [id]);

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} className="product-img" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-category">stock disponible: {product.stock} u</p>
            {product.stock !== undefined && <Counter product={product} />}
        </div>
    );
};

export default ItemDetail;