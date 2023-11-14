import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = () => {
    setIsLoading(true);

    getProducts()
      .then((resp) => {
        const filteredProducts = category ? resp.filter(product => product.gender === category) : resp;
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (
    <div className="container text-center">
      <div>{greeting}</div>
      {isLoading ? <h2 className="mt-5">Cargando productos...</h2> : <ItemList products={products} />}
    </div>
  );
};
