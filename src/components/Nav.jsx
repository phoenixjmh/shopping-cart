import { ReactComponent as CartIcon } from "../icons/cart.svg";

const Nav = ({ cart, openCart }) => {
  return (
    <nav>
      <h2 onClick={openCart}>
        <CartIcon />
        <div className="cart-badge">{cart.length}</div>
      </h2>
    </nav>
  );
};

export default Nav;
