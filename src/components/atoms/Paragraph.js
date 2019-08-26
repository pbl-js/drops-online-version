import styled from "styled-components";

const Paragraph = styled.p`
  color: white;
  font-size: 18px;
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
  font-weight: 500;
  opacity: ${({ type }) => {
    if (type === "transparent") {
      return 0.5;
    }
  }};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
  }
`;

export default Paragraph;
