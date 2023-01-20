import {useSelector,useDispatch} from 'react-redux';
import { addItemToCart, cleartItemFromCart, removetItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {CheckoutItemContainer,CheckoutImageContainer,CheckoutItemName,CheckoutItemQuantity,CheckoutItemArrow,CheckoutItemPrice,CheckoutItemValue,CheckoutIemoveButton} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems=useSelector(selectCartItems);
const dispatch=useDispatch();


  const clearItemHandler = () => dispatch(cleartItemFromCart(cartItems,cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));

  const sustractItemHandler = () => dispatch(removetItemFromCart(cartItems,cartItem));

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

      <CheckoutItemPrice>$ {price}</CheckoutItemPrice>

      <CheckoutIemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutIemoveButton>
    </CheckoutItemContainer>
  );
};

