import React, { useEffect, useState } from 'react';
import { db } from '../../config/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function MyProducts() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const orderCol = collection(db, 'order');
            const orderSnapshot = await getDocs(orderCol);
            const orderList = orderSnapshot.docs.map(doc => doc.data());
            setOrders(orderList);
        }
        fetchData()
    }, [])

    return (
        <div className="container mt-4">
            {orders.map((order, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h2 className="card-title">{`${order.firstName} ${order.lastName}`}</h2>                        <p className="card-text">{order.email}</p>
                        <ul>
                            {order.items && order.items.map((item, i) => {
                                console.log(item);
                                return <li key={i}>{item.item.name} - {item.quantity}</li>
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}