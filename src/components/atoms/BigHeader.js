import styled from "styled-components";

const BigHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.desktop.xl};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  }
`;

export default BigHeader;
