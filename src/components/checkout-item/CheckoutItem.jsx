import { useCartContext } from "../../contexts/CartContext";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { cleartItemFromCart, addItemToCart, removetItemFromCart } =
    useCartContext();

  const clearItemHandler = () => cleartItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const sustractItemHandler = () => removetItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="checkout-image-container">
        <img src={imageUrl} alt={imageUrl} />
      </div>
      <span className="checkout-item-name">{name}</span>

      <span className="checkout-item-quantity">
        <div className="checkout-item-arrow" onClick={sustractItemHandler}>
          &#10094;
        </div>

        <span className="checkout-item-value">{quantity}</span>

        <div className="checkout-item-arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="checkout-item-price">{price}</span>

      <div className="checkout-remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
