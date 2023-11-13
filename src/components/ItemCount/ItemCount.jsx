import React from "react";
import useCounter from "../../hook/UseCount/UseCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  return (
    <div className="d-flex flex-column col-3 justify-content-center align-content-center border border-3 border-dark rounded-3 p-4 text-dark mb-4">
      <div className="mb-3">
        <button className="btn btn-outline-dark mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-dark mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-dark" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
