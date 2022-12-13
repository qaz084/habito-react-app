import {createContext,useState,useContext} from 'react';
import DATA_PRODCUTS from '../shop-data.json'

export const ProductsContext=createContext();

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}

export const ProductsProvider=({children})=>{

const[products,setProducts]=useState(DATA_PRODCUTS);
const value={products};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}