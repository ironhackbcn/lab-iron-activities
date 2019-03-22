import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Card extends Component {

  toggleCartHandler = () => {
    const displayUuid = this.props.uuid || this.props.match.params.id;
    this.props.toggleCart(displayUuid);
  };


  toggleFavHandler = () => {
    const displayUuid = this.props.uuid || this.props.match.params.id;
    this.props.toggleFav(displayUuid);
  };

  render() {

    const displayUuid = this.props.uuid || this.props.match.params.id;
    const displayActivity = this.props.activities.filter((activity) => activity.uuid === displayUuid)[0];

    return (
      <div className="col-sm">
        <img src={displayActivity.cover_image_url} alt={displayActivity.title} width="100px" height="100px" />
        <button onClick={this.toggleFavHandler}>{displayActivity.fav ? <img src="./assets/staryellow.svg" alt="yellow star" width="30px" height="30px" /> : <img src="./assets/star.svg" alt="dark star" width="30px" height="30px" />}</button>
        <Link to={`/activities/${displayActivity.uuid}`}>{displayActivity.title}</Link>
        <p>{displayActivity.description}</p>
        <h4>{displayActivity.retail_price.value}</h4>
        <a href="#" className="btn btn-primary" onClick={this.toggleCartHandler}>{displayActivity.ordered ? "In cart" : "Add to cart"}</a>
        {this.props.match ? <Link to={`/activities`}>Back</Link> : null}
      </div>
    )
  }
}
