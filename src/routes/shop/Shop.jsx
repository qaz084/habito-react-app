import { ProductCard } from "../../components/product-card/ProductCard";
import { useProductsContext } from "../../contexts/Productscontext";
import './shop.styles.scss';

export const Shop = () => {

  const { products } = useProductsContext();

  return (
    <div className='products-container'>
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </div>
  );
};
