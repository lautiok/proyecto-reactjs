import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext'
import { db } from "../../config/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

export const OrderForm = ({ cart }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [phone, setPhone] = useState('');
    const { clearCart } = useContext(CartContext)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email !== confirmEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los correos electrónicos no coinciden',
            });
            return;
        }

        const order = {
            firstName,
            lastName,
            email,
            phone,
            items: cart,
        };

        try {
            const docRef = await addDoc(collection(db, 'order'), order);
            Swal.fire(
                'Exelente!',
                `Orden creada con éxito. Número de orden: ${docRef.id}`,
                'success'
            );
            clearCart();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al crear la orden.',
                footer: `<p>Detalle del error: ${error.message}</p>`
            });
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmEmail" className="form-label">Confirmar Correo Electrónico</label>
                    <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Comprar</button>
            </form>
        </div>
    );
};