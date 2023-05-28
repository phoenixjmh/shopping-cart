import Nav from "./components/Nav";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import Cart from "./components/Cart";
const Home = ({ cart, setCart, cartOpen, setCartOpen }) => {
  return (
    <>
      <Nav cart={cart} setCartOpen={setCartOpen} />
      <main>
        <div className="banner">
          <h1 id="title">TONE-DEPOT</h1>
        </div>
        <div className="info-panel">
          <p className="intro-text">
            The one stop shop for all music gear and related products.
          </p>
          <Link to="/shop">
            <button className="shop-button">Shop now</button>
          </Link>
        </div>
        {cartOpen ? (
          <Cart
            cart={cart}
            setCart={setCart}
            closeCart={() => setCartOpen(false)}
          />
        ) : null}
      </main>
    </>
  );
};

export default Home;
