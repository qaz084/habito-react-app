import { useCartContext } from '../../contexts/CartContext';
import { Button,BUTTON_TYPE_CLASSES } from '../button/Button'
import {ProductCardContainer,ProductCardFooter,ProductCardName,ProductCardPrice}from './product-card.styles'

export const ProductCard = ({product}) => {

    const{name,price,imageUrl}=product;
    const{addItemToCart}=useCartContext();

    const addProductToCart=() =>addItemToCart(product)

  return (
    <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{price}</ProductCardPrice>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}
