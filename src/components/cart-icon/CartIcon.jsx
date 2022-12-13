import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useCartContext } from '../../contexts/CartContext';

export const CartIcon = () => {

   const{cartDropDownState,setCartDropDownState}=useCartContext();

   const toggleCartDropDownState=()=>setCartDropDownState(!cartDropDownState);

  return (

    <div className="cart-icon-container" onClick={toggleCartDropDownState}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="cart-icon-count">10</span>
    </div>

  )
}
