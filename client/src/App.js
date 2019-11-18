import React, { Component } from "react";
import "./App.css";
import Request from "./helpers/Request.js";
import GPList from "./components/GPList.js";

class App extends Component {
  componentDidMount() {
    const request = new Request();
    const url = "http://localhost:3001/api";
    request.get(url).then(data => {
      this.setState(
        {
          gpPractices: data
        },
        () => console.log(this.state.gpPractices)
      );
    });
  }

  render() {
    if (this.state) {
      return <GPList practices={this.state.gpPractices} />;
    }
    return <h1>loading...</h1>;
  }
}

export default App;
