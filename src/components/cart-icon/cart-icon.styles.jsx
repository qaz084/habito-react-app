import styled from 'styled-components';
import {ReactComponent as ShoppingSvg} from '../../assets/shopping-bag.svg';

export const ShoppingIcon=styled(ShoppingSvg)`
  width: 32px;
  height: 32px;

  `

export const CartIconContainer=styled.div`
   width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width:820px){
        font-size:1rem;
        margin-left:1.5rem;
      
        
        
  } 
` 
    export const CartIconCount=styled.span`
       position: absolute;
      font-size: 1rem;
      font-weight: bold;
      top:40%;

      @media screen and (max-width:820px){
        font-size:1rem;
        position: absolute;
      font-size: 1rem;
      font-weight: bold;
      left:40%;
        
  } 
    
    `
   
  
  