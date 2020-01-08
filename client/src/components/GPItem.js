import React, { Component } from "react";
import Request from "../helpers/Request";
import { EsriProvider } from "leaflet-geosearch";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class GPItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusGp: null,
      latitude: null,
      longitude: null
    };
  }

  componentDidMount() {
    const request = new Request();
    const url = `http://localhost:3001/api/${this.props.id}`;
    const provider = new EsriProvider();
    request.get(url).then(data => {
      this.setState({ focusGp: data }, () => {
        provider
          .search({ query: this.state.focusGp.Postcode })
          .then(results => {
            this.setState({
              latitude: results[0].x,
              longitude: results[0].y
            });
          });
      });
    });
  }

  getMap() {
    let position = null;
    if (this.state.latitude && this.state.longitude) {
      position = [this.state.longitude, this.state.latitude];
    }

    if (this.state.latitude === null || this.state.longitude === null) {
      return null;
    }

    return (
      <Map center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }

  render() {
    if (this.state.focusGp === null) return null;

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

        {this.getMap()}
      </div>
    );
  }
}

export default GPItem;
