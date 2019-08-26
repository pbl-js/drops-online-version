import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { routes } from "../../routes";

import ButtonIcon from "../atoms/ButtonIcon";

import { Git as Logo } from "styled-icons/boxicons-logos/Git";
import { ThList } from "styled-icons/fa-solid/ThList";
import { StarHalf } from "styled-icons/boxicons-solid/StarHalf";
import { Collection } from "styled-icons/boxicons-solid/Collection";
import { PersonPin } from "styled-icons/material/PersonPin";
import { Exit } from "styled-icons/boxicons-solid/Exit";

import { connect } from "react-redux";
import { changeBackground as changeBackgroundAction } from "../../actions";

const StyledWrapper = styled.nav`
  position: fixed;
  z-index: 9999999;
  bottom: 0;
  left: 0;
  padding: 25px;
  width: 150px;
  height: 100vh;
  background-color: #341442;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
    z-index: 999999;
    padding: 0;
  }
`;

const StyledLogoLink = styled.div`
  display: block;
  width: 67px;
  height: 67px;
  margin-bottom: 10vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  color: #81678e;
  transform: rotate(180deg);
  margin-top: auto;
  margin-bottom: 10px;
  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
  }
  :hover {
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ changeBackground }) => (
  <StyledWrapper>
    <StyledLogoLink>
      <Logo />
    </StyledLogoLink>
    <StyledLinksList>
      <ButtonIcon color="orange" as={NavLink} to={routes.topics}>
        <ThList />
        <p>Topics</p>
      </ButtonIcon>

      <ButtonIcon color="blue" as={NavLink} to={routes.dojo}>
        <StarHalf />
        <p>Dojo</p>
      </ButtonIcon>

      <ButtonIcon color="green" as={NavLink} to={routes.collection}>
        <Collection />
        <p>Collection</p>
      </ButtonIcon>

      <ButtonIcon color="purple" as={NavLink} to={routes.profile}>
        <PersonPin />
        <p>Profile</p>
      </ButtonIcon>
    </StyledLinksList>
    <StyledButtonIcon as={Link} to={routes.login}>
      <Exit />
    </StyledButtonIcon>
  </StyledWrapper>
);
const mapDispatchToProps = dispatch => ({
  changeBackground: color => dispatch(changeBackgroundAction(color))
});

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
