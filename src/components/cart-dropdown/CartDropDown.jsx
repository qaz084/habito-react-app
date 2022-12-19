import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
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

  const { cartItems } = useCartContext();
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
