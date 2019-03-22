import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {title, description, cover_image_url} = this.props.activity
    console.log(this.props)
    
    return(
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
          <button class="button is-link">Add to cart</button>
        </div>
      </div>
    )
  }
}

export default Card