import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../../theme/mainTheme";
import MediumHeader from "../atoms/MediumHeader";
import TopicSlider from "./TopicSlider";

import { showingTranslateRight } from "../../animations/index";

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const InnerWrapperHeader = styled.div`
  width: 100%;
  animation: ${showingTranslateRight} 0.5s;
  animation-fill-mode: both;
`;

class TopicSection extends Component {
  state = {
    sliderWidth: 0,
    sliderWrapperWidth: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth > 768) {
      //desktop
      this.setState({
        sliderWrapperWidth: window.innerWidth - 150,
        windowWidth: window.innerWidth,
        sliderWidth:
          this.props.amount *
            (theme.topicSize.desktop.width +
              theme.topicSize.desktop.marginRight) -
          theme.topicSize.desktop.marginRight +
          theme.padding.desktop
      });
    } else {
      //mobile
      this.setState({
        sliderWrapperWidth: window.innerWidth,
        windowWidth: window.innerWidth,
        sliderWidth:
          this.props.amount *
            (theme.topicSize.mobile.width +
              theme.topicSize.mobile.marginRight) -
          theme.topicSize.mobile.marginRight
      });
    }
  };

  render() {
    const { children, title } = this.props;
    const { sliderWrapperWidth, sliderWidth } = this.state;

    return (
      <StyledWrapper>
        <InnerWrapperHeader>
          <MediumHeader>{title}</MediumHeader>
        </InnerWrapperHeader>

        <TopicSlider
          sliderWrapperWidth={sliderWrapperWidth}
          sliderWidth={sliderWidth}
        >
          {children}
        </TopicSlider>
      </StyledWrapper>
    );
  }
}

export default TopicSection;
