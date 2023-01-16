import{useSelector}from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectCartItems } from '../../store/cart/cart.selector';
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartDropdownItems,
} from "./cart-dropdown.styles";

export const CartDropDown = () => {
 
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  const  cartItems  = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartDropdownItems>

      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};
