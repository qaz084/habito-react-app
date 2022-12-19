import { CheckoutItem } from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/CartContext';
import {CheckoutContainer,CheckoutHeader,HeaderBlock,CheckoutTotal} from './checkout.styles';

export const Checkout = () => {

const { cartItems,totalCartCost } = useCartContext();

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
     
            {
                cartItems.map(item =>{
                    return <CheckoutItem  key={item.id} cartItem={item}/>
                }) 
            }
            <CheckoutTotal>
                 TOTAL: ${totalCartCost}
            </CheckoutTotal>
    </CheckoutContainer>
  )
}
