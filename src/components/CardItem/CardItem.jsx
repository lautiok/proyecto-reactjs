import Swal from 'sweetalert2';

export const CartItem = ({ item, quantity, onRemove }) => {
    const handleRemoveItem = () => {
        Swal.fire({
            title: `Usted desea eliminar el producto ${item.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                onRemove(item.id);
                Swal.fire(
                    'Producto eliminado',
                    `Usted ha eliminado el producto ${item.name} del carrito`,
                    'success'
                )
            }
        })
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="card-text">Precio: {item.price}</p>
                <p className="card-text">Cantidad: {quantity}</p>
                <button onClick={handleRemoveItem} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    );
};