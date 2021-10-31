import React from "react";
import { Route, Switch } from "react-router";
import Categorypage from "../../pages/CategoryPage/CategoryPage";
import Homepage from "../../pages/HomePage/HomePage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import Appbar from "../AppBar/AppBar";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { AppContainer } from "./app.style";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const App = ({ match }) => {
  console.log(match);
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
                <Fade left>
                  <SignInPage />
                </Fade>
              </Homepage>
            </Fade>
          )}
        />
      </Switch>
    </AppContainer>
  );
};

export default App;
