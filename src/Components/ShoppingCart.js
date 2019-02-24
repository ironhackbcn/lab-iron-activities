import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ShoppingCart extends Component {

  render() {
    console.log("boughtActivities", this.props.boughtActivities);
    return (
      <div>
        {this.props.boughtActivities.map((boughtActivity) => {
          return (
            <div key={boughtActivity.uuid}>
              <img src={boughtActivity.cover_image_url} alt={boughtActivity.title} width="50px" height="50px" />
              <Link to={`/activities/${boughtActivity.uuid}`}>{boughtActivity.title}</Link>
              <a href="#" onClick={() => {
                this.props.deleteFromCart(boughtActivity.uuid);
              }}><img src="./assets/cross.svg" alt="delete" width="10px" height="10px" />
              </a>
            </div>
          );
        })
        }
      </div >

    )
  }
}
