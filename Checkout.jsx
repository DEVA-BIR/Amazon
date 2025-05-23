import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const { state: { basket= [] }, dispatch } = useStateValue();
  
      //const [state ,dispatch ] = useStateValue();
      //const { basket } = state;
  return (
    <div className="checkout">
   <div className="checkout__left">
    <img 
    className="checkout__ad"
    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
    alt="" 
    />
    <h3>Hello</h3>
    <h2 className="checkout__title">Your Amazon Cart</h2>
    {basket.map((item) => (
    <CheckoutProduct 
    id={item.id}
    title={item.title}
    image= {item.image}
    price= {item.price}
    rating = {item.rating}
    />
  ))}
   </div>
   <div className="checkout__right">
    <h1>Subtotal</h1>
    <Subtotal />
   </div>
    </div>
  );
}

export default Checkout
