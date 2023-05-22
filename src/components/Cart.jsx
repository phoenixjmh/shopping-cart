import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";
//Add ability to increase or decrease the amount of a particular item

//Style accordingly

const Cart = ({ cart }) => {
  let totalPrices = cart.slice().map((item) => item.price);
  console.log(totalPrices);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      totalPrices.reduce((a, b) => {
        return Number(a) + Number(b);
      })
    );
  }, [cart]);


  return (
    <div className="cart">
      <div className="contents">
        {cart.map((item) =>(
            <Item totalPrices={totalPrices}key={item.id}item={item}totalPrice={totalPrice}setTotalPrice={setTotalPrice}/>

        )

        
)}
      </div>
      <h4 className="total">TOTAL: {totalPrice}</h4>
    </div>
  );
};
export default Cart;
