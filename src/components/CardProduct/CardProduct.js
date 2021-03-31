import React from 'react';
import { Card } from 'react-bootstrap';

const CardProduct = ({ cycles }) => {


    return (
        <div className="mx-5 mt-4">
            
                <Card style={{ width: '18rem', padding: '5px'}}>
                    <Card.Img style={{width: '88%', margin: '6% 0 0 6%'}} variant="top" src={cycles.imgUrl} />
                    <Card.Body>
                        <Card.Title>{cycles.name}</Card.Title>
                    </Card.Body>

                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Text> ${cycles.price} </Card.Text>
                            <button>buy</button>
                        </div>
                    </Card.Body>
                </Card>
        
        </div>
    );
};

export default CardProduct;