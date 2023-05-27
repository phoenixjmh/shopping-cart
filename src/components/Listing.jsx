const Listing = ({ attributes, addToCart }) => {
  const storeItem = {
    id: attributes.id,
    img: attributes.photos[0]._links.full.href,
    make: attributes.make,
    model: attributes.model,
    price: attributes.buyer_price.amount,
  };

  return (
    <div className="store-listing" key={attributes.id}>
      <div className="img-panel">
        <img
          src={attributes.photos[0]._links.full.href}
          key={attributes.id + "img"}
        ></img>
      </div>
      <p className="model" key={attributes.id + "model"}>
        {attributes.model}
      </p>
      <p className="make" key={attributes.id + "make"}>
        {attributes.make}
      </p>
      <p className="price">${attributes.buyer_price.amount}</p>
      <button className="add-cart" onClick={() => addToCart(storeItem)}>
        Add to Cart
      </button>
    </div>
  );
};
export default Listing;
