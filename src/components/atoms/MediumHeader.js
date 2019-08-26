import styled from "styled-components";

const MediumHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.desktop.m};
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
  }
`;

export default MediumHeader;
