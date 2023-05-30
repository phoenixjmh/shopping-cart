import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./components/Shop";
import { useState } from "react";
const RouteSwitch = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              setCart={setCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
