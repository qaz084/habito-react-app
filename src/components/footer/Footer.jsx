import React from "react";
import {
  FooterContainer,
  FooterDataContainer,
  FooterLogos,
  FooterLogosGitHub,
  FooterLogosLinkedIn,
  LinkedInIcon,
} from "./footer.styles";
import LinkedInLogo from "../../assets/linkedInLogo.svg";
import GitHubLogo from "../../assets/github-mark-white.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <h2>made by Jonathan Bruno Iurman</h2>
      <FooterDataContainer>
        <a target="_blank" href="https://www.linkedin.com/in/jonathan-iurman/">
          <LinkedInIcon />
          <span>/jonathan-iurman</span>
        </a>
        <a target="_blank" href="https://github.com/qaz084">
          <FooterLogosGitHub src={GitHubLogo} />
          <span>/qaz084</span>
        </a>
      </FooterDataContainer>
    </FooterContainer>
  );
};
