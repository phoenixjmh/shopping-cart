import { Link } from "react-router-dom"
const Nav=({cart,openCart})=>(
    <nav>
      <Link to ='/'>
        <h2>HOME</h2>
      </Link>
      <Link to ="/shop">
      <h2>
        SHOP
        </h2>
      </Link>
      {/* <Link to = "/cart"> */}
      {cart!==null&&cart!==undefined&&cart.length>0 && openCart!==null?
      <h2 onClick={openCart}>
        CART  {cart.length}

      </h2>
      :null
      }
        {/* </Link> */}
    </nav>
)
export default Nav;