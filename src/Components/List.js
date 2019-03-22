import React, { Component } from 'react'
import Card from './Card'


export default class List extends Component {
  render() {
    return (
      <div className="container">
        {this.props.activities.map((activity,index)=> {
        return(<Card key={activity.uuid} activities={this.props.activities} uuid={activity.uuid} toggleCart={this.props.toggleCart} toggleFav={this.props.toggleFav}/>);
      
      })}
      </div>
    )
  }
}
