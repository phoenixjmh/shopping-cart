import { useEffect ,useState} from "react"
import { Listing } from "./Listing";
import { Nav } from "./Nav";

export const Shop =()=>{
    const [items,setItems] = useState([]);

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

        
    },[])
    
    
    return(
        <>
        <Nav/>

        <div className='store-grid'>

                {items.map(item=>{
                    return(

                        <Listing attributes={item} key={item.id}/>
                   
                    // </div>
                    )
                    
                })}
            
        
        </div>
        </>
    )
}