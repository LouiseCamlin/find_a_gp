import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GPItem from "./components/GPItem";
import { createStore } from "redux";
import { Provider } from "react-redux";
import practicesReducer from "./reducers/practices_reducer";

const store = createStore(practicesReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
