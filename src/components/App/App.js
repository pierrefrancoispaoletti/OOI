import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectUserObject } from "../../redux/reducers/user/user-selectors";

import { Route, Switch } from "react-router";
import Categorypage from "../../pages/CategoryPage/CategoryPage";
import Homepage from "../../pages/HomePage/HomePage";
import SignInPage from "../../pages/SignInPage/SignInPage";

import Appbar from "../AppBar/AppBar";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { AppContainer } from "./app.style";

const App = ({ user }) => {
  return (
    <AppContainer>
      <Appbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fade bottom>
              <Homepage>
                <Zoom delay="300">
                  <NavigationMenu />
                </Zoom>
              </Homepage>
            </Fade>
          )}
        />
        <Route
          path="/category/:cat"
          render={(props) => (
            <Homepage>
              <Fade top>
                <Categorypage {...props} />
              </Fade>
            </Homepage>
          )}
        />
        <Route
          path="/sign-in"
          render={() => (
            <Fade left>
              <Homepage>
                <Fade left>{user ? <NavigationMenu /> : <SignInPage />}</Fade>
              </Homepage>
            </Fade>
          )}
        />
      </Switch>
    </AppContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  user: selectUserObject,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
