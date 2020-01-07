import React, { Component } from "react";
import Request from "../helpers/Request.js";
import GPList from "../components/GPList.js";
import SearchBar from "../components/SearchBar";
import { connect } from "react-redux";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      gpPractices: []
    };
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const url = "http://localhost:3001/api";
    request.get(url).then(data => {
      const newData = data.map((practice, index) => {
        practice.fullAddress = [
          practice.AddressLine1.toLowerCase(),
          practice.AddressLine2.toLowerCase(),
          practice.AddressLine3.toLowerCase(),
          practice.AddressLine4.toLowerCase(),
          practice.Postcode.toLowerCase()
        ];
        practice.id = index;
        return practice;
      });

      this.setState({ gpPractices: newData });
    });
  }

  filterAddresses(searchString) {
    const filteredAddresses = this.state.gpPractices.filter(practice =>
      practice.fullAddress.toString().includes(searchString)
    );
    console.log("filteredAddresses", filteredAddresses);
    this.setState(
      {
        searchResults: filteredAddresses
      },
      () => {
        this.props.clearList();
        this.props.addListItem(this.state.searchResults);
      }
    );
  }

  onHandleClick(searchString) {
    this.filterAddresses(searchString);
  }

  render() {
    if (this.state.gpPractices) {
      return (
        <>
          <SearchBar
            practices={this.state.gpPractices}
            onHandleClick={this.onHandleClick}
          />
          <GPList
            filteredPractices={this.props.transactions}
            practices={this.state.gpPractices}
          />
        </>
      );
    }
    return <h1>loading...</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addListItem: newItem => {
      dispatch({
        type: "ADD_TRANSACTION",
        item: newItem
      });
    },
    clearList: () => {
      dispatch({
        type: "CLEAR_LIST"
      });
    }
  };
};

const mapStateToProps = state => {
  return {
    transactions: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
