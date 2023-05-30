# Assignment  

<details>
  <summary> Click to read project assignment instructions</summary>

## Create a new project with at least two pages 
  > (a homepage and a shop page, which includes your shopping cart).Let a user navigate between the pages with a navigation bar, which will be shown on both routes.

## On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. 
  > You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).


## Build individual card items for each of your products.  
  > Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.
Once a user has submitted their order, the amount on the cart itself should adjust.

</details>



# This App

> A website created with React that uses the reverb API to gather music gear sale listings, posing as local listings in my imposter store "Tone Depot".

 
 
## Shop Component
> The Reverb API is accessed and parsed to display Recent Listings onto the shop page. Images and all data is loaded from the Reverb API. That data is then processed and mapped by the Shop component and rendered by the Listing Component.


## Cart
#### The user's cart will keep it's total price accurate, and the item count accurate when either a new item is added to the cart, or an existing item has it's number in the cart increased

> When an item already in the cart has it's amount increased, a duplicate of that item is added to the cart again.  
> Since the cart is dynamic, this would create another duplicate of the displayed item (instead of increasing the number of this item, it would simply append the item to the cart again, creating a duplicate card item).  
> To prevent this behavior, the cart's rendering logic is kept seperated from it's data, in a Set.
> The Item component checks the cart for other items with a matching ID, produces a count to update the  "amount in cart".
> This way the cart can contain it's total price, as if it's just counting all of the cart items individually, without displaying duplicates unneccesarily.

## Home 
> A very basic Homepage. The most difficult part of this project was trying to get the Cart Component (which, as seen in the assignment instructions, was originally tied exclusively to the Shop Component, not the Home Component) to display and open properly, keeping it's state and props, unchanged. This was made difficult specifically, because using a multi-page Routed Application setup, there is no obvious hierarchy from which the items could inherit a shared prop or state. Or so i thought. There were many many attempts to use the useLocation hook, which would allow me to pass the Cart state between Pages within the Nav component. Eventually I discovered you can only pass JSON serialiazable objects, so All of my attempts were for nothing, because for this method to work, i needed to pass a function that would OPEN the cart between pages. Upon discovering this, I decided the best course of action would be to move the cart state,and a few other important functions up the heirarchy to the RouteSwitch Component. Now all of the Pages are able to display the cart , unchanged.
> Also the style of the navbar is different depending on what page you are on. Felt more thematically correct. And there is no home-button on the homepage because of course. These styling changes are handled by having a navType prop that is passed into the Nav component by the Home or Shop Component, and that prop changes the class of the nav element.
> 



  
  
