import { useState } from "react";


const Item = ({item,cart,setCart,totalPrice,setTotalPrice,allItemPrices,setAllItemPrices})=>{
    const [amountInCart,setAmountInCart]= useState(1);
    const handleIncrease=()=>{
        
        setAmountInCart(amountInCart+1);
        setCart(cart.concat(item));
    }

    const handleDecrease=()=>{
      const index=cart.indexOf(item);
      console.log(index);
      const newCart=cart.slice();
        const extractedElement=newCart.splice(index,1);
        setAmountInCart(amountInCart-1);
        setCart(newCart);
    }


    const handleManualInput=(e)=>{
        let val=e.target.value;
        setAmountInCart(val);
    }
    
    return(
    <div className="cartItem" id={item.id} key={item.id + "cart"}>
    <img src={item.img} alt="" />
   
      <div className="item-info">

      <p className="make">{item.make}</p>
    
      <p className="model">{item.model}</p>
    
      <p className="price">${item.price}</p>
      </div>
    <p className="amount">
        <button className="decrease"onClick={handleDecrease}>-</button>
        <input type="text" className="amount-input"onChange={(e)=>handleManualInput} pattern="^\d+$" value={amountInCart}></input>
        <button className="increase"onClick={handleIncrease}>+</button>
    </p>
  </div>
)

}

export default Item;