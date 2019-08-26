import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import ProgressStatus from "../molecules/ProgressStatus";
import { showingTranslateTop } from "../../animations/index";

import { Link } from "react-router-dom";
import { routes } from "../../routes/index";

const StyledWrapper = styled.article`
  text-decoration: none;
  position: relative;
  overflow: hidden;
  width: ${({ theme }) => theme.topicSize.desktop.width + "px"};
  height: ${({ theme }) => theme.topicSize.desktop.height + "px"};
  border-radius: 10px;
  background-color: ${({ color }) => {
    if (color === "orange") {
      return "#e67e22";
    } else if (color === "red") {
      return "#E64C3C";
    } else if (color === "cherry") {
      return "#BF382C";
    } else if (color === "purple1") {
      return "#9B59B6";
    } else if (color === "purple2") {
      return "#8D45AD";
    } else if (color === "blue1") {
      return "#2980BA";
    } else if (color === "blue2") {
      return "#3598DA";
    } else if (color === "green1") {
      return "#1EBB9C";
    } else if (color === "green2") {
      return "#159F86";
    } else if (color === "green3") {
      return "#29AE61";
    } else if (color === "green4") {
      return "#2CCC70";
    }
  }};
  padding: 25px;
  margin-right: ${({ theme }) => theme.topicSize.desktop.marginRight + "px"};
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: ${({ locked }) => (locked ? null : "pointer")};
  &:first-child {
    margin-left: ${({ theme }) => theme.padding.desktop + "px"};
  }
  &:last-child {
    margin-right: 0;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: ${({ locked }) => (locked ? 0.5 : 0)};
  }

  animation: ${showingTranslateTop} 0.5s;
  animation-fill-mode: both;
  animation-delay: ${({ index }) => {
    return (index * 1.5) / 10 + 0.5 + "s";
  }};

  @media (max-width: 768px) {
    margin-right: ${({ theme }) => theme.topicSize.mobile.marginRight + "px"};
    width: ${({ theme }) => theme.topicSize.mobile.width + "px"};
    height: ${({ theme }) => theme.topicSize.mobile.height + "px"};
    &:first-child {
      margin-left: ${({ theme }) => theme.padding.mobile + "px"};
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
`;

const StyledImg = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 37.5%;
  height: 50%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
`;

const ProgressStatusWrapper = styled.div`
  width: 80px;
  height: 10px;
  @media (max-width: 768px) {
    width: 50px;
    height: 7px;
  }
`;

const SingleTopic = ({ color, title, img, progress, index, destination }) => {
  const {
    locked,
    started,
    passed,
    mastering,
    learningProgress,
    masteringProgress
  } = progress;
  return (
    <StyledWrapper
      color={color}
      locked={locked}
      index={index}
      as={Link}
      to={routes.startGame + destination}
    >
      <StyledParagraph>{title}</StyledParagraph>
      <ProgressStatusWrapper>
        <ProgressStatus
          locked={locked}
          started={started}
          passed={passed}
          mastering={mastering}
          learningProgress={learningProgress}
          masteringProgress={masteringProgress}
        />
      </ProgressStatusWrapper>

      <StyledImg url={img} />
    </StyledWrapper>
  );
};

export default SingleTopic;
