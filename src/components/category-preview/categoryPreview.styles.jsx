import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width:100vw;
  /* background-color:red; */
  margin:auto;
  margin-top:10rem;
  margin-bottom:3rem;
  

  @media screen and (max-width: 820px){
      width:90vw;
      margin-top:7rem;

  }

`;

export const CategoryTitle = styled.span`
  font-size: 3rem;
  margin-bottom: 25px;
  cursor: pointer;
  color:#272727;
  font-weight: bold;
  margin-left:4rem;

  @media screen and (max-width: 820px){
      width:80vw;
      margin-left:1rem;

  }
`;

export const CategoryPreviewProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr) );
  gap: 1rem;
  justify-content: center;

`;
