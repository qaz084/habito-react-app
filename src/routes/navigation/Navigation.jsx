import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import { useUserContext } from "../../contexts/UserContext";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useUserContext();

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
            <span className="nav-link" onClick={handleSignOutUser}>
              {" "}
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
