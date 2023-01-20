import styled from 'styled-components';

export const SignUpContainer=styled.div`
    display:flex;
    flex-direction:column;
    width:50%;

    h2{
        margin: 10px 0;
    }

    @media screen and (max-width: 820px){

    h2,span{
        text-align:center;
    };
    width:100%;
}
`


