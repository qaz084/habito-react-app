import { createContext, useState, useContext, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext();

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  //IMPORTANTE--EL USE EFFECT, SOLO SE EJECUTA UNA VEZ PARA CARGAR LOS DATOS EN FIRESTORE, SINO CARGARIA LOS DATOS DE NUEVO, TODO EL TIEMPO.

  // useEffect(()=>{
  //     addCollectionAndDocuments('categories',SHOP_DATA);
  // },[])

  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
