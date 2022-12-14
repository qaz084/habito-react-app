import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useCartContext } from '../../contexts/CartContext';

export const CartIcon = () => {

   const{cartDropDownState,setCartDropDownState,totalCartQuantity}=useCartContext();

  // const totalCartItems=cartItems.qu

   const toggleCartDropDownState=()=>setCartDropDownState(!cartDropDownState);

  return (

    <div className="cart-icon-container" onClick={toggleCartDropDownState}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="cart-icon-count">{totalCartQuantity}</span>
    </div>

  )
}
