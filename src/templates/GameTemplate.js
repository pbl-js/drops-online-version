import React from "react";
import styled from "styled-components";

import AppHeader from "../components/organism/AppHeader";
import GradientContainer from "../components/atoms/GradientConteiner";

const MainWrapper = styled.div``;

const GameTemplate = ({ children, pageContext }) => (
  <>
    <MainWrapper>
      <AppHeader />
      <GradientContainer pageContext={pageContext}>
        {children}
      </GradientContainer>
    </MainWrapper>
  </>
);

export default GameTemplate;
