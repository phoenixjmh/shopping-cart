import { useState } from "react";


const Item = ({item,totalPrice,setTotalPrice})=>{
    const [amountInCart,setAmountInCart]= useState(1);
    const handleIncrease=()=>{
        setAmountInCart(amountInCart+1);
        setTotalPrice(Number(totalPrice)+Number(item.price*amountInCart));
    }

    const handleDecrease=()=>{
        
    }


    const handleManualInput=(e)=>{
        let val=e.target.value;
        setAmountInCart(val);
    }
    
    return(
    <div className="cartItem" id={item.id} key={item.id + "cart"}>
    <img src={item.img} alt="" />
    <p className="make-label">
        Brand:
    </p>
      <p>{item.make}</p>
    <p className="model-label">
        Product Model:
    </p>
      <p>{item.model}</p>
    <p className="price-label">
        Price:
    </p>
      <p>{item.price}</p>
    <p className="amount">
        <button className="decrease"onClick={()=>setAmountInCart(amountInCart-1)}>-</button>
        <input type="text" className="amount-input"onChange={(e)=>handleManualInput} pattern="^\d+$" value={amountInCart}></input>
        <button className="increase"onClick={handleIncrease}>+</button>
    </p>
  </div>
)

}

export default Item;