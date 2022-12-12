import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { ProductsProvider } from './contexts/Productscontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <ProductsProvider>
          <App /> 
        </ProductsProvider>
      </UserProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);


