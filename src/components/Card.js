import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../styles/card.css';
import Button from './AddToCartButton';

export default class Card extends Component {
  render() {
    const { activity } = this.props;
    return (
      <div className="card">
        <div className="card-img-container">
          <img src={activity.cover_image_url} alt=""/>
        </div>
        <h1><Link to={`/activities/${activity.uuid}`}>{activity.title}</Link></h1>
        <p>{activity.description}</p>
        <p>{activity.retail_price.formatted_value}</p>
        <Button activity={activity}/>
      </div>
    )
  }
}
