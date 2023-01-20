import styled from 'styled-components';

export const CategoryContainer=styled.div`
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    column-gap: 2rem;
    row-gap: 50px;
    object-fit:cover;
    /* background-color:red; */
    margin-top:2rem;
    margin-bottom:10rem;
    padding:2rem;
  
`

 export const CategoryTitle=styled.h2`
    font-size: 3rem;
    margin-top:8rem;
    /* margin-bottom: 25px; */
    text-align: center;
    color:#272727;

 `

  