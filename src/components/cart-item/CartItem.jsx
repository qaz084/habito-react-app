import { CartItemContainer, CartItemDetails,CartItemName } from "./cart-item.styles";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>

        <span className="cart-item-price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};
