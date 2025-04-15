import React from 'react';
import './Product.css';
import  { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';

function Product({id,title,image,price,rating }) {
  //const [{basket}, dispatch] = useStateValue();
 const {state,dispatch} = useStateValue();
//console.log("this is the basket", basket);
  const addToBasket = () => {

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    }


  
  return (
    <div className="product">
       <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map(() => {
                  <p>*</p>
                })}
                </div>
           </div>
       <img 
       src={image} alt="" />
       <Link to="/Checkout">
       <button  className="Add-to-basket"onClick={addToBasket}>Add to Basket</button>
       </Link>
</div>
  );
}

export default Product
