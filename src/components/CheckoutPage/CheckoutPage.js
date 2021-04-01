import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ProductContext, UserContext } from '../../App';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useContext(ProductContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [chooseDate, setChooseDate] = useState({orderPlaced : new Date()});

    const newId = id;
    const selectProduct = product.find(pd => pd._id === newId)
    

    const { name, price } = selectProduct;

    // console.log(selectProduct)
    
    const handleDateChange = (date) =>{
        let newDate = {...chooseDate}
        newDate = date;
        console.log(newDate)
        setChooseDate(newDate);
    }


    const handleOrders = () => {
        const newOrders = {...loggedInUser, ...chooseDate, ...product}
        fetch('http://localhost:5050/addOrders', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(newOrders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div>

            <h1>checkout</h1>

            <table className="tableStyle">
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Time</th>
                    <th>Price</th>
                    
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>1</td>
                    <input type="date" name="" class="form-control mb-3 border-0"  onChange={handleDateChange} id=""/>
                    <td>{price}</td>
                </tr>
            </table>

            <button onClick={handleOrders}><Link to="/orderPage">Checkout</Link></button>
        </div>
    );
};

export default CheckoutPage;