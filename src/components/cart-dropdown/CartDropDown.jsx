import { Button } from '../button/Button'
import  './cart-dropdown.styles.scss'

export const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-dropdown-items" />
        <Button>Go to Checkout</Button>
    </div>
  )
}
