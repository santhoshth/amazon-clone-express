import '../styles/Orders.css';
import Order from '../components/Order';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState([]);

    setOrders([]);

    // const navigate = useNavigate();

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            {orders.map(order =>
                <Order order={order} />
            )}
        </div>
    )
}

export default Orders