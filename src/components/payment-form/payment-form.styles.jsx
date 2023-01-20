import styled from 'styled-components';
import { Button } from '../button/Button';

export const PaymentFormContainer=styled.div`
height:300px;
display:flex;
width:100%;
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:2rem;


@media  (max-width:800px){
  width:90%;
  
}
`

export const FormContainer=styled.form`
  height:100px;

  `
export const PaymentButton=styled(Button)`
  margin-left:auto;
  margin-top:30px;

  `

  export const PaymentTitle=styled.div`
  display:flex;
  font-size:1.5rem;
  color:#272727;
  margin-bottom:2rem;
  
  `