import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/nutrition_search" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
