import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductContext, UserContext } from '../../App';
import NavItems from '../NavItems/NavItems';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useContext(ProductContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [chooseDate, setChooseDate] = useState({ orderPlaced: new Date() });

    const newId = id;
    const selectProduct = product.find(pd => pd._id === newId)

console.log(selectProduct)
    const { name, price, imgUrl, weight } = selectProduct;

    console.log(selectProduct)

    const handleDateChange = (date) => {
        let newDate = { ...chooseDate }
        newDate = date;
        console.log(newDate)
        setChooseDate(newDate);
    }


    const handleOrders = () => {
        const newOrders = { ...loggedInUser, ...chooseDate, name, price, weight, imgUrl }
        fetch('http://localhost:5050/addOrders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <>
        
            <div className="container">
            <NavItems></NavItems>
                <h1 style={{marginLeft: '6%'}}>checkout</h1>

                <table className="tableStyle">
                    <tr>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Quantity</th>
                        <th>Price</th>

                    </tr>
                    <tr>
                        <td>{name}</td>
                        <input type="date" name="" class="form-control mb-3" onChange={handleDateChange} style={{ border: 'none' }} id="" />
                        <td style={{ borderLeft: '1px solid lightgray' }}>1</td>
                        <td>{price}</td>
                    </tr>
                </table>

                <button onClick={handleOrders} className="btn btn-outline-danger d-flex float-right mt-5" style={{ marginRight: '7%' }}>
                    <Link to="/orderPage">Checkout</Link></button>

            </div>
        </>
    );
};

export default CheckoutPage;