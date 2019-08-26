import React from "react";
import styled from "styled-components";

import MediumHeader from "../atoms/MediumHeader";
import BigHeader from "../atoms/BigHeader";
import Button from "../atoms/Button";
import ProgressStatus from "../molecules/ProgressStatus";

import { RightArrow } from "styled-icons/boxicons-solid/RightArrow";

const StyledWrapper = styled.article`
  margin: 50px 0 100px 0;
  position: relative;
  width: 100%;
`;

const StyledBigHeader = styled(BigHeader)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
`;

const ProgressStatusWrapper = styled.div`
  margin-top: 40px;
  width: 120px;
  height: 12px;
  @media (max-width: 768px) {
    width: 100px;
    height: 10px;
  }
`;

const SingleTopic = () => {
  return (
    <StyledWrapper>
      <MediumHeader>Biznes i technologia</MediumHeader>
      <StyledBigHeader>Warzywa (ciąg dalszy)</StyledBigHeader>
      <ProgressStatusWrapper>
        <ProgressStatus
          locked={false}
          started={true}
          passed={false}
          mastering={true}
          learningProgress={{
            value: 20,
            total: 20
          }}
          masteringProgress={{
            value: 14,
            total: 20
          }}
        />
      </ProgressStatusWrapper>
      <StyledButton color="topics">
        continue <RightArrow />
      </StyledButton>
    </StyledWrapper>
  );
};

export default SingleTopic;
