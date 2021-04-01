import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { ProductContext, UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    // const [product, setProduct] = useContext(ProductContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
// console.log(loggedInUser)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    //redirect checkout page 
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var {displayName, email} = result.user;
                // console.log(displayName, email)
                const signedInUser = {name: displayName,  email}
                setLoggedInUser(signedInUser)
                history.replace(from)

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{marginTop: '15%'}}>
            

            <button onClick={handleGoogleSignIn} style={{width: '40%', fontWeight: 'bold'}} className="btn btn-outline-danger">Google sign in</button>
        </div>
    );
};

export default Login;