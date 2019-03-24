import React, { Component } from 'react';

// Components
import Card from './Card'

class CardsList extends Component {

  renderList = () => {
    return this.props.activities.map(activity => {
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