import { CheckoutItem } from '../../components/checkout-item/CheckoutItem';
import { useCartContext } from '../../contexts/CartContext';
import  './checkout.styles.scss';

export const Checkout = () => {

const { cartItems } = useCartContext();

  return (
    <div className="checkout-container">
        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>

            <div className="header-block">
            <span>Description</span>
            </div>

            <div className="header-block">
            <span>Quantity</span>
            </div>

            <div className="header-block">
            <span>Price</span>
            </div>

            <div className="header-block">
            <span>Remove</span>
            </div>
        </div>
     
            {
                cartItems.map(item =>{
                
                    return <CheckoutItem  key={item.id} cartItem={item}/>
                     
                }) 
            }
            <span className="checkout-total">`TOTAL: ${}` </span>
    </div>
  )
}
