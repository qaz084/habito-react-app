import { useCartContext } from '../../contexts/CartContext';
import { Button } from '../button/Button'
import './product-card.styles.scss'

export const ProductCard = ({product}) => {

    const{name,price,imageUrl}=product;
    const{addItemToCart}=useCartContext();

    const addProductToCart=() =>addItemToCart(product)

  return (
    <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="product-card-footer">
                <span className="product-card-name">{name}</span>
                <span className="product-card-price">{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}
