import React, { Component } from 'react';
import { Link } from "react-router-dom";
import museumsList from '../../data/data.json';

export default class CardDetails extends Component {
  museums = museumsList;
  id = this.props.match.params.id;
  details = this.museums.filter(museum => museum.uuid === this.id);

  render() {
    this.museums.forEach(museum => console.log(museum.uuid))
    console.log(this.museums);
    console.log(this.id);
    console.log(this.details);
    return (
      <div className="card">
        <div className="image-container">
          <img className="image" src={this.details.url} alt={this.details.title} />
        </div>
        <h2 className="card-title">{this.details.title}</h2>
        <p className="card-desc">{this.details.description}</p>
        <p className="price">{this.details.price}</p>
        <Link to={"/"}>Go back</Link>
      </div>
    )
  }
}
