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
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 820px) {

    padding: 4rem;

    
  h2 {
    
    margin-bottom: 3rem;
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

    width: 90%;
    gap:2rem;
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