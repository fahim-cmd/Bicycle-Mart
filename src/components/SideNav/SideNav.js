import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
    return (
        <div>
            <div class="sidebar">
                <h6 style={{fontFamily: 'cursive', color: 'white', fontWeight: 'bold', padding: '20px'}}>BICYCLE MART</h6>
                <Link class="active" to="/">Home</Link>
                <Link to="/admin">Manage Product</Link>
                <Link to="/admin">Add Product</Link>
                <Link to="/editProduct">Edit Product</Link>
            </div>

            {/* <div class="content">
                
            </div> */}
        </div>
    );
};

export default SideNav;