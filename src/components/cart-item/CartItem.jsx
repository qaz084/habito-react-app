import './cart-item.styles.scss'

export const CartItem = ({cartItem}) => {
    const{name,quantity,imageUrl,price}=cartItem;

  return (
    <div className="cart-item-container">
        <img src={imageUrl} alt={name} />
        <div  className="cart-item-details">
            <h2 className="cart-item-name">{name}</h2>
            <span className="cart-item-price">{quantity} x ${price}</span>

        </div>
    </div>
  )
}
