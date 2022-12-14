import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/ProductCard";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import {CategoryContainer,CategoryTitle}from "./category.styles";

export const Category = () => {

  const { category } = useParams();
  const categories=useSelector(selectCategoriesMap);

  const[productsBasedOnCategory,setProductsBasedOnCategory]= useState(categories[category]);

  useEffect(()=>{

    setProductsBasedOnCategory(categories[category])

  },[category,categories])

  return( 

    <>
    <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer>
        {
            productsBasedOnCategory?.map(product=><ProductCard key={product.id} product={product}/>)
        }
    </CategoryContainer>

    </>
  )
};
