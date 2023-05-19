export const Listing=({attributes})=>{
    return(
        <div className='store-listing'key={attributes.id}>
                    <img src={attributes.photos[0]._links.full.href}  key={attributes.id+'img'}></img>
                     <p key={attributes.id+'make'}>
                         {attributes.make}
                     </p>
                     <p key={attributes.id+'model'}>
                         {attributes.model}
                     </p>
                     <p>
                        ${attributes.buyer_price.amount}
                     </p>
                     <button>Add to Cart</button>
        </div>
    )
}