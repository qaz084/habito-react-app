import { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom';
import { setCategories } from '../../store/categories/category.action';
import {useDispatch}from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { CategoriesPreview } from '../categories-preview/CategoriesPreview';
import { Category } from '../category/Category';

export const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray)) ;
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};
