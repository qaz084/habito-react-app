import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

export const CartDropDown = () => {
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  const { cartItems } = useCartContext();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-dropdown-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </div>
  );
};
