import styled from "styled-components";
import { fadeIn, fadeOut } from "../../animations/index";

const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  min-height: 100vh;
  padding: 70px 40px 0 40px;
  background-repeat: no-repeat;
  background-image: ${({ pageContext }) => {
    if (pageContext === "topics") {
      return `linear-gradient(
        180deg,
        #b54798,
        #e67625,
        #4353b3,
        #38207f,
        #45a77e,
        #02929b,
        #803a9e,
        #4d1360
        )`;
    } else {
      return null;
    }
  }};

  animation: ${fadeIn} 0.5s;

  @media (max-width: 768px) {
    padding: 70px 20px 70px 20px;
  }
`;

export default GradientContainer;
