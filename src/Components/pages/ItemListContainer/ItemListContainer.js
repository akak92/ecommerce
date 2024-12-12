import {useEffect} from "react";
import {useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const {name} = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let refCollection = productsCollection;
    if ( name ) {
      let productsCollectionFiltered = query(productsCollection, where("category", "==" , name));
      refCollection = productsCollectionFiltered;
    }
    const getProducts = getDocs(refCollection);

    getProducts.then((res) => {
      let products = res.docs.map( el => {
        return {...el.data(), id: el.id}
      });
    setMyProducts(products);
    });
  }, [name]);

  return <ItemList myProducts={myProducts} />
};

export default ItemListContainer;