import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown";
import { CartIcon } from "../../components/cart-icon/CartIcon";

import { signOutUser } from "../../utils/firebase/firebase";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink}from "./navigation.styles";
import {useSelector} from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


export const Navigation = () => {

  const currentUser=useSelector(selectCurrentUser)

 const isCartOpen=useSelector(selectIsCartOpen)

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
          isCartOpen && <CartDropDown/>
        }
       
      </NavigationContainer>
      <Outlet />
    </>
  );
};
