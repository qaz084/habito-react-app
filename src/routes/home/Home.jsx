import { Outlet } from "react-router-dom";
import { CategoryContainer } from "../../components/categories-container/CategoryContainer";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <CategoryContainer />
      <Outlet />
     
    </>
  );
};
