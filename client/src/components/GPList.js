import React, { Component } from "react";

class GPList extends Component {
  render() {
    console.log("this props", this.props);

    const practices = this.props.practices.map((practice, index) => {
      return <li key={index}>{practice.GPPracticeName}</li>;
    });
    return <ul>{practices}</ul>;
  }
}

export default GPList;
