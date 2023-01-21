import styled from "styled-components";
import {BaseButton,GoogleSignInButton,InvertedButton} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  /* display: flex; */
  flex-direction: column;
  padding: 20px;

  background-color:${props=>props.closeModal?'red':'white'};
  top: 85px;
  right: 0px;
  z-index: 5;
  display: ${props=>props.closeModal?'none':'flex'};

  ${BaseButton}, 
  ${GoogleSignInButton}, 
  ${InvertedButton}{
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.2rem;
  margin: 50px auto;
  color:#272727
`;

export const CartDropdownItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color:#272727
`;
