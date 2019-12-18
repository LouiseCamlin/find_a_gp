import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GPItem from "./components/GPItem";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route
            exact
            path="/:id"
            render={props => {
              const id = props.match.params.id;
              return <GPItem id={id} />;
            }}
          />
        </Switch>
      </Router>
    );
    // return <MainContainer />;
  }
}

export default App;
