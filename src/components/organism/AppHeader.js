import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import withContext from "../../hoc/withContext";

import MediumHeader from "../atoms/MediumHeader";
import { Clock } from "styled-icons/fa-solid/Clock";

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  height: 70px;
  width: ${({ sidebar }) => (sidebar ? "calc(100% - 150px)" : "100%")};
  padding: 0 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InnerWrapper = styled.div`
  height: 70px;
  width: 100px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const StyledClock = styled(Clock)`
  height: 50%;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

const AppHeader = ({ pageContext, time, sidebar }) => {
  const { minutes, seconds } = time;

  const timeRender = time => {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  };
  return (
    <StyledWrapper sidebar={sidebar}>
      <InnerWrapper>
        <p>312 Words</p>
      </InnerWrapper>

      <MediumHeader>{pageContext}</MediumHeader>

      <InnerWrapper>
        <p>
          {timeRender(minutes)}:{timeRender(seconds)}
        </p>
        <StyledClock />
      </InnerWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = state => {
  const { time } = state;
  return { time };
};

export default connect(mapStateToProps)(withContext(AppHeader));
