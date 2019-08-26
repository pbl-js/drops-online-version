import React from "react";
import styled from "styled-components";
import withContext from "../hoc/withContext";

import Sidebar from "../components/organism/Sidebar";
import AppHeader from "../components/organism/AppHeader";
import GradientContainer from "../components/atoms/GradientConteiner";

const MainWrapper = styled.div`
  margin-left: 150px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SidebarTemplate = ({ children, pageContext }) => (
  <>
    <Sidebar />
    <MainWrapper>
      <AppHeader sidebar />
      <GradientContainer pageContext={pageContext}>
        {children}
      </GradientContainer>
    </MainWrapper>
  </>
);

export default withContext(SidebarTemplate);
