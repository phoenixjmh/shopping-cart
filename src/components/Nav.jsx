import { Link } from "react-router-dom"
import {ReactComponent as CartIcon } from '../icons/cart.svg'

const Nav=({cart,openCart})=>{


return(
  
    <nav>
      {/* {console.log(cart)} */}
      {/* <Link to ='/' state={cart}>
        <h2>HOME</h2>
      </Link> */}
      {/* <Link to ="/shop" state={cart}>
      <h2>
        SHOP
        </h2>
      </Link> */}
      {/* <Link to = "/cart"> */}
      {/* {cart!==null&&cart!==undefined&&cart.length>0 && openCart!==null? */}
      <h2 onClick={openCart}>
        <CartIcon/>
        <div className="cart-badge">
           {cart.length}
          

          </div> 

      </h2>
        {/* :null
      } */}
        {/* </Link> */}
    </nav>
)
}

export default Nav;