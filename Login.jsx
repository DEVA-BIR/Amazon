import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from 'react-router-dom';
import "./Login.css"


function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const register = async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password);
    };
    
   
   
    /*const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
        history.push("/");
    })
    .catch((error) => alert(error.message));
   };
   */

   /*const register = (e) => {
    e.preventDefault();


    auth.createUserWithEmailAndPassword(email,password).then((auth)=> {
    if(auth) {
        history.push("/");
    }
   })
   .catch((error) => alert(error.message));
   };*/
  

  return (
    <div className="login">
        <Link to="/">
    <img
    className="login__logo"
      src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
   alt="amazon-logo" /></Link>
    <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input
            id="email" 
            name="email"
            type="text"
            autoComplete="email"
            value={email}
            onChange ={(e) => setEmail(e.target.value )}
            />
            <h5>Password</h5>
            <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/">
                <button 
                type="submit"
                onClick= {signIn}
                className="login__signInButton"
                >
                    Sign In

                </button>
                </Link>
        </form>
        <Link to="/Create">
      <button onClick = {register} className="login__registerButton">
        Create your Amazon Account
      </button></Link>
    
    </div>
    </div>
  );
} 

export default Login;
