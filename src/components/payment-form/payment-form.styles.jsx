import styled from "styled-components";
import { Button } from "../button/Button";

export const PaymentFormContainer = styled.div`
  height: 350px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 2rem;
  margin-top: 4rem;
  /* background-color:red; */

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
`;
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const PaymentTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: #272727;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
   
  }
`;


export const PaymentNotes = styled.div`
  margin-bottom: 2rem;

  span,
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: bold;
    margin-top: 10px;
  }

  @media screen and (max-width: 500px) {


    span,
    p {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
    p:last-child{
      margin-top:2rem;
    }
   
  }
`;
