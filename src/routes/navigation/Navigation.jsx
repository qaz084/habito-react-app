import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { useCartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink}from "./navigation.styles";
import {useSelector} from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";


export const Navigation = () => {

  const currentUser=useSelector(selectCurrentUser)
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
