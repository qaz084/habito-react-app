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
  /* margin:2rem; */
  /* min-width:400px; */
  /* margin: 1rem; */
  /* padding:1rem; */
  align-items: center;
   justify-content: center; 
  /* overflow: hidden; */
  /* background-color:green; */
  /* margin:5rem; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   */
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
  
    /* &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    } */
/* 
    @media (max-width:800px){
  grid-template-columns: 50% 50%;
  height: 300px;
  width: 400px;
  margin:1rem;
    } */

  `
  export const ImageContainer = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
  `