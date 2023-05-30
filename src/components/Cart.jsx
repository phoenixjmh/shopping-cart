import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";
import { ReactComponent as BackIcon } from "../icons/back.svg";

const Cart = ({ cart, setCart, closeCart }) => {
  console.log(cart);
  let allItemPrices = cart.slice().map((item) => item.price);
  let renderCart = [...new Set(cart)];

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartClass, setCartClass] = useState("cart opening");

  useEffect(() => {
    setTimeout(() => setCartClass("cart"), 300);
  }, []);
  useEffect(() => {
    setTotalPrice(
      allItemPrices.length > 0
        ? allItemPrices.reduce((a, b) => {
          return Number(a) + Number(b);
        })
        : 0
    );
  }, [allItemPrices]);

  let props = {
    cart: cart,
    setCart: setCart,
  };

  const handleClose = () => {
    setCartClass("cart closing");
    setTimeout(() => closeCart(), 300);
  };

  return (
    <div className={cartClass}>
      <h2 className="cart-label">Your Cart</h2>
      <div className="close-cart" onClick={handleClose}>
        <BackIcon />
      </div>
      <div className="contents">
        {renderCart.map((item) => {
          if (!item.isDuplicate)
            return <Item {...props} key={item.id} item={item} />;
        })}
      </div>
      <h4 className="total">Subtotal: ${Math.round(totalPrice * 100) / 100}</h4>
      <button id="checkout">
        <span className="icon"></span>
        <span className="label">Checkout</span>
      </button>
    </div>
  );
};
export default Cart;
