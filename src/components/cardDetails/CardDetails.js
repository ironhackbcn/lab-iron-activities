import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CardDetails extends Component {
  state = {
    id: this.props.match.params,
    museums: this.props.museums,
  }

  render() {
    const { museums, id } = this.state;
    console.log(id);
    console.log(museums);
    const selectedMuseum = museums.filter(museum => museum.uuid === id);
    console.log('selectedMuseum', selectedMuseum);
    // console.log('museum.uiid', selectedMuseum[0].uuid);

    return (
      <div>
        hello
      </div>
      // <div className="card">
      //   <div className="image-container">
      //     <img className="image" src={this.details.url} alt={this.details.title} />
      //   </div>
      //   <h2 className="card-title">{this.details.title}</h2>
      //   <p className="card-desc">{this.details.description}</p>
      //   <p className="price">{this.details.price}</p>
      //   <Link to={"/"}>Go back</Link>
      // </div>
    )
  }
}
