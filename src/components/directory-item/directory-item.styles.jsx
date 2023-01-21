import styled from 'styled-components';

export const BackgroundImage=styled.div`
     width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-image: ${({imageUrl})=>`url(${imageUrl})`}
  
  `
  export const DirectoryBodyContainer=styled.div` 
      height: 90px;
      /* padding: 0 25px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      /* border: 1px solid black; */
      color:#272727;
      /* background-color: white; */
      opacity: 1;
      /* position: absolute; */
      h2 {
        font-weight: bold;
        margin: 0 6px 0;
        font-size: 1.5rem;
        color:#272727;
        text-transform:uppercase;
      }
  
      p {
        font-weight: regular;
        font-size: 1rem;
      }
    
  `
  export const DirectoryItemContainer=styled.div` 
  height: 350px;
  width: 600px;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
   justify-content: center; 
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
 
    &:hover {
      cursor: pointer;
  
      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      & ${DirectoryBodyContainer} {
        opacity: 0.7;
      }

    }
  
    @media screen and (max-width:620px){

      width:100%;
    }
  `
  export const ImageContainer = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
  `