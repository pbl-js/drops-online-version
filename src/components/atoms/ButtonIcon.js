import styled from "styled-components";
import { scale } from "../../animations/index";

const ButtonIcon = styled.li`
  display: block;
  background-color: transparent;
  margin-bottom: 20px;
  color: #81688e;
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.desktop.xs};
  svg {
    width: 40px;
    height: 40px;
  }
  :hover {
    color: #b69cc7;
  }

  &.active {
    color: ${({ color, theme }) => {
      if (color === "orange") {
        return `${theme.color.orange}`;
      } else if (color === "blue") {
        return `${theme.color.blue}`;
      } else if (color === "green") {
        return `${theme.color.green}`;
      } else if (color === "purple") {
        return `${theme.color.purple}`;
      } else {
        return "red";
      }
    }};
    svg {
      animation: ${scale} 0.2s;
      animation-fill-mode: both;
    }
  }

  &.active p {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.xs};
    margin-bottom: 0;
    flex-basis: 300px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default ButtonIcon;
