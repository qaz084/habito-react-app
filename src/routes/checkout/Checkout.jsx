import { CheckoutItem } from "../../components/checkout-item/CheckoutItem";
import { useSelector } from "react-redux";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutTotal,
  PaymentNoProducts,
  PaymentContainerNoProducts,
  PaymentGoHome,
} from "./checkout.styles";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { PaymentForm } from "../../components/payment-form/payment-form.component";

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);


  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return <CheckoutItem key={item.id} cartItem={item} />;
        })
      ) : (
        <PaymentContainerNoProducts>
            <PaymentNoProducts>There is no products</PaymentNoProducts>
            <PaymentGoHome to="/">Home</PaymentGoHome>

        </PaymentContainerNoProducts>
      )}

      <CheckoutTotal>TOTAL: {`$ ${cartTotal}`}</CheckoutTotal>
      <PaymentForm />
    </CheckoutContainer>
  );
};
