import { ReactComponent as CartIcon } from "../icons/cart.svg";
import { Link } from "react-router-dom";
const Nav = ({ cart, openCart }) => {
  return (
    <nav>
      <Link to ='/'>
        <h2 id="nav-title">
          TONE-DEPOT
        </h2>
      </Link>
      <h2 onClick={openCart}>
        <CartIcon />
        <div className="cart-badge">{cart.length}</div>
      </h2>
    </nav>
    
  );
};

export default Nav;
