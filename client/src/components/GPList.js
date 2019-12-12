import React, { Component } from "react";

class GPList extends Component {
  render() {
    if (this.props.filteredPractices) {
      const practices = this.props.filteredPractices.map((practice, index) => {
        return <li key={index}>{practice.GPPracticeName}</li>;
      });
      return <ul>{practices}</ul>;
    }

    return null;
  }
}

export default GPList;
