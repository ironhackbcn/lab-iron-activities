import React, { Component } from 'react';
import tours from '../data/data.json';
import { Link } from 'react-router-dom';
import Button from './Button';

class ActivityList extends Component {

  state = {
    tours: tours.slice(0, 17),
  }

  checkCartForSpecificId = (id) => {
    const { cart } = this.props;
    return cart.filter((tour) => {
      return tour.uuid === id;
    });
  }

  addToCart = (id) => {
    const { addToCartHandler } = this.props;
    addToCartHandler(id);
  }

  listActivities = () => {
    const { cart } = this.props;
    return this.state.tours.map((tour) => {
      
      return (
        <div className="col-4" key={tour.uuid}>
          <div className="tour-item">
            <Link to={`/activities/${tour.uuid}`}>
              <img src={tour.cover_image_url} alt="tour"></img>
            </Link>
            <h5>{tour.title}</h5>
            <p>{tour.description}</p>
            <strong><p className="price">{tour.retail_price.formatted_value}</p></strong>
            <Button cart={cart} tourId={tour.uuid} addToCartHandler={this.addToCart}></Button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container activities-list">
        <div className="row">
          {this.listActivities()}
        </div>
      </div>
    );
  }
}

export default ActivityList;
