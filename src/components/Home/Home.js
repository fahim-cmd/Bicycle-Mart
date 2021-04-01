import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import CardProduct from '../CardProduct/CardProduct';
import NavItems from '../NavItems/NavItems';


const Home = () => {

    const [product, setProduct] = useContext(ProductContext)
    
    const [cycles, setCycles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(res => res.json())
            .then(data => {
                setCycles(data)
                setProduct(data)
                
            })
    }, [])
 

    return (
        <>
            <div>
               <NavItems></NavItems>
            </div>

            <div className="row justify-content-around ">
                {
                    cycles.map(cycle => <CardProduct cycles={cycle} key={cycle._id}></CardProduct>)
                }
            </div>
            
        </>
    );
};

export default Home;