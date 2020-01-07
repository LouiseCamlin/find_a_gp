import React from "react";
import { Link } from "react-router-dom";

const GPList = props => {
  if (props.filteredPractices[0]) {
    const practices = props.filteredPractices[0].map((practice, index) => {
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
