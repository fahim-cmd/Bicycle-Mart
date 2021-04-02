import React, { useContext, useEffect, useState } from 'react';
import { ProductContext, UserContext } from '../../App';
import OrderCardDetails from './OrderCardDetails/OrderCardDetails';


const OrderPage = () => {
    const [orders, setOrders] = useState({});
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
            <h4 style={{textAlign: 'center', padding: '20px'}}>Your ordered Items: {orders.length}</h4>
           
            {
                orders.map(od => <OrderCardDetails order={od}></OrderCardDetails>)
            } 
        </div>
    );
};

export default OrderPage;