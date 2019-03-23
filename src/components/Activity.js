import React, { Component } from 'react';
import tours from '../data/data.json';

class Activity extends Component {

  findMatchingTour = (id) => {
    return tours.find((tour) => {
      return tour.uuid === id;
    });
  }

  render() {
    const { id } = this.props.match.params;
    const tour = this.findMatchingTour(id);
    return (
      <div className="container">
        <img src={tour.cover_image_url} alt="tour"/>
        <h1>{tour.title}</h1>
        <p>{tour.description}</p>
        <strong><p>{tour.retail_price.formatted_value}</p></strong>

      </div>
    )
  }
}

export default Activity;
