# Project Assignment


## Overview
- Create a new project with at least two pages: a homepage and a shop page with a shopping cart.
- Implement a navigation bar for easy page navigation.

## Shopping Cart
- Display a sticky bar or top section on the shopping cart page to show the current number of items in the cart.
- Include a button to navigate to the cart for checkout and payment (payment logic not implemented).

## Product Cards
- Build individual card items for each product in the shop.
- Each card should feature an input field for users to manually enter the desired quantity.
- Add increment and decrement buttons for fine-tuning the quantity.
- Include a title for each product and an "Add To Cart" button.
- Upon order submission, update the cart's total quantity and amount.

*** 

# Tone Depot - Music Gear Store

> Tone Depot is a React-based website that utilizes the Reverb API to gather real music gear sale listings, creating an authentic shopping experience.

 
 
## Shop
The Shop component dynamically accesses and parses the Reverb API to display recent listings on the shop page. It seamlessly loads images and data directly from the API, providing users with up-to-date information on available products.
That data is then processed and mapped by the Shop component and rendered by the Listing Component. 

>This was not part of the assignment, but I'm growing very bored with creating fake data to display on these websites, and it seems to make more sense to stay sharp on fetching and processing and communicating with API's, then to be constantly cranking out piles of Lorem Ipsum. API's are going to be a mainstay of otherwise Fake data. No more fake data.


## Cart
The Cart component ensures accurate tracking of the total price and item count. To maintain a clean and organized cart view, it intelligently handles item duplication. By separating the rendering logic from the cart's data using a Set, the Cart component displays the correct quantity for each unique item, preventing unnecessary duplicates.

> When an item already in the cart has it's amount increased, a duplicate of that item is added to the cart again.  
> Since the cart is dynamic, this would create another duplicate of the displayed item (instead of increasing the number of this item, it would simply append the item to the cart again, creating a duplicate card item).  
> To prevent this behavior, the cart's rendering logic is kept seperated from it's data, in a Set.
> The Item component checks the cart for other items with a matching ID, produces a count to update the  "amount in cart".
> This way the cart can contain it's total price, as if it's just counting all of the cart items individually, without displaying duplicates unneccesarily.

## Home 
The Home component serves as the welcoming homepage for Tone Depot. One of the main challenges faced during development was integrating the Cart component, which was originally tied exclusively to the Shop component. However, through meticulous architecture and hierarchy restructuring, the Cart component's state and props remain unchanged across different pages, providing a consistent and seamless user experience. The navigation bar's style dynamically adapts to the active page, creating a cohesive and visually pleasing interface. Notably, the absence of a home button on the homepage is a deliberate design choice to optimize navigation flow.



>This section was made difficult specifically, because using a multi-page Routed Application setup, there is no obvious hierarchy from which the items could inherit a shared prop or state. There were many many attempts to use the useLocation hook, which would allow me to pass the Cart state between Pages within the Nav component. Eventually I discovered you can only pass JSON serialiazable objects, so All of my attempts were for nothing, because for this method to work, i needed to pass a function that would OPEN the cart between pages. Upon discovering this, I decided the best course of action would be to move the cart state,and a few other important functions up the heirarchy to the RouteSwitch Component. Now all of the Pages are able to display the cart , unchanged.



### Icons

To enhance the visual presentation, Tone Depot utilizes React's capability to import SVG files as React components. This approach simplifies the integration of scalable vector graphics, resulting in a more refined and professional look



  
  
