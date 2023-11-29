import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="text-center">
      {product.id ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
};