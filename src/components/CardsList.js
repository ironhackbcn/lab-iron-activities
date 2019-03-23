import React, { Component } from 'react';
import axios from 'axios';

// Components
import Card from './Card'

class CardsList extends Component {

  state = {
    activities: []
  }

  componentDidMount = async () => {
    const itemsPerPage = 20
    const offset = 0

    const apiCall = await axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)
    const data = apiCall.data

    this.setState(
      { activities: data }
    )
  }

  renderList = () => {
    return this.state.activities.map(activity => {
      return <Card key={activity.uuid} activity={activity} />
    })
  }


  render() {
    return (
      <div className="container">
        <div className="columns is-flex-fullhd">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default CardsList