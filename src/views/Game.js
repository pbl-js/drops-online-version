import React, { Component } from "react";
import styled from "styled-components";
import withRandomColor from "../hoc/withRandomColor";

import GameTemplate from "../templates/GameTemplate";
import Button from "../components/atoms/Button";

import { connect } from "react-redux";
import { startTimer as startTimerAction } from "../actions";
import { changeBackground as changeBackgroundAction } from "../actions/index";

class Game extends Component {
  state = {
    inputValue: ""
  };

  componentDidMount() {}

  render() {
    const { randomColor, sections } = this.props;
    const words = sections[0].topics[0].words;
    return (
      <GameTemplate>
        <h1>Zaczynamy giereczkę!</h1>
        <Button onClick={() => this.props.startTimer(1)}>Siema</Button>
        <Button onClick={() => this.props.changeBackground(randomColor())} />
        {console.log(words)}
      </GameTemplate>
    );
  }
}

const mapStateToProps = ({ sections }) => {
  return { sections };
};

const mapDispatchToProps = dispatch => ({
  startTimer: value => dispatch(startTimerAction(value)),
  changeBackground: color => dispatch(changeBackgroundAction(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRandomColor(Game));
