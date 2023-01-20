import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBodyContainer,
  ImageContainer,
  DirectoryContainer,
} from "./directory-item.styles";

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (

      <DirectoryItemContainer onClick={onNavigateHandler}>
        <DirectoryBodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </DirectoryBodyContainer>

        <ImageContainer>
          <BackgroundImage imageUrl={imageUrl} />
        </ImageContainer>
      </DirectoryItemContainer>
   
  );
};
