import React from "react";
import { Link } from "react-router-dom";

const GPList = props => {
  console.log();

  if (props.filteredPractices) {
    const practices = props.filteredPractices.map((practice, index) => {
      return (
        <li key={index}>
          <Link to={"/" + practice.id}>
            {practice.GPPracticeName} - {practice.id}
          </Link>
        </li>
      );
    });
    return <ul>{practices}</ul>;
  }
  return null;
};

export default GPList;
