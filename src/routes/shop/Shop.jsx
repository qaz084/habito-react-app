import { ProductCard } from "../../components/product-card/ProductCard";
import { useProductsContext } from "../../contexts/Productscontext";
import SHOP_DATA from "../../shop-data.json";
import './shop.styles.scss';

export const Shop = () => {
  console.log(SHOP_DATA);
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
