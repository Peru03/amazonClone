
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './Login.css'
import { auth } from "./firebase";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const signIn = e => {
        e.prventDefault()  // This line will prevent from Refreshing the page

        // Fancy Firebase Login Shittttttt............
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully create a new user with email and password
                console.log(auth);
            })
            .catch(error => alert(error.message))

        // Fancy Firebase Login Shittttttt............
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'

                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setemail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setpassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login_signInButton">Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register}
                    className="login_registerButton">Create New Account</button>
            </div>
        </div>

    )
}

export default Login