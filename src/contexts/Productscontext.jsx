import {createContext,useState,useContext,useEffect} from 'react';
import {SHOP_DATA} from '../shop-data.js'
 export const getCategoriesAndDocuments=async()=>{
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const ProductsContext=createContext();

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}

useEffect(()=>{
    const getCategoriesMap=async()=>{
        const categoryMap= await getCategoriesAndDocuments();
    }
    getCategoriesMap();
},[])

export const ProductsProvider=({children})=>{

    //IMPORTANTE--EL USE EFFECT, SOLO SE EJECUTA UNA VEZ PARA CARGAR LOS DATOS EN FIRESTORE, SINO CARGARIA LOS DATOS DE NUEVO, TODO EL TIEMPO.

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // },[])

const[products,setProducts]=useState([]);
const value={products};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}