import styled from "styled-components";
import { ReactComponent as LinkedInSvg } from "../../assets/linkedInLogo.svg";

const mainColor = "#272727";



export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${mainColor};
  height: 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;


  h2 {
    color: white;
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 1rem;
    margin-top:1rem;
  }

  @media screen and (max-width: 820px) {
    margin-top:2rem;
    padding: 2rem;
    height: 15vh;
    /* background-color:red; */
    
  h2 {
    color: white;
    font-size: .8rem;
 
  }
    
  }
`;
export const FooterDataContainer = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap:3rem; */
  span {
    /* margin-left:-2rem; */
    color: white;
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 2rem;
    gap: 1rem;
  }

  @media screen and (max-width: 820px) {

    width: 100%;
    gap:1rem;
    a {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 1.5rem;
    gap: 1rem;
  }
}
`;

export const FooterLogosGitHub = styled.img`
  /* width:5%; */
  height: 100%;
  /* cursor:pointer; */
`;
export const LinkedInIcon = styled(LinkedInSvg)`
  height: 100%;
  fill: white;
`;