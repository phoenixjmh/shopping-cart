import { useState } from "react";
import { useEffect } from "react";
import Item from "./Item";
//Add ability to increase or decrease the amount of a particular item

//Style accordingly

const Cart = ({ cart ,setCart}) => {
  console.log(cart);
  let allItemPrices= cart.slice().map((item) => item.price);
  let renderCart= [...new Set(cart)];

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    
    setTotalPrice(
    allItemPrices.length>0?
        allItemPrices.reduce((a, b) => {
          return Number(a) + Number(b);
        })
        :0
      );
      

      },
  [allItemPrices]);


  let props={
    allItemPrices:allItemPrices,
    totalPrice:totalPrice,
    setTotalPrice:setTotalPrice,
    cart:cart,
    setCart:setCart

  }
  return (
    <div className="cart">
      <div className="contents">
        {renderCart.map((item) =>{
          if(!item.isDuplicate)
          return <Item {...props} key={item.id}item={item}/>
        }
          
       )

      } 

      </div>
      <h4 className="total">TOTAL: {totalPrice}</h4>
    </div>
  );
};
export default Cart;
