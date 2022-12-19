import { ProductCard } from '../product-card/ProductCard'
import {CategoryPreviewContainer,CategoryTitle,CategoryPreviewProduct} from './categoryPreview.styles'

export const CategoryPreview = ({title, products}) => {

  return (
    <CategoryPreviewContainer>
        <h2>
            <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
        </h2>
        <CategoryPreviewProduct>

            {
                products
                .filter((_,idx)=>idx<4)
                .map(product => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryPreviewProduct>

    </CategoryPreviewContainer>
  )
}
