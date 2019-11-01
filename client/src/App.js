import React, { Component } from "react";
import "./App.css";
import Request from "./helpers/Request.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

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

  renderPracticeNames() {}

  render() {
    if (this.state) {
      const practices = this.state.gpPractices.map((practice, index) => {
        return <li key={index}>{practice.GPPracticeName}</li>;
      });
      return <ul>{practices}</ul>;
    }
    return <h1>loading...</h1>;
  }
}

export default App;
