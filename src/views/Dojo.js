import React from "react";
import styled from "styled-components";

import SidebarTemplate from "../templates/SidebarTemplate";
import BigHeader from "../components/atoms/BigHeader";
import Paragraph from "../components/atoms/Paragraph";
import Button from "../components/atoms/Button";

import dojoImg from "../assets/study1.png";
import { Link } from "react-router-dom";
import { routes } from "../routes";

import { connect } from "react-redux";
import { changeBackground as changeBackgroundAction } from "../actions/index";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;
`;

const StyledImg = styled.img`
  max-width: 200px;
  margin-bottom: 20px;
  @media (max-width: 786px) {
    min-width: 50%;
  }
`;

const Dojo = props => (
  <SidebarTemplate>
    <InnerWrapper>
      <StyledImg src={dojoImg} />
      <BigHeader>Never forget again!</BigHeader>
      <StyledParagraph type="transparent">
        Practise words with an optimal learning algorithm. The Dojo presents you
        with just the right word at just the right time.
      </StyledParagraph>
      <Button color="dojo" as={Link} to={routes.startGame}>
        PRACTISE NOW!
      </Button>
      <StyledParagraph>307 words ready for optimal learning</StyledParagraph>
    </InnerWrapper>
  </SidebarTemplate>
);

const mapDispatchToProps = dispatch => ({
  changeBackground: color => dispatch(changeBackgroundAction(color))
});

export default connect(
  null,
  mapDispatchToProps
)(Dojo);
