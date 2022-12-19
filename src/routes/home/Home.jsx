import { Outlet } from "react-router-dom";
import { CategoryContainer } from "../../components/categories-container/CategoryContainer";

export const Home = () => {
  return (
    <>
      <CategoryContainer />
      <Outlet />
    </>
  );
};
