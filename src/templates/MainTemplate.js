import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/mainTheme";
import { withRouter } from "react-router";
import GlobalStyle from "../theme/GlobalStyle";
import PageContext from "../context";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import GradientBackground from "../components/atoms/GradientBackground";

import { connect } from "react-redux";
import { changeBackground as changeBackgroundAction } from "../actions/index";

class MainTemplate extends Component {
  state = {
    pageType: "topics"
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = "") => {
    const pageTypes = ["topics", "dojo", "collection", "profile", "game"];
    const {
      location: { pathname }
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    const setColor = () => {
      if (currentPage === "topics") {
        return "orange";
      } else if (currentPage === "dojo") {
        return "blue";
      } else if (currentPage === "collection") {
        return "green";
      } else if (currentPage === "profile") {
        return "purple";
      } else if (currentPage === "game") {
        return "orange";
      } else {
        return "orange";
      }
    };

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
      this.props.changeBackground(setColor());
    }
  };

  render() {
    const { children, background } = this.props;
    const { pageType } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            {children}
            <TransitionGroup component={null}>
              <CSSTransition
                appear
                timeout={500}
                classNames="page"
                key={background}
              >
                <GradientBackground pageContext={background} />
              </CSSTransition>
            </TransitionGroup>
          </>
        </ThemeProvider>
      </PageContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  const { background } = state;
  return { background };
};

const mapDispatchToProps = dispatch => ({
  changeBackground: color => dispatch(changeBackgroundAction(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainTemplate));
