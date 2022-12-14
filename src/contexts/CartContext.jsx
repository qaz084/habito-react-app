import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

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

  const [cartDropDownState, setCartDropDownState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [totalCartCost, setTotalCartCost] = useState(0);

//TOTAL QTY
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total +item.quantity,
      0
    );
    setTotalCartQuantity(newCartCount);
  }, [cartItems]);


//TOTAL COST
  useEffect(() => {
    const newCartCost = cartItems.reduce(
      (total, item) =>total+(item.quantity * item.price),
      0
    );
    setTotalCartCost(newCartCost);
  }, [cartItems]);


  const addItemToCart = (productToAdd) => {
    setCartItems(isProductInCart(cartItems, productToAdd));
  };

  const removetItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems,product))
  };

  const cleartItemFromCart = (product) => {
    setCartItems(clearItemFromCart(cartItems,product))
  };

  return (
    <CartContext.Provider
      value={{
        cartDropDownState,
        setCartDropDownState,
        cartItems,
        addItemToCart,
        removetItemFromCart,
        cleartItemFromCart,
        totalCartQuantity,
        totalCartCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
