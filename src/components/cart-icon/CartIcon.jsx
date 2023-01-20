import{useDispatch,useSelector}from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {ShoppingIcon,CartIconContainer,CartIconCount} from './cart-icon.styles';


export const CartIcon = ({mobileNavBar}) => {
 
const dispatch=useDispatch();

const cartCount =useSelector(selectCartCount);
const isCartOpen =useSelector(selectIsCartOpen);

const toggleCartDropDownState=()=>dispatch(setIsCartOpen(!isCartOpen));

  return (

    <CartIconContainer  mobileNavBar={mobileNavBar} onClick={toggleCartDropDownState}>
        <ShoppingIcon  />
        <CartIconCount>{cartCount}</CartIconCount>
    </CartIconContainer>

  )
}
