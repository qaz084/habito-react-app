import { CategoryPreview } from "../../components/category-preview/CategoryPreview";
import { useCategoriesContext } from "../../contexts/CategoriesContext";

export const CategoriesPreview = () => {
  const { categories } = useCategoriesContext();

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
