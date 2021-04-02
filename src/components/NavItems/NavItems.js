import React from 'react';
import { Link } from 'react-router-dom';
import './NavItems.css'

const NavItems = () => {
    return (
        <div className="nav d-flex justify-content-end">
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
                <li>
                    <Link to="/deals">Deals</Link>
                </li>
                <Link to="/login"><button className="btn btn-outline-danger">Login</button></Link>
            </ul>
        </div>
    );
};

export default NavItems;