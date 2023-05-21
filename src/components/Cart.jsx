import { useState } from "react";
import { useEffect } from "react";
export const Cart = ({cart})=>{
    let totalPrices=cart.slice().map(item=>item.price);
    console.log(totalPrices);
    const [totalPrice,setTotalPrice] = useState(0);
  
    useEffect(()=>{
        setTotalPrice(totalPrices.reduce((a,b)=>{
            return Number(a)+Number(b)
        }))
    })
            
    return(
    <div className="cart">
        
            <div className="contents">
                {cart.map(item=>(
                    <div className="cartItem" id={item.id} key={item.id+'cart'}>
                        <img src={item.img} alt="" />
                        <h3>{item.price}</h3>
                        <h3>{item.make}</h3>
                        <h3>{item.model}</h3>
                    </div>
                ))}

            </div>
        <h4 className="total">TOTAL: {totalPrice}</h4>

    </div>
    )
}

