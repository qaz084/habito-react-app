import { CategoryItem } from "../category-item/CategoryItem";
import "./categories.styles.scss";

export const CategoryContainer = ({categories}) => {
  return (
    <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id}
        category={category}
      />
    ))}
  </div>
  )
}
