import { Link, Outlet } from "react-router-dom";


import  HabitoLogo  from "../../assets/logo_blanco.svg";
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { signOutUser } from "../../utils/firebase/firebase";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink, Header, Logo, StyledFontAwesomeIcon}from "./navigation.styles";
import { useSelector} from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



export const Navigation = () => {

  const currentUser=useSelector(selectCurrentUser)

 const isCartOpen=useSelector(selectIsCartOpen)

 const [isBurgerClicked,setIsBurgerClicked]=useState(false);

 const [isBurgerShown,setIsBurgerShown]=useState(faBars);

 const handleBurgerButtonClick=() => {
  setIsBurgerClicked(!isBurgerClicked)
  isBurgerClicked?setIsBurgerShown(faBars):setIsBurgerShown(faX)
  
}


  return (
    <>
      <Header>
       <NavigationContainer>
        <LogoContainer  to="/">
          <Logo src={HabitoLogo} />
        </LogoContainer>

        <NavLinksContainer mobileNavBar={isBurgerClicked}>
          <NavLink  to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink  as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink  to="/auth">
              Sign-in
            </NavLink>
          )}

            
        </NavLinksContainer>
         <CartIcon />

        <StyledFontAwesomeIcon onClick={handleBurgerButtonClick} icon={isBurgerShown}/>

        {
          isCartOpen && <CartDropDown/>
        }
       
       </NavigationContainer>
      </Header>
      <Outlet />
    </>
  );
};
