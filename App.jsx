import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Create from './Create';
import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth'; 
import { useStateValue } from  './StateProvider'
import Middle from './Middle';
import Gap from './Gap.JSX'
import Footer from './Footer';
import Error from './Error';

function App() {
     //const [ {}, dispatch ] = useStateValue();
     //const [state, dispatch] = useStateValue();
     const { dispatch } = useStateValue(); 
     const auth = getAuth();
     useEffect(() => { 
      auth.onAuthStateChanged((authUser) => {

        if (authUser) {


          dispatch({
            type: 'SET_USER',
            user: authUser,
          });
        } else {

          dispatch({
            type: 'SET_USER',
            user: null,
          });
        }
      })
      
     }, [])
  

  return (
    <Router>
  <div className="App">
     <Header />
      <Routes>
      <Route path="/Login" element= {<Login />} />
      <Route path="/Checkout" element= {<Checkout />} />
      <Route path="/" element= {<Home />} />
      <Route path="/Create" element= {<Create />} />
      <Route path="*" element= {<Error />} />
    </Routes>
    <Middle />
    <Gap />
    <Footer />
    </div>
    </Router>
  
    
   
  );
}

export default App
