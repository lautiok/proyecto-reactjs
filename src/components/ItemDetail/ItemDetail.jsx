import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import style from "./ItemDetail-model.css";

export const ItemDetail = ({ description, price, stock, name, img }) => {
  const onAdd = (items) => {
    Swal.fire(`Se agregaron ${items} al carrito`);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card mx-auto">
            <img
              src={img}
              className="card-img-top img-fluid custom-img-size d-block mx-auto"
              alt={name}
            />
            <div className="mt-4">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">Precio: ${price}</p>
              <div className="d-flex justify-content-center">
                <ItemCount stock={stock} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
