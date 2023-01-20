import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CheckoutContainer=styled.div`
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    margin-top:8rem;
    color:#272727;
   

  @media (max-width:820px){
    width: 95%;

  }

  `

    export const CheckoutHeader=styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    font-weight:bold;

    @media (max-width:820px){
      font-weight:regular;
      justify-content: space-around;
      font-size:1rem;


  }


    `
    export const HeaderBlock=styled.div`
      text-transform: capitalize;
      width: 100%;

      &:last-child {
        width: 8%;
      }

      @media (max-width:820px){
      font-weight:regular;
      font-size:1rem;
   
      &:last-child {
        width: 50%;
      }
  }
      @media (max-width:400px){
      font-size:.8rem;
  }
    `
    export const CheckoutTotal=styled.span`
    
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
      font-weight:bold;
      color: #272727;

      @media (max-width:820px){
      font-weight:regular;
      font-size:1.5rem;
      margin-right:2rem;
     

  }
    ` 

    export const PaymentContainerNoProducts=styled.div`
    margin:3rem 0 ;
    margin-bottom:5rem;
    display: flex;
    justify-content: end;
    flex-wrap: wrap;

    @media screen and (max-width:820px){

      width:80%;
    }
   
    `

    export const PaymentNoProducts=styled.h2`
    color:#272727;
    /* margin:4rem 0; */
    font-size:3rem;
    width:100%;
    text-align:center;

    @media screen and (max-width:820px){
      font-size:2rem;

}
  
    `
    export const PaymentGoHome=styled(Link)`
      /* margin-left:auto; */
      margin-top:1rem;
      font-size:1.3rem;
      text-decoration:underline;
      color:#272727;
     
      &:hover{
        font-weight:bolder;
        cursor: pointer;
      }
      
    `
    
  
  