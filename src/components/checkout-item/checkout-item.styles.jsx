import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1.4rem;
  align-items: center;



  @media (max-width:820px){

    font-size: 1.2rem;
    justify-content:space-around;
    width:90%;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemPrice = styled.span`
  width: 23%;

  font-size:1.4rem;
`;
export const CheckoutItemQuantity = styled.span`
  display: flex;
  width: 23%;
`;

export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutItemValue = styled.span`
  margin: 0 10px;
`;
export const CheckoutIemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color:#ea3939;
  font-weight:bold;
`;
