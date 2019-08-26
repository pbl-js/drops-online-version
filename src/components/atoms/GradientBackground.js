import styled from "styled-components";
import { fadeIn, fadeOut } from "../../animations";

const GradientType = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: ${({ pageContext }) => {
    if (pageContext === "blue") {
      return "linear-gradient(135deg, #4353b3, #38207f)";
    } else if (pageContext === "green") {
      return "linear-gradient(135deg, #45a77e, #02929b);";
    } else if (pageContext === "purple") {
      return "linear-gradient(135deg, #803a9e, #4d1360);";
    } else if (pageContext === "orange") {
      return "linear-gradient(135deg, #b54798, #e67625);";
    } else if (pageContext === "random") {
      return "linear-gradient(135deg, #b54798, #e67625);";
    } else {
      return "linear-gradient(135deg, #b54798, #e67625);";
    }
  }};

  &.page-enter {
    animation: ${fadeIn} 0.5s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 0.5s forwards;
  }
`;

export default GradientType;
