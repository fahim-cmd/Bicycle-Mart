import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <div>
            <div class="sidebar">
                <Link class="active" to="/home">Home</Link>
                <Link to="/manage">Manage Product</Link>
                <Link to="/addProduct">Add Product</Link>
                <Link to="/editProduct">Edit Product</Link>
            </div>

            {/* <div class="content">
                
            </div> */}
        </div>
    );
};

export default SideNav;