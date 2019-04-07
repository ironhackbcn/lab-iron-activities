import React, { Component } from 'react';
import Button from './ActionButton';

export default class ClassDetail extends Component {
  render() {
    const activity = this.props.act[this.props.match.params.id];
    return (
      <div className="card m-1">
        <img src={activity.cover_image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{activity.title}</h5>
          <p className="card-text text-center">{activity.description}</p>
          <p className="card-text text-center">{activity.retail_price.formatted_value}</p>
          <Button />
        </div>
      </div>
    )
  }
}
