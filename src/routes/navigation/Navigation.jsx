import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown";
import { CartIcon } from "../../components/cart-icon/CartIcon";
import { useCartContext } from "../../contexts/CartContext";
import { useUserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useUserContext();
 const {cartDropDownState}= useCartContext();

  return (
    <>
      <div className="nav-container">
        <Link className="logo-container" to="/">
          <HabitoLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}

         <CartIcon/>
         
        </div>
        {
          cartDropDownState && <CartDropDown/>
        }
       
      </div>
      <Outlet />
    </>
  );
};
