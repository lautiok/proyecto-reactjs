import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="border m-2 card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <img className="custom-img-size" src={img} alt={name} />
        <p className="card-text">{description}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-outline-secondary">Detalles</button>
        </Link>
      </div>
    </div>
  );
};