import { createContext, useState, useContext} from 'react';


export const CartContext = createContext();
export const useCartContext=()=>(useContext(CartContext));


export const CartProvider=(  {children})=>{
    const [cartDropDownState, setCartDropDownState] = useState(false);
    const [cartDropDownItems, setCartDropDownItems] = useState([]);


    return <CartContext.Provider value={{cartDropDownState,setCartDropDownState}}>
        {children}
    </CartContext.Provider>
}
