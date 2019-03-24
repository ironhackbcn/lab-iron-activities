import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Components
import ButtonCart from './ButtonCart';
import ButtonFavorite from './ButtonFavorite';

class Card extends Component {
  render() {
    const { title, description, cover_image_url } = this.props.activity
    return (            
      <div className="card column is-half">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={cover_image_url} alt={title} />
            <ButtonFavorite activity={this.props.activity} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={`/activity/${this.props.activity.uuid}`} className="title is-4">{title}</Link>
            </div>
          </div>
          <div className="content">{description}</div>
          <ButtonCart activity={this.props.activity}>{this.props.child}</ButtonCart>
        </div>
      </div>
    )
  }
}

export default Card