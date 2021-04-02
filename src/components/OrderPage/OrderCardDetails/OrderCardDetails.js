import React from 'react';

const OrderCardDetails = ({ order }) => {
    console.log(order)
    const { name, email, orderPlaced, price, imgUrl } = order;
    return (
        <div className="container" style={{margin: '20px', padding: '30px', borderRadius: '15px', boxShadow: '8px 8px 35px lightgrey'}}>
           
            <div className="row">
                <div className="col-md-4 ">
                    <img style={{ width: '100%' }} src={imgUrl} alt="" />

                </div>
                <div className="col-md-6 mt-5">
                    <p>Name: {name}</p>
                    <p>Order Time: {orderPlaced}</p>
                    <p>Email: {email}</p>
                    <h4>price: ${price}</h4>
                </div>
            </div>

        </div>
    );
};

export default OrderCardDetails;