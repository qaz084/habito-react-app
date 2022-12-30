import { createContext, useState, useContext, useEffect,useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const INITIAL_STATE={

  cartDropDownState:false,
  cartItems:[],
  totalCartQuantity:0,
  totalCartCost:0

}
const CART_ACTION_TYPES={

  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}

const cartReducer=(state,action)=>{

  const{type,payload}=action;

  switch(type){
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return{
        ...state,
        ...payload
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return{
        ...state,
        cartDropDownState: payload
      }
    default:
      throw new Error(`Unhandled action ${type}`);
  }
};

//ADD ITEM
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
const removeCartItem=(cartItems, productToRemove) =>{
    const existingCartItem = cartItems.find(
        (item) => item.id === productToRemove.id
      );
     if(existingCartItem.quantity===1) {
        return cartItems.filter((item) => item.id !== productToRemove.id)
     }
     return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
}

//CLEARITEM
const clearItemFromCart=(cartItems,productToClear)=>{
  return cartItems.filter((item) => item.id !== productToClear.id)
}

export const CartProvider = ({ children }) => {

  // const [cartDropDownState, setCartDropDownState] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  // const [totalCartCost, setTotalCartCost,totalCartCost] = useState(0);

  const [{cartItems,cartDropDownState,totalCartQuantity,},dispatch]=useReducer(cartReducer,INITIAL_STATE);

//TOTAL QTY
  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, item) => total +item.quantity,
  //     0
  //   );
  //   setTotalCartQuantity(newCartCount);
  // }, [cartItems]);


//TOTAL COST
  // useEffect(() => {
  //   const newCartCost = cartItems.reduce(
  //     (total, item) =>total+(item.quantity * item.price),
  //     0
  //   );
  //   setTotalCartCost(newCartCost);
  // }, [cartItems]);


const updateCartItemsReducer=(newCartItems) => {

  const newCartCount = newCartItems.reduce(
    (total, item) => total +item.quantity,
    0
  );

  const newCartCost = newCartItems.reduce(
    (total, item) =>total+(item.quantity * item.price),
    0
  );

    dispatch( createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
      cartItems:newCartItems,
      totalCartCost:newCartCost,
      totalCartQuantity:newCartCount
    })
    );

}


  const addItemToCart = (productToAdd) => {
   const newCartItems= setCartItems(isProductInCart(cartItems, productToAdd));
   updateCartItemsReducer(newCartItems);
  };

  const removetItemFromCart = (product) => {
    const newCartItems= setCartItems(removeCartItem(cartItems,product))
    updateCartItemsReducer(newCartItems);
  };

  const cleartItemFromCart = (product) => {
    const newCartItems= setCartItems(clearItemFromCart(cartItems,product))
  

    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen=(bool)=>{

    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boll) );
  }


  return (
    <CartContext.Provider
      value={{
        cartDropDownState,
        // setCartDropDownState,
        cartItems,
        addItemToCart,
        removetItemFromCart,
        cleartItemFromCart,
        setIsCartOpen,
        totalCartQuantity,
        // totalCartCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
