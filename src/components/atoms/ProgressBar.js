import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const ProgressValue = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ mastering }) => (mastering ? "#FEE06A" : "white")};
  transform: ${({ progressPercent }) =>
    "translate( -" + progressPercent + "% )"};
  z-index: 10;
`;

const ProgressBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
  z-index: 0;
`;

const ProgressBar = ({ progress, mastering }) => {
  const progressPercent = 100 - (progress.value * 100) / progress.total;
  //Liczbę % odejmujemy od 100 z uwagi na to ze translate działa w ten sposób

  return (
    <StyledWrapper>
      <ProgressValue mastering={mastering} progressPercent={progressPercent} />
      <ProgressBackground />
    </StyledWrapper>
  );
};

export default ProgressBar;
