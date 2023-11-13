import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({}); 

  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((resp) => setProduct(resp))
      .catch((err) => {
        console.error('Error fetching product:', err);
        
      });
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </div>
  );
};