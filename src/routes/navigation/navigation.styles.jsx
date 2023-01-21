import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Header=styled.header`
   background-color:#272727;
   color:white;
   padding: 1rem 2rem;
   width:100%;
   position:fixed;
   top:0;
   z-index:90;
   @media screen and (max-width:800px){
    padding:10px;
  }
   /* display: flex;
  align-items: center; */
`
export const NavigationContainer=styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  
  @media screen and (max-width:800px){
   
    justify-content: space-around;
  }

`
export const LogoContainer=styled(Link)`
/* height: 100%; */
width: 15%; 
margin-left:4rem;
/* padding: 25px; */


@media screen and (max-width:800px){
    width:30%;
    margin-left:6rem;
  } 
  `


  export const Logo=styled.img`
    width:100%;
  `


export const NavLinksContainer=styled.div`
    width: 30%;
    height: 100%;
    display: flex;
 
    align-items: center;
    justify-content: space-evenly;
    /* background-color:red; */
    align-self: flex-end;

    @media screen and (max-width:820px){
      width: 60%;
      justify-content:end;
      /* background-color:red; */
      height:300px;
      position:absolute;
      right: 0;
      top:100%;

      display:${props=>props.mobileNavBar?'flex':'none'};
      background-color: ${props=>props.mobileNavBar&&' #272727'};
      justify-content: ${props=>props.mobileNavBar&&' start'};
      align-items:start;
     flex-direction:column;
     gap:2rem;

  } 
    
`
export const NavLink =styled(Link)`
width:100px;
      padding: 10px 15px;
      cursor: pointer;
      color:white;
      font-size:1.2rem;

      &:hover{
        font-weight: bold;
      }

      @media screen and (max-width:820px){
        width:150px;
        font-size:1.4rem;
        margin-left:1rem;
  } 
`
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    display:none;

    @media screen and (max-width:820px){
      display:block;
      position: relative;
      rigth:0;
     
    
  } 

`;


