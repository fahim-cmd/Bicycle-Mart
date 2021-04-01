import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { ProductContext } from '../../App';

export default function CardProduct({ cycles }) {
    const history = useHistory()
    const handleBuyCycle = (_id) => {
        history.push(`/bicycle/${_id}`)
    }
    // const {_id} = cycles;
    // console.log(cycles);

    // export default function CardProduct ({cardProduct}){
    //     const history = useHistory()
    //     const handleBook = (_id) => {
    //         history.push(`/bicycle/${_id}`)
    //     }

return (
    <div className="mx-5 mt-4">

        <Card style={{ width: '18rem', padding: '5px', height: '350px' }}>
            <Card.Img style={{ width: '88%', margin: '6% 0 0 6%' }} variant="top" src={cycles.imgUrl} />
            <Card.Body>
                <Card.Title style={{color: '#dc3545'}}>{cycles.name}</Card.Title>
            </Card.Body>

            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Text style={{fontWeight: 'bold', color: '#dc3545', marginTop: '13px'}}> ${cycles.price} </Card.Text>

                    <button onClick={() => handleBuyCycle(cycles._id)} className="btn btn-outline-danger"> Buy Now </button>

                </div>
            </Card.Body>
        </Card>

    </div>
);
}


// export default CardProduct;