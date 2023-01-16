import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const isProductInCart = (cartItems, productToAdd) => {
     const existingCartItem = cartItems.find(
       (item) => item.id === productToAdd.id
     );
   
     if (existingCartItem) {
       return cartItems.map((item) =>
         item.id === productToAdd.id
           ? { ...item, quantity: item.quantity + 1 }
           : item
       );
     }
     return [...cartItems, { ...productToAdd, quantity: 1 }];
   };
   
   //REMOVE ITEM
   const removeCartItem = (cartItems, productToRemove) => {
     const existingCartItem = cartItems.find(
       (item) => item.id === productToRemove.id
     );
     if (existingCartItem.quantity === 1) {
       return cartItems.filter((item) => item.id !== productToRemove.id);
     }
     return cartItems.map((item) =>
       item.id === productToRemove.id
         ? { ...item, quantity: item.quantity - 1 }
         : item
     );
   };
   
   //CLEARITEM
   const clearItemFromCart = (cartItems, productToClear) => {
     return cartItems.filter((item) => item.id !== productToClear.id);
   };
   


export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean);

     export const addItemToCart = (cartItems,productToAdd) => {
          const newCartItems = isProductInCart(cartItems, productToAdd);
         return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
        };
      
       export const removetItemFromCart = (cartItems,product) => {
          const newCartItems = removeCartItem(cartItems, product);
          return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems) ;
        };
      
       export const cleartItemFromCart = (cartItems,product) => {
          const newCartItems = clearItemFromCart(cartItems, product);
      
          return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
        };