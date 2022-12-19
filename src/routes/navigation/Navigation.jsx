import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { useCartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";

import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink}from "./navigation.styles";

export const Navigation = () => {
  const { currentUser } = useUserContext();
 const {cartDropDownState}= useCartContext();

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <HabitoLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign-in
            </NavLink>
          )}

         <CartIcon/>
         
        </NavLinksContainer>
        {
          cartDropDownState && <CartDropDown/>
        }
       
      </NavigationContainer>
      <Outlet />
    </>
  );
};
