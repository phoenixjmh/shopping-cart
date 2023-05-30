import { ReactComponent as CartIcon } from "../icons/cart.svg";
import { ReactComponent as HomeCartIcon } from "../icons/home-cart.svg";
import { Link } from "react-router-dom";
const Nav = ({ cart, cartOpen, setCartOpen, navType }) => {
  return (
    
    <nav className={navType}>
    {navType==='shop'?
    <Link to="/">
      <h2 id="nav-title">TONE-DEPOT</h2>
    </Link>
    :null}
    <h2 onClick={setCartOpen}>
    {navType==='shop'?<CartIcon /> : <HomeCartIcon/>}
      <div className="cart-badge">{cart?.length}</div>
    </h2>
  </nav>


      
 
    
  );
};

export default Nav;
