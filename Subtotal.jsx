import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';

function Subtotal() {
   // const [{basket} ,dispatch] = useStateValue();
    const { state: { basket= [] }, dispatch } = useStateValue();
      const getBasketTotal = (basket) => 
        basket?.reduce((amount,item)  => item.price + amount, 0);
      
  return (
    <div className="subtotal">
        <CurrencyFormat 
        renderText={(value) => {
            <div>
                <p> Subtotal ({basket.length} items): <strong> {value}</strong>
                </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"  />
                        This Orders contains gift
                    </small>
                    </div>
                    
                
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />          
       <Link to="Checkout">
        <button>Proceed to Checkout</button></Link>
        </div>
      
    
  );
}

export default Subtotal
