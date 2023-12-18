import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail-model.css";

export const ItemDetail = ({ id }) => {
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadProduct();
  }, [id]);

  const onAdd = (items) => {
    addItem(product, items);
    Swal.fire(`Se agregaron ${items} al carrito`);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card mx-auto">
            <img
              src={product.img}
              className="card-img-top img-fluid custom-img-size d-block mx-auto mt-4"
              alt={product.name}
            />
            <div className="mt-4">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Precio: ${product.price}</p>
              <div className="d-flex justify-content-center">
                <ItemCount stock={product.stock} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};