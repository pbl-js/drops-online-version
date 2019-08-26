import React from "react";
import styled from "styled-components";
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt";
import { Cancel } from "styled-icons/material/Cancel";

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.desktop.s};
  font-weight: 600;
  padding: 15px 15px 15px 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  background-color: transparent;
  color: white;
  outline: 0;
  ::before {
  }

  ::placeholder {
    color: white;
  }
  :focus {
    border: 2px solid white;
  }
  :focus::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
  }
`;

const StyledSearch = styled(Search)`
  width: 30px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

const ClrearInputValue = styled(Cancel)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 30px;
  border: 0;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  :hover {
    color: white;
  }
`;

const Dojo = props => {
  const {
    type,
    placeholder,
    value,
    inputValueHandle,
    inputClearHandle
  } = props;
  return (
    <StyledWrapper>
      <StyledSearch />
      <SearchInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => inputValueHandle(e)}
      />
      {value && <ClrearInputValue onClick={() => inputClearHandle()} />}
    </StyledWrapper>
  );
};

export default Dojo;
