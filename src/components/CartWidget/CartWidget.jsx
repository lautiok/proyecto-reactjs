import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, { quantity }) => total + quantity, 0);

  return (
    <div>
      <Link to={"/cart"}>
        <FaShoppingCart size={30} color='black' />
        {totalItems > 0 && <span style={{ fontSize: '25px', color: 'black' }}>{totalItems}</span>}
      </Link>
    </div>
  );
};
export default CartWidget;