import {  useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/home/Home";
import { Navigation } from "./routes/navigation/Navigation";
import { Shop } from "./routes/shop/Shop";
import { Authentication } from "./routes/authentication/Authentication";
import { Checkout } from "./routes/checkout/Checkout";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user.action";
import {useDispatch} from 'react-redux';

import{GlobalStyle}from './global.styles';
import { Footer } from "./components/footer/Footer";

// import  './index.css';


function App() {

  const dispatch=useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);
  return (
    <>
      <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Navigation />}>
        
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
            
        
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
