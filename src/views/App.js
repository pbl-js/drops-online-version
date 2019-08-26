import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";

import MainTemplate from "../templates/MainTemplate";
import Topics from "../views/Topics";
import Dojo from "../views/Dojo";
import Collection from "../views/Collection";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Game from "./Game";

import { Provider } from "react-redux";
import store from "../store/index";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to={routes.topics} />}
          />
          <Route exact path={routes.topics} component={Topics} />
          <Route exact path={routes.dojo} component={Dojo} />
          <Route exact path={routes.collection} component={Collection} />
          <Route exact path={routes.profile} component={Profile} />
          <Route exact path={routes.login} component={Login} />
          <Route path={routes.startGame} component={Game} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
