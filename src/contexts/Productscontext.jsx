import {createContext,useState,useContext,useEffect} from 'react';
import {SHOP_DATA} from '../shop-data.js'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const ProductsContext=createContext();

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}



export const ProductsProvider=({children})=>{

    //IMPORTANTE--EL USE EFFECT, SOLO SE EJECUTA UNA VEZ PARA CARGAR LOS DATOS EN FIRESTORE, SINO CARGARIA LOS DATOS DE NUEVO, TODO EL TIEMPO.

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[])

const[products,setProducts]=useState([]);

useEffect(()=>{
    const getCategoriesMap=async()=>{
        const categoryMap= await getCategoriesAndDocuments();
    }
    getCategoriesMap();
},[])

const value={products};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}
 