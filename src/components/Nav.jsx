import { Link } from "react-router-dom"
export const Nav=()=>(
    <nav>
      <Link to ='/'>
        <h2>HOME</h2>
      </Link>
      <Link to ="/shop">
      <h2>
        SHOP
        </h2>
      </Link>
    </nav>
)