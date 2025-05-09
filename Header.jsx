import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//

function Header() {
const { state: { basket, user }, dispatch } = useStateValue();
//const [state, dispatch] = useStateValue();
//const { basket, user } = state; 
//const [{basket,user },dispatch ]= useStateValue();
//const [state, dispatch] = useStateValue();

       const handAuthentication = () => {
        if (user)  {
            auth.signOut();
        }
       };

  return (
    <div className="header">
        <Link to="/">
     <img 
     className="header__logo"
     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
    </Link>
    
    <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
    <Link to={!user && '/Login'}>
        <div className="header__option">
            <span className="header__optionLineOne">{user?.email}</span>
            Hello {!user ? 'Guest': user.email}
            <span className="header__optionLineTwo"></span>
            {user ? 'Sign Out' : 'Sign In '}
        </div></Link>
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
        </div>
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo  header__basketCount">
              {basket?.length} 
            </span>

        </div>
        </Link>
        </div>

    </div>
    
  );
}

export default Header;
