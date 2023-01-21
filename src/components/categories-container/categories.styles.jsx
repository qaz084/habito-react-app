import styled from "styled-components";

export const CategoriesContainer=styled.div` 
    /* width: 100wv; */
    overflow: hidden;
    /* height: 100vh; */
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(500px,1fr));
    /* column-gap: 10%;
    row-gap:10%; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    justify-items: center;
    gap:8rem;
    margin-top:7rem;
    padding:4rem;

 @media screen and (max-width:720px){

    justify-content:center;

    grid-template-columns: repeat( auto-fit, minmax(min-content,1fr));
    gap:4rem;
    padding:2rem;
  margin:0 1.5rem;
  margin-top:7rem;
 
   
 }

` 
  
  
  