import { faBook, faCauldron, faUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoOOI.png";
import { HeaderContainer, LinkItem, LinksContainer } from "./appbar.style";

const Appbar = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <img width="80px" height="80px" src={Logo} alt="Logo OOI" />
      </Link>
      <LinksContainer>
        <LinkItem to="/sign-in">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faBook} size="2x" />
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faCauldron} size="2x" />
        </LinkItem>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Appbar;
