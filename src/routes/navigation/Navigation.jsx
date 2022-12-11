import { Link, Outlet } from "react-router-dom";
import { ReactComponent as HabitoLogo } from "../../assets/logo_negro.svg";
import "./navigation.styles.scss";

export const Navigation = () => {
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
          <Link className="nav-link" to="/signIn">
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
