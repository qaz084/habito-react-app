import{useDispatch,useSelector}from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { Button,BUTTON_TYPE_CLASSES } from '../button/Button'
import {ProductCardContainer,ProductCardFooter,ProductCardName,ProductCardPrice}from './product-card.styles'

export const ProductCard = ({product}) => {

    const{name,price,imageUrl}=product;
    const dispatch = useDispatch();
   const cartItems=useSelector(selectCartItems)

    const addProductToCart=() =>dispatch(addItemToCart(cartItems,product))

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
