import {ShoppingIcon,CartIconContainer,CartIconCount} from './cart-icon.styles';
import { useCartContext } from '../../contexts/CartContext';

export const CartIcon = () => {

   const{cartDropDownState,setIsCartOpen,totalCartQuantity}=useCartContext();

   const toggleCartDropDownState=()=>setIsCartOpen(!cartDropDownState);

  return (

    <CartIconContainer onClick={toggleCartDropDownState}>
        <ShoppingIcon />
        <CartIconCount>{totalCartQuantity}</CartIconCount>
    </CartIconContainer>

  )
}
