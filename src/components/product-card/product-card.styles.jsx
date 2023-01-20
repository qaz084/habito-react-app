import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background-color:green; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
    
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top:70%;
    display: none;
    border: none;

    @media (max-width:820px){
      top:65%;
      height:4rem;
    }
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      border: none;
    }
  }
`;
export const ProductCardImageContainer = styled.div`
    overflow:hidden;
    height: 400px;
    width:250px;
    border-radius: 2%;
    /* background-color:red; */

    @media (max-width:820px){
      width:90%;
      height: 400px;
    }
  `;

export const ProductCardFooter = styled.div`
   width: 100%;
  /* height: 15%;  */
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  color:#272727;
  align-items:center;
  /* background-color:red; */
  padding:1rem;

  @media (max-width:820px){
     padding:2rem;
     font-size: 1.6rem;
    }
`;

export const ProductCardName = styled.span`
  /* width: 90%; */
  
  color:#272727;
`;

export const ProductCardPrice = styled.span`
  /* width: 10%; */
  font-weight:bold;
  color:#272727;
  font-size: 1.3rem;

  @media (max-width:820px){
     
     font-size: 2rem;
    }
`;
