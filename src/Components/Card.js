import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Card extends Component {
  render() {
    
    const displayUuid = this.props.uuid || this.props.match.params.id;
    const displayActivity=this.props.activities.filter((activity)=>activity.uuid===displayUuid)[0];
    console.log("displayActivity",displayActivity);

    return (
      <div>
        <img src={displayActivity.cover_image_url} alt={displayActivity.title} width="100px" height="100px"/>
        <button>Favorite</button>
        <Link to={`/activities/${displayActivity.uuid}`}>{displayActivity.title}</Link>
        <p>{displayActivity.description}</p>
        <h4>{displayActivity.retail_price.value}</h4>
        <button>Add to cart</button>
        {this.props.match ? <Link to={`/activities`}>Back</Link> : null}
      </div>
    )
  }
}
