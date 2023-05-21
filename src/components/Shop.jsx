import { useEffect ,useState} from "react"
import  Listing  from "./Listing";
import  Nav  from "./Nav";
import  Cart  from "./Cart";

const Shop =()=>{
    const [items,setItems] = useState([]);
    const [cart,setCart] = useState([]);
    const [cartOpen,setCartOpen]= useState(false);

    useEffect(()=>{
        const getListings=()=>{
            fetch('https://api.reverb.com/api/listings/?page=1')
            .then(response=>response.json())
            .then(jsonData=>jsonData.listings)
            .then(listings=>{
                console.log(listings)
                setItems(listings)})
            .catch(e=>console.log(e));
        }
        getListings();

        
    },[]);

    const addToCart=(item)=>{
        let alreadyAdded=false;
        cart.forEach(cartItem=>{
            let vals=Object.values(cartItem);
            if(vals.includes(item.id)){
                alert('Item already in cart');
                alreadyAdded=true;

            }
        })
        if(!alreadyAdded)
        setCart(cart.concat(item));
        console.log(cart);
        alreadyAdded=false;
    }

    const openCart=()=>{
        setCartOpen(true);
    }
    
    return(
        <>
        <Nav cart={cart}openCart={openCart}/>

        <div className='store-grid'>

                {items.map(item=>{
                    return(

                        <Listing attributes={item} key={item.id} addToCart={addToCart}/>
                   
                    // </div>
                    )
                    
                })}
            
        
        </div>
        {cartOpen? <Cart cart={cart}/>:null}
        </>
    )
}

export default Shop;