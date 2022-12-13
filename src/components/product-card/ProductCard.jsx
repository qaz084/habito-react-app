import { Button } from '../button/Button'
import './product-card.styles.scss'

export const ProductCard = ({product}) => {
    const{name,price,imageUrl}=product;

  return (
    <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="product-card-footer">
                <span className="product-card-name">{name}</span>
                <span className="product-card-price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
    </div>
  )
}
