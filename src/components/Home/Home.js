import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardProduct from '../CardProduct/CardProduct';

const Home = () => {

    const [cycles, setCycles] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, [])

    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </div>

            <div className="row justify-content-around ">
                {
                    cycles.map(cycle => <CardProduct cycles={cycle}></CardProduct>)
                }
            </div>
        </>
    );
};

export default Home;