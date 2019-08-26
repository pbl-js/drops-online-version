import styled from "styled-components";
import { ArrowAltCircleRight as Arrow } from "styled-icons/fa-solid/ArrowAltCircleRight";

const StyledArrow = styled(Arrow)`
  height: 40px;
  width: 40px;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  z-index: 100;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ${({ direction }) => {
    if (direction === "left") {
      return "left: 40px;";
    } else if (direction === "right") {
      return "right: 40px;";
    }
  }}
  transform: translateY(-50%);
  transform: ${({ direction }) => {
    if (direction === "left") {
      return "translateY(-50%) rotate(180deg)";
    } else if (direction === "right") {
      return null;
    } else {
      return null;
    }
  }};
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    ${({ direction }) => {
      if (direction === "left") {
        return "left: 20px;";
      } else if (direction === "right") {
        return "right: 20px;";
      }
    }}
  }
`;

export default StyledArrow;
