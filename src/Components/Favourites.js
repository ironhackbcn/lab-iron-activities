import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Favourites extends Component {
  render() {

    return (
      <div>
        {this.props.favActivities.map((favActivity) => {
          return (
            <div key={favActivity.uuid}>
              <img src={favActivity.cover_image_url} alt={favActivity.title} width="50px" height="50px" />
              <Link to={`/activities/${favActivity.uuid}`}>{favActivity.title}</Link>
              <a href="#" onClick={() => {
                this.props.deleteFromFav(favActivity.uuid);
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
