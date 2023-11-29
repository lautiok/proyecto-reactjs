import React from "react";
import useCounter from "../../hook/UseCount/UseCount";
import "./itemcount.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  return (
    <div className="counter-container">
      <div className="counter">
        <button className="btn btn-outline-secondary counter-btn" onClick={decrement}>-</button>
        <span className="counter-value">{count}</span>
        <button className="btn btn-outline-secondary counter-btn" onClick={increment}>+</button>
      </div>
      <button className="btn btn-outline-secondary p-3" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
