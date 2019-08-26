import React, { Component } from "react";
import styled from "styled-components";
import SidebarTemplate from "../templates/SidebarTemplate";
import InputText from "../components/atoms/InputText";

const SearchWrapper = styled.header`
  margin-top: 50px;
  margin: 50px auto 50px auto;
  width: 50%;
`;

class Collection extends Component {
  state = {
    inputValue: ""
  };

  inputValueHandle = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  inputClearHandle = () => {
    this.setState({
      inputValue: ""
    });
  };

  render() {
    return (
      <SidebarTemplate>
        <SearchWrapper>
          <InputText
            type="text"
            placeholder="Search words"
            value={this.state.inputValue}
            inputValueHandle={this.inputValueHandle}
            inputClearHandle={this.inputClearHandle}
          />
        </SearchWrapper>

        <h1>{this.state.inputValue}</h1>
      </SidebarTemplate>
    );
  }
}

export default Collection;
