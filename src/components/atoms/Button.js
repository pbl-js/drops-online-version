import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  flex-grow: 0;
  padding: 20px 40px;
  background-color: ${({ color, theme }) => {
    if (color === "topics") {
      return `${theme.color.orange}`;
    } else if (color === "dojo") {
      return `${theme.color.blue}`;
    }
  }};
  text-decoration: none;
  border: 0;
  border-radius: 100px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.desktop.m};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;

  svg {
    display: block;
    width: 30px;
    margin-left: 5%;
  }

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
    svg {
      width: 20px;
    }
  }
`;

export default Button;
