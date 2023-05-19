import { useEffect ,useState} from "react"

export const Shop =()=>{
    const [items,setItems] = useState([]);

    const getListings=()=>{
       fetch('https://api.reverb.com/api/listings/?page=1')
        .then(response=>response.json())
        .then(jsonData=>jsonData.listings)
        .then(listings=>setItems(listings))
        .catch(e=>console.log(e));
    }
    useEffect(()=>{
        getListings();

        
    })
    
    
    return(
        <>

                {items?.map(item=>{
                    <p>
                        SUP
                        {item.model}
                    </p>
                    
                })}
            
        
        </>
    )
}