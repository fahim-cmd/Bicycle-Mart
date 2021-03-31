import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideNav from '../SideNav/SideNav';
import './Admin.css';

const Admin = () => {
    const { register, handleSubmit, formState } = useForm();
    const [imgUrl, setImgUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imgUrl: imgUrl
        }
        const url = 'http://localhost:5050/addProduct'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server side response", res))
    };
    // make sure to read state before render to subscribe to the state update (Proxy).
    const { dirtyFields } = formState;

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imgData = new FormData();
        imgData.set('key', '76ac7595d5b5f937845b98eb46f0fd67');
        imgData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <h3>admin admin</h3>
            <SideNav></SideNav>

            <form onSubmit={handleSubmit(onSubmit)} className="saveProductForm">
                <label>Product name</label>
                <input type="text" name="name" placeholder="Write Your Product Name" ref={register({ required: true })} />

                <label>Add Price</label><br />
                <input type="text" name="price" placeholder="add a price" ref={register} />

                <label>weight</label> <br />
                <input type="text" name="weight" placeholder="add a weight" ref={register} />

                <label>Add Photo</label> <br />
                <input type="file" name="photo" onChange={handleImageUpload} />

                <br />
                <input type="submit" />
            </form>

        </div>
    );
};

export default Admin;