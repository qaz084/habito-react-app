import {ShoppingIcon,CartIconContainer,CartIconCount} from './cart-icon.styles';
import { useCartContext } from '../../contexts/CartContext';

export const CartIcon = () => {

   const{cartDropDownState,setCartDropDownState,totalCartQuantity}=useCartContext();

   const toggleCartDropDownState=()=>setCartDropDownState(!cartDropDownState);

  return (

    <CartIconContainer onClick={toggleCartDropDownState}>
        <ShoppingIcon />
        <CartIconCount>{totalCartQuantity}</CartIconCount>
    </CartIconContainer>

  )
}
