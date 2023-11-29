import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { OrderForm } from '../OrderForm/OrderForm';
import { CartItem } from '../CardItem/CardItem';

export const Cart = () => {
    const { cart, removeItem } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mt-5">
                <p className="lead">No hay productos en el carrito.</p>
                <Link to="/">
                    <button className="btn btn-outline-secondary">Volver a la página de inicio</button>
                </Link>
            </div>
        );
    }

    const totalPrice = cart.reduce((total, { item, quantity }) => total + item.price * quantity, 0);

    return (
        <div>
            <div className="container mt-5">
                {cart.map(({ item, quantity }) => (
                    <CartItem key={item.id} item={item} quantity={quantity} onRemove={removeItem} />
                ))}
                <p className="lead">Total: {totalPrice}</p>
                <OrderForm cart={cart} />
            </div>
        </div>
    );
};