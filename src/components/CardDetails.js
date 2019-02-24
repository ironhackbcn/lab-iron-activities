import React, { Component } from 'react'
import data from '../data/data.json';


export default class CardDetails extends Component {
  state = {
    activities: data,
  }
  render() {
    const { activities } = this.state;
    const { id } = this.props.match.params;
    const chosenActivity = activities.filter((activity) => activity.uuid === id);
    console.log(id);

    return (
      <div className="card-details">
        <h1>{chosenActivity[0].title}</h1>
      </div>
    )
  }
}
