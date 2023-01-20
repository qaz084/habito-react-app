import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

const mainColor='#272727';

export const BaseButton=styled.button`
   /* min-width: 165px; */
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 35px 0 35px;
  font-size: .9rem;
  /* font-family: "Helvetica Neue",Helveticaroboto sans-serif; */
  background-color: ${mainColor};
  color: white;
  text-transform: uppercase;
  /* font-family: 'Open Sans Condensed'; */
  /* font-weight: bolder; */
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: ${mainColor};
    border: 1px solid${mainColor};
  }

  @media screen and (max-width:640px){
    font-size:.8rem;
    line-height: 20px;
  }
`
export const GoogleSignInButton=styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    font-size:.8rem;

    &:hover {
      background-color: #357ae8;
      border: none;
    }

    @media screen and (max-width:640px){
    font-size:.75rem;
    line-height: 15px;
  }

`
export const InvertedButton =styled(BaseButton)`
 background-color: white;
    color:${mainColor};
    border: 1px solid ${mainColor};

    &:hover {
      background-color:${mainColor};
      color: white;
      border: none;
    }


`
export const PaymentButton =styled(BaseButton)`
 background-color: #39c676;
    color:${mainColor};

    /* border: 1px solid ${mainColor}; */

    &:hover {
      background-color:white;
      color: #39c676;
      border: none;
      font-weight: bolder;
    }
`

export const ButtonSpinner=styled(SpinnerContainer)`
width:30px;
height:30px;
`;
