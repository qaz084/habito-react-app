import {createContext,useState,useContext} from 'react';

export const ProductsContext=createContext();

export const useProductsContext=()=>{
    return useContext(ProductsContext);
}

export const ProductsProvider=({children})=>{

const[products,setProducts]=useState([]);
const value={products};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}