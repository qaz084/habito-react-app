import { useCartContext } from "../../contexts/CartContext";
import {CheckoutItemContainer,CheckoutImageContainer,CheckoutItemName,CheckoutItemQuantity,CheckoutItemArrow,CheckoutItemPrice,CheckoutItemValue,CheckoutIemoveButton} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { cleartItemFromCart, addItemToCart, removetItemFromCart } =
    useCartContext();

  const clearItemHandler = () => cleartItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const sustractItemHandler = () => removetItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={imageUrl} />
      </CheckoutImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>

      <CheckoutItemQuantity>
        <CheckoutItemArrow onClick={sustractItemHandler}>
          &#10094;
        </CheckoutItemArrow>

        <CheckoutItemValue>{quantity}</CheckoutItemValue>

        <CheckoutItemArrow onClick={addItemHandler}>
          &#10095;
        </CheckoutItemArrow>
      </CheckoutItemQuantity>

      <CheckoutItemPrice>{price}</CheckoutItemPrice>

      <CheckoutIemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutIemoveButton>
    </CheckoutItemContainer>
  );
};

