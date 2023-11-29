import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productsCollection = await getDocs(collection(db, 'products'));
        const productsData = productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const filteredProducts = category ? productsData.filter(product => product.gender === category) : productsData;
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="container text-center">
      <div>{greeting}</div>
      {isLoading ? <h2 className="mt-5">Cargando productos...</h2> : <ItemList products={products} />}
    </div>
  );
};