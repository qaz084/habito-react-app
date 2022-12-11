import {Routes,Route}from 'react-router-dom';
import { Home } from "./routes/home/Home";
import { Navigation } from './routes/navigation/Navigation';
import { Shop } from './routes/shop/Shop';
import { SignIn } from './routes/sign-in/SignIn';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Navigation/>}>

        <Route index element={ <Home/>}/>
        <Route path="shop" element={ <Shop/>}/>
        <Route path="signIn" element={ <SignIn/>}/>

      </Route>
    
     
    </Routes>
    </>
  );
}

export default App;
