import React, { Component } from "react";
import styled from "styled-components";

import StyledArrow from "../atoms/StyledArrow";

const StyledWrapper = styled.article`
  position: relative;
  width: ${({ theme }) => {
    const totalPadding = theme.padding.desktop + theme.padding.desktop;
    return `calc(100% + ${totalPadding + "px"})`;
  }};
  margin-top: 15px;
  margin-left: ${({ theme }) => "-" + theme.padding.desktop + "px"};
  overflow: hidden;
  @media (max-width: 768px) {
    width: ${({ theme }) => {
      const totalPadding = theme.padding.mobile + theme.padding.mobile;
      return `calc(100% + ${totalPadding + "px"})`;
    }};
    margin-left: ${({ theme }) => "-" + theme.padding.mobile + "px"};
  }
`;

const InnerWrapperContent = styled.div`
  top: 0;
  left: 0%;
  position: relative;
  display: flex;
  flex-grow: 0;
  transform: ${({ position }) => {
    return "translateX(-" + position + "px)";
  }};
  transition: transform 0.3s;
`;

class TopicSection extends Component {
  state = {
    position: 0
  };

  handlePositionChange = (direction, value, maxTranslateValue) => {
    if (direction === "right") {
      this.setState(prevState => {
        if (prevState.position + value > maxTranslateValue) {
          return { position: maxTranslateValue };
        } else {
          return { position: prevState.position + value };
        }
      });
    } else if (direction === "left") {
      this.setState(prevState => {
        if (prevState.position - value < 0) {
          return { position: 0 };
        } else {
          return { position: prevState.position - value };
        }
      });
    }
  };

  leftArrowVisable = () => {
    if (this.state.position <= 0) {
      return null;
    } else {
      return (
        <StyledArrow
          direction={"left"}
          onClick={() => this.handlePositionChange("left", 400)}
        />
      );
    }
  };

  rightArrowVisable = (sliderWidth, sliderWrapperWidth) => {
    const maxTranslateValue = sliderWidth - sliderWrapperWidth + 40;

    if (this.state.position === maxTranslateValue) {
      return null;
    } else {
      return (
        <StyledArrow
          direction={"right"}
          onClick={() =>
            this.handlePositionChange("right", 400, maxTranslateValue)
          }
        />
      );
    }
  };

  render() {
    const { children, sliderWrapperWidth, sliderWidth } = this.props;
    const { position } = this.state;
    return (
      <StyledWrapper>
        {this.rightArrowVisable(sliderWidth, sliderWrapperWidth)}
        {this.leftArrowVisable()}

        <InnerWrapperContent position={position}>
          {children}
        </InnerWrapperContent>
      </StyledWrapper>
    );
  }
}

export default TopicSection;
