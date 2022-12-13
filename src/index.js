import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { ProductsProvider } from './contexts/Productscontext';
import { CartProvider } from './contexts/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App /> 
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);


