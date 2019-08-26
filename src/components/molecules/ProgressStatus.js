import React from "react";
import styled from "styled-components";
import ProgressBar from "../atoms/ProgressBar";

import { Star } from "styled-icons/fa-solid/Star";
import { RemoveRedEye } from "styled-icons/material/RemoveRedEye";
import { Lock } from "styled-icons/material/Lock";

//Komponent progress status nie ma swojego rozmiaru. Przyjmuje on rozmiar rodzica który jest wymagany przy implementacji
const StyledWrapper = styled.article`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  svg {
    z-index: 50;
    height: ${({ locked }) => (locked ? "250%" : "150%")};
    margin-left: ${({ locked }) => (locked ? "0" : "10%")};
    color: ${({ passed, locked }) => {
      if (locked === true) {
        return "white";
      } else {
        return passed ? "#FEE06A" : "black";
      }
    }};
    opacity: ${({ passed, locked }) => (passed || locked ? 1 : 0.3)};
  }
`;

const typeProgressReturn = (
  locked,
  started,
  passed,
  mastering,
  learningProgress,
  masteringProgress
) => {
  if (locked) {
    return <Lock />;
  } else {
    if (started) {
      if (passed) {
        return <Star />;
      } else {
        if (mastering) {
          return (
            <>
              <ProgressBar progress={masteringProgress} mastering={mastering} />
              <Star />
            </>
          );
        } else {
          return (
            <>
              <ProgressBar progress={learningProgress} mastering={mastering} />
              <RemoveRedEye />
            </>
          );
        }
      }
    } else {
      return null;
    }
  }
};

const ProgressStatus = ({
  locked,
  started,
  passed,
  mastering,
  learningProgress,
  masteringProgress
}) => {
  return (
    <StyledWrapper passed={passed} locked={locked}>
      {typeProgressReturn(
        locked,
        started,
        passed,
        mastering,
        learningProgress,
        masteringProgress
      )}
    </StyledWrapper>
  );
};

export default ProgressStatus;
