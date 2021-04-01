import React, { useContext, useEffect, useState } from 'react';
import { ProductContext, UserContext } from '../../App';

const OrderPage = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [product, setProduct] = useContext(ProductContext)
    console.log(orders)
   
    useEffect(() => {
        fetch('http://localhost:5050/orderRead?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>

            <h2>you have {orders.length}</h2>
            {
                orders.map(od => <li>

                    Name: {od.name}
                    price: {od.price}
                    Time: {(new Date (od.orderPlaced).toDateString('dd/MM/YYYY'))}
                </li>)
            }
        </div>
    );
};

export default OrderPage;