import React, { Component } from 'react';

// Components
import Button from './Button';

class Card extends Component {
  render() {
    const { title, description, cover_image_url } = this.props.activity
    return (            
      <div className="card column is-half">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={cover_image_url} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{description}</div>
          <Button activity={this.props.activity}>{this.props.child}</Button>
        </div>
      </div>
    )
  }
}

export default Card