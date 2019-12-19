// import React, { Component } from "react";
import React, { Component } from "react";
import Request from "../helpers/Request";

class GPItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusGp: null
    };
  }

  componentDidMount() {
    const request = new Request();
    const url = `http://localhost:3001/api/${this.props.id}`;
    request.get(url).then(data => this.setState({ focusGp: data }));
  }

  render() {
    if (this.state.focusGp === null) return null;
    console.log("id?", this.props.id);

    return (
      <div>
        <h1>{this.state.focusGp.GPPracticeName}</h1>
        <div>
          <h2>Address</h2>
          <p>{this.state.focusGp.AddressLine1}</p>
          <p>{this.state.focusGp.AddressLine2}</p>
          <p>{this.state.focusGp.AddressLine3}</p>
          <p>{this.state.focusGp.AddressLine4}</p>
          <p>{this.state.focusGp.Postcode}</p>
        </div>

        <div>
          <h2>Telephone Numbers</h2>
          <p>{this.state.focusGp.TelephoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default GPItem;
