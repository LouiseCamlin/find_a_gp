import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchString = event.target.value;
    this.setState({
      searchString: searchString.toLowerCase()
    });
  }

  handleClick() {
    this.props.onHandleClick(this.state.searchString);
  }

  render() {
    return (
      <>
        <input type="search" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleClick}>
          Search
        </button>
      </>
    );
  }
}

export default SearchBar;
